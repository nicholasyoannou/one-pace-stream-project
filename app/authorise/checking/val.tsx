"use client";

import * as React from "react";
import * as globals from "@/app/globals";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { Router } from "next/router";
import { useState, useEffect } from "react";

export default function Val(props) {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  let check = false;

  useEffect(() => {
    if (!check) {
      check = true;

      // do a POST request of form data-like structure request to /api/auth/signin/fusionauth
      const formData = new FormData();
      // Extract CSRF token value
      const csrfToken = props.csrfToken;
      console.log(csrfToken);
      // Extract the first part of the CSRF token
      const firstPart = csrfToken ? csrfToken.split("|")[0] : null;
      console.log(firstPart);

      formData.append("csrfToken", firstPart);
      formData.append(
        "callbackUrl",
        "http://localhost:3000/authorise/msg/success"
      );

      // Serialize the form data manually
      const serializedFormData = Array.from(formData.entries())
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

      // Make POST request
      const faf = fetch("/api/auth/signin/fusionauth", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: serializedFormData,
        redirect: "follow",
      }).then(async (res) => {
        // Log the Location header value
        const redirectUrl = new URL(res.url);
        const jsontosubmit = {};
        redirectUrl.searchParams.forEach((value, key) => {
          // add to jsontosubmit
          jsontosubmit[String(key)] = String(value);
        });

        // Submit jsontosubmit as POST request
        fetch("/api/authentication/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsontosubmit),
        })
          .then((res) => {
            if (res.status === 200) {
              // get result data, and check if json['url']
              res.json().then((data) => {
                if (data.url) {
                  // redirect to url
                  router.push(data.url);
                }
              });
            }
            if (res.status === 245) {
              // got CR free
              router.push("/authorise/msg/free");
            }
            if (res.status >= 400 && res.status < 500) {
              // condition unknown but certainly weird
              router.push("/authorise/error/unknown");
            }
          })
          .catch((error) => {
            console.error("Error making POST request:", error);
          });
      });
    }
  }, []);
  return <div></div>;
}
