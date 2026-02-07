"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// --- IRIS REVEAL ---
function IrisReveal() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
                animate={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
                transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
                className="absolute inset-0 z-[100] pointer-events-none bg-black"
            />
        </AnimatePresence>
    );
}

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();
    const yBackground = useTransform(scrollY, [0, 800], [0, 120]);
    const scaleBackground = useTransform(scrollY, [0, 800], [1, 1.08]);
    const opacityContent = useTransform(scrollY, [0, 350], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] w-full bg-black overflow-hidden"
        >
            <IrisReveal />

            {/* --- VIDEO BACKGROUND --- */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: yBackground, scale: scaleBackground }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 0.85 }}
                >
                    <source src="/video/glass.mp4" type="video/mp4" />
                </video>

                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* --- MAIN CONTENT --- */}
            <motion.div
                className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6"
                style={{ opacity: opacityContent }}
            >
                {/* Eyebrow / Pre-Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mb-6 md:mb-10 flex items-center gap-4"
                >
                    <div className="h-px w-8 md:w-12 bg-red-brand/60" />
                    <span className="text-[10px] md:text-[11px] font-medium uppercase text-white/70 tracking-[0.25em]">
                        Tradition trifft Innovation
                    </span>
                    <div className="h-px w-8 md:w-12 bg-red-brand/60" />
                </motion.div>

                {/* HEADLINE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <h1 className="text-[clamp(3rem,11vw,9rem)] leading-[0.9] font-editorial text-white uppercase tracking-tight">
                        Sehen
                    </h1>
                    <h1 className="text-[clamp(3rem,11vw,9rem)] leading-[0.9] font-serif italic text-red-brand tracking-tight -mt-1 md:-mt-3 drop-shadow-[0_0_25px_rgba(189,34,34,0.35)]">
                        erleben.
                    </h1>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
                    className="mt-8 md:mt-12 text-sm md:text-lg lg:text-xl font-light text-white/50 max-w-lg md:max-w-xl text-center leading-relaxed"
                >
                    ZEIT nehmen. ZEIT haben.
                    <br />
                    <span className="text-white/80">Für Ihre Augen. Für Ihre Wünsche.</span>
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                    className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4"
                >
                    <button className="group relative px-8 py-4 md:px-12 md:py-5 rounded-full bg-red-brand text-white font-semibold tracking-[0.15em] uppercase text-[10px] md:text-[11px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_35px_rgba(189,34,34,0.45)]">
                        <span className="relative z-10">Termin vereinbaren</span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                    <button className="px-8 py-4 md:px-10 md:py-5 rounded-full border border-white/20 text-white/70 font-medium tracking-[0.1em] uppercase text-[10px] md:text-[11px] hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                        Kollektionen entdecken
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white/40 font-medium">Entdecken</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
                >
                    <div className="w-1 h-2 bg-white/40 rounded-full" />
                </motion.div>
            </motion.div>

            {/* Subtle Film Grain */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-30" />
        </section>
    );
}
