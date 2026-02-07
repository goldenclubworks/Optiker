"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, Clock, ExternalLink, Send, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { contact, openingHours, siteConfig } from "@/content/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function KontaktPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-[#050505]">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-red-brand/50" />
                        <div className="absolute top-40 right-40 w-1 h-1 rounded-full bg-red-brand/30" />
                        <div className="absolute bottom-32 left-32 w-3 h-3 rounded-full bg-red-brand/20" />
                        <motion.div
                            className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full border border-red-brand/10"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    <div className="container-premium relative z-10">
                        <ScrollReveal variant="fadeIn">
                            <div className="flex items-center gap-3 mb-6">
                                <MessageCircle className="h-5 w-5 text-red-brand" />
                                <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-red-brand">
                                    Kontakt
                                </span>
                            </div>
                        </ScrollReveal>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
                            Wir freuen uns auf <span className="font-serif italic text-red-brand">Sie</span>
                        </h1>
                        <p className="mt-6 md:mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
                            Persönlich. Verbindlich. In der Dresdner Altstadt erwarten wir Sie
                            mit offenen Türen und einem Espresso.
                        </p>
                    </div>

                    {/* Decorative Gold Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-brand/50 to-transparent" />
                </section>

                {/* Content */}
                <section className="py-16 md:py-24 lg:py-32 bg-background">
                    <div className="container-premium">
                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <ScrollReveal variant="slideUp">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2">
                                            So erreichen Sie uns
                                        </h2>
                                        <p className="text-muted-foreground">
                                            Rufen Sie an, schreiben Sie uns oder kommen Sie vorbei.
                                        </p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal variant="slideUp" delay={0.1}>
                                    <div className="space-y-4">
                                        {/* Phone Card */}
                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="group flex items-center gap-5 rounded-2xl border border-border/40 p-5 transition-all duration-300 hover:border-red-brand/50 hover:bg-red-brand/5 hover:shadow-lg hover:shadow-red-brand/5"
                                        >
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-brand/10 border border-red-brand/20 group-hover:bg-red-brand/20 transition-colors">
                                                <Phone className="h-6 w-6 text-red-brand" />
                                            </div>
                                            <div className="flex-grow">
                                                <p className="font-medium text-foreground group-hover:text-red-brand transition-colors">Telefon</p>
                                                <p className="text-lg text-muted-foreground font-light">
                                                    {contact.phoneDisplay}
                                                </p>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-red-brand group-hover:translate-x-1 transition-all" />
                                        </a>

                                        {/* Email Card */}
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="group flex items-center gap-5 rounded-2xl border border-border/40 p-5 transition-all duration-300 hover:border-red-brand/50 hover:bg-red-brand/5 hover:shadow-lg hover:shadow-red-brand/5"
                                        >
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-brand/10 border border-red-brand/20 group-hover:bg-red-brand/20 transition-colors">
                                                <Mail className="h-6 w-6 text-red-brand" />
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <p className="font-medium text-foreground group-hover:text-red-brand transition-colors">E-Mail</p>
                                                <p className="text-muted-foreground font-light truncate">
                                                    {contact.email}
                                                </p>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-red-brand group-hover:translate-x-1 transition-all" />
                                        </a>

                                        {/* Address Card */}
                                        <a
                                            href={contact.googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-5 rounded-2xl border border-border/40 p-5 transition-all duration-300 hover:border-red-brand/50 hover:bg-red-brand/5 hover:shadow-lg hover:shadow-red-brand/5"
                                        >
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-brand/10 border border-red-brand/20 group-hover:bg-red-brand/20 transition-colors">
                                                <MapPin className="h-6 w-6 text-red-brand" />
                                            </div>
                                            <div className="flex-grow">
                                                <p className="font-medium text-foreground group-hover:text-red-brand transition-colors">Adresse</p>
                                                <p className="text-muted-foreground font-light">
                                                    {contact.address.street}<br />
                                                    <span className="text-sm italic">{contact.address.building}</span><br />
                                                    {contact.address.zip} {contact.address.city}
                                                </p>
                                            </div>
                                            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-red-brand transition-colors shrink-0" />
                                        </a>
                                    </div>
                                </ScrollReveal>

                                {/* Opening Hours */}
                                <ScrollReveal variant="slideUp" delay={0.2}>
                                    <Card className="border-border/40 bg-muted/30 overflow-hidden">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="h-10 w-10 rounded-lg bg-red-brand/10 border border-red-brand/20 flex items-center justify-center">
                                                    <Clock className="h-5 w-5 text-red-brand" />
                                                </div>
                                                <h3 className="font-medium text-lg">Öffnungszeiten</h3>
                                            </div>
                                            <div className="space-y-3">
                                                {openingHours.map((item) => (
                                                    <div
                                                        key={item.day}
                                                        className={`flex justify-between text-sm py-2 border-b border-border/20 last:border-0 ${item.hours === "Geschlossen" ? "text-muted-foreground" : ""}`}
                                                    >
                                                        <span className="text-muted-foreground">
                                                            {item.day}
                                                        </span>
                                                        <span className={`tabular-nums font-medium ${item.hours === "Geschlossen" ? "text-muted-foreground" : "text-foreground"}`}>
                                                            {item.hours}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-6 text-xs text-muted-foreground italic">
                                                Mittwoch geschlossen für individuelle Beratungstermine
                                            </p>
                                        </CardContent>
                                    </Card>
                                </ScrollReveal>

                                {/* Directions */}
                                <ScrollReveal variant="slideUp" delay={0.3}>
                                    <div className="p-6 rounded-2xl border border-border/40 bg-gradient-to-br from-red-brand/5 to-transparent">
                                        <h3 className="font-medium text-lg mb-3">Anfahrt & Parken</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Im Herzen der Dresdner Altstadt, direkt am Kulturpalast.
                                            Gut erreichbar mit öffentlichen Verkehrsmitteln (Haltestelle Altmarkt).
                                            Parkmöglichkeiten in der Tiefgarage Kulturpalast.
                                        </p>
                                        <Button variant="outline" asChild className="mt-4 rounded-full border-red-brand/30 hover:border-red-brand hover:bg-red-brand/10">
                                            <Link
                                                href={contact.googleMapsUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="gap-2"
                                            >
                                                <MapPin className="h-4 w-4" />
                                                Route planen
                                            </Link>
                                        </Button>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* Contact Form */}
                            <div className="space-y-6">
                                <ScrollReveal variant="slideUp" delay={0.1}>
                                    <Card className="border-border/40 overflow-hidden">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Send className="h-5 w-5 text-red-brand" />
                                                <h2 className="text-xl font-medium">
                                                    Schreiben Sie uns
                                                </h2>
                                            </div>
                                            <p className="text-muted-foreground text-sm mb-8">
                                                Wir melden uns so schnell wie möglich bei Ihnen.
                                            </p>

                                            <form className="space-y-5">
                                                <div className="grid gap-5 md:grid-cols-2">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="contact-name" className="text-sm font-medium">Name</Label>
                                                        <Input
                                                            id="contact-name"
                                                            placeholder="Ihr Name"
                                                            className="border-border/50 focus:border-red-brand/50 rounded-xl h-12"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="contact-phone" className="text-sm font-medium">Telefon <span className="text-muted-foreground font-normal">(optional)</span></Label>
                                                        <Input
                                                            id="contact-phone"
                                                            type="tel"
                                                            placeholder="Ihre Telefonnummer"
                                                            className="border-border/50 focus:border-red-brand/50 rounded-xl h-12"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="contact-email" className="text-sm font-medium">E-Mail</Label>
                                                    <Input
                                                        id="contact-email"
                                                        type="email"
                                                        placeholder="ihre@email.de"
                                                        className="border-border/50 focus:border-red-brand/50 rounded-xl h-12"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="contact-subject" className="text-sm font-medium">Betreff</Label>
                                                    <Input
                                                        id="contact-subject"
                                                        placeholder="Worum geht es?"
                                                        className="border-border/50 focus:border-red-brand/50 rounded-xl h-12"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="contact-message" className="text-sm font-medium">Nachricht</Label>
                                                    <Textarea
                                                        id="contact-message"
                                                        placeholder="Ihre Nachricht an uns..."
                                                        rows={5}
                                                        className="border-border/50 focus:border-red-brand/50 rounded-xl resize-none"
                                                    />
                                                </div>

                                                <Button type="submit" className="w-full h-12 bg-red-brand text-white hover:bg-red-brand/90 rounded-xl font-medium">
                                                    <Send className="h-4 w-4 mr-2" />
                                                    Nachricht senden
                                                </Button>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </ScrollReveal>

                                {/* Map Placeholder */}
                                <ScrollReveal variant="slideUp" delay={0.2}>
                                    <Card className="overflow-hidden border-border/40">
                                        <div className="relative aspect-video bg-muted/50">
                                            {/* Stylized Map Placeholder */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-muted/50">
                                                {/* Decorative grid */}
                                                <div className="absolute inset-0 opacity-10">
                                                    <div className="h-full w-full" style={{
                                                        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                                                        backgroundSize: '40px 40px'
                                                    }} />
                                                </div>

                                                {/* Center content */}
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <div className="relative">
                                                        <div className="absolute -inset-8 rounded-full bg-red-brand/10 animate-pulse" />
                                                        <div className="relative h-14 w-14 rounded-full bg-red-brand/20 border-2 border-red-brand/50 flex items-center justify-center">
                                                            <MapPin className="h-6 w-6 text-red-brand" />
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-sm font-medium">{siteConfig.name}</p>
                                                    <p className="text-xs text-muted-foreground">{contact.address.street}, {contact.address.city}</p>
                                                    <Button variant="link" size="sm" asChild className="mt-2 text-red-brand hover:text-red-brand/80">
                                                        <Link
                                                            href={contact.googleMapsUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            In Google Maps öffnen
                                                            <ExternalLink className="h-3 w-3 ml-1" />
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </ScrollReveal>

                                {/* Personal Touch */}
                                <ScrollReveal variant="fadeIn" delay={0.3}>
                                    <div className="text-center p-6 rounded-2xl border border-red-brand/20 bg-red-brand/5">
                                        <p className="text-muted-foreground italic">
                                            &ldquo;Ich will, dass Sie Sehen erleben.&rdquo;
                                        </p>
                                        <p className="mt-2 text-sm font-medium text-red-brand">
                                            — {siteConfig.owner}, {siteConfig.ownerTitle}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
