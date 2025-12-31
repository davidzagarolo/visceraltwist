"use client";
import React, { useEffect, useRef } from "react";

interface StarfieldProps {
  isVisible: boolean; // Night cycle flag
  count?: number;
  fadeDuration?: number; // in milliseconds
}

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
}

export default function Starfield({
  isVisible,
  count = 100,
  fadeDuration = 1000,
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | null>(null);
  const opacityRef = useRef<number>(0); // tracks fade-in/out opacity

  // Generate stars once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    starsRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      alpha: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }));
  }, [count]);

  // Draw loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = performance.now();

    const draw = (time: number) => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      // Smooth fade-in/out
      const delta = time - lastTime;
      lastTime = time;

      if (isVisible) {
        opacityRef.current += delta / fadeDuration;
        if (opacityRef.current > 1) opacityRef.current = 1;
      } else {
        opacityRef.current -= delta / fadeDuration;
        if (opacityRef.current < 0) opacityRef.current = 0;
      }

      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star) => {
        // Twinkle logic
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1) star.alpha = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * opacityRef.current})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    // Only start animation if not already running
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(draw);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    };
  }, [isVisible, fadeDuration]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}
