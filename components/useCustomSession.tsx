// import { useSession } from "next-auth/react";

// const useCustomSession = async () => {
//   const { data: session, ...rest } = useSession();
//   // Fetch user details using FusionAuth API

//   const response = await fetch("https://sso.service.quack.si/api/user", {
//     headers: {
//       Authorization: `Bearer ${user.accessToken}`,
//     },
//   });

//   const userData = await response.json();
//   const edata = userData.user.data; // user.data fetched from FusionAuth

//   // Add your custom data to the session object
//   const customSession = {
//     ...session,
//     customData: {
//       // Add your custom data here
//       // Example: customData: session?.user?.data
//     },
//   };

//   return { data: customSession, ...rest };
// };

// export default useCustomSession;
