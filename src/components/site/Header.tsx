"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, navigation, contact } from "@/content/site";
import { cn } from "@/lib/utils";

// Pages that have light backgrounds
const LIGHT_PAGES = ["/impressum", "/datenschutz"];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

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

    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = useCallback(() => {
        if (!ticking.current) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const previous = lastScrollY.current;

                // Hide header when scrolling down past 400px
                if (currentScrollY > previous && currentScrollY > 400) {
                    setHidden(true);
                } else if (currentScrollY < previous) {
                    setHidden(false);
                }

                // Show solid background after 50px scroll
                setScrolled(currentScrollY > 50);

                lastScrollY.current = currentScrollY;
                ticking.current = false;
            });
            ticking.current = true;
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Consistent colors - don't change based on scroll for stability
    const headerBg = scrolled
        ? "bg-black/95 backdrop-blur-xl border-b border-white/10 py-3"
        : isLightPage
            ? "bg-white/80 backdrop-blur-sm border-b border-black/5 py-5"
            : "bg-transparent py-5";

    const textColor = scrolled || !isLightPage ? "text-white" : "text-black";
    const textMuted = scrolled || !isLightPage ? "text-white/70" : "text-black/70";

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                headerBg,
                hidden && !isOpen && "-translate-y-full"
            )}
        >
            <div className="container-premium">
                <nav className="flex items-center justify-between">
                    {/* Logo & Brand */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2 relative z-[60]"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className={cn(
                            "text-lg md:text-xl font-bold tracking-widest uppercase transition-colors",
                            isOpen ? "text-white" : textColor
                        )}>
                            {siteConfig.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={cn(
                        "hidden md:flex items-center gap-10 rounded-full border px-8 py-2.5 transition-all",
                        scrolled
                            ? "border-white/10 bg-white/5 backdrop-blur-sm"
                            : isLightPage
                                ? "border-black/10 bg-black/5"
                                : "border-white/10 bg-white/5 backdrop-blur-sm"
                    )}>
                        {navigation.main.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors group",
                                    textMuted,
                                    "hover:text-red-brand"
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
                                textMuted
                            )}
                        >
                            <Phone className="h-4 w-4" />
                            {contact.phoneDisplay}
                        </Link>

                        <Button
                            asChild
                            className="bg-red-brand hover:bg-white text-white hover:text-black rounded-full px-6 py-2.5 transition-all duration-300 font-bold tracking-widest uppercase text-[10px]"
                        >
                            <Link href="/termin">Termin</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "md:hidden relative z-[60] p-2 transition-colors",
                            isOpen ? "text-white" : textColor
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-7 w-7" />
                        ) : (
                            <Menu className="h-7 w-7" />
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay - Simplified Animation */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center md:hidden"
                    >
                        {/* Navigation Links */}
                        <nav className="flex flex-col items-center gap-6">
                            {navigation.main.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.2 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-light tracking-tight text-white hover:text-red-brand transition-colors uppercase"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center gap-4 mt-12 px-8 w-full max-w-xs"
                        >
                            <Button
                                size="lg"
                                className="w-full h-14 rounded-full bg-red-brand text-white hover:bg-white hover:text-black text-sm font-bold tracking-wide uppercase"
                                asChild
                            >
                                <Link href="/termin" onClick={() => setIsOpen(false)}>
                                    Termin Buchen
                                </Link>
                            </Button>
                            <Link
                                href={`tel:${contact.phone}`}
                                onClick={() => setIsOpen(false)}
                                className="text-white/60 hover:text-red-brand transition-colors text-sm tracking-wide"
                            >
                                {contact.phoneDisplay}
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
