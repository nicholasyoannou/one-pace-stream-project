import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
import {
  DynamoDBClient,
  QueryCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  region: process.env.AWS_REGION!,
});
const dynamodb = DynamoDBDocumentClient.from(client);

export async function GET() {
  const session = await getServerSession();

  if (session) {
    // get all data from arcs table in dynomoDB
    const params = {
      TableName: process.env.DYNAMODB_ARCS_TABLE_NAME!,
    };

    const scanCommand = new ScanCommand(params);
    const data = await dynamodb.send(scanCommand);
    let li: any[] = [];
    data.Items.forEach((item) => {
      const unmarshalledItem = unmarshall(item);
      li.push(unmarshalledItem);
    });
    li.sort((a, b) => a.arcNumber - b.arcNumber);

    return NextResponse.json(li, { status: 200 });
  } else {
    return NextResponse.json(
      {
        message:
          "looks like sogeking has yet to make his appearance. (your not logged in)",
        lyrics:
          "On the Sniper Island, I was born. 100 shots, 100 hits, Lu lu lala lu〜♪. Even a mouse's eye, Lock on! Even your Heart, Lock on!! The man from the Sniper Island〜♪. Lululu lulu lala. You'd better run! Sogege Soge Soge, Sogeking〜♪",
      },
      { status: 401 }
    );
  }
}
