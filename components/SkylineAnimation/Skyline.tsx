// components/SkylineAnimation/Skyline.tsx
"use client";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

interface SkylineProps {
  className?: string;
}

export default function Skyline({ className }: SkylineProps) {
  const syncTransition = { duration: 40, ease: easeInOut, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1] };

  const identityMatrix = "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0";
  const steelMatrix    = "0.33 0.34 0.33 0 0.02  0.33 0.34 0.33 0 0.02  0.30 0.32 0.38 0 0.05  0 0 0 1 0";
  const nightMatrix    = "0.20 0.10 0.10 0 0.00  0.10 0.20 0.10 0 0.00  0.10 0.10 0.30 0 0.02  0 0 0 1 0";

  return (
    <div className={`absolute bottom-0 right-0 h-screen w-screen`}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="cityOverlay" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <motion.feColorMatrix
              type="matrix"
              result="base"
              animate={{ values: [identityMatrix, steelMatrix, identityMatrix, nightMatrix, identityMatrix] }}
              transition={syncTransition}
            />
            <motion.feFlood
              animate={{
                floodColor: ["#abc7cc", "#abc7cc", "#111b5c", "#111b5c", "#abc7cc"],
                floodOpacity: [0, 0.5, 0, 0.5, 0],
              }}
              transition={syncTransition}
              result="flood"
            />
            <feComposite in="flood" in2="base" operator="in" result="overlay" />
            <feComposite in="overlay" in2="base" operator="over" />
          </filter>
        </defs>
      </svg>
      <Image
      src="/images/nyc_skyline_new.png"
      alt="City Skyline"
      fill
      style={{
        objectFit: "cover",
        objectPosition: "right bottom",
        filter: "url(#cityOverlay)",
      }}
      className={className}
      />
    </div>
  );
}
