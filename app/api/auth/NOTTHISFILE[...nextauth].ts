// you bonkers man you better not be editing this file
// i spent 2 hours not realising that i was editing the wrong file
// the absolute pain
import NextAuth from "next-auth";
import FusionAuthProvider from "next-auth/providers/fusionauth";
export const authOptions = {
  providers: [
    FusionAuthProvider({
      id: "fusionauth",
      name: "FusionAuth",
      issuer: process.env.FUSIONAUTH_ISSUER,
      clientId: process.env.FUSIONAUTH_CLIENT_ID,
      clientSecret: process.env.FUSIONAUTH_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          email: profile.email,
          name: profile?.preferred_username,
          data: profile.data,
        };
      },
    }),
  ],
};
export default NextAuth(authOptions);
