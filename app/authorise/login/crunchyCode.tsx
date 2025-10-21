"use client";

import * as React from "react";
import Image from "next/image";
import NavMenu from "@/app/navMenu";
import * as globals from "@/app/globals";
import clsx from "clsx";
import Link from "next/link";

// MUI
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect } from "react";

import { useRouter } from "next/navigation";

export default function CrunchyCode() {
  // fetch from api, and assign to variable 'user_code' from JSON response from api
  let check = false;
  const router = useRouter();
  const push = router.push;

  React.useEffect(() => {
    if (!check) {
      check = true;
      fetch(globals.apiRootURL + "/api/authentication")
        .then((res) => {
          if (res.status == 405) {
            push("/authorise/security");
          }
          return res.json();
        })
        .then((data) => {
          const crunchyDeviceCodeElement =
            document.getElementById("crunchyDeviceCode");
          if (crunchyDeviceCodeElement) {
            crunchyDeviceCodeElement.innerHTML = data.user_code;
            const authStopperChecker = setInterval(() => {
              if (window.location.pathname != "/authorise/login") {
                clearInterval(authCheck);
                clearInterval(authStopperChecker);
              }
            }, 1000);

            const authCheck = setInterval(() => {
              // check current page, if it's not the login page, then stop AuthCheck
              if (window.location.pathname != "/authorise/login") {
                clearInterval(authCheck);
              }
              fetch(globals.apiRootURL + "/api/authentication", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((res) => {
                  if (res.status == 400) {
                    clearInterval(authCheck);
                    push("/authorise/error/expired");
                  }
                  if (res.status == 201) {
                    clearInterval(authCheck);
                    push("/authorise/checking");
                  }
                })
                .then((data) => {})
                .catch((err) => {
                  console.log(err);
                });
            }, 5000);
          }
        });
    }
  });
  return (
    <div
      id="crunchyDeviceCode"
      className="text-white text-lg uppercase font-semibold"
    >
      <Box sx={{ display: "flex" }}>
        <CircularProgress size={24} />
      </Box>
    </div>
  );
}
