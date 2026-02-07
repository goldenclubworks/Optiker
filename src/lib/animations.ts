import type { Variants, Transition } from "framer-motion";

export const transitions = {
    spring: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
    },
    smooth: {
        type: "tween" as const,
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.5,
    },
    slow: {
        type: "tween" as const,
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.8,
    },
} satisfies Record<string, Transition>;

export const variants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: transitions.smooth,
        },
    },
    slideUp: {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: transitions.smooth,
        },
    },
    slideDown: {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: transitions.smooth,
        },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: transitions.spring,
        },
    },
    staggerContainer: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
    staggerContainerSlow: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    },
} satisfies Record<string, Variants>;
