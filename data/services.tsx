import { ChevronRight, Waves, ShieldCheck, Sparkles, Zap, Award, Navigation } from "lucide-react";

export const services = [
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