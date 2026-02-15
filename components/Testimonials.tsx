"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck, CarFront } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  vehicle?: string;
  text: string;
  stars: number;
}

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const stats = [
    { label: "Client Satisfaction", value: "100%" },
    { label: "5-Star Reviews", value: "90+" },
    { label: "Cars Detailed", value: "100+" },
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 sm:px-6 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
        <span className="text-[25vw] font-black uppercase text-white leading-none whitespace-nowrap absolute -top-10 left-0">
          Trust
        </span>
        <span className="text-[20vw] font-black uppercase text-white leading-none whitespace-nowrap absolute bottom-0 right-0">
          Results
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8 md:gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-4 md:mb-6"
            >
              <span className="w-8 h-px bg-[#C5A059]"></span>
              Client Stories
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-[#F5F5F5] tracking-tighter leading-[1.1]">
              The Standard <br />
              <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#F5F5F5]">
                of Appreciation.
              </span>
            </h2>
          </div>

          <div className="w-full md:w-auto overflow-x-auto md:overflow-visible -mx-4 sm:mx-0">
            <div className="flex gap-8 md:gap-12 border-l border-white/5 pl-6 md:pl-8 min-w-max md:min-w-0">
              {stats.map((stat, i) => (
                <div key={i}>
                  <h4 className="text-2xl md:text-3xl font-black text-[#F5F5F5]">
                    {stat.value}
                  </h4>
                  <p className="text-[#C5A059] text-[9px] uppercase tracking-[0.3em] mt-1.5 md:mt-2 font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#141414]/50 backdrop-blur-md border border-white/5 hover:border-[#C5A059]/30 hover:bg-[#141414] transition-all duration-700 shadow-2xl"
            >
              <div className="absolute top-6 md:top-10 right-6 md:right-10 text-white/[0.03] group-hover:text-[#C5A059]/10 transition-colors duration-700">
                <Quote
                  size={48}
                  fill="currentColor"
                  className="md:w-16 md:h-16"
                />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1.5 mb-6 md:mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill={j < t.stars ? "#C5A059" : "none"}
                      className={j < t.stars ? "text-[#C5A059]" : "text-[#333]"}
                    />
                  ))}
                </div>

                <p className="text-base md:text-xl font-medium text-[#B0B0B0] group-hover:text-[#F5F5F5] leading-relaxed transition-colors duration-500 italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 md:mt-10 md:pt-8 border-t border-white/5 group-hover:border-[#C5A059]/10 transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#1E1E1E] border border-white/5 flex items-center justify-center text-[#C5A059] font-black text-sm group-hover:shadow-[0_0_15px_rgba(197,160,89,0.1)] transition-all">
                      {t.name[0]}
                    </div>
                    <div>
                      <h5 className="font-black text-[11px] text-[#F5F5F5] uppercase tracking-[0.2em] flex items-center gap-2">
                        {t.name}
                        <BadgeCheck size={14} className="text-[#C5A059]" />
                      </h5>
                      <p className="text-[#666] text-[9px] font-bold uppercase tracking-widest mt-1 group-hover:text-[#C5A059]/60">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {t.vehicle && (
                    <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-[#1E1E1E] border border-white/5 transition-all">
                      <CarFront size={12} className="text-[#C5A059]" />
                      <span className="text-[9px] font-bold uppercase text-[#888] tracking-widest">
                        {t.vehicle}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
