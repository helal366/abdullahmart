// src/auth.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "./lib/authOptions";

export const auth = async () => {
  return await getServerSession(authOptions);
};
