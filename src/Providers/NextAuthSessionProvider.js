

"use client";

import { SessionProvider } from "next-auth/react";

/**
 * NextAuthSessionProvider
 * Wraps your app in a NextAuth SessionProvider
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - App children
 * @param {import("next-auth").Session | null} [props.session] - Initial session from server
 */
export default function NextAuthSessionProvider({ children, session }) {
  return (
    <SessionProvider
      session={session}
      refetchOnWindowFocus={false} // prevents auto refetch when switching tabs
      refetchInterval={0}         // disables polling refresh
    >
      {children}
    </SessionProvider>
  );
}
