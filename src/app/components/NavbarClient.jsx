"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NavCenterLinks from "./NavCenterLinks";
import NavAuthLinks from "./NavAuthLinks";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavbarClient({ session }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname.includes("dashboard")) return null;

  return (
    <nav className="bg-green-100 border-b border-gray-500/80 padding">
      <div >
        <div className="flex justify-between items-center h-16">
          {/* Logo + Email */}
          <div className="flex items-center gap-3">
            <img
              className="h-10 border-2 border-green-700 rounded-md"
              src="/logo1.png"
              alt="Logo"
            />
            {session?.user?.email && (
              <span className="hidden sm:inline text-gray-700 font-medium">
                {session.user.email}
              </span>
            )}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavCenterLinks />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <NavAuthLinks session={session} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden space-y-4 bg-green-100 px-4 pb-4 transition-all duration-300 ease-in-out`}>
          <NavCenterLinks isMobile={true} />
          <NavAuthLinks
            session={session}
            isMobile={true}
            onLinkClick={() => setIsMobileMenuOpen(false)}
          />

        </div>
      )}
    </nav>
  );
}
