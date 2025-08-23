"use client";

import { usePathname } from "next/navigation";
import NavCenterLinks from "./NavCenterLinks";
import NavAuthLinks from "./NavAuthLinks";

export default function NavbarClient({ session }) {
  const pathname = usePathname();

  if (!pathname.includes("dashboard")) {
    return (
      <nav className="flex justify-between bg-green-100 py-6 padding border-b border-gray-500/80">
        <div>
          <img
            className="h-10 border-2 border-green-700 rounded-md"
            src="/logo1.png"
            alt="Logo"
          />
        </div>

        <NavCenterLinks />
        <NavAuthLinks session={session} />
      </nav>
    );
  } else {
    return null;
  }
}
