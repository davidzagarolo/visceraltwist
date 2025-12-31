// components/SkylineAnimation/Moon.tsx
"use client";
import { motion } from "framer-motion";
import { useWindowSize } from "@/components/WindowSize";

interface MoonProps {
    className?: string;
}

export default function Moon({ className }: MoonProps) {
    const { width = 800, height = 800 } = useWindowSize();

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
        animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 0, 1, 1], }}
        transition={{ 
            offsetDistance: {
                duration: TRAVEL_DURATION, 
                ease: "linear", 
                repeat: Infinity, 
                repeatDelay: CYCLE_DURATION - TRAVEL_DURATION, 
                delay: CYCLE_DURATION - TRAVEL_DURATION, 
            },
            opacity: {
                duration: CYCLE_DURATION,
                ease: "linear",
                repeat: Infinity,
                times: [0, 0.5, 0.5, 1]
            }
        }}
        >
            <svg  viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <g id="Moon" transform="translate(-490 -140)">
                    <circle cx="572.22" cy="222.7" r="75.8" style={{ fill: "#757575" }} />
                    <circle cx="573.87" cy="224.58" r="75.8" style={{ fill: "#ddd" }} />
                    <ellipse cx="588.55" cy="243.27" rx="14.04" ry="9.25" transform="translate(-11.09 457.76) rotate(-42.14)" style={{ fill: "#757575" }} />
                    <ellipse cx="587.42" cy="241.28" rx="15.75" ry="10.22" transform="translate(-10.04 456.48) rotate(-42.14)" style={{ fill: "#ddd" }} />
                    <ellipse cx="587.59" cy="239.74" rx="16.23" ry="10.22" transform="translate(13.09 509.35) rotate(-47.34)" style={{ fill: "#757575" }} />
                    <ellipse cx="550.04" cy="247.91" rx="3.67" ry="1.76" style={{ fill: "#757575" }} />
                    <ellipse cx="580.27" cy="285.59" rx="12.33" ry="4.81" transform="translate(-65.05 328.4) rotate(-30)" style={{ fill: "#757575" }} />
                    <ellipse cx="531.63" cy="189.33" rx="5.93" ry="3.41" transform="translate(21.83 431.37) rotate(-45)" style={{ fill: "#eaeaea" }} />
                    <path d="M502.22,241.28l6.22,16.13,11.56,17.33,15.56,13.11,9.33,4s-1.8-4.93,0-6.26,5.87-.64,7.31-.07,5.46,2.56,7.04,3.85,1.44,6.26.54,6.48-3.11,0-3.11,0l3.11,2.64h16.65l14.79-2.4,4.11-3.06,2.22.6,3.12-3.11,6.21-1.33,4-5.56,4.67-1.11,3.78-2.35h-3.11l3.11-3.88,6.22-1.78-2.67-4.63h5.56l2.89-9.37,2.67-8v9.33l3.78-4v-9.11l3.56-2.59,2-6.41,2-11.47v-7.97l-5.33-3.56,2.89,6.89-6.89,2.31-8.44,12.35-13.33,19.32-7.33,13.12-10.44,6.44-3.78,5.56-1.44,6-6.34,3.33-6.67.96-6,2.38-5.33-2.38-4.44-5.62,2.89-.89-5.33-2.89,3.11-1.56-5.33-.22-7.74.22-6.7-6.67-8.22-7.11-9.56-6-2.44,3.56-3.11-8.23-5.74-10.32-12.96-12.74.93,6.72Z" style={{ fill: "#757575" }} />
                </g>
            </svg>
        </motion.div>
    );
}


