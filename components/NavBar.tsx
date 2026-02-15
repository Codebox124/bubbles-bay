"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Benefits", href: "#benefits" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-[100] py-3 pb-4 sm:pb-3 px-4 sm:px-6 md:px-12 flex justify-between items-center transition-all duration-700 ${
          isScrolled
            ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 py-3 pb-4 sm:pb-3 md:py-4"
            : "bg-transparent py-4 pb-5 sm:pb-4 md:py-8"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <Logo />
        </Link>

        <div className="hidden lg:flex space-x-12 font-bold text-[10px] tracking-[0.4em] text-[#808080] uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#C5A059] transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={onBookClick}
            className="hidden sm:flex items-center gap-2 md:gap-3 bg-[#C5A059] text-[#0A0A0A] px-5 py-2.5 md:px-7 md:py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] active:scale-95"
          >
            Secure Slot
            <ArrowRight size={14} />
          </button>

          <button
            onClick={() => setMobileMenu(true)}
            className="lg:hidden text-[#F5F5F5] p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-[#0A0A0A] p-6 md:p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12 md:mb-20">
              <Link href="/" onClick={() => setMobileMenu(false)}>
                <Logo />
              </Link>
              <button
                onClick={() => setMobileMenu(false)}
                className="text-[#F5F5F5] p-2 border border-white/10 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-4xl md:text-5xl font-medium text-[#F5F5F5] tracking-tighter hover:italic hover:text-[#C5A059] transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pb-6 md:pb-10">
              <button
                onClick={() => {
                  onBookClick();
                  setMobileMenu(false);
                }}
                className="w-full bg-[#C5A059] text-[#0A0A0A] py-5 md:py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4"
              >
                Book Appointment <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
