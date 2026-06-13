"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Agency", href: "/agency" },
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "Software", href: "/software" },
  { label: "Contact Us", href: "/contact" },
];

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.to(menuRef.current, {
        yPercent: 0,
        duration: 0.6,
        ease: "power4.out",
      });

      gsap.fromTo(
        ".menu-link",
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.2,
        },
      );
    } else {
      gsap.to(menuRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "power4.in",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!menuRef.current) return;
    gsap.set(menuRef.current, { yPercent: -100 });
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed font-(family-name:--font-right-grotesk) inset-0 bg-black z-60 flex flex-col justify-center px-8 md:px-27.75"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 md:right-27.75 text-white text-sm tracking-widest uppercase hover:opacity-60 transition-opacity cursor-pointer"
      >
        Close
      </button>

      {/* Nav links */}
      <ul className="flex flex-col gap-2">
        {links.map((link, i) => (
          <li key={i} className="overflow-hidden">
            <Link
              href={link.href}
              className="menu-link block font-grotesk text-[8vw] md:text-[6vw] font-black uppercase text-white leading-tight hover:opacity-60 transition-opacity"
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
