"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, Clock, Tag, ArrowRight } from "lucide-react";

interface Feature {
  name: string;
  desc: string;
}

interface ServiceItem {
  id: number;
  title: string;
  price: string;
  time: string;
  vehicles: string;
  description: string;
  features: Feature[];
  image: string;
}

const services: ServiceItem[] = [
  {
    id: 0,
    title: "Full Service Wash",
    price: "120,000",
    time: "1.5 Hours",
    vehicles: "Coupe/Sedan/SUV",
    description:
      "A comprehensive interior and exterior cleaning using pH-balanced soaps and premium microfiber techniques to ensure a swirl-free finish.",
    image: "./service-wash.avif",
    features: [
      { name: "Foam Bath", desc: "Pre-soak to lift heavy contaminants." },
      {
        name: "Wheel Deep Clean",
        desc: "Removal of brake dust and iron deposits.",
      },
      {
        name: "Interior Vacuum",
        desc: "Detailed suction of all carpets and mats.",
      },
    ],
  },
  {
    id: 1,
    title: "Ceramic Coating",
    price: "450,000",
    time: "2 Days",
    vehicles: "All Sizes",
    description:
      "The ultimate 9H hardness protection. This nano-glass layer provides unmatched gloss, chemical resistance, and self-cleaning properties.",
    image: "./ceramic-coating.avif",
    features: [
      {
        name: "Paint Correction",
        desc: "Multi-stage buffing to remove imperfections.",
      },
      {
        name: "9H Protection",
        desc: "Permanent chemical bond for long-term shield.",
      },
      { name: "UV Resistance", desc: "Prevents paint oxidation and fading." },
    ],
  },
  {
    id: 2,
    title: "Interior Deep Cleaning",
    price: "312,000",
    time: "3 Hours",
    vehicles: "Coupe/Sedan/SUV",
    description:
      "A full-service deep clean of your vehicle's interior — from carpets and seats to every surface and crevice, leaving it fresh and spotless.",
    image: "./interior-deep-cleaning.avif",
    features: [
      {
        name: "Full Vehicle Vacuum",
        desc: "An extensive vacuuming of the entire interior.",
      },
      {
        name: "Carpet & Seat Shampoo",
        desc: "Thorough shampooing to remove all stains and dirt.",
      },
      {
        name: "Leather Conditioning",
        desc: "Apply premium polish to rejuvenate and protect.",
      },
    ],
  },
  {
    id: 3,
    title: "Engine Detailing",
    price: "85,000",
    time: "1 Hour",
    vehicles: "All Engines",
    description:
      "Precision degreasing and detailing of your engine bay to improve heat dissipation and aesthetic appeal. Safe for all electronics.",
    image: "./engine-detailing.avif",
    features: [
      { name: "Degreasing", desc: "Safe removal of oil and grime buildup." },
      {
        name: "Steam Cleaning",
        desc: "Precision cleaning of hard-to-reach areas.",
      },
      {
        name: "Plastic Dressing",
        desc: "Restores factory-look to hoses and covers.",
      },
    ],
  },
];

const ServiceCard = ({
  service,
  setActiveService,
  setIsModalOpen,
}: {
  service: ServiceItem;
  setActiveService: (id: number) => void;
  setIsModalOpen: (open: boolean) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -80% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveService(service.id);
    }
  }, [isInView, setActiveService, service.id]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 md:px-20 relative z-10"
    >
      <div className="max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <span className="px-5 py-2 rounded-full border border-[#0A0A0A]/5 bg-[#FAFAFA] text-[#0A0A0A] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-sm">
            <Tag size={12} className="text-[#C5A059]" /> ₦{service.price}
          </span>
          <span className="px-5 py-2 rounded-full border border-[#0A0A0A]/5 bg-[#FAFAFA] text-[#0A0A0A] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-sm">
            <Clock size={12} className="text-[#C5A059]" /> {service.time}
          </span>
        </motion.div>

        <h3 className="text-6xl md:text-7xl font-medium text-[#0A0A0A] uppercase italic tracking-tighter mb-8 leading-[0.9]">
          {service.title.split("-").map((word, i) => (
            <span
              key={i}
              className={
                i === 0 ? "font-black not-italic block text-[#0A0A0A]" : "block"
              }
            >
              {word}
            </span>
          ))}
        </h3>

        <p className="text-[#666] text-lg leading-relaxed mb-12 font-medium max-w-md border-l-2 border-[#C5A059] pl-6">
          {service.description}
        </p>

        <div className="space-y-4 mb-14">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-5 p-5 rounded-2xl hover:bg-[#FAFAFA] transition-all duration-500 border border-transparent hover:border-[#F0F0F0]"
            >
              <div className="w-6 h-6 rounded-full border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all">
                <Check
                  size={12}
                  className="text-[#C5A059] group-hover:text-white"
                  strokeWidth={3}
                />
              </div>
              <div>
                <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A] mb-1">
                  {feature.name}
                </h4>
                <p className="text-xs text-[#808080] font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center gap-6 bg-[#0A0A0A] text-white px-12 py-7 rounded-2xl font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[#C5A059] hover:text-[#0A0A0A] transition-all duration-500 shadow-2xl"
        >
          Secure Booking
          <ArrowRight
            size={16}
            className="group-hover:translate-x-2 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="bg-white font-sans text-[#0A0A0A] relative">
      <header className="pt-32 pb-12 px-6 lg:hidden bg-[#0A0A0A]">
        <h1 className="text-5xl font-black uppercase tracking-tighter italic text-white">
          Our <span className="text-[#C5A059]">Services</span>
        </h1>
      </header>

      <div className="relative flex flex-col lg:flex-row">
        <div className="hidden lg:block w-[45%] h-screen sticky top-0 overflow-hidden bg-[#050505]">
          <AnimatePresence mode="wait">
            {services.map(
              (service) =>
                activeService === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{
                      opacity: 0,
                      scale: 1.1,
                      filter: "grayscale(100%)",
                    }}
                    animate={{
                      opacity: 0.5,
                      scale: 1,
                      filter: "grayscale(50%)",
                    }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ),
            )}
          </AnimatePresence>

          <div className="absolute bottom-12 left-12 z-20">
            <div className="flex items-center gap-6">
              <span className="text-white font-black italic text-6xl opacity-10">
                0{activeService + 1}
              </span>
              <div className="h-px w-20 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em]">
                Service Image
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[55%] bg-white relative z-10">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              setActiveService={setActiveService}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
