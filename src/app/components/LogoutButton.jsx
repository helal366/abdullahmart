"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutButton() {
  return (
    <>
      <button className="cursor-pointer" onClick={() => signOut()}>Logout</button>
    </>
  );
}