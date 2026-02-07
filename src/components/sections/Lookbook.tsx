"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Lookbook() {
    return (
        <section className="relative bg-background py-32 overflow-hidden">
            {/* Background oversized vertical text */}
            <div className="absolute top-0 right-12 h-full opacity-5 pointer-events-none hidden lg:block vertical-text text-[15vw] font-black leading-none">
                COLLECTION
            </div>

            <div className="container-premium relative z-10 space-y-32">
                {/* Brand Intro Sticky Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="lg:sticky lg:top-32 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-red-brand" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-red-brand">
                                Exklusive Auswahl
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[0.9]">
                            Die Welt von <br /><span className="text-red-brand font-serif italic">Optik</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-md">
                            Unabhängige Manufakturen. Kompromissloses Design. Wir führen Brillen, die Charakter zeigen – genau wie Sie.
                        </p>
                        <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-red-brand hover:text-white transition-colors px-10 h-14 text-sm tracking-widest uppercase">
                            Alle Marken
                        </Button>
                    </div>

                    <div className="space-y-12">
                        {/* Editorial Card 1 */}
                        <div className="relative group">
                            {/* Dedicated image wrapper with overflow hidden */}
                            <div className="relative aspect-[3/4] overflow-hidden shape-lens-2 border-acetate">
                                <Image
                                    src="/images/lookbook-1.jpg"
                                    alt="Independent Eyewear Design"
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] scale-110 group-hover:scale-100"
                                />
                            </div>
                            {/* Positioned tag - Now safe from overflow-hidden parent */}
                            <div className="absolute bottom-8 -left-8 bg-white dark:bg-zinc-900 p-6 pr-12 shadow-2xl skew-y-2 group-hover:skew-y-0 transition-transform duration-500 z-10">
                                <p className="text-xs font-bold uppercase tracking-widest text-red-brand mb-1">Optik</p>
                                <h3 className="text-3xl font-serif italic text-foreground">Schorcht</h3>
                            </div>
                        </div>

                        {/* Shop Interior Showcase - Full Image Display */}
                        <div className="relative group lg:ml-12">
                            {/* Decorative frame inspired by eyewear aesthetics */}
                            <div className="relative bg-gradient-to-br from-zinc-100 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 p-4 md:p-6 rounded-[24px] shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50">
                                {/* Inner frame with lens-like corners */}
                                <div className="relative overflow-hidden rounded-[16px] bg-zinc-50 dark:bg-zinc-950">
                                    {/* The image container - aspect ratio that matches the collage */}
                                    <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                                        <Image
                                            src="/images/optiker innenraum.jpg"
                                            alt="Unser Geschäft in der Dresdner Altstadt"
                                            fill
                                            className="object-contain transition-transform duration-[1.5s] group-hover:scale-[1.02]"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>

                                {/* Elegant caption bar */}
                                <div className="mt-4 md:mt-6 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-red-brand/10 flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-red-brand" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-red-brand">Dresden Altstadt</p>
                                            <p className="text-sm text-muted-foreground">Unser Geschäft</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl md:text-3xl font-serif italic text-foreground">Schorcht</p>
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Optik</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative corner accents */}
                            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-brand rounded-tl-lg opacity-60" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-red-brand rounded-tr-lg opacity-60" />
                            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-red-brand rounded-bl-lg opacity-60" />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-red-brand rounded-br-lg opacity-60" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
