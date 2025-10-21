import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextAuthProvider } from "@/components/authProv";
import { CookiesProvider } from "next-client-cookies/server"; // https://github.com/moshest/next-client-cookies
// import { AuthProvider } from "@/components/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Pace: Stream Project",
  description:
    "Watch One Piece via One Pace, removing fillers, and keeping all the parts that matter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <div className="text-white text-center text-xs max-w-screen bg-red-700 w-full justify-center items-center px-16 py-2 max-md:max-w-full max-md:px-5">
        Critical: The servers are currently offline. We are working to see what
        the problem is.
      </div>
      <div className="text-white text-center text-xs max-w-screen bg-amber-600 w-full justify-center items-center px-16 py-2 max-md:max-w-full max-md:px-5">
        Error-known/working-on-it: There seems to be an issue with the login
        system. This is being fixed. We are aware of the issue.
      </div>
      <div className="text-white text-center text-xs max-w-screen bg-sky-600 w-full justify-center items-center px-16 py-2 max-md:max-w-full max-md:px-5">
        Alert: Romance Dawn now fully added and available via the site.
      </div> */}
      <body className={inter.className}>
        <CookiesProvider>
          <NextAuthProvider>
            <ToastContainer />
            {children}
          </NextAuthProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
