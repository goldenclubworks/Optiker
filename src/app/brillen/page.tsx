"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

// =============================================================================
// BRILLEN PAGE – "EDITORIAL EYEWEAR"
// Inspired by: Apple product pages, Céline, Miu Miu, Awwwards winners
// =============================================================================

// --- EDITORIAL HERO ---
// Massive type, dramatic imagery, minimal clutter
function EditorialHero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-[100vh] bg-black overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/hero-stunning.jpg"
                    alt="Brillenkollektion"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 lg:px-20"
            >
                <div className="max-w-7xl mx-auto w-full">
                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xs font-bold tracking-[0.4em] uppercase text-white/60 mb-6"
                    >
                        Brillen & Stilberatung
                    </motion.p>

                    {/* Massive Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(3rem,12vw,10rem)] leading-[0.85] font-light tracking-[-0.03em] text-white"
                    >
                        Ihr Gesicht.
                        <br />
                        <span className="font-serif italic text-red-brand">Meine Inspiration.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-8 text-lg md:text-xl text-white/70 max-w-xl font-light"
                    >
                        Markant. Sportlich. Elegant. Eine Brille ist Ihr wichtigstes Accessoire.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="mt-10"
                    >
                        <MagneticButton strength={15}>
                            <Link
                                href="/termin"
                                className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide hover:bg-red-brand hover:text-white transition-colors duration-300"
                            >
                                Beratungstermin
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-5 h-5 text-white" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

// --- PHILOSOPHY STATEMENT ---
// Large type, centered, creates breathing room
function PhilosophySection() {
    return (
        <section className="py-32 md:py-48 bg-white">
            <div className="container-premium">
                <ScrollReveal>
                    <p className="text-center text-2xl md:text-4xl lg:text-5xl font-light leading-[1.3] tracking-tight max-w-5xl mx-auto text-balance">
                        <span className="text-black">Sie wählen.</span>
                        {" "}
                        <span className="text-muted-foreground">Ich berate. </span>
                        <span className="text-black">Ich suche, was Sie haben wollen.</span>
                        {" "}
                        <span className="font-serif italic text-red-brand">Ihre neue Brille – ein sichtbares Stilelement.</span>
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}

// --- DUAL IMAGE SECTION ---
// Editorial layout: two images side by side with text
function DualImageSection() {
    return (
        <section className="py-20 md:py-32 bg-stone-50">
            <div className="container-premium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Left Image - Tall */}
                    <ScrollReveal delay={0.1}>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/lookbook-1.jpg"
                                alt="Brillenstil"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white text-sm font-bold tracking-wider uppercase">Acetat-Kollektion</p>
                                <p className="text-white/70 text-xs mt-1">Farbe & Tiefe</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Image - Tall */}
                    <ScrollReveal delay={0.2}>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/lookbook-2.jpg"
                                alt="Brillenstil"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white text-sm font-bold tracking-wider uppercase">Titan-Kollektion</p>
                                <p className="text-white/70 text-xs mt-1">Leichtigkeit pur</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

