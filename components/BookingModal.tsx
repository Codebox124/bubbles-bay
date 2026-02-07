"use client"

import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight, Phone, Tag, User, X } from 'lucide-react'
import SectionHeading from './SectionHeading'

const BookingModal = ({ isModalOpen, setIsModalOpen, services }: { isModalOpen: boolean, setIsModalOpen: (open: boolean) => void, services: { name: string }[] }) => {

    const pricingPlans = [
        {
            name: "The Essential",
            price: "₦5,000",
            features: ["Full Exterior Wash", "Tire Dressing", "Interior Vacuum", "Window Cleaning", "Scent Application"],
            popular: false
        },
        {
            name: "The Executive",
            price: "₦12,000",
            features: ["Essential Package", "Interior Steam Clean", "Hand Wax Finish", "Engine Bay Dusting", "Wheel Deep Clean"],
            popular: true
        },
        {
            name: "The Elite",
            price: "₦35,000+",
            features: ["Executive Package", "Ceramic Boost", "Leather Restoration", "Paint Correction", "Clay Bar Treatment"],
            popular: false
        }
    ];

    return (
        <div>
            {/* Booking Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
                            className="relative bg-white w-full max-w-2xl rounded-[3.5rem] p-10 md:p-14 shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-10 right-10 text-gray-400 hover:text-[#00227b] transition-colors"><X size={28} /></button>

                            <div className="mb-10">
                                <SectionHeading subtitle="Appointment" title={<span>Book <span className="font-black italic">Now</span></span>} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="relative">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-gray-50 p-5 pl-14 rounded-2xl border-2 border-transparent focus:border-[#fdd835] outline-none font-bold text-sm"
                                    />
                                </div>

                                {/* Email/Contact */}
                                <div className="relative">
                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full bg-gray-50 p-5 pl-14 rounded-2xl border-2 border-transparent focus:border-[#fdd835] outline-none font-bold text-sm"
                                    />
                                </div>

                                {/* Service selection */}
                                <div className="relative md:col-span-2">
                                    <Tag className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <select
                                        className="w-full bg-gray-50 p-5 pl-14 rounded-2xl border-2 border-transparent focus:border-[#fdd835] outline-none font-bold text-sm appearance-none cursor-pointer"
                                    >
                                        <option value="">Select Service</option>
                                        {services.map((service, idx) => (
                                            <option key={idx} value={service.name}>{service.name}</option>
                                        ))}
                                    </select>
                                    <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 rotate-90 pointer-events-none" size={18} />
                                </div>

                                {/* Plan Selection */}
                                <div className="relative md:col-span-2">
                                    <Tag className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <select
                                        className="w-full bg-gray-50 p-5 pl-14 rounded-2xl border-2 border-transparent focus:border-[#fdd835] outline-none font-bold text-sm appearance-none cursor-pointer"
                                    >
                                        <option value="">Select Treatment Plan</option>
                                        {pricingPlans.map((plan, idx) => (
                                            <option key={idx} value={plan.name}>{plan.name} — {plan.price}</option>
                                        ))}
                                        <option value="custom">Custom Treatment</option>
                                    </select>
                                    <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 rotate-90 pointer-events-none" size={18} />
                                </div>

                                {/* Preferred Date */}
                                <div className="relative md:col-span-2">
                                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="date"
                                        className="w-full bg-gray-50 p-5 pl-14 rounded-2xl border-2 border-transparent focus:border-[#fdd835] outline-none font-bold text-sm"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button className="md:col-span-2 w-full bg-[#00227b] text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] mt-4 hover:bg-[#001344] transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98]">
                                    Confirm Session Request
                                </button>
                            </div>

                            <p className="text-center mt-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                A specialist will call you within 15 minutes.
                            </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default BookingModal