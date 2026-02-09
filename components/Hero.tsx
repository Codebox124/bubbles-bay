"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (open: boolean) => void;
}) => {
  return (
    <section className="relative min-h-screen w-full bg-[#0A0A0A] overflow-hidden flex flex-col justify-between pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24 lg:pb-16">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <img
            src="./hero-bubbles.avif"
            alt="Hero Vehicle"
            className="w-full h-full object-cover opacity-50 grayscale-[0.3]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]/20"></div>
        </motion.div>
      </div>

      <div className="relative z-20 w-full px-4 sm:px-6 md:px-10 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-start text-[10px] tracking-[0.3em] text-[#808080] font-bold uppercase border-b border-white/5 pb-4 md:pb-6 md:border-none">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span className="text-[#F5F5F5]">Malete, Kwara. Nigeria</span>
          <span className="h-px w-12 bg-[#C5A059]/30"></span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block text-center leading-tight">
          <p className="font-black text-white tracking-[0.4em]">
            BUBBLES BAY <br />
            <span className="text-[#C5A059] text-[8px] tracking-[0.8em] pl-1">
              Automotive Studio
            </span>
          </p>
        </div>

        <div className="max-w-[240px] text-right hidden md:block leading-relaxed normal-case tracking-tight text-xs font-medium text-[#808080]">
          Crafting automotive excellence through precision detailing and
          unwavering attention to detail.
        </div>
      </div>

      <div className="relative z-20 px-4 sm:px-6 md:px-10 mt-auto mb-24 md:mb-32 lg:mb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="flex items-center gap-3 text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-6">
            <span className="w-10 h-px bg-[#C5A059]"></span>
            The Sanctuary of Detailing
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-[#F5F5F5] leading-[0.95] tracking-tighter">
            Automotive care
            <br />
            <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#C5A059] to-[#8A6E35] pr-4">
              at its finest.
            </span>
          </h1>
        </motion.div>
      </div>

      <div className="relative z-30 w-full border-t border-white/5 bg-[#141414]/90 backdrop-blur-2xl grid grid-cols-1 md:grid-cols-2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative flex items-center justify-between px-6 md:px-12 py-8 md:py-12 border-b md:border-b-0 md:border-r border-white/5 hover:bg-[#C5A059] transition-all duration-700 text-left"
        >
          <div className="relative z-10">
            <span className="block text-[#C5A059] group-hover:text-[#0A0A0A] text-[10px] font-black uppercase tracking-[0.3em] mb-2 transition-colors">
              Start Here
            </span>
            <span className="text-2xl md:text-4xl font-light text-[#F5F5F5] group-hover:text-[#0A0A0A] tracking-tight transition-colors">
              Book Appointment
            </span>
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#0A0A0A] group-hover:border-[#0A0A0A] group-hover:text-[#C5A059] transition-all duration-500 transform group-hover:-rotate-45">
            <ArrowRight size={24} />
          </div>
        </button>

        <Link href="/services" className="contents">
          <button className="group relative flex items-center justify-between px-6 md:px-12 py-8 md:py-12 hover:bg-white/5 transition-all duration-700 text-left w-full">
            <div>
              <span className="block text-[#808080] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                The Menu
              </span>
              <span className="text-2xl md:text-4xl font-light text-[#F5F5F5] tracking-tight">
                Explore Services
              </span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-[#F5F5F5] group-hover:bg-[#F5F5F5] group-hover:text-[#0A0A0A] group-hover:border-[#F5F5F5] transition-all duration-500 transform group-hover:translate-x-2">
              <ArrowRight size={24} />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
