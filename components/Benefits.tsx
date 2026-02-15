"use client";
import React from "react";
import { motion } from "framer-motion";

interface Benefit {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const Benefits = ({ benefits }: { benefits: Benefit[] }) => {
  return (
    <section
      id="benefits"
      className="relative bg-[#0A0A0A] pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 z-30 -mt-12 md:-mt-20 rounded-t-[2.5rem] md:rounded-t-[4.5rem] overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-10 right-0 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[8rem] md:text-[12rem] font-black text-white italic leading-none uppercase">
          Precision
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-28">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-4"
          >
            <span className="w-8 h-px bg-[#C5A059]"></span>
            The Signature Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-medium text-[#F5F5F5] uppercase italic mt-4 md:mt-6 tracking-tighter leading-[1.1] md:leading-none"
          >
            The Gold Standard <br />
            <span className="font-black text-[#1E1E1E] [text-shadow:1px_1px_0_#C5A059,-1px_-1px_0_#C5A059,1px_-1px_0_#C5A059,-1px_1px_0_#C5A059] not-italic">
              of Excellence
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 last:border-r-0 hover:bg-[#141414] transition-all duration-700"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#C5A059] group-hover:w-full transition-all duration-700" />

              <span className="absolute top-6 md:top-10 right-6 md:right-10 text-4xl md:text-5xl font-black italic text-[#1E1E1E] group-hover:text-[#C5A059]/10 transition-colors">
                0{i + 1}
              </span>

              <div className="mb-8 md:mb-12 text-[#C5A059] transition-all transform group-hover:-translate-y-3 duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1E1E1E] rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-[#C5A059]/30 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.15)] transition-all">
                  <div className="text-[#C5A059] scale-110 md:scale-125">
                    {b.icon}
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-lg md:text-xl uppercase tracking-tight mb-3 md:mb-4 text-[#F5F5F5] group-hover:text-[#C5A059] transition-colors">
                {b.title}
              </h4>
              <p className="text-[#808080] text-sm leading-relaxed font-medium group-hover:text-[#F5F5F5]/70 transition-colors">
                {b.desc}
              </p>

              <div className="mt-8 md:mt-10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#C5A059]"></div>
                <span className="text-[9px] font-black uppercase text-[#C5A059] tracking-[0.3em]">
                  Master Detailing
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-24 bg-[#0A0A0A]"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 85%, 0 0)" }}
      />
    </section>
  );
};

export default Benefits;
