"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    type?: "word" | "char";
}

export const TextReveal = ({
    text,
    className,
    delay = 0,
    duration = 0.5,
    type = "word",
}: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const items = type === "word" ? text.split(" ") : text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
                duration: duration,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.span
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn("inline-block", className)}
            style={{ display: "inline-block" }} // Ensure inline-block for proper spacing if needed
        >
            {items.map((item, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="inline-block"
                    style={{ marginRight: type === "word" ? "0.25em" : "0" }}
                >
                    {item === " " ? "\u00A0" : item}
                </motion.span>
            ))}
        </motion.span>
    );
};
