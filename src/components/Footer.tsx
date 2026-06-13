export default function Footer() {
  return (
    <footer className="bg-[#ECECEC]">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-27.75 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left */}
          <p className="font-[Arial] text-sm text-black uppercase">
            {new Date().getFullYear() + " "} &copy; — RITGB
          </p>

          {/* Right */}
          <div className="font-[Arial] flex gap-6 md:gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="font-[Arial] text-sm text-black hover:opacity-60 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="font-[Arial] text-sm text-black hover:opacity-60 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
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
