"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Sparkles, CircleDot, Gem, ArrowRight, ArrowDown } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { services, contact, steps } from "@/content/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// --- CUSTOM COMPONENTS FOR THIS PAGE ---

function ServiceHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center bg-black overflow-hidden pt-32 pb-20">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(189,34,34,0.15),transparent_60%)]" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="container-premium relative z-10">
                <div className="relative">
                    {/* Floating Label */}
                    <ScrollReveal variant="fadeIn">
                        <div className="flex items-center gap-4 mb-8 md:mb-16">
                            <div className="h-px w-12 bg-red-brand" />
                            <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/80">
                                Unser Handwerk
                            </span>
                        </div>
                    </ScrollReveal>

                    {/* Massive Editorial Headline */}
                    <div className="relative">
                        <ScrollReveal variant="slideUp" delay={0.1}>
                            <h1 className="text-[clamp(4rem,15vw,11rem)] leading-[0.8] font-light tracking-tighter text-white uppercase mix-blend-difference">
                                Unsere
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal variant="slideUp" delay={0.25} className="md:ml-[15vw]">
                            <h1 className="text-[clamp(4rem,15vw,11rem)] leading-[0.8] font-serif italic text-red-brand tracking-tight drop-shadow-2xl">
                                Expertise
                            </h1>
                        </ScrollReveal>
                    </div>

                    {/* Description - Asymmetric placement */}
                    <div className="mt-16 md:mt-24 ml-auto max-w-xl md:mr-[10vw]">
                        <ScrollReveal variant="fadeIn" delay={0.5}>
                            <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed text-pretty">
                                <span className="text-white font-normal">Ihre Augen. Meine Profession. </span>
                                Brillenglasbestimmung in einer neuen Dimension.
                                Sehanalyse. Sehgewohnheiten und Bedürfnisse analysieren. Ich berate, Sie entscheiden.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-12 hidden md:flex flex-col items-center gap-4 mix-blend-difference z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-widest text-white/50 writing-mode-vertical">Scrollen</span>
                <div className="h-16 w-px bg-white/20 overflow-hidden">
                    <motion.div
                        className="h-1/2 w-full bg-red-brand"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

