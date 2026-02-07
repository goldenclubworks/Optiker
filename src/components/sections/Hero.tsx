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
                <div className="relative text-center z-20">
                    {/* "SCHORCHT" - The Foundation */}
                    <motion.div
                        initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <h1 className="text-[clamp(4.5rem,15vw,13rem)] leading-[0.85] font-editorial text-white uppercase tracking-[-0.03em] drop-shadow-2xl">
                            SCHORCHT
                        </h1>
                    </motion.div>

                    {/* "OPTIK" - The Elegance */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 1.1, filter: "blur(15px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative -mt-3 md:-mt-8"
                    >
                        <h1 className="text-[clamp(4.5rem,15vw,13rem)] leading-[0.85] font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-red-brand via-red-500 to-red-brand tracking-[-0.02em]">
                            OPTIK
                        </h1>
                    </motion.div>
                </div>

                {/* Tagline - Refined & spaced */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                    className="mt-8 md:mt-14 text-xs md:text-base font-light text-white/60 max-w-md md:max-w-xl text-center leading-relaxed tracking-widest uppercase"
                >
                    Zeit nehmen. Zeit haben. Für Ihre Augen.
                </motion.p>

                {/* CTA - Clean, Professional Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                    className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto px-6 sm:px-0"
                >
                    {/* Primary CTA */}
                    <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-4 bg-white text-black font-semibold text-xs sm:text-[11px] tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-red-brand hover:text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10">
                        Termin buchen
                    </button>

                    {/* Secondary CTA */}
                    <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-4 border border-white/30 text-white/80 font-medium text-xs sm:text-[11px] tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5 active:scale-[0.98]">
                        Kollektion ansehen
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
