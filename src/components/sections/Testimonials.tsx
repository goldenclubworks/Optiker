"use client";

import { testimonials } from "@/content/site";
import { Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const allTestimonials = [...testimonials, ...testimonials];

    return (
        <section ref={containerRef} className="relative bg-[#030303] py-32 md:py-48 overflow-hidden">
            {/* Background "Whisper" - Cinematic Depth */}
            <motion.div
                style={{ x }}
                className="absolute top-[15%] w-full whitespace-nowrap pointer-events-none select-none z-0 opacity-[0.02]"
            >
                <span className="text-[20vw] font-black leading-none text-white tracking-tighter block uppercase">
                    Handwerkskunst Perfektion
                </span>
            </motion.div>

            <div className="container-premium relative z-10 mb-24 md:mb-32 text-center">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="h-px w-8 bg-red-brand/40" />
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-red-brand">
                            Resonanz
                        </span>
                        <div className="h-px w-8 bg-red-brand/40" />
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
                        Stimmen der <span className="font-serif italic text-red-brand">Vollendung</span>
                    </h2>
                </div>
            </div>

            {/* INFINITE MARQUEE */}
            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all py-10">
                    {allTestimonials.map((t, i) => (
                        <div
                            key={i}
                            className="w-[320px] md:w-[480px] mx-6 md:mx-10 p-10 md:p-14 glass-card rounded-[3rem] border-white/5 transition-all duration-700 hover:border-red-brand/30 group"
                        >
                            <Quote className="h-10 w-10 text-red-brand mb-10 opacity-30 group-hover:opacity-100 transition-all duration-700" />
                            <p className="text-lg md:text-2xl font-light leading-relaxed text-white/80 mb-12 italic">
                                &quot;{t.quote}&quot;
                            </p>
                            <div className="flex items-center gap-5">
                                <div className="h-12 w-12 rounded-full border border-red-brand/30 flex items-center justify-center p-1 overflow-hidden">
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-red-brand to-black opacity-40" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                                        {t.author}
                                    </span>
                                    <span className="text-[10px] text-white/30 uppercase tracking-[0.1em]">
                                        Exzellenz-Partner
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cinematic Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />
            </div>
        </section>
    );
}
