"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  ChevronRight,
  X,
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  Star,
  ArrowRight,
  ShieldCheck,
  Zap,
  Waves,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Menu,
  Award,
  Heart,
  Sparkles,
  Navigation,
  ChevronLeft,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Logo from "@/components/Logo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % (isMobile ? 3 : 2));
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + (isMobile ? 3 : 2)) % (isMobile ? 3 : 2),
    );
  };

  // Hold on now, This part is very sensitive.. changing the index of any item in this list would affect the services courosel UI :)
  const services = [
    {
      name: "View All Services",
      desc: "View all our services",
      icon: <ChevronRight />,
      img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: true,
    },
    {
      name: "Full-Service Wash",
      desc: "Comprehensive interior and exterior cleaning with premium soaps.",
      icon: <Waves />,
      img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false,
    },
    {
      name: "Ceramic Coating",
      desc: "9H Hardness protection for long-lasting paint brilliance.",
      icon: <ShieldCheck />,
      img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false,
    },

    {
      name: "Interior Deep Cleaning",
      desc: "Steam sanitation and upholstery restoration for a factory feel.",
      icon: <Sparkles />,
      img: "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false,
    },
    {
      name: "Engine Cleaning",
      desc: "Precision degreasing and detailing for peak engine aesthetics.",
      icon: <Zap />,
      img: "https://images.unsplash.com/photo-1656958258484-7ee6452cfd92?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isGoToFullServicesCard: false,
    },
    {
      name: "Waxing & Polishing",
      desc: "High-gloss buffing that removes swirl marks and restores shine.",
      icon: <Award />,
      img: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false,
    },
    {
      name: "Mobile Car Wash",
      desc: "We bring the bubbles to your doorstep. Convenience redefined.",
      icon: <Navigation />,
      img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false,
    },
  ];

  const testimonials = [
    {
      name: "Adebayo K.",
      role: "Lexus Owner",
      text: "The best detailing service in Malete. My car looked brand new after the ceramic coating.",
      stars: 5,
    },
    {
      name: "Sarah J.",
      role: "SUV Driver",
      text: "Excellent customer service and very professional. The interior deep clean is a life saver.",
      stars: 5,
    },
    {
      name: "Ibrahim W.",
      role: "Kwasu Faculty",
      text: "Fast, efficient, and they actually care about the paint. Highly recommended for Kwasu staff.",
      stars: 5,
    },
  ];

  const benefits = [
    {
      title: "Eco-Friendly",
      desc: "We use biodegradable soaps that protect the environment.",
      icon: <Heart className="text-red-500" />,
    },
    {
      title: "Precision Gear",
      desc: "State-of-the-art pressure washers and steam cleaners.",
      icon: <Zap className="text-yellow-500" />,
    },
    {
      title: "Expert Staff",
      desc: "Trained professionals who treat every car as a masterpiece.",
      icon: <CheckCircle2 className="text-green-500" />,
    },
    {
      title: "Secure Parking",
      desc: "Gated and monitored facility for your vehicle's safety.",
      icon: <ShieldCheck className="text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#00227b] font-sans selection:bg-[#fdd835] selection:text-[#00227b]">
      <Navbar onBookClick={() => setIsModalOpen(true)} />

      <Hero setIsModalOpen={setIsModalOpen} />

      <Benefits benefits={benefits} />

      <Services
        setIsModalOpen={setIsModalOpen}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        services={services}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      <Pricing setIsModalOpen={setIsModalOpen} />

      <Location />

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />
      {/* Booking Modal */}
      <BookingModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        services={services}
      />
    </div>
  );
}
