"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { CheckCircle2, Tag } from 'lucide-react'

const Pricing = ({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) => {
    const pricingPlans = [
        {
            name: "The Quick Wash",
            price: "₦3,000",
            popular: false,
            features: [
                "Exterior Hand Wash",
                "Tire Shine",
                "Window Cleaning",
                "Quick Vacuum"
            ]
        },
        {
            name: "The Full Detail",
            price: "₦10,000",
            popular: true,
            features: [
                "Everything in Quick Wash",
                "Deep Interior Cleaning",
                "Leather Conditioning",
                "Wax Application",
                "Engine Bay Wipe Down"
            ]
        },
        {
            name: "The Ceramic Shield",
            price: "₦35,000",
            popular: false,
            features: [
                "Everything in Full Detail",
                "9H Ceramic Coating",
                "Paint Decontamination",
                "Headlight Restoration",
                "3-Year Protection"
            ]
        }
    ];
    return (
        <div>
            {/* Pricing Section */}
            <section className="pb-32 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <SectionHeading subtitle="Investment" title={<span>Transparent <span className="font-black italic">Pricing</span></span>} />
                        <p className="text-[#00227b]/60 font-medium max-w-xl mx-auto">Choose a plan that fits your vehicle's needs. From quick refreshes to deep restoration.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-12 rounded-[3.5rem] border ${plan.popular ? 'bg-[#00227b] text-white border-transparent shadow-2xl shadow-blue-900/40' : 'bg-gray-50 border-gray-100'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#fdd835] text-[#00227b] px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl">
                                        Recommended
                                    </div>
                                )}
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h4 className={`text-xs font-black uppercase tracking-[0.2em] mb-2 ${plan.popular ? 'text-white/60' : 'text-[#00227b]/40'}`}>{plan.name}</h4>
                                        <div className="text-4xl font-black italic tracking-tighter">{plan.price}</div>
                                    </div>
                                    <Tag className={plan.popular ? 'text-[#fdd835]' : 'text-[#00227b]/20'} />
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-xs font-bold">
                                            <CheckCircle2 size={16} className={plan.popular ? 'text-[#fdd835]' : 'text-[#00227b]'} />
                                            <span className={plan.popular ? 'text-white/80' : 'text-[#00227b]/60'}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className={`w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${plan.popular ? 'bg-[#fdd835] text-[#00227b] hover:bg-white shadow-xl' : 'bg-[#00227b] text-white hover:bg-[#001344]'}`}
                                >
                                    Book This Plan
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing