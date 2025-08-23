"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // not logged in
    } else if (status === "authenticated" && session?.user?.role) {
      // redirect based on role
      if (session.user.role === "Admin") {
        router.push("/dashboard-admin");
      } else if (session.user.role === "User") {
        router.push("/dashboard-user");
      } else {
        router.push("/unauthorized"); // unknown role
      }
    }
  }, [session, status, router]);

  if (status === "loading" || !session) return <p>Loading...</p>;

  return <p>Redirecting...</p>; // optional while redirecting
}


