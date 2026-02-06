"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Benefits = ({ benefits }: { benefits: any[] }) => {
    return (
        <div>
            {/* Benefits Section */}
            <section id="benefits" className="py-24 px-6 bg-white relative z-30 -mt-20 rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm">{b.icon}</div>
                            <h4 className="font-black text-sm uppercase tracking-widest mb-3">{b.title}</h4>
                            <p className="text-gray-400 text-xs font-medium leading-relaxed">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Benefits