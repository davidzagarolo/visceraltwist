// components/SkylineAnimation/Sky.tsx
"use client";
import { motion } from "framer-motion";

export default function Sky() {

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        backgroundColor: [
            "#070a52",
            "#0682d4",
            "#070a52",
            "#050b0f",
            "#070a52",
        ],
      }}
      transition={{
        duration: 40,
        ease: "linear",
        times: [0, 0.5, 0.45, 0.55, 0.95, 1],
        repeat: Infinity,
      }}
    />
  );
}
