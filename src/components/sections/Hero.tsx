"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";

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

// Spring config for buttery smooth scroll
const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const { scrollY } = useScroll();

    // Raw transforms
    const yBackgroundRaw = useTransform(scrollY, [0, 800], [0, 80]);
    const scaleBackgroundRaw = useTransform(scrollY, [0, 800], [1, 1.05]);
    const opacityContentRaw = useTransform(scrollY, [0, 400], [1, 0]);

    // Apply spring for buttery smooth feel
    const yBackground = useSpring(yBackgroundRaw, springConfig);
    const scaleBackground = useSpring(scaleBackgroundRaw, springConfig);
    const opacityContent = useSpring(opacityContentRaw, springConfig);

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] min-h-[600px] w-full bg-black overflow-hidden"
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
                    preload="metadata"
                    onCanPlay={() => setVideoLoaded(true)}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out"
                    style={{ opacity: videoLoaded ? 0.8 : 0 }}
                >
                    <source src="/video/glass.mp4" type="video/mp4" />
                </video>

                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* --- MAIN CONTENT --- */}
            <motion.div
                className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
                style={{ opacity: opacityContent }}
            >
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-6 sm:mb-8 md:mb-10"
                >
                    <span className="text-[10px] sm:text-[11px] font-medium uppercase text-white/60 tracking-[0.3em]">
                        Tradition trifft Innovation
                    </span>
                </motion.div>

                {/* HEADLINE */}
                <div className="relative text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(3.5rem,12vw,10rem)] sm:text-[clamp(4rem,14vw,12rem)] leading-[0.85] font-editorial text-white uppercase tracking-[-0.03em]"
                    >
                        SCHORCHT
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(3.5rem,12vw,10rem)] sm:text-[clamp(4rem,14vw,12rem)] leading-[0.85] font-serif italic text-red-brand tracking-[-0.02em] -mt-2 sm:-mt-4 md:-mt-6"
                    >
                        OPTIK
                    </motion.h1>
                </div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-6 sm:mt-8 md:mt-10 text-[11px] sm:text-xs md:text-sm text-white/50 tracking-[0.2em] uppercase"
                >
                    Zeit nehmen. Zeit haben.
                </motion.p>

                {/* CTA - WOW Asymmetrical Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center gap-4 sm:gap-0"
                >
                    {/* Primary: Termin buchen - Pill with icon */}
                    <Link
                        href="/termin"
                        className="group relative flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black rounded-full transition-all duration-300 hover:bg-red-brand hover:text-white hover:pr-10 sm:hover:pr-12"
                    >
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <span className="text-xs sm:text-[11px] font-semibold tracking-[0.15em] uppercase">
                            Termin buchen
                        </span>
                        <ArrowRight className="w-4 h-4 absolute right-4 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>

                    {/* Divider - Desktop only */}
                    <div className="hidden sm:block w-12 md:w-16 h-px bg-white/20 mx-4 md:mx-6" />

                    {/* Secondary: Kollektion - Text link with line */}
                    <Link
                        href="/brillen"
                        className="group relative text-white/60 hover:text-white transition-colors"
                    >
                        <span className="text-xs sm:text-[11px] font-medium tracking-[0.15em] uppercase">
                            Kollektion
                        </span>
                        <span className="absolute -bottom-1 left-0 w-full h-px bg-white/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 sm:w-6 h-8 sm:h-10 border border-white/30 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>

            {/* Film Grain */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-30" />
        </section>
    );
}
