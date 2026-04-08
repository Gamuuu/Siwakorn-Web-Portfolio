"use client";

import { motion } from "framer-motion";
import { Code2, Target, Presentation, LineChart, ShieldAlert, Handshake } from "lucide-react";

const skills = [
  {
    title: "Software Engineering & Dev",
    icon: <Code2 className="h-6 w-6 text-chart-1" />,
    items: ["React / Next.js", "iOS (SwiftUI/Storyboard)", "Infrastructure & Reliability", "Performance Optimization"],
    color: "var(--color-chart-1)"
  },
  {
    title: "Strategic Leadership & Crisis",
    icon: <ShieldAlert className="h-6 w-6 text-destructive" />,
    items: ["Leading Suboptimal Teams", "Risk Mitigation", "End-to-End Ownership"],
    color: "var(--color-destructive)"
  },
  {
    title: "Project & Product Management",
    icon: <Target className="h-6 w-6 text-chart-3" />,
    items: ["Resource Allocation", "Business Operations", "Strategic Planning"],
    color: "var(--color-chart-3)"
  },
  {
    title: "Data & Market Analytics",
    icon: <LineChart className="h-6 w-6 text-chart-4" />,
    items: ["Data Visualization", "User Feedback Loops", "Digital Marketing"],
    color: "var(--color-chart-4)"
  },
  {
    title: "Negotiation & Stakeholders",
    icon: <Handshake className="h-6 w-6 text-chart-2" />,
    items: ["Sponsorship Acquisition", "Interpersonal Negotiation", "Conflict Resolution"],
    color: "var(--color-chart-2)"
  },
  {
    title: "Finance & Troubleshooting",
    icon: <Presentation className="h-6 w-6 text-chart-5" />,
    items: ["Financial Analysis & Options", "Hardware/Root Cause Analysis", "Ultralearning"],
    color: "var(--color-chart-5)"
  }
];

export default function SkillsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="capabilities" className="w-full py-20 px-4 md:px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          My Capabilities
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A truly T-shaped skill set combining deep technical expertise with broad 
          management, negotiation, and strategic capabilities to tackle robust challenges.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden flex flex-col h-full"
          >
            {/* Subtle Top Glow */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-md"
              style={{ backgroundColor: skill.color, boxShadow: `0 0 20px 2px ${skill.color}` }}
            />
            
            <div className="mb-4 inline-flex p-3 rounded-lg bg-background border border-border">
              {skill.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
            
            <ul className="space-y-2 mt-auto">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center text-sm text-muted-foreground">
                  <div 
                    className="w-1.5 h-1.5 rounded-full mr-2" 
                    style={{ backgroundColor: skill.color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
