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
    <footer className="bg-[#0f0f0f] text-white w-full overflow-x-hidden">
      <div className="px-8 md:px-27.75 pt-16 pb-10 w-full">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-white/10">
          {/* Left — Wordmark */}
          <div className="shrink-0">
            <span className="font-[Arial] text-white text-xl tracking-[0.2em] uppercase font-light">
              RITGB
            </span>
          </div>

          {/* Right — columns */}
          <div className="flex flex-row flex-wrap gap-x-10 gap-y-8 md:gap-16 md:gap-24">
            {/* Pages col 1 */}
            <div className="flex flex-col gap-3 min-w-0">
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

            {/* Pages col 2 */}
            <div className="flex flex-col gap-3 min-w-0">
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

            {/* Contact col */}
            <div className="flex flex-col gap-3 min-w-0 max-w-[220px] md:max-w-xs">
              <p className="font-[Arial] text-[10px] text-white/30 tracking-[0.2em] uppercase mb-1">
                Contact
              </p>

              <a
                href="mailto:Info@rayimpact.net"
                className="font-[Arial] text-sm text-white/60 hover:text-white transition-colors tracking-widest lowercase break-all"
              >
                Info@rayimpact.net
              </a>
              <a
                href="https://maps.google.com/?q=260/1821,+Lane+2+Rd,+Mahadev+Nagar,+Jagannath+Nagar,+Jharapada,+Bhubaneswar,+Odisha+751025"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[Arial] text-sm text-white/60 hover:text-white transition-colors tracking-wide leading-relaxed break-words"
              >
                260/1821, Lane 2 Rd,
                <br />
                Mahadev Nagar,
                <br />
                Bhubaneswar, Odisha — 751025
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar — copyright + socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8">
          <p className="font-[Arial] text-xs text-white/25 tracking-widest uppercase">
            {new Date().getFullYear()} © — RITGB
          </p>
          <div className="flex gap-6 md:gap-8">
            <a
              href="https://www.facebook.com/share/1EMh3vxFjp/"
              target="_blank"
              rel="noreferrer"
              className="font-[Arial] text-xs text-white/25 hover:text-white/70 transition-colors tracking-widest capitalize"
            >
              Facebook
            </a>

            <a
              href="https://www.linkedin.com/company/trinityglobalbusiness/"
              target="_blank"
              rel="noreferrer"
              className="font-[Arial] text-xs text-white/25 hover:text-white/70 transition-colors tracking-widest capitalize"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/ritgb.io/"
              target="_blank"
              rel="noreferrer"
              className="font-[Arial] text-xs text-white/25 hover:text-white/70 transition-colors tracking-widest capitalize"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
