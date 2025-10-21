"use client";
import { ReactNode, useEffect } from "react";
import useAuth from "next-auth";
import auth from "../auth.config"; // Path to your Auth.js configuration

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { loading, isAuthenticated, user, signIn, signOut } = useAuth(auth);

  useEffect(() => {
    // Optional: Fetch user data or perform other setup on authentication change
    console.log("Authentication state changed:", isAuthenticated, user);
  }, [isAuthenticated, user]);

  if (loading) {
    // Optional: Show loading indicator
    return <div>Loading...</div>;
  }

  return (
    // Optional: Pass authentication-related data to children
    <div>{children}</div>
  );
};
