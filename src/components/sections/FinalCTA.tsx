"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { finalCta } from "@/content/site";

export function FinalCTA() {
    return (
        <section className="relative overflow-hidden bg-[#030303] py-32 md:py-48 flex items-center justify-center">
            {/* Background Cinematic Texture */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(189,34,34,0.15)_0%,transparent_70%)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <div className="container-premium relative z-10">
                <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-12 md:gap-16">
                    {/* Animated Icon */}
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="h-20 w-20 rounded-full border border-red-brand/30 flex items-center justify-center bg-red-brand/5 backdrop-blur-xl shadow-[0_0_40px_rgba(189,34,34,0.1)]"
                    >
                        <Sparkles className="h-8 w-8 text-red-brand" />
                    </motion.div>

                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
                            {finalCta.headline.split(" ").slice(0, -1).join(" ")}{" "}
                            <span className="font-serif italic text-red-brand">
                                {finalCta.headline.split(" ").pop()}
                            </span>
                        </h2>
                        <p className="text-lg md:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed text-balance">
                            {finalCta.subline}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Link
                            href={finalCta.buttonHref}
                            className="group relative px-12 py-6 rounded-full overflow-hidden transition-all duration-700 bg-red-brand hover:shadow-[0_0_60px_rgba(189,34,34,0.3)] flex items-center gap-4"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_4s_infinite]" />
                            <span className="relative z-10 text-white font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
                                {finalCta.buttonLabel}
                            </span>
                            <ArrowRight className="relative z-10 h-4 w-4 text-white group-hover:translate-x-2 transition-transform duration-500" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Inverted Corner Detail (The Zenith Signature) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-red-brand/40 to-transparent" />
        </section>
    );
}
