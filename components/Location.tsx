"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Mail,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const Location = () => {
  return (
    <section
      id="location"
      className="relative py-32 bg-[#0A0A0A] overflow-hidden rounded-t-[4rem] -mt-12 border-t border-white/5"
    >
      <div className="absolute top-10 left-10 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[18vw] font-black uppercase text-white leading-none italic">
          Visit
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-px bg-[#C5A059]"></div>
            <span className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px]">
              The Hub
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-medium text-white tracking-tighter leading-none uppercase italic">
            Experience the <br />
            <span className="font-black text-[#C5A059] not-italic">
              Best Car Care.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-6 border border-[#C5A059]/10 rounded-[3.5rem] group-hover:border-[#C5A059]/30 transition-all duration-1000" />

            <div className="relative h-[500px] md:h-[650px] w-full rounded-[3rem] overflow-hidden border border-white/10 bg-[#141414] shadow-2xl">
              <div className="absolute inset-0 map-background bg-cover bg-center opacity-20 grayscale contrast-150 scale-110 group-hover:scale-100 transition-transform duration-[3s]" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#C5A059] blur-[60px] opacity-20 animate-pulse" />
                  <div className="relative w-24 h-24 bg-[#0A0A0A] border border-[#C5A059]/40 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.1)]">
                    <MapPin size={32} className="text-[#C5A059]" />
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">
                  Malete, Kwara
                </h3>
                <p className="text-[#808080] text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                  Opposite Baba Ote Mosque
                </p>

                <button className="group/map flex items-center gap-4 bg-[#C5A059] text-[#0A0A0A] px-12 py-6 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all duration-500 shadow-xl shadow-[#C5A059]/10">
                  <Navigation
                    size={16}
                    className="group-hover/map:rotate-12 transition-transform"
                  />
                  Request Route
                </button>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-1 border-t border-white/5 lg:pt-8">
            {[
              {
                label: "Location",
                val: "KWASU Road, Opposite Baba Ote Mosque, Malete, Kwara State.",
                icon: <MapPin size={22} />,
                action: "Get Directions",
              },
              {
                label: "Connect",
                val: "+234 812 345 6789",
                val2: "hello@bubblesbay.com",
                icon: <Phone size={22} />,
                action: "Call Studio",
              },
              {
                label: "Operational Hours",
                val: "Mon — Sat: 08:00 — 18:00",
                val2: "Sunday: Appointment Only",
                icon: <Clock size={22} />,
                action: "Book Slot",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group py-12 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/[0.02] transition-all duration-500 px-6 -mx-6 rounded-[2rem]"
              >
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-[#141414] border border-white/5 rounded-2xl flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059]/50 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.1)] transition-all duration-700">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                      {item.label}
                    </h5>
                    <p className="text-[#F5F5F5] text-xl font-medium max-w-sm leading-tight group-hover:text-white transition-colors">
                      {item.val}
                    </p>
                    {item.val2 && (
                      <p className="text-[#666] text-sm mt-2 font-bold uppercase tracking-widest">
                        {item.val2}
                      </p>
                    )}
                  </div>
                </div>

                <button className="flex items-center gap-3 text-[#444] group-hover:text-[#C5A059] text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500">
                  {item.action}{" "}
                  <ArrowUpRight
                    size={14}
                    className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
