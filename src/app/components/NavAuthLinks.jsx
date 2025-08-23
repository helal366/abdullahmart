
import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

export default function NavAuthLinks({ session, isMobile = false, onLinkClick }) {
  // `onLinkClick` is optional, used to close mobile menu when a link is clicked
  const baseClasses = isMobile ? "flex flex-col gap-3 text-black" : "flex gap-5 text-black";

  return (
    <ul className={baseClasses}>
      {session?.user ? (
        <li className="authButton">
          <LogoutButton onClick={onLinkClick} />
        </li>
      ) : (
        <>
          <li className="authButton">
            <LoginButton onClick={onLinkClick} />
          </li>
          <li className="authButton">
            <Link href="/register" onClick={onLinkClick}>
              Register
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
