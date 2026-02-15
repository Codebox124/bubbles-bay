"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Services = ({
  setIsModalOpen,
  activeIndex,
  setActiveIndex,
  services,
  handleNext,
  handlePrev,
}: {
  setIsModalOpen: (open: boolean) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  services: any[];
  handleNext: () => void;
  handlePrev: () => void;
}) => {
  const browserWindow = typeof window !== "undefined" ? window : null;
  let numberValue = 0;
  if (browserWindow) {
    numberValue = 100 / (browserWindow?.innerWidth < 768 ? 1 : 2.5);
  }
  return (
    <div>
      <section
        id="services"
        className="py-16 md:py-32 bg-[#0A0A0A] overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
          <SectionHeading
            light={true}
            subtitle="The Treatment Menu"
            title={
              <span>
                Crafted <span className="italic font-bold">Excellence</span>
              </span>
            }
          />
        </div>

        <div className="relative w-full h-[450px] md:h-[450px] px-4 sm:px-6">
          <div className="max-w-7xl mx-auto relative h-full">
            <motion.div
              animate={{ x: `calc(-${activeIndex * numberValue}% )` }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="flex gap-6 md:gap-8 h-full"
            >
              {services.slice(0, 3).map((s, i) => {
                const isAllServices = s.isGoToFullServicesCard;

                return (
                  <motion.div
                    key={i}
                    className={`relative w-full md:w-[480px] h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden group border border-white/5 shrink-0 transition-all duration-500 ${isAllServices ? "bg-[#141414]" : "bg-[#0A0A0A]"}`}
                  >
                    <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-1000">
                      <img
                        src={s.img || s.image}
                        alt={s.name || "Service"}
                        className={`w-full h-full object-cover ${isAllServices ? "opacity-20 grayscale" : "opacity-60"}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-90 transition-opacity duration-500"></div>
                    </div>

                    <div className="absolute inset-0 p-6 md:p-10 lg:p-14 flex flex-col justify-end text-[#F5F5F5]">
                      <div className="mb-6 md:mb-8 w-12 h-12 md:w-14 md:h-14 bg-[#1E1E1E] border border-[#C5A059]/20 rounded-2xl flex items-center justify-center text-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.1)] transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {s.icon}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-3 md:mb-4 leading-none text-[#F5F5F5]">
                        {s.name || "View All Services"}
                      </h3>

                      <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-700 ease-in-out">
                        <p className="text-[#808080] font-medium mb-6 md:mb-8 leading-relaxed text-sm max-w-[300px]">
                          {s.desc ||
                            "Experience our full suite of automotive restoration and protection services."}
                        </p>

                        <button
                          onClick={() =>
                            isAllServices
                              ? (window.location.href = "/services")
                              : setIsModalOpen(true)
                          }
                          className="w-full md:w-auto bg-[#C5A059] text-[#0A0A0A] px-8 py-3.5 md:px-10 md:py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#F5F5F5] transition-all mb-2"
                        >
                          {isAllServices ? "Explore Menu" : "Reserve Session"}{" "}
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="absolute top-6 md:top-10 right-6 md:right-10 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/5 flex items-center justify-center text-[11px] font-black text-[#C5A059]/40 backdrop-blur-md">
                      0{i + 1}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#141414]/80 backdrop-blur-3xl rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50">
          <button
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#1E1E1E] text-[#F5F5F5] flex items-center justify-center border border-white/5 hover:border-[#C5A059]/40 hover:text-[#C5A059] transition-all active:scale-90"
            aria-label="Previous Service"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          <div className="flex gap-2 px-2 md:px-3">
            {services.slice(0, 3).map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${activeIndex === i ? "w-8 md:w-10 bg-[#C5A059]" : "w-2 bg-[#1E1E1E]"}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#C5A059] text-[#0A0A0A] flex items-center justify-center hover:bg-[#F5F5F5] transition-all shadow-lg active:scale-90"
            aria-label="Next Service"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
