"use client";

import { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-27.75 pb-2">
        {/* Logo */}
        <Link href="/" className="py-2 flex items-center">
          <Image
            src="/images/logo/ritgb-logo-transparent.png"
            alt="RITGB Logo"
            width={350}
            height={110}
            priority
            style={{ height: "auto", width: "auto", maxHeight: "5rem" }}
            className="max-h-30! md:max-h-40! object-contain"
          />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Hire Us button */}

          {/* hide "hire us" button on the contact page  */}

          {pathname !== "/contact" && (
            <Link
              href="/contact"
              className="hidden md:flex bg-black text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.15)] capitalize"
            >
              Hire Us ↗
            </Link>
          )}
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 p-2 cursor-pointer z-50 relative"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </nav>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
