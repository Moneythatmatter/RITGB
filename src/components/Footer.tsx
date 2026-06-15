const navLinks = [
  { label: "Home", href: "/" },
  { label: "Agency", href: "/agency" },
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "Software", href: "/software" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#ECECEC]">
      <div className="px-8 md:px-27.75 py-12 md:py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-black/10">
          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[Arial] text-sm text-black/60 hover:text-black transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Email */}

          <a
            href="mailto:hello@ritgb.io"
            className="font-[Arial] text-sm text-black hover:opacity-60 transition-opacity lowercase tracking-widest shrink-0"
          >
            Info@rayimpact.net
          </a>
        </div>
      </div>
    </footer>
  );
}
