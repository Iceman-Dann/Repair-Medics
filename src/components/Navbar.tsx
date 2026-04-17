"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon } from "@/components/Icons";
import { business } from "@/lib/business";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Proof", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

function BrandMark() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 shadow-sm overflow-hidden">
      <img
        src="/logo.png"
        alt={`${business.name} logo`}
        className="h-8 w-8 object-contain"
      />
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-accent/10 bg-primary/90 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${business.name} home`}
          >
            <BrandMark />
            <div>
              <span className="block text-lg font-bold tracking-tighter text-text-primary">
                {business.name}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.24em] text-text-secondary">
                Chicago Repair Services
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  pathname === link.href ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <PhoneIcon size={16} />
              {business.phoneDisplay}
            </a>
            <a
              href={business.phoneHref}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen((open) => !open)}
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Toggle mobile menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-text-primary"
              />
              <motion.span
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-text-primary"
              />
              <motion.span
                animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-text-primary"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 24, stiffness: 210 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-6 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-bold tracking-tighter ${
                      pathname === link.href ? "text-accent" : "text-text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                href={business.phoneHref}
                className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-accent px-8 py-4 text-lg font-bold text-white"
              >
                <PhoneIcon size={18} /> {business.phoneDisplay}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
