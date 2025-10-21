"use client";

import * as React from "react";
import * as globals from "@/app/globals";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Router } from "next/router";

export default function Val() {
  let check = false;
  let checkIfUndergo = false;
  const { push } = useRouter();
  useEffect(() => {
    if (!check) {
      check = true;
      const id = toast.loading("Please wait...", {
        position: "bottom-center",
        className: "opacity-80",
      });
      const beforeRequestHandler = () => {
        checkIfUndergo = true;
        toast.update(id, {
          render: "Undergoing CAPTCHA...",
          type: "default",
          isLoading: true,
        });
      };

      const beforeRequestSendHandler = () => {
        toast.update(id, {
          render: "Verifying CAPTCHA...",
          type: "default",
          isLoading: true,
        });
      };
      const afterRequestHandler = (evt) => {
        if (!evt.detail.failed) {
          document.body.removeEventListener(
            "htmx:beforeOnLoad",
            beforeRequestHandler
          );
          document.body.removeEventListener(
            "htmx:beforeSend",
            beforeRequestSendHandler
          );
          document.body.removeEventListener(
            "htmx:afterRequest",
            afterRequestHandler
          );
          toast.update(id, {
            render: "Validated! Redirecting...",
            type: "success",
            autoClose: 2000,
            isLoading: false,
          });
          push("/authorise/login");
        }
      };
      document.body.addEventListener("htmx:beforeOnLoad", beforeRequestHandler);
      document.body.addEventListener(
        "htmx:beforeSend",
        beforeRequestSendHandler
      );
      document.body.addEventListener("htmx:afterRequest", afterRequestHandler);

      const checker = setInterval(() => {
        if (!checkIfUndergo) {
          window.location.reload();
        } else {
          clearInterval(checker);
        }
      }, 5000);
    }
  }, []);

  return <div></div>;
}
