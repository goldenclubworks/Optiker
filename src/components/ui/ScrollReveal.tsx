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

export const ScrollReveal = ({
    children,
    width = "fit-content",
    className = "",
    variant = "slideUp",
    delay = 0,
    duration,
    once = true,
    threshold = 0.2,
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const selectedVariant = variants[variant] as Variants;

    return (
        <div ref={ref} style={{ width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={selectedVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    duration: duration || 0.5,
                    delay: delay,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
