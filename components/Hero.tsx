"use client"
import React from 'react'
import { motion } from 'framer-motion'


const Hero = ({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative flex items-center justify-center overflow-hidden bg-black pt-44 md:pt-28 pb-40">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-110 opacity-45">
                    <source src="https://cdn.pixabay.com/video/2020/02/26/32890-394144302_small.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[#00227b]/50 via-transparent to-[#00227b] z-10"></div>

                <div className="relative z-20 text-center px-6 max-w-5xl">

                    {/* <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-[#fdd835] text-[10px] font-black uppercase tracking-[0.4em] mb-10"
                  >
                    <Sparkles size={14} /> The Sanctuary of Detailing
                  </motion.div> */}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-light text-white leading-[0.9] mb-12"
                    >
                        It's <br /> <span className="font-black italic text-[#fdd835]">not just</span> a <br /> <span className="font-black italic text-[#fdd835]">Wash</span>

                        <span className="block md:-mt-6">
                            <span className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-white/70">
                                It's a <span className="ml-2 italic text-[#fdd835]">Vibe</span>
                            </span>
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto bg-[#fdd835] text-[#00227b] px-16 py-6 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl hover:scale-105 transition-all">
                            Book Appointment
                        </button>
                        <button className="w-full sm:w-auto border border-white/30 text-white backdrop-blur-md px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                            Explore Services
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero