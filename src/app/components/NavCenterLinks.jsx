
import Link from "next/link";
import React from "react";

export default function NavCenterLinks({ isMobile = false }) {
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

      <li className="authButton">
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}
