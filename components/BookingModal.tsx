"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Phone, Tag, User, X } from "lucide-react";
import SectionHeading from "./SectionHeading";

const BookingModal = ({
  isModalOpen,
  setIsModalOpen,
  services,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  services: { name: string }[];
}) => {
  const pricingPlans = [
    {
      name: "The Essential",
      price: "₦5,000",
      features: [
        "Full Exterior Wash",
        "Tire Dressing",
        "Interior Vacuum",
        "Window Cleaning",
        "Scent Application",
      ],
      popular: false,
    },
    {
      name: "The Executive",
      price: "₦12,000",
      features: [
        "Essential Package",
        "Interior Steam Clean",
        "Hand Wax Finish",
        "Engine Bay Dusting",
        "Wheel Deep Clean",
      ],
      popular: true,
    },
    {
      name: "The Elite",
      price: "₦35,000+",
      features: [
        "Executive Package",
        "Ceramic Boost",
        "Leather Restoration",
        "Paint Correction",
        "Clay Bar Treatment",
      ],
      popular: false,
    },
  ];

  return (
    <div>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-[#0A0A0A] border border-white/10 w-full max-w-2xl rounded-[2rem] md:rounded-[3.5rem] p-6 sm:p-8 md:p-14 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-[#808080] hover:text-[#C5A059] transition-colors"
              >
                <X size={24} className="md:w-7 md:h-7" />
              </button>

              <div className="mb-8 md:mb-10">
                <SectionHeading
                  light={true}
                  subtitle="Appointment"
                  title={
                    <span>
                      Book <span className="font-black italic">Now</span>
                    </span>
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="relative">
                  <User
                    className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-[#808080]"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-[#141414] text-[#F5F5F5] p-4 md:p-5 pl-12 md:pl-14 rounded-xl md:rounded-2xl border-2 border-white/5 focus:border-[#C5A059] outline-none font-bold text-sm placeholder:text-[#666]"
                  />
                </div>

                <div className="relative">
                  <Phone
                    className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-[#808080]"
                    size={18}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-[#141414] text-[#F5F5F5] p-4 md:p-5 pl-12 md:pl-14 rounded-xl md:rounded-2xl border-2 border-white/5 focus:border-[#C5A059] outline-none font-bold text-sm placeholder:text-[#666]"
                  />
                </div>

                <div className="relative md:col-span-2">
                  <Tag
                    className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-[#808080]"
                    size={18}
                  />
                  <select className="w-full bg-[#141414] text-[#F5F5F5] p-4 md:p-5 pl-12 md:pl-14 rounded-xl md:rounded-2xl border-2 border-white/5 focus:border-[#C5A059] outline-none font-bold text-sm appearance-none cursor-pointer">
                    <option value="" className="bg-[#141414]">
                      Select Service
                    </option>
                    {services.map((service, idx) => (
                      <option
                        key={idx}
                        value={service.name}
                        className="bg-[#141414]"
                      >
                        {service.name}
                      </option>
                    ))}
                  </select>
                  <ChevronRight
                    className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 text-[#808080] rotate-90 pointer-events-none"
                    size={18}
                  />
                </div>

                <div className="relative md:col-span-2">
                  <Tag
                    className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-[#808080]"
                    size={18}
                  />
                  <select className="w-full bg-[#141414] text-[#F5F5F5] p-4 md:p-5 pl-12 md:pl-14 rounded-xl md:rounded-2xl border-2 border-white/5 focus:border-[#C5A059] outline-none font-bold text-sm appearance-none cursor-pointer">
                    <option value="" className="bg-[#141414]">
                      Select Treatment Plan
                    </option>
                    {pricingPlans.map((plan, idx) => (
                      <option
                        key={idx}
                        value={plan.name}
                        className="bg-[#141414]"
                      >
                        {plan.name} — {plan.price}
                      </option>
                    ))}
                    <option value="custom" className="bg-[#141414]">
                      Custom Treatment
                    </option>
                  </select>
                  <ChevronRight
                    className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 text-[#808080] rotate-90 pointer-events-none"
                    size={18}
                  />
                </div>

                <div className="relative md:col-span-2">
                  <Calendar
                    className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-[#808080]"
                    size={18}
                  />
                  <input
                    type="date"
                    className="w-full bg-[#141414] text-[#F5F5F5] p-4 md:p-5 pl-12 md:pl-14 rounded-xl md:rounded-2xl border-2 border-white/5 focus:border-[#C5A059] outline-none font-bold text-sm [color-scheme:dark]"
                  />
                </div>

                <button className="md:col-span-2 w-full bg-[#C5A059] text-[#0A0A0A] py-5 md:py-6 rounded-xl md:rounded-2xl font-black uppercase text-xs tracking-[0.2em] mt-4 hover:bg-[#F5F5F5] transition-all shadow-xl shadow-[#C5A059]/20 active:scale-[0.98]">
                  Confirm Session Request
                </button>
              </div>

              <p className="text-center mt-6 md:mt-8 text-[10px] font-black uppercase tracking-widest text-[#808080]">
                A specialist will call you within 15 minutes.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingModal;
