"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          onClick={() => scrollTo("home")}
          className="cursor-pointer font-bold text-xl tracking-tighter"
        >
          Siwakorn<span className="text-primary">.P</span>
        </div>
        
        <button 
          onClick={() => scrollTo("about")} 
          className="hidden md:inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card"
        >
          About Me
        </button>
        
        {/* Mobile menu could be added here later */}
      </div>
    </motion.header>
  );
}
