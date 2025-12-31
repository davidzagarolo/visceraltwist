// components/SkylineAnimation/Sun.tsx
"use client";
import { motion } from "framer-motion";
import { useWindowSize } from "@/components/WindowSize";

interface SunProps {
    className?: string;
}

export default function Sun({ className }: SunProps) {
    const { width = 1200, height = 800 } = useWindowSize();

    const startX = 0.05 * width;
    const startY = 0.9 * height;
    const endX = 0.95 * width;
    const endY = 0.9 * height;
    const controlX = 0.5 * width;
    const controlY = -0.4 * height;
    const CYCLE_DURATION = 40;
    const TRAVEL_DURATION = 20;

    const path = `M ${startX} ${startY} Q ${controlX} ${controlY}, ${endX} ${endY}`;

    return (
        <motion.div 
        className={className}  
        style={{ offsetPath: `path("${path}")`, offsetRotate: "0deg", }}
        initial={{ opacity: 0 }}
        animate={{ offsetDistance: ["0%", "100%"], opacity: [1, 1, 1, 1], }}
        transition={{ duration: TRAVEL_DURATION, ease: "linear", repeat: Infinity, repeatDelay: CYCLE_DURATION - TRAVEL_DURATION, }}
        >
            <svg viewBox="0 0 200 200" width="200" height="200" overflow="visible" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="sun-gradient" cx="100" cy="100" fx="100" fy="100" r="75.8" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#d8ff1f"/>
                <stop offset=".09" stopColor="#dcf21e"/>
                <stop offset=".51" stopColor="#efbf1e"/>
                <stop offset=".83" stopColor="#fa9f1e"/>
                <stop offset="1" stopColor="#ff931e"/>
                </radialGradient>
            </defs>
                <g id="Sun">
                    <circle cx="100" cy="100" r="75.8" style={{ fill: "url(#sun-gradient); filter: url(#sun-glow)" }} />
                </g> 
            </svg>
        </motion.div>
    );
}