// --- MATERIAL SHOWCASE ---
// Three columns with large numbers and descriptions
function MaterialShowcase() {
    const materials = [
        {
            number: "01",
            name: "Acetat",
            origin: "Italien",
            desc: "Baumwollbasiert, hautfreundlich und unendlich wandelbar. Brillanz und Farbtiefe in jedem Stück."
        },
        {
            number: "02",
            name: "Titan",
            origin: "Japan",
            desc: "Federleicht, korrosionsfrei, antiallergen. Für Puristen, die keine Kompromisse machen."
        },
        {
            number: "03",
            name: "Horn",
            origin: "Afrika",
            desc: "Jede Maserung ein Fingerabdruck der Natur. Warm, lebendig und exklusiv gefertigt."
        }
    ];

    return (
        <section className="py-32 md:py-48 bg-black text-white">
            <div className="container-premium">
                {/* Header */}
                <div className="mb-20 md:mb-32">
                    <ScrollReveal>
                        <p className="text-xs font-bold tracking-[0.4em] uppercase text-red-brand mb-4">
                            Materialien
                        </p>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.9]">
                            Nur das Beste
                            <br />
                            <span className="font-serif italic text-white/50">berührt Ihre Haut</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {materials.map((mat, i) => (
                        <ScrollReveal key={i} delay={i * 0.15}>
                            <div className="group border-t border-white/20 pt-8">
                                <span className="text-6xl md:text-8xl font-extralight text-white/10 group-hover:text-red-brand/30 transition-colors duration-500">
                                    {mat.number}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-2 group-hover:text-red-brand transition-colors">
                                    {mat.name}
                                </h3>
                                <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
                                    {mat.origin}
                                </p>
                                <p className="text-white/60 leading-relaxed">
                                    {mat.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- CONSULTATION PROCESS ---
// Split layout: image left, steps right
function ConsultationSection() {
    const steps = [
        { title: "Ankommen", desc: "Fühlen Sie sich wohl. Seien Sie unser Gast. Wir nehmen uns Zeit." },
        { title: "Verstehen", desc: "Sehanalyse mit Visionix 120. Ihre Gewohnheiten und Bedürfnisse." },
        { title: "Finden", desc: "Gesichtsform, Proportionen, Teint. Ich suche, was zu Ihnen passt." },
        { title: "Vollenden", desc: "Präzise Anpassung. Perfekter Sitz. Fertig für Sie." }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container-premium">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image */}
                    <ScrollReveal>
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                            <Image
                                src="/images/styling-consult.jpg"
                                alt="Beratung"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScrollReveal>

                    {/* Steps */}
                    <div>
                        <ScrollReveal>
                            <p className="text-xs font-bold tracking-[0.4em] uppercase text-red-brand mb-4">
                                Der Weg
                            </p>
                            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[0.95] mb-16">
                                Ich berate.
                                <br />
                                <span className="font-serif italic text-muted-foreground">Sie entscheiden.</span>
                            </h2>
                        </ScrollReveal>

                        <div className="space-y-10">
                            {steps.map((step, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="flex gap-6 group cursor-default">
                                        <span className="text-3xl font-light text-stone-300 group-hover:text-red-brand transition-colors">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-red-brand transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground">{step.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal delay={0.5}>
                            <div className="mt-14">
                                <MagneticButton strength={12}>
                                    <Link
                                        href="/termin"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-sm font-bold tracking-wide hover:bg-red-brand transition-colors"
                                    >
                                        Termin vereinbaren
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </MagneticButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- FULL BLEED IMAGE ---
// Creates rhythm, breathing room
function FullBleedImage() {
    return (
        <section className="relative h-[60vh] md:h-[80vh]">
            <Image
                src="/images/frames-closeup.jpg"
                alt="Brillendetail"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <ScrollReveal>
                    <p className="text-white text-center text-2xl md:text-4xl font-serif italic max-w-2xl px-8">
                        "Eine Brille ist ein Statement."
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}

// --- GUARANTEE STRIP ---
function GuaranteeStrip() {
    return (
        <section className="py-12 bg-red-brand text-white">
            <div className="container-premium">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <p className="text-xl md:text-2xl font-light">
                        <span className="font-bold">24 Monate Garantie.</span>
                        {" "}12 Monate Verträglichkeitsgarantie auf SEIKO Gläser.
                    </p>
                    <Link
                        href="/leistungen"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-brand rounded-full text-sm font-bold hover:bg-black hover:text-white transition-colors whitespace-nowrap"
                    >
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

// =============================================================================
// PAGE EXPORT
// =============================================================================

export default function BrillenPage() {
    return (
        <>
            <Header />
            <main className="bg-white selection:bg-red-brand/20">
                <EditorialHero />
                <PhilosophySection />
                <DualImageSection />
                <MaterialShowcase />
                <ConsultationSection />
                <FullBleedImage />
                <GuaranteeStrip />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}
