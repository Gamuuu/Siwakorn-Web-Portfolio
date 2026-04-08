"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "capabilities", label: "Capabilities" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" }
];

export default function RightNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden lg:block">
      <div className="container mx-auto max-w-7xl h-full relative">
        <div className="absolute right-4 xl:right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-end pointer-events-auto">
          {sections.map((section) => (
            <div 
              key={section.id} 
              onClick={() => scrollTo(section.id)}
              className="group flex items-center gap-4 cursor-pointer"
            >
              <span 
                className={`text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
                  activeSection === section.id 
                    ? "text-primary opacity-100" 
                    : "text-muted-foreground opacity-30 group-hover:opacity-100"
                }`}
                style={{
                  textShadow: activeSection === section.id ? "0 0 10px var(--color-primary)" : "none"
                }}
              >
                {section.label}
              </span>
              <motion.div 
                animate={{ 
                  height: activeSection === section.id ? 32 : 8,
                  backgroundColor: activeSection === section.id ? "var(--color-primary)" : "var(--color-border)"
                }}
                className="w-[2px] rounded-full transition-colors"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
