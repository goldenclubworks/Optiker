"use client";

import Link from "next/link";
import { siteConfig, navigation, contact } from "@/content/site";
import { ArrowUpRight, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, MoveUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden border-t border-white/10">
            <div className="container-premium relative z-10">

                {/* 1. MEGA HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-[clamp(3rem,12vw,9rem)] font-editorial text-white leading-[0.8] tracking-tighter mb-8">
                            Klarblick.
                        </h2>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-lg">
                            Erleben Sie den Unterschied von präziser Handwerkskunst und ästhetischer Perfektion.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <Button
                            onClick={scrollToTop}
                            size="icon"
                            className="h-20 w-20 rounded-full bg-white/5 hover:bg-red-brand hover:text-white border border-white/10 transition-all duration-500 shadow-2xl"
                        >
                            <MoveUp className="h-8 w-8" />
                        </Button>
                        <span className="text-xs uppercase tracking-widest text-white/40 text-center">Top</span>
                    </div>
                </div>

                {/* 2. GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 border-t border-white/10 pt-16 mb-24">

                    {/* Brand & Address */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{siteConfig.name}</h3>
                            <p className="text-white/50 text-sm tracking-wide uppercase">Premium Optik</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 text-white/70 hover:text-red-brand transition-colors">
                                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                                <p className="leading-relaxed">
                                    {contact.address.street}<br />
                                    {contact.address.zip} {contact.address.city}
                                </p>
                            </div>
                            <Link href={`tel:${contact.phone}`} className="flex items-center gap-4 text-white/70 hover:text-red-brand transition-colors">
                                <Phone className="h-5 w-5 shrink-0" />
                                <span>{contact.phoneDisplay}</span>
                            </Link>
                            <Link href={`mailto:${contact.email}`} className="flex items-center gap-4 text-white/70 hover:text-red-brand transition-colors">
                                <Mail className="h-5 w-5 shrink-0" />
                                <span>{contact.email}</span>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-red-brand font-bold">Navigation</h4>
                        <ul className="space-y-4">
                            {navigation.main.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="group flex items-center gap-2 text-xl text-white/80 hover:text-white transition-colors">
                                        <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-brand" />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-8">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-red-brand font-bold">Rechtliches</h4>
                        <ul className="space-y-4">
                            {navigation.legal.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-lg text-white/60 hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials & Hours */}
                    <div className="space-y-8">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-red-brand font-bold">Social & Zeit</h4>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-red-brand hover:text-white hover:border-red-brand transition-all duration-300">
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-white/60 text-sm leading-relaxed">
                                <span className="block text-white mb-1">Öffnungszeiten:</span>
                                Mo - Fr: 09:00 - 18:00<br />
                                Sa: 10:00 - 14:00
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. BOTTOM BAR */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <p className="text-xs text-white/30 uppercase tracking-widest">
                        © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
                    </p>
                    <p className="text-xs text-white/30 uppercase tracking-widest hover:text-white/60 transition-colors cursor-pointer">
                        Mit Präzision gestaltet
                    </p>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-red-brand/5 to-transparent pointer-events-none" />
        </footer>
    );
}
