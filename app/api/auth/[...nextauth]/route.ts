import NextAuth from "next-auth";
import FusionAuthProvider from "next-auth/providers/fusionauth";

const handler = NextAuth({
  providers: [
    FusionAuthProvider({
      id: "fusionauth",
      name: "FusionAuth",
      issuer: process.env.FUSIONAUTH_ISSUER,
      clientId: process.env.FUSIONAUTH_CLIENT_ID,
      clientSecret: process.env.FUSIONAUTH_SECRET,
      checks: ["state"],
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (token) {
        // Fetch user details using FusionAuth API
        const response = await fetch(`https://sso.service.quack.si/api/user`, {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
            "X-FusionAuth-TenantId": "793abd06-f3cb-4d32-818a-dedbded7e3f0",
          },
        });
        const data = await response.json();
        const edata = data.user.data; // user.data fetched from FusionAuth

        // Update the user with additional user details
        session.user.data = edata; // and then user.data in the session = FusionAuth's user.data

        // session.user.id = user.id;
      }

      return session;
    },
  },
});
export { handler as GET, handler as POST };
