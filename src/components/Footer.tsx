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
    <footer className="bg-[#0f0f0f] text-white">
      <div className="px-8 md:px-27.75 pt-16 pb-10">
        {/* Top section — Brand + Nav columns */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-white/10">
          {/* Left — Wordmark / brand */}
          <div className="shrink-0">
            <span className="font-[Arial] text-white text-xl tracking-[0.2em] uppercase font-light">
              RITGB
            </span>
          </div>

          {/* Right — Two nav columns */}
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-3">
              <p className="font-[Arial] text-[10px] text-white/30 tracking-[0.2em] uppercase mb-1">
                Pages
              </p>
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[Arial] text-sm text-white/60 hover:text-white transition-colors tracking-widest capitalize"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-[Arial] text-[10px] text-white/30 tracking-[0.2em] uppercase mb-1">
                &nbsp;
              </p>
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[Arial] text-sm text-white/60 hover:text-white transition-colors tracking-widest capitalize"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contact column */}
            <div className="flex flex-col gap-3">
              <p className="font-[Arial] text-[10px] text-white/30 tracking-[0.2em] uppercase mb-1">
                Contact
              </p>

              <a
                href="mailto:Info@rayimpact.net"
                className="font-[Arial] text-sm text-white/60 hover:text-white transition-colors tracking-widest lowercase"
              >
                Info@rayimpact.net
              </a>

              <a
                href="https://maps.google.com/?q=260/1821,+Lane+2+Rd,+Mahadev+Nagar,+Jagannath+Nagar,+Jharapada,+Bhubaneswar,+Odisha+751025"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[Arial] text-sm text-white/60 hover:text-white transition-colors tracking-widest leading-relaxed max-w-[200px]"
              >
                260/1821, Lane 2 Rd,
                <br />
                Mahadev Nagar, Bhubaneswar
                <br />
                Odisha — 751025
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
