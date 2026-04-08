"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for a fluid lagging effect behind the cursor
  const springX1 = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY1 = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const springX2 = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const springY2 = useSpring(mouseY, { stiffness: 30, damping: 25 });

  useEffect(() => {
    setMounted(true);
    
    // Set initial position to center of screen
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e) => {
      // Offset by half the shape's width/height so mouse is in the center
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute inset-0 bg-background" />
      
      {/* Primary Glow Orb (Follows fast) */}
      <motion.div
        style={{
          x: springX1,
          y: springY1,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="absolute top-0 left-0 w-[45vw] h-[45vw] md:w-[35vw] md:h-[35vw] max-w-[600px] max-h-[600px] rounded-full bg-primary/10 blur-[100px] md:blur-[140px] mix-blend-screen pointer-events-none"
      />
      
      {/* Secondary Glow Orb (Follows slow, slightly offset behavior could be added, but following the cursor gives a nice mixed effect) */}
      <motion.div
        style={{
          x: springX2,
          y: springY2,
          translateX: "-40%",
          translateY: "-60%"
        }}
        className="absolute top-0 left-0 w-[55vw] h-[55vw] md:w-[45vw] md:h-[45vw] max-w-[800px] max-h-[800px] rounded-full bg-secondary/10 blur-[120px] md:blur-[160px] mix-blend-screen pointer-events-none"
      />
      
      {/* Fixed subtle background highlight to prevent totally dark corners */}
      <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-chart-1/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-destructive/5 blur-[120px] pointer-events-none" />
    </div>
  );
}
