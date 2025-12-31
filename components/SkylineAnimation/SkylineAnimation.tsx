// components/SkylineAnimation/SkylineAnimation.tsx
"use client";
import React, { useState, useEffect } from "react";
import Skyline from "./Skyline";
import Sun from "./Sun";
import Moon from "./Moon";
import Clouds from "./Clouds";
import Sky from "./Sky";
import Stars from "./Stars";

export default function SkylineAnimation() {
    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsNight(prev => !prev);
        }, 20000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <Sky />
            <Stars isVisible={isNight} fadeDuration={2000} count={150} />
            <Sun className="absolute left-0 top-0" />
            <Moon className="absolute left-0 top-0" />            
            <Clouds isNight={isNight} />
            <div className="absolute bottom-0 right-0 h-screen w-auto">
                <Skyline className="h-full w-auto object-cover" />
            </div> 
        </div>
    );
}