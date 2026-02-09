"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Newsletter = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto bg-[#0A0A0A] rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px]"></div>

        <div className="relative z-10 text-center">
          <SectionHeading
            light={true}
            subtitle="The Inner Circle"
            title={
              <span className="tracking-tighter">
                Join the <span className="font-black italic">Elite</span> List
              </span>
            }
          />

          <p className="text-[#808080] font-medium mb-16 max-w-xl mx-auto text-lg leading-relaxed">
            Gain early access to seasonal protection packages, detailing
            masterclasses, and priority availability before the public.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto p-2 bg-white/[0.03] border border-white/5 rounded-[2rem] backdrop-blur-md">
            <input
              type="email"
              placeholder="Enter your private email"
              className="flex-1 bg-transparent p-6 rounded-2xl outline-none text-white font-medium placeholder:text-gray-600 transition-all"
            />
            <button className="group bg-[#C5A059] text-[#0A0A0A] px-12 py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-3">
              <span>Request Access</span>
              <Send
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-10 flex items-center justify-center gap-3 text-[#444]"
          >
            <ShieldCheck size={14} className="text-[#C5A059]/40" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">
              Zero Spam • Encrypted Data • Member Privacy
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
