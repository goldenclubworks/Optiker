"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { variants } from "@/lib/animations";

type ScrollRevealProps = {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    variant?: keyof typeof variants;
    delay?: number;
    duration?: number;
    once?: boolean;
    threshold?: number;
};

// Premium easing curves for ultra-smooth animations
const SMOOTH_EASING: [number, number, number, number] = [0.16, 1, 0.3, 1]; // Expo out - very satisfying
const BUTTERY_SPRING = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 0.5
};

export const ScrollReveal = ({
    children,
    width = "fit-content",
    className = "",
    variant = "slideUp",
    delay = 0,
    duration,
    once = true,
    threshold = 0.15, // Slightly lower threshold for earlier trigger
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const selectedVariant = variants[variant] as Variants;

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={selectedVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    duration: duration || 0.8, // Slower, more luxurious
                    delay: delay,
                    ease: SMOOTH_EASING,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

// Spring-based reveal for even smoother feel
export const SpringReveal = ({
    children,
    className = "",
    delay = 0,
    once = true,
    threshold = 0.15,
}: Omit<ScrollRevealProps, 'variant' | 'width' | 'duration'>) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <div ref={ref} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.98 }}
                transition={{
                    ...BUTTERY_SPRING,
                    delay: delay,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
