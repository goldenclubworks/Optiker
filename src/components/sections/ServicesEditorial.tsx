"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

// Reusable ExpertiseCard Component
function ExpertiseCard({
    index,
    title,
    description,
    href,
    imageSrc,
    imageAlt,
}: {
    index: number;
    title: string;
    description: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
}) {
    const [mainTitle, subTitle] = title.split(" – ");

    return (
        <article className="group relative flex flex-col h-full">
            {/* CLEAN PREAMBLE (Above Image) */}
            <div className="flex items-start justify-between mb-8 px-2">
                <div className="space-y-1">
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-red-brand block">
                        ({index + 1 < 10 ? `0${index + 1}` : index + 1})
                    </span>
                    <p className="text-[11px] md:text-xs text-muted-foreground/60 font-medium uppercase tracking-widest max-w-[200px]">
                        {description}
                    </p>
                </div>
            </div>

            {/* MEDIA BOX */}
            <div className="relative mt-auto">
                {/* Image Container with overflow hidden to clip the image zoom, but not the notch */}
                <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-muted shadow-sm group-hover:shadow-xl transition-all duration-700">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* SMART NOTCH: TITLE & CTA INTEGRATION - Now safe from parent overflow */}
                <div className="absolute -bottom-2 -right-2 bg-[#faf9f6] p-8 md:p-12 rounded-tl-[3.5rem] md:rounded-tl-[4.5rem] z-30 border-t border-l border-[#faf9f6]/20 min-w-[75%] md:min-w-[55%] shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)]">
                    {/* Inverted corner fillers */}
                    <div className="absolute -top-[3.5rem] right-2 w-[3.5rem] h-[3.5rem] bg-transparent pointer-events-none hidden md:block overflow-hidden">
                        <div className="w-full h-full rounded-br-[3.5rem] shadow-[30px_30px_0_30px_#faf9f6]" />
                    </div>
                    <div className="absolute bottom-2 -left-[3.5rem] w-[3.5rem] h-[3.5rem] bg-transparent pointer-events-none hidden md:block overflow-hidden">
                        <div className="w-full h-full rounded-br-[3.5rem] shadow-[30px_30px_0_30px_#faf9f6]" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="space-y-1">
                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-none">
                                {mainTitle}
                            </h3>
                            {subTitle && (
                                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 block">
                                    {subTitle}
                                </span>
                            )}
                        </div>

                        <Link
                            href={href}
                            className="flex items-center gap-4 mt-2 group/cta focus-ring w-fit"
                        >
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-red-brand group-hover/cta:text-foreground transition-colors duration-300 whitespace-nowrap">
                                Jetzt Entdecken
                            </span>
                            <div className="flex items-center">
                                <motion.div
                                    className="h-[1px] bg-red-brand/30"
                                    initial={{ width: 30 }}
                                    whileHover={{ width: 60 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ width: 30 }}
                                />
                                <div className="ml-2">
                                    <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4 text-red-brand group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1 transition-transform duration-500" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export function ServicesEditorial() {
    const serviceImages = [
        "/images/service-test.png",
        "/images/service-style.png",
        "/images/service-lenses.png",
        "/images/service-workshop.png",
    ];

    return (
        <section className="relative bg-[#faf9f6] py-20 md:py-32 lg:py-48 overflow-hidden">
            <div className="container-premium">
                {/* Asymmetric Header Section */}
                <div className="mb-32 md:mb-48 relative">
                    <ScrollReveal variant="fadeIn">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                            <div className="max-w-2xl relative">
                                <span className="text-xs font-bold tracking-[0.5em] uppercase text-red-brand mb-6 block">
                                    Präzision trifft Ästhetik
                                </span>
                                <h2 className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.85]">
                                    Unsere <br />
                                    <span className="font-serif italic text-red-brand ml-[0.5em] md:ml-[1em]">Expertise</span>
                                </h2>

                                {/* Asymmetric helper text */}
                                <p className="mt-12 text-sm md:text-base text-muted-foreground max-w-sm ml-auto md:mr-24 leading-relaxed italic">
                                    "Handwerkskunst, die man nicht nur sieht, sondern fühlt. Für den perfekten Augenblick."
                                </p>
                            </div>

                            <div className="hidden md:flex flex-col items-end gap-2 pr-8">
                                <div className="h-px w-24 bg-red-brand/30 mb-4" />
                                <span className="text-[10px] tabular-nums font-bold tracking-[0.3em] uppercase text-muted-foreground/40">
                                    Optik & Stil
                                </span>
                                <span className="text-xs font-bold tracking-[0.3em] uppercase text-red-brand">
                                    Kollektion 2026
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Staggered, Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 md:gap-y-48 lg:gap-y-64 md:gap-x-16 lg:gap-x-32">
                    {services.map((service, index) => {
                        // Define asymmetric offsets for a more professional, broken-grid look
                        const isEven = index % 2 === 0;
                        const offsetClass = isEven ? "md:translate-y-0" : "md:translate-y-32 lg:translate-y-48";

                        return (
                            <ScrollReveal
                                key={service.id}
                                variant="slideUp"
                                delay={index * 0.15}
                                width="100%"
                                className={offsetClass}
                            >
                                <div className={isEven ? "md:pr-12" : "md:pl-12"}>
                                    <ExpertiseCard
                                        index={index}
                                        title={service.title}
                                        description={service.shortDescription}
                                        href={service.href}
                                        imageSrc={serviceImages[index] || "/images/service-test.png"}
                                        imageAlt={service.title}
                                    />
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-brand/5 to-transparent -rotate-12 pointer-events-none" />
        </section>
    );
}

