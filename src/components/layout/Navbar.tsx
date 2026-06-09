"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-27.75 py-6">
      {/* Logo */}
      <span className="font-(family-name:--font-right-grotesk) text-black font-bold text-3xl tracking-tight">
        RITGB
      </span>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Hire Us button */}
        <button className="bg-white text-black font-bold text-sm px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
          Hire Us ↗
        </button>

        {/* Hamburger */}
        <button className="flex flex-col gap-1.5 p-2 cursor-pointer">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>
    </nav>
  );
}
