"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

export default function NavCenterLinks({ isMobile = false }) {
  const { data: session } = useSession();

  return (
    <ul
      className={`flex ${isMobile ? "flex-col gap-4" : "justify-center gap-5"} text-black`}
    >
      <li className="authButton">
        <Link href="/">Home</Link>
      </li>

      <li className="authButton">
        <Link href="/products">Products</Link>
      </li>

      {/* ✅ Only show Dashboard if logged in */}
      {session?.user && (
        <li className="authButton">
          <Link href="/dashboard">
            Dashboard
          </Link>
        </li>
      )}

      <li className="authButton">
        <Link href="/about">About</Link>
      </li>

    </ul>
  );
}


