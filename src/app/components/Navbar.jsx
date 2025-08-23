
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  // Convert to plain JSON so it’s safe for Client Component
  const safeSession = session ? JSON.parse(JSON.stringify(session)) : null;
  return <NavbarClient session={safeSession} />;
}
