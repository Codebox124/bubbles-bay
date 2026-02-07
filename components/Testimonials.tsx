"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = ({ testimonials }: { testimonials: { name: string, role: string, text: string, stars: number }[] }) => {
    return (
        <div>
            <section id="reviews" className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading subtitle="Success Stories" title={<span>What our <span className="font-black italic">Clients</span> Say</span>} />

                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div key={i} className="p-12 rounded-[3.5rem] bg-gray-50 border border-gray-100">
                                <div className="flex text-[#fdd835] mb-6 gap-1">
                                    {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-lg font-medium italic text-[#00227b]/80 mb-8 leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#00227b] rounded-full flex items-center justify-center text-white font-black">{t.name[0]}</div>
                                    <div>
                                        <h5 className="font-black text-sm uppercase tracking-widest">{t.name}</h5>
                                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials