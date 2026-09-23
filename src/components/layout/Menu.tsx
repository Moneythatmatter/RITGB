"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SubService {
  name: string;
  slug: string;
}

interface ExpertiseCategory {
  num: string;
  title: string;
  services: SubService[];
}

const EXPERTISE_DATA: ExpertiseCategory[] = [
  {
    num: "01",
    title: "DESIGN",
    services: [
      { name: "Branding", slug: "/expertise/branding" },
      { name: "Graphic Design", slug: "/expertise/graphic-design" },
      { name: "Social Media Creatives", slug: "/expertise/social-media-creatives" },
      { name: "Packaging Design", slug: "/expertise/packaging-design" },
      { name: "Website Design", slug: "/expertise/website-design" },
      { name: "UI/UX Design", slug: "/expertise/ui-ux-design" },
      { name: "Video Production", slug: "/expertise/video-production" },
    ],
  },
  {
    num: "02",
    title: "TECH",
    services: [
      { name: "Website Development", slug: "/expertise/website-development" },
      { name: "E-commerce Development", slug: "/expertise/ecommerce-development" },
      { name: "Shopify", slug: "/expertise/shopify" },
      { name: "WordPress", slug: "/expertise/wordpress" },
      { name: "Custom Web Development", slug: "/expertise/custom-web-development" },
      { name: "Custom Software", slug: "/expertise/custom-software" },
    ],
  },
  {
    num: "03",
    title: "MARKETING",
    services: [
      { name: "Social Media Marketing", slug: "/expertise/social-media-marketing" },
      { name: "Performance Marketing", slug: "/expertise/performance-marketing" },
      { name: "SEO", slug: "/expertise/seo" },
      { name: "Google Ads", slug: "/expertise/google-ads" },
      { name: "Meta Ads", slug: "/expertise/meta-ads" },
      { name: "Content Marketing", slug: "/expertise/content-marketing" },
      { name: "Personal Branding", slug: "/expertise/personal-branding" },
      { name: "Influencer Marketing", slug: "/expertise/influencer-marketing" },
      { name: "Photo & Video Production", slug: "/expertise/photo-video-production" },
    ],
  },
];

const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "Agency", href: "/agency" },
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise", hasChildren: true },
  { label: "Software", href: "/software" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isPanelHovered, setIsPanelHovered] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>("01");

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showDesktopExpertise = hoveredLink === "Expertise" || isPanelHovered;

  const handleMouseEnterExpertise = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredLink("Expertise");
  };

  const handleMouseLeaveExpertise = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredLink((curr) => (curr === "Expertise" ? null : curr));
    }, 300);
  };

  const handleMouseEnterPanel = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsPanelHovered(true);
  };

  const handleMouseLeavePanel = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsPanelHovered(false);
      setHoveredLink(null);
    }, 250);
  };

  const handleMouseEnterOtherLink = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsPanelHovered(false);
    setHoveredLink(label);
  };

  const handleMouseLeaveOtherLink = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredLink(null);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.set(menuRef.current, { visibility: "visible" });

      gsap.to(menuRef.current, {
        yPercent: 0,
        duration: 0.6,
        ease: "power4.out",
      });

      gsap.fromTo(
        ".menu-link-anim",
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.06,
          delay: 0.15,
        },
      );
    } else {
      gsap.to(menuRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "power4.in",
        onComplete: () => {
          gsap.set(menuRef.current, { visibility: "hidden" });
          if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
          setHoveredLink(null);
          setIsPanelHovered(false);
          setMobileExpertiseOpen(false);
          setMobileActiveCategory("01");
        },
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!menuRef.current) return;
    gsap.set(menuRef.current, { yPercent: -100, visibility: "hidden" });
  }, []);

  const toggleMobileCategory = (num: string) => {
    setMobileActiveCategory((prev) => (prev === num ? null : num));
  };

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 bg-black z-60 text-white flex flex-col justify-between overflow-y-auto px-6 sm:px-10 md:px-16 lg:px-24"
    >

      <div className="w-full flex justify-end items-center pt-8 pb-4 shrink-0">
        <button
          onClick={onClose}
          type="button"
          aria-label="Close Menu"
          className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-75"
        >
          <span>CLOSE</span>
          <span className="text-base font-light">✕</span>
        </button>
      </div>

      <div className="max-w-7xl w-full mx-auto py-6 md:py-10 flex-1 flex flex-col justify-center">
        <div className="hidden lg:flex flex-row items-center justify-between gap-12 xl:gap-16 w-full">
          <div className="shrink-0">
            <ul className="flex flex-col gap-2.5 xl:gap-3.5">
              {mainNavLinks.map((link, i) => {
                const isHovered = hoveredLink === link.label;
                const isAnyHovered = hoveredLink !== null || isPanelHovered;
                const isDimmed = isAnyHovered && !isHovered && !(link.label === "Expertise" && isPanelHovered);

                return (
                  <li key={i} className="overflow-hidden">
                    {link.hasChildren ? (
                      <Link
                        href={link.href}
                        onClick={onClose}
                        onMouseEnter={handleMouseEnterExpertise}
                        onMouseLeave={handleMouseLeaveExpertise}
                        className={`menu-link-anim group inline-flex items-center gap-4 font-(family-name:--font-right-grotesk) text-[5.2vw] xl:text-[4.8vw] font-black uppercase leading-[1.08] tracking-[-0.03em] transition-opacity duration-300 ${isDimmed ? "opacity-35" : "opacity-100 text-white"
                          }`}
                      >
                        <span>{link.label}</span>
                        <span
                          className={`text-[3.5vw] xl:text-[3vw] transition-all duration-300 ${showDesktopExpertise
                            ? "opacity-100 translate-x-1 text-white"
                            : "opacity-0 -translate-x-3 pointer-events-none"
                            }`}
                        >
                          →
                        </span>
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={onClose}
                        onMouseEnter={() => handleMouseEnterOtherLink(link.label)}
                        onMouseLeave={handleMouseLeaveOtherLink}
                        className={`menu-link-anim block font-(family-name:--font-right-grotesk) text-[5.2vw] xl:text-[4.8vw] font-black uppercase leading-[1.08] tracking-[-0.03em] transition-opacity duration-300 ${isDimmed ? "opacity-35" : "opacity-100 text-white"
                          }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`hidden lg:block w-px self-stretch bg-white/20 transition-opacity duration-300 ${showDesktopExpertise ? "opacity-100" : "opacity-0"
              }`}
          />

          <div
            onMouseEnter={handleMouseEnterPanel}
            onMouseLeave={handleMouseLeavePanel}
            className={`flex-1 pl-6 xl:pl-10 min-w-0 transition-all duration-300 ${showDesktopExpertise
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-4 pointer-events-none"
              }`}
          >
            <div className="grid grid-cols-3 gap-6 xl:gap-10">
              {EXPERTISE_DATA.map((cat) => (
                <div key={cat.num} className="space-y-3.5">
                  <div className="space-y-1 border-t border-white/20 pt-2.5">
                    <span className="font-sans text-xs text-white/50">{cat.num}</span>
                    <h3 className="font-(family-name:--font-right-grotesk) text-xl xl:text-2xl font-black uppercase tracking-tight text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {cat.services.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.slug}
                          onClick={onClose}
                          className="font-sans text-[13px] xl:text-[14px] text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 block py-0.5"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col w-full py-4 max-w-2xl mx-auto">
          <ul className="flex flex-col gap-2.5 md:gap-4">
            {mainNavLinks.map((link, i) => {
              if (link.hasChildren) {
                return (
                  <li key={i} className="flex flex-col">
                    <div className="overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setMobileExpertiseOpen((prev) => !prev)}
                        className="menu-link-anim w-full flex items-center justify-between text-left font-(family-name:--font-right-grotesk) text-[9vw] md:text-[6.5vw] font-black uppercase text-white transition-colors duration-200 cursor-pointer"
                      >
                        <span>{link.label}</span>
                        {mobileExpertiseOpen ? (
                          <ChevronUp className="w-7 h-7 md:w-9 md:h-9 text-white" />
                        ) : (
                          <ChevronDown className="w-7 h-7 md:w-9 md:h-9 text-white/60" />
                        )}
                      </button>
                    </div>

                    {mobileExpertiseOpen && (
                      <div className="mt-3 bg-[#111111] border border-white/10 rounded-2xl p-3 md:p-5 space-y-2.5 md:space-y-3.5 shadow-2xl transition-all">
                        {EXPERTISE_DATA.map((cat) => {
                          const isCatOpen = mobileActiveCategory === cat.num;
                          return (
                            <div
                              key={cat.num}
                              className={`rounded-xl border transition-all ${isCatOpen
                                ? "bg-black/60 border-white/15 p-3.5 md:p-4.5"
                                : "bg-transparent border-transparent px-3.5 py-2.5 md:px-4.5 md:py-3.5 hover:bg-white/5"
                                }`}
                            >
                              <button
                                type="button"
                                onClick={() => toggleMobileCategory(cat.num)}
                                className="w-full flex items-center justify-between text-left cursor-pointer"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="font-mono text-xs md:text-sm text-white/50">
                                    {cat.num}
                                  </span>
                                  <span className="font-(family-name:--font-right-grotesk) text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                                    {cat.title}
                                  </span>
                                </div>
                                {isCatOpen ? (
                                  <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/60" />
                                )}
                              </button>

                              {/* Nested Sub-services List */}
                              {isCatOpen && (
                                <ul className="mt-3 space-y-2 md:space-y-2.5 pl-7 md:pl-9 border-l border-white/10 ml-2">
                                  {cat.services.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.slug}
                                        onClick={onClose}
                                        className="font-sans text-xs md:text-sm text-white/70 hover:text-white active:text-white block py-1"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={i} className="overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="menu-link-anim block font-(family-name:--font-right-grotesk) text-[9vw] md:text-[6.5vw] font-black uppercase text-white hover:text-white/70 transition-colors leading-none"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Subtle bottom padding */}
      <div className="h-6 shrink-0" />
    </div>
  );
}
