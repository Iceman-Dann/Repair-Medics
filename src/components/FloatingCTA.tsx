"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon } from "@/components/Icons";
import { business } from "@/lib/business";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-6 z-50 lg:hidden"
        >
          <a
            href={business.phoneHref}
            className="relative flex items-center gap-2 rounded-full bg-accent px-6 py-4 font-bold text-white shadow-xl"
            aria-label="Call Repair Medics"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/25" />
            <span className="relative flex items-center gap-2 text-sm">
              <PhoneIcon size={16} /> Call {business.phoneDisplay}
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
