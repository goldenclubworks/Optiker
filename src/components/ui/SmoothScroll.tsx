"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

// =============================================================================
// SMOOTH SCROLL PROVIDER
// Uses requestAnimationFrame for buttery-smooth scroll-linked animations
// =============================================================================

interface SmoothScrollProviderProps {
    children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    // Create smooth scroll progress
    const { scrollYProgress } = useScroll();

    // Apply spring physics for ultra-smooth feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return <>{children}</>;
}

// =============================================================================
// USE SMOOTH SCROLL PROGRESS HOOK
// Returns a smoothed scroll progress value (0-1) for use in components
// =============================================================================

export function useSmoothScrollProgress() {
    const { scrollYProgress } = useScroll();

    return useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
}

// =============================================================================
// USE PARALLAX HOOK  
// Creates smooth parallax effect based on scroll position
// =============================================================================

interface ParallaxOptions {
    offset?: [string, string];
    speed?: number;
}

export function useParallax(
    ref: React.RefObject<HTMLElement | null>,
    options: ParallaxOptions = {}
) {
    const { offset = ["start end", "end start"], speed = 0.5 } = options;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset as any
    });

    // Apply spring for smoothness
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform to Y offset
    const y = useTransform(smoothProgress, [0, 1], [100 * speed, -100 * speed]);

    return { y, progress: smoothProgress };
}

// =============================================================================
// SMOOTH SCROLL TO ELEMENT
// Programmatic smooth scroll with easing
// =============================================================================

export function smoothScrollTo(elementId: string, offset: number = 0) {
    const element = document.getElementById(elementId);
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    }
}

export function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
