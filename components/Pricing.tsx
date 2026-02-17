"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Zap, Handshake } from "lucide-react";

const Pricing = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (open: boolean) => void;
}) => {
  const pricingPlans = [
    {
      name: "The Quick Wash",
      price: "5,000",
      icon: <Zap size={20} />,
      desc: "Essential maintenance for the daily driver.",
      popular: false,
      features: [
        "Exterior Hand Wash",
        "Tire Shine & Wheel Clean",
        "Window Streak-Free Polish",
        "Interior Vacuum",
      ],
    },
    {
      name: "The Full Detail",
      price: "20,000",
      icon: <Handshake size={20} />,
      desc: "Our signature deep-clean restoration.",
      popular: true,
      features: [
        "Everything in Quick Wash",
        "Upholstery Steam Clean",
        "Leather Conditioning",
        "Hand Wax Application",
        "Engine Bay Detailing",
      ],
    },
    {
      name: "Buffing and Ceramic Coating",
      price: "20,000",
      icon: <ShieldCheck size={20} />,
      desc: "The ultimate long-term paint protection.",
      popular: false,
      features: [
        "9H Nano-Ceramic Coating",
        "Multi-Stage Paint Correction",
        "Glass & Rim Protection",
        "3-Year Warranty",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 md:py-32 bg-white px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="w-10 h-px bg-[#C5A059]"></div>
            <span className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px]">
              Investment Tiers
            </span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-[#0A0A0A] tracking-tighter leading-[1.1] md:leading-[0.9] uppercase italic">
              Transparent <br />
              <span className="font-black text-[#E5E5E5] not-italic">
                Value.
              </span>
            </h2>
            <p className="max-w-xs text-[#808080] font-medium text-sm leading-relaxed border-l border-[#C5A059]/30 pl-4 md:pl-6">
              Premium automotive care is an investment in your vehicle's
              longevity and soul. Select your level of perfection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#F0F0F0]">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative p-6 md:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#F0F0F0] last:border-r-0 flex flex-col transition-all duration-700 ${
                plan.popular
                  ? "bg-[#0A0A0A] text-[#F5F5F5] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-10"
                  : "bg-white text-[#0A0A0A] hover:bg-[#FAFAFA]"
              }`}
            >
              <span
                className={`absolute top-6 md:top-10 right-6 md:right-10 text-5xl md:text-6xl font-black italic select-none transition-colors duration-700 ${
                  plan.popular
                    ? "text-white/[0.03]"
                    : "text-[#F0F0F0] group-hover:text-[#EAEAEA]"
                }`}
              >
                0{i + 1}
              </span>

              <div className="mb-8 md:mb-12">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm transition-transform duration-500 group-hover:scale-110 ${
                    plan.popular
                      ? "bg-[#C5A059] text-[#0A0A0A]"
                      : "bg-[#F5F5F5] text-[#0A0A0A] border border-[#E5E5E5]"
                  }`}
                >
                  {plan.icon}
                </div>
                <h4
                  className={`text-[10px] font-black uppercase tracking-[0.4em] mb-2 md:mb-3 ${
                    plan.popular ? "text-[#C5A059]" : "text-[#808080]"
                  }`}
                >
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-sm font-bold ${plan.popular ? "text-[#C5A059]" : "text-[#0A0A0A]/40"}`}
                  >
                    ₦
                  </span>
                  <span className="text-5xl md:text-6xl font-black italic tracking-tighter">
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-4 md:mt-6 font-medium leading-relaxed max-w-[240px] ${
                    plan.popular ? "text-[#808080]" : "text-[#666666]"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-16 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 md:gap-4 text-[10px] font-black uppercase tracking-widest"
                  >
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-[#C5A059]/10" : "bg-[#0A0A0A]/5"
                      }`}
                    >
                      <Check
                        size={12}
                        className={
                          plan.popular ? "text-[#C5A059]" : "text-[#0A0A0A]"
                        }
                      />
                    </div>
                    <span
                      className={
                        plan.popular ? "text-[#E5E5E5]" : "text-[#0A0A0A]/70"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className={`group/btn relative w-full py-5 md:py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all flex items-center justify-center gap-3 overflow-hidden ${
                  plan.popular
                    ? "bg-[#C5A059] text-[#0A0A0A] hover:bg-[#F5F5F5]"
                    : "bg-[#0A0A0A] text-white hover:bg-[#C5A059] hover:text-[#0A0A0A]"
                }`}
              >
                <span className="relative z-10">Secure Appointment</span>
                <ArrowRight
                  size={14}
                  className="group-hover/btn:translate-x-2 transition-transform duration-300"
                />
              </button>

              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-6 md:left-10 bg-[#C5A059] text-[#0A0A0A] px-4 py-1.5 md:px-6 md:py-2 rounded-full font-black uppercase text-[9px] tracking-[0.3em] shadow-[0_10px_20px_rgba(197,160,89,0.2)]">
                  Studio Choice
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-[#C5A059]/60 italic">
            * All prices are subject to vehicle size and condition inspection
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
