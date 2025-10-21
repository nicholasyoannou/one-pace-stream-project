import { cookies } from "next/headers";
import Landing from "./landing";
import { getServerSession } from "next-auth";
import Dashboard from "./dashboard";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    return <Landing />;
  } else {
    return <Dashboard />;
  }
}
