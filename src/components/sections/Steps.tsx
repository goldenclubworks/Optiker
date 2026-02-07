"use client";

import { steps } from "@/content/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export function Steps() {
    return (
        <section className="relative bg-background py-20 md:py-32 lg:py-48 overflow-hidden">
            {/* Background Optical Path (Multi-line Refraction) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
                <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 800"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="gradient-red" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="var(--red-brand)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M-50,200 C200,100 400,500 600,400 S1000,700 1250,500"
                        fill="none"
                        stroke="url(#gradient-red)"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                    />
                    <path
                        d="M-50,220 C200,120 400,520 600,420 S1000,720 1250,520"
                        fill="none"
                        stroke="url(#gradient-red)"
                        strokeWidth="0.5"
                        strokeDasharray="4 8"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>

            <div className="container-premium relative z-10">
                <div className="mb-20 md:mb-32 text-center max-w-3xl mx-auto">
                    <ScrollReveal variant="fadeIn" width="100%">
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="h-px w-8 bg-red-brand/40" />
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-red-brand">
                                    Der Weg zum perfekten Sehen
                                </span>
                                <div className="h-px w-8 bg-red-brand/40" />
                            </div>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
                                Ihre <span className="font-serif italic text-red-brand">Reise</span> beginnt hier.
                            </h2>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <ScrollReveal
                                variant="slideUp"
                                delay={index * 0.2}
                                width="100%"
                                className="!overflow-visible" // Overriding ScrollReveal's default overflow:hidden
                            >
                                <div className="relative p-10 md:p-12 glass-card rounded-[3rem] border-white/20 transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                                    {/* Elevated Step Number */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 h-16 w-16 rounded-full bg-white border border-red-brand/20 flex items-center justify-center text-sm font-bold tracking-[0.2em] text-red-brand shadow-2xl transition-transform duration-500 group-hover:scale-110 z-20">
                                        <div className="absolute inset-1 rounded-full border border-red-brand/10 border-dashed animate-[spin_10s_linear_infinite]" />
                                        0{index + 1}
                                    </div>

                                    <div className="flex flex-col gap-6 mt-6">
                                        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground/80 leading-relaxed text-sm lg:text-base font-light">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Optical "Focus" Detail */}
                                    <div className="absolute bottom-8 right-8 w-12 h-12 opacity-[0.05] group-hover:opacity-100 transition-all duration-700">
                                        <div className="absolute inset-0 rounded-full border border-red-brand" />
                                        <div className="absolute top-1/2 left-0 w-full h-px bg-red-brand" />
                                        <div className="absolute left-1/2 top-0 w-px h-full bg-red-brand" />
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Connector for Desktop */}
                            {index < 2 && (
                                <div className="hidden md:block absolute top-1/2 -right-8 lg:-right-12 w-16 h-px bg-gradient-to-r from-red-brand/20 to-transparent z-0" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Texture Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}
