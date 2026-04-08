"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Effect (React Bits styled) */}
      <div className="absolute inset-0 bg-background overflow-hidden z-0">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-primary/30 blur-[140px] mix-blend-screen" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-secondary/30 blur-[140px] mix-blend-screen" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-chart-3/20 blur-[120px] mix-blend-screen" 
        />
      </div>

      <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border/40 bg-zinc-950/20 px-3 py-1 text-sm font-medium backdrop-blur-md"
          >
            <span className="text-secondary font-bold mr-2">INTP</span>
            <span className="text-muted-foreground mr-2">|</span>
            <span className="text-muted-foreground">The Architect</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-border/40 bg-zinc-950/20 px-3 py-1 text-sm font-medium backdrop-blur-md"
          >
            <Terminal className="mr-2 h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Proactive Problem Solver</span>
          </motion.div>
        </div>

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="text-5xl border-transparent md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground"
>
  Siwakorn{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
    Portfolio
  </span>
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="max-w-[700px] text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed"
>
  Bridging the gap between <b>Technology</b>, <b>Business</b>, and <b>People</b>. <br className="hidden sm:block" />
  Specialized in Next.js, Strategic Leadership, and Data-Driven Crisis Management.
</motion.p>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mt-8"
>
  <button 
    onClick={() => {
      document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
  >
    <span className="text-sm font-medium tracking-widest uppercase">Scroll to explore</span>
    <motion.div 
      animate={{ y: [0, 10, 0] }} 
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="p-3 rounded-full border border-border/50 bg-card/30"
    >
      <ArrowDown className="h-5 w-5" />
    </motion.div>
  </button>
</motion.div>
      </div>

      {/* Interactive Bottom Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[50vh] opacity-20 z-0"
        style={{
          backgroundImage: "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to top, white, transparent)"
        }}
      />
    </section>
  );
}
