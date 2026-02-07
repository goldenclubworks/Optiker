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
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    preload="auto"
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
                className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 md:px-6"
                style={{ opacity: opacityContent }}
            >
                {/* Eyebrow / Pre-Header - Elegant & Minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 20, letterSpacing: "0.5em" }}
                    animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="mb-8 md:mb-12 flex items-center gap-6"
                >
                    <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <span className="text-[10px] md:text-xs font-medium uppercase text-white/80 tracking-[0.25em] drop-shadow-md">
                        Tradition trifft Innovation
                    </span>
                    <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </motion.div>

                {/* HEADLINE - MASSIVE & CINEMATIC */}
                <div className="relative text-center z-20 mix-blend-screen">
                    {/* "SCHORCHT" - The Foundation */}
                    <motion.div
                        initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <h1 className="text-[clamp(3.5rem,13vw,11rem)] leading-[0.85] font-editorial text-white uppercase tracking-[-0.02em] drop-shadow-2xl">
                            SCHORCHT
                        </h1>
                    </motion.div>

                    {/* "OPTIK" - The Elegance */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 1.1, filter: "blur(15px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative -mt-2 md:-mt-6"
                    >
                        <h1 className="text-[clamp(3.5rem,13vw,11rem)] leading-[0.85] font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-red-brand via-red-500 to-red-brand tracking-tight drop-shadow-[0_0_35px_rgba(220,38,38,0.4)]">
                            OPTIK
                        </h1>
                    </motion.div>
                </div>

                {/* Tagline - Refined & spaced */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                    className="mt-10 md:mt-16 text-sm md:text-lg font-light text-white/70 max-w-lg md:max-w-2xl text-center leading-relaxed tracking-wide"
                >
                    <span className="inline-block px-4 py-1 border-y border-white/10">
                        ZEIT nehmen. ZEIT haben. Für Ihre Augen.
                    </span>
                </motion.p>

                {/* CTA - Premium Glass Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                    className="mt-12 md:mt-20 flex flex-col sm:flex-row gap-6 items-center"
                >
                    <button className="group relative px-10 py-4 md:px-12 md:py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95">
                        <div className="absolute inset-0 bg-white text-black font-bold tracking-[0.2em] uppercase text-[11px] flex items-center justify-center">
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-red-brand flex items-center gap-2">
                                Termin buchen
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                                    <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </button>

                    <button className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 relative group">
                        Kollektion ansehen
                        <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
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
