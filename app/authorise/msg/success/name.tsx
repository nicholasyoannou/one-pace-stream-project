"use client";

import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Name() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);

  if (session?.user.data.username) {
    return session?.user.data.username;
  } else {
    return "user";
  }
}