function ProcessStep({ step, index }: { step: typeof steps[number], index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className={cn(
            "relative flex flex-col md:flex-row gap-8 md:gap-24 py-16 md:py-24 border-t border-black/5 last:border-b",
            isEven ? "md:flex-row" : "md:flex-row-reverse"
        )}>
            <div className="md:w-1/3 flex flex-col justify-start">
                <span className="text-[clamp(4rem,8vw,6rem)] font-black text-black/5 leading-none -mb-4 md:-mb-8 select-none">
                    0{index + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground uppercase mt-4">
                    {step.title}
                </h3>
            </div>
            <div className="md:w-2/3 pt-6 md:pt-12">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                    {step.description}
                </p>
            </div>
        </div>
    );
}

function AsymmetricService({ service, index }: { service: any, index: number }) {
    const isEven = index % 2 === 0;
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Parallax logic
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    const iconMap = {
        Eye, Sparkles, CircleDot, Gem,
    } as const;
    const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles;

    // Standardized high-quality images map to ensure visual impact
    const imageMap = [
        "/images/service-test.png",     // 1. Refraktion/Device
        "/images/service-style.png",    // 2. Style/Fitting
        "/images/service-lenses.png",   // 3. Lenses
        "/images/service-workshop.png"  // 4. Workshop/Detail
    ];
    const imageSrc = imageMap[index] || "/images/service-test.png";

    return (
        <section ref={targetRef} id={service.id} className="relative py-24 md:py-48 overflow-hidden bg-background">
            <div className="container-premium relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* TEXT COLUMN */}
                    <div className={cn(
                        "lg:col-span-5 flex flex-col relative z-20",
                        isEven ? "lg:order-1" : "lg:order-2 lg:pl-12"
                    )}>
                        <motion.div style={{ y: yText }}>
                            {/* Eyebrow */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-10 w-10 rounded-full border border-red-brand/20 flex items-center justify-center bg-red-brand/5 text-red-brand">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-bold tracking-[0.3em] uppercase text-red-brand">
                                    Service 0{index + 1}
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground leading-[1] mb-8">
                                {service.title.split(" – ")[0]}<br />
                                <span className="font-serif italic text-muted-foreground">{service.title.split(" – ")[1]}</span>
                            </h2>

                            {/* Description */}
                            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
                                {service.description}
                            </p>

                            {/* Benefits List - Editorial Style */}
                            <ul className="space-y-4 mb-12 border-l border-red-brand/20 pl-6">
                                {service.benefits.map((benefit: string, i: number) => (
                                    <li key={i} className="text-sm font-medium uppercase tracking-wider text-foreground/80">
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <MagneticButton className="w-fit bg-foreground text-background hover:bg-red-brand hover:text-white border-0 transition-colors px-10 py-4 rounded-full">
                                <Link
                                    href={contact.bookingUrl}
                                    className="text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3"
                                >
                                    Termin Buchen <ArrowRight className="h-4 w-4" />
                                </Link>
                            </MagneticButton>
                        </motion.div>
                    </div>

                    {/* IMAGE COLUMN - ASYMMETRIC */}
                    <div className={cn(
                        "lg:col-span-7 relative",
                        isEven ? "lg:order-2" : "lg:order-1"
                    )}>
                        <div className={cn(
                            "relative aspect-[4/5] w-full overflow-hidden shadow-2xl",
                            isEven ? "rounded-tl-[100px] rounded-br-[40px]" : "rounded-tr-[100px] rounded-bl-[40px]"
                        )}>
                            <motion.div style={{ y: yImage, scale: 1.1 }} className="absolute inset-0 h-[120%] w-full">
                                <Image
                                    src={imageSrc}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply" />

                            {/* Floating Detail Badge */}
                            <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 max-w-[200px] hidden md:block">
                                <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1 opacity-80">
                                    Highlight
                                </p>
                                <p className="text-sm font-medium text-white italic leading-tight">
                                    "{service.shortDescription}"
                                </p>
                            </div>
                        </div>

                        {/* Decorative Elements around image */}
                        <div className="absolute -z-10 -top-12 -left-12 w-full h-full border border-black/5 rounded-[40px] hidden lg:block" />
                        <div className="absolute -z-10 -bottom-12 -right-12 w-32 h-32 bg-red-brand/5 rounded-full blur-3xl hidden lg:block" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function LeistungenPage() {
    return (
        <>
            <Header />
            <main className="bg-background selection:bg-red-brand/20">
                <ServiceHero />

                {/* Intro Text / Philosophy */}
                <section className="py-24 md:py-32 bg-[#faf9f6]">
                    <div className="container-premium">
                        <div className="max-w-3xl mx-auto text-center space-y-8">
                            <span className="text-xs font-bold text-red-brand uppercase tracking-[0.4em]">
                                Unsere Philosophie
                            </span>
                            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
                                "Wir glauben daran, dass perfektes Sehen kein Zufall ist, sondern das Ergebnis von <span className="italic font-serif text-red-brand">Zeit, Technik & Leidenschaft</span>."
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Main Services Flow */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <AsymmetricService key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* The Process */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="container-premium">
                        <div className="mb-24 md:mb-32">
                            <h2 className="text-[clamp(3rem,8vw,6rem)] font-light tracking-tighter leading-[0.9] mb-6">
                                Der Weg zur <br />
                                <span className="text-red-brand font-serif italic">Perfektion</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-md ml-2 md:ml-4 border-l-2 border-red-brand/20 pl-6">
                                Ein transparenter Prozess für ein Ergebnis, das Sie überzeugen wird.
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            {steps.map((step, i) => (
                                <ScrollReveal key={i} variant="slideUp" delay={i * 0.1}>
                                    <ProcessStep step={step} index={i} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Connection */}
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}
