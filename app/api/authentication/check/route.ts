import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import * as crAuth from "../crAuthData";
import { unstable_noStore as noStore } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { Redis } from "@upstash/redis";
import { NextApiRequest } from "next";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import signIn from "next-auth";
import { QueryCommand } from "@aws-sdk/lib-dynamodb";

function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// Set up AWS credentials and region
const AWS = require("aws-sdk");

const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");

const { DynamoDB } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  region: process.env.AWS_REGION!,
});
const dynamodb = DynamoDBDocumentClient.from(client);
const tableName = process.env.DYNAMODB_TABLE_NAME!;

const redis = new Redis({
  url: process.env.UPSTASH_URL,
  token: process.env.UPSTASH_TOKEN,
});

export async function POST(req: NextRequest) {
  noStore();
  const rawData = await req.json();
  console.log("rawdata", rawData);
  try {
    const cookiecheck = cookies().get("security-token");
    const record = await redis.get(cookiecheck.value);
    const refresh = await redis.get(cookiecheck.value + "_refresh");
  } catch (error) {
    return NextResponse.json({}, { status: 445 });
  }
  const cookiecheck = cookies().get("security-token");
  const record = await redis.get(cookiecheck.value);
  const refresh = await redis.get(cookiecheck.value + "_refresh");

  const data = await fetch("https://beta-api.crunchyroll.com/accounts/v1/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${record}`,
      "Accept-Charset": "UTF-8",
      Host: "beta-api.crunchyroll.com",
      Connection: "Keep-Alive",
    },
  });
  const data1 = await data.json(); // this endpoint is broken
  const external_id = data1.external_id;
  const account_id = data1.account_id;
  const email = data1.email;

  const data_2 = await fetch(
    `https://beta-api.crunchyroll.com/subs/v1/subscriptions/${external_id}/benefits`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${record}`,
        "Accept-Charset": "UTF-8",
        Host: "beta-api.crunchyroll.com",
        Connection: "Keep-Alive",
      },
    }
  );
  const data2 = await data_2.json();
  console.log(data2);

  // Check if 'cr_premium' is in the list of benefits
  let crPremiumFoundProper = false;
  try {
    const crPremiumFound = data2.items.some(
      (item) => item.benefit === "cr_premium"
    );
    if (crPremiumFound) {
      crPremiumFoundProper = true;
    }
  } catch (error) {
    console.log(error);
  }

  // get remainding details before session revoke
  const data_5 = await fetch(
    "https://beta-api.crunchyroll.com/accounts/v1/me/profile",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${record}`,
        "Accept-Charset": "UTF-8",
        Host: "beta-api.crunchyroll.com",
        Connection: "Keep-Alive",
      },
    }
  );
  const data5 = await data_5.json();
  const craccountusername = data5.username;
  const craccountavatar = data5.avatar;

  const data_3 = await fetch(
    `https://beta-api.crunchyroll.com/auth/v1/revoke`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${record}`,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept-Charset": "UTF-8",
        Host: "beta-api.crunchyroll.com",
        Connection: "Keep-Alive",
      },
      body: `token=${refresh}&client_id=${crAuth.clientID}&client_secret=${crAuth.clientSecret}`,
    }
  );

  if (!crPremiumFoundProper) {
    return NextResponse.json(
      { crPremiumFound: crPremiumFoundProper },
      { status: crPremiumFoundProper ? 200 : 245 }
    );
  }
  console.log(account_id);
  const params = {
    TableName: tableName,
    KeyConditionExpression: "externalid = :id",
    ExpressionAttributeValues: {
      ":id": external_id,
    },
  };

  let code;
  const command = new QueryCommand(params);

  // Use the document client to query the table, check if user exists
  const dataI = await dynamodb.send(command);
  if (dataI.Items.length == 0) {
    // if no data, add to dynamodb, and user db
    // before adding to AWS, add to USER DATABASE SERVER
    const params2 = {
      user: {
        email: account_id + "@user-service.onepace.stream",
        password: makeid(20),
        data: {
          craccountid: account_id,
          crexternalid: external_id,
          username: craccountusername,
          avatar: craccountavatar,
        },
      },
    };
    const dataz = await fetch("https://sso.service.quack.si/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.FUSIONAUTH_API_KEY!,
        "X-FusionAuth-TenantId": process.env.FUSIONAUTH_TENANT_ID!,
        "Accept-Charset": "UTF-8",
        Connection: "Keep-Alive",
      },
      body: JSON.stringify(params2),
    });
    const datat = await dataz.json();
    console.log("createuser", datat);
    const dbAuthID = datat.user.id;

    const params22 = {
      TableName: tableName,
      Item: {
        externalid: external_id,
        accountid: account_id,
        dbAuthID: dbAuthID,
      },
    };
    const putCommand = new PutCommand(params22);
    const datanoread = await dynamodb.send(putCommand);
  }
  const params2 = {
    loginId: account_id + "@user-service.onepace.stream",
    applicationId: "36a7857c-8207-4d71-94bd-81c6df7bf815",
    state: {
      client_id: "36a7857c-8207-4d71-94bd-81c6df7bf815",
      redirect_uri: "http://localhost:3000/api/auth/callback/fusionauth",
      response_type: "code",
      scope: "openid offline_access",
      state: rawData.state,
    },
  };
  const dataz = await fetch(
    "https://sso.service.quack.si/api/passwordless/start",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.FUSIONAUTH_API_KEY!,
        "Accept-Charset": "UTF-8",
        Connection: "Keep-Alive",
      },
      body: JSON.stringify(params2),
    }
  );
  const datat = await dataz.json();
  code = datat.code;

  await redis.del(cookiecheck.value);
  await redis.del(cookiecheck.value + "_refresh");
  cookies().delete("security-token");
  cookies().delete("security-token-expire");

  if (crPremiumFoundProper) {
    const urltored = `https://sso.service.quack.si/oauth2/passwordless/${code}?redirect_uri=http://localhost:3000/api/auth/callback/fusionauth&client_id=36a7857c-8207-4d71-94bd-81c6df7bf815&response_type=code&scope=openid%20offline_access&postMethod=true&state=${rawData.state}&rememberDevice=false`;
    return NextResponse.json(
      { crPremiumFound: crPremiumFoundProper, url: urltored },
      { status: crPremiumFoundProper ? 200 : 245 }
    );
  }

  // on client side redirect to premium success page
  // also make session for user to be premium
  return NextResponse.json(
    { crPremiumFound: crPremiumFoundProper },
    { status: crPremiumFoundProper ? 200 : 245 }
  );
}
