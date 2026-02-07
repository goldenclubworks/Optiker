"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, navigation, contact } from "@/content/site";
import { cn } from "@/lib/utils";

// Pages that have light backgrounds
const LIGHT_PAGES = ["/impressum", "/datenschutz"];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Detect if we're on a light-background page
    const isLightPage = LIGHT_PAGES.includes(pathname);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        const previous = lastScrollY;

        // Much higher threshold for hiding (was 150, now 400)
        // Only hide when scrolling DOWN significantly
        if (latest > previous && latest > 400) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        // Show solid background after small scroll
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        setLastScrollY(latest);
    });

    // Derive colors based on page type and scroll state
    const needsDarkText = isLightPage && !scrolled;
    const textColor = needsDarkText ? "text-foreground" : "text-white";
    const textColorMuted = needsDarkText ? "text-foreground/70" : "text-white/70";
    const textColorDimmer = needsDarkText ? "text-foreground/60" : "text-white/60";

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
                    : isLightPage
                        ? "bg-white/80 backdrop-blur-sm border-b border-black/5 py-6"
                        : "bg-transparent py-6"
            )}
        >
            <div className="container-premium">
                <nav className="flex items-center justify-between">
                    {/* Logo & Brand */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2 relative z-[60]"
                    >
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-xl font-bold tracking-widest uppercase transition-colors",
                                scrolled ? "text-white" : textColor
                            )}>
                                {siteConfig.name}
                            </span>
                            <span className="text-[9px] tracking-[0.4em] text-red-brand uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                Optische Exzellenz
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={cn(
                        "hidden md:flex items-center gap-12 rounded-full border px-8 py-2 backdrop-blur-sm transition-all",
                        scrolled
                            ? "border-white/10 bg-white/5"
                            : isLightPage
                                ? "border-black/10 bg-black/5"
                                : "border-white/10 bg-white/5"
                    )}>
                        {navigation.main.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors group",
                                    scrolled ? "text-white/70 hover:text-white" : cn(textColorMuted, "hover:" + textColor)
                                )}
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-brand transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden items-center gap-6 md:flex">
                        <Link
                            href={`tel:${contact.phone}`}
                            className={cn(
                                "text-sm font-medium hover:text-red-brand transition-colors flex items-center gap-2",
                                scrolled ? "text-white/60" : textColorDimmer
                            )}
                        >
                            <Phone className="h-4 w-4" />
                            {contact.phoneDisplay}
                        </Link>

                        <Button
                            asChild
                            className="bg-red-brand hover:bg-white text-white hover:text-black border border-red-brand/20 rounded-full px-6 transition-all duration-300 font-bold tracking-widest uppercase text-[10px]"
                        >
                            <Link href="/termin">Termin</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "md:hidden relative z-[60] p-2 transition-colors",
                            isOpen ? "text-white" : scrolled ? "text-white" : textColor
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8 text-red-brand" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-50 bg-[#030303] flex flex-col items-center justify-center space-y-8 md:hidden p-6"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-red-brand/10 blur-3xl" />
                            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-red-brand/10 blur-3xl" />
                        </div>

                        <div className="flex flex-col items-center gap-8 relative z-10 w-full">
                            {navigation.main.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i + 0.1 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl font-light tracking-tighter text-white hover:text-red-brand transition-colors block"
                                    >
                                        <span className="inline-block relative uppercase italic">
                                            {item.label}
                                            {item.href === "/leistungen" && <span className="absolute -top-1 -right-4 text-[10px] text-red-brand tracking-widest font-bold not-italic">ELITE</span>}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center gap-6 mt-12 w-full max-w-xs relative z-10"
                        >
                            <div className="h-px w-20 bg-red-brand/30 mb-4" />
                            <Button size="lg" className="w-full h-16 rounded-full bg-red-brand text-white hover:bg-white hover:text-black text-lg font-bold tracking-tight uppercase" asChild>
                                <Link href="/termin" onClick={() => setIsOpen(false)}>Termin Buchen</Link>
                            </Button>
                            <Link
                                href={`tel:${contact.phone}`}
                                onClick={() => setIsOpen(false)}
                                className="text-white/60 hover:text-red-brand transition-colors flex items-center gap-2 text-sm tracking-widest uppercase font-bold"
                            >
                                <Phone className="h-4 w-4" />
                                {contact.phoneDisplay}
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
