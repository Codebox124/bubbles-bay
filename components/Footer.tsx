"use client";

import React from "react";
import { Instagram, Facebook, MessageCircle, ArrowUp } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] pt-32 pb-12 px-6 text-white overflow-hidden relative border-t border-white/5">
      <div className="absolute -bottom-10 -right-10 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[25vw] font-black uppercase leading-none italic">
          Bubbles
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <Logo />
            <p className="text-[#808080] text-xl font-medium leading-relaxed max-w-md italic tracking-tight">
              The ultimate automotive grooming experience in Malete.
              <span className="text-[#C5A059]">
                {" "}
                Precision, Luxury, and Unparalleled Care.
              </span>
            </p>
          </div>

          <div className="space-y-10">
            <h5 className="font-black uppercase tracking-[0.4em] text-[10px] text-[#C5A059]">
              The Menu
            </h5>
            <div className="flex flex-col gap-5 text-[#666] font-black uppercase text-[10px] tracking-[0.3em]">
              {["services", "benefits", "reviews", "location"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="hover:text-[#C5A059] transition-all duration-300 hover:translate-x-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h5 className="font-black uppercase tracking-[0.4em] text-[10px] text-[#C5A059]">
              Inner Circle
            </h5>
            <div className="flex flex-col gap-8">
              <div className="flex gap-8 text-[#666]">
                <Instagram
                  className="hover:text-[#C5A059] cursor-pointer transition-all hover:-translate-y-1"
                  size={20}
                />
                <Facebook
                  className="hover:text-[#C5A059] cursor-pointer transition-all hover:-translate-y-1"
                  size={20}
                />
                <MessageCircle
                  className="hover:text-[#C5A059] cursor-pointer transition-all hover:-translate-y-1"
                  size={20}
                />
              </div>

              <button
                onClick={scrollToTop}
                className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#444] hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-[#C5A059]/50 transition-all">
                  <ArrowUp
                    size={14}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                </div>
                Top
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#333]">
              © 2026 Bubbles Bay Auto Spa
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#333]">
              Malete, Nigeria
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#666]">
              Crafted for Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
