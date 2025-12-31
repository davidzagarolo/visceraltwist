"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StarsProps {
  count?: number;
  isVisible: boolean;
}

type Star = { left: number; top: number; size: number; opacity: number };

export default function Stars({ count = 100, isVisible }: StarsProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    let rafId: number | null = null;

    if (!isVisible) {
      rafId = requestAnimationFrame(() => setStars([]));
      return () => { if (rafId) cancelAnimationFrame(rafId); };
    }

    const newStars = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    }));

    rafId = requestAnimationFrame(() => setStars(newStars));
    return () => { if (rafId) cancelAnimationFrame(rafId); };
  }, [count, isVisible]);

  return (
    <>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? star.opacity : 0 }}
          transition={{ duration: 2 }}
        />
      ))}
    </>
  );
}