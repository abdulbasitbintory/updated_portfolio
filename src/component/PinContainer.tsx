"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/component/ui/lib/utils";

export const PinContainer = ({
  children,
  className,
  containerClassName,
  intensity = 20,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  glare = true,
  glareMaxOpacity = 0.7,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  intensity?: number;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  glare?: boolean;
  glareMaxOpacity?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { damping: 50, stiffness: 400 });
  const ySpring = useSpring(y, { damping: 50, stiffness: 400 });

  const rotateX = useTransform(
    ySpring,
    [-1, 1],
    [-tiltMaxAngleX, tiltMaxAngleX],
  );
  const rotateY = useTransform(
    xSpring,
    [-1, 1],
    [-tiltMaxAngleY, tiltMaxAngleY],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * intensity);
    y.set(yPct * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={cn("relative group/pin  cursor-pointer", containerClassName)}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
          }}
          className={cn(
            "relative p-4 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/10 group-hover/pin:border-white/20 transition duration-700 overflow-hidden",
            className,
          )}
        >
          {/* Glare effect */}
          {glare && (
            <motion.div
              style={{
                background: `radial-gradient(circle at center, rgba(255,255,255,${glareMaxOpacity}) 0%, rgba(255,255,255,0) 70%)`,
              }}
              className="absolute inset-0 pointer-events-none opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300"
            />
          )}

          {/* Gradient border */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-purple-500/10 to-cyan-500/10 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Inner content */}
          <div className="relative z-10 w-full h-full">{children}</div>
        </motion.div>
      </div>
      <PinPerspective /* title={title} href={href} */ />
    </div>
  );
};

export const PinPerspective = () => {
  // Removed unused props
  return (
    <motion.div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-60 transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-45 w-45 rounded-[50%] bg-sky-500/8 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-45 w-45 rounded-[50%] bg-sky-500/8 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-45 w-45 rounded-[50%] bg-sky-500/8 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-linear-to-b from-transparent to-cyan-500 translate-y-3.5 w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-linear-to-b from-transparent to-cyan-500 translate-y-3.5 w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-3.5 w-1 h-1 rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-3.5 w-0.5 h-0.5 rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
