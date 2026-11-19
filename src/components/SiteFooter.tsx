import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#ECECEC]">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-27.75 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-[Arial] text-sm text-black uppercase">
              {new Date().getFullYear() + " "} &copy; — RITGB
            </p>
            <span className="text-black/30 text-sm hidden sm:inline">•</span>
            <Link
              href="/privacy-policy"
              className="font-[Arial] text-sm text-black/60 hover:text-black transition-colors uppercase"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Right */}
          <div className="font-[Arial] flex gap-6 md:gap-8 capitalize">
            <a
              href="https://www.facebook.com/share/1EMh3vxFjp/"
              target="_blank"
              rel="noreferrer"
              className="font-[Arial] text-sm text-black hover:opacity-60 transition-opacity"
            >
              facebook
            </a>
            <a
              href="https://www.linkedin.com/company/trinityglobalbusiness/"
              target="_blank"
              rel="noreferrer"
              className="font-[Arial] text-sm text-black hover:opacity-60 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/ritgb.io/"
              target="_blank"
              rel="noreferrer"
              className="font-[Arial] text-sm text-black hover:opacity-60 transition-opacity"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
