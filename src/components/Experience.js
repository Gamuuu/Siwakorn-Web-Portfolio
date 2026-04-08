"use client";

import { motion } from "framer-motion";
import { Link2, ArrowUpRight, FileCode2 } from "lucide-react";

const projects = [
  {
    title: "iOS Developer Intern @ ARISE by Infinitas",
    category: "Software Engineering / Enterprise",
    description: "ฝึกงานในทีม ถุงเงิน (Tung Ngen) เรียนรู้ระบบสถาปัตยกรรมระดับองค์กรใหญ่ (Enterprise Scale) พัฒนาแอปพลิเคชันด้วยเทคโนโลยี Swift Storyboard และ SwiftUI",
    tags: ["iOS Dev", "SwiftUI", "Swift Storyboard", "Enterprise Systems"],
    link: "#"
  },
  {
    title: "E-Commerce Supabase Migration",
    category: "Software Engineering",
    description: "End-to-end migration of a product feature to Supabase, developing full-stack Next.js components (ProductRow, CategoryCard) and routing architectures.",
    tags: ["Next.js", "Supabase", "API Integration"],
    link: "#"
  },
  {
    title: "Event Platform Infrastructure Optimization",
    category: "System Reliability & Performance",
    description: "ประเมินและจัดการความเสี่ยงก่อนระบบใช้งานจริง (Pre-launch) โดยเปลี่ยนสถาปัตยกรรมการ Deploy จาก Local Tunneling (ngrok) เป็น Vercel และจัดการ Storage Architecture ใหม่ เพื่อรับประกัน Uptime สำหรับ Concurrent users 50+ คน พร้อมวางแนวทางปรับลดขนาด Asset ลด Server Load ป้องกัน Downtime ระหว่างวันงาน",
    tags: ["Infrastructure", "Performance Optimization", "Vercel"],
    link: "#"
  },
  {
    title: "Seminar Satisfaction Dashboard",
    category: "Data & Project Management",
    description: "Designed a user feedback loop and interactive dashboard to visualize survey analytics. Successfully navigated managing suboptimal team outputs to deliver superior group results.",
    tags: ["Data Visualization", "User Research", "Crisis Management"],
    link: "#"
  },
  {
    title: "Dental Anatomy Game",
    category: "Web Development",
    description: "Developed an interactive and mobile-responsive platformer game for dental education. Optimized touch controls and visual aesthetics to improve learning engagement.",
    tags: ["Game Dev", "Mobile Responsive", "UI/UX"],
    link: "#"
  },
  {
    title: "Superstore Sales Data Analysis",
    category: "Finance & Analytics",
    description: "Extracted, cleaned, and formatted large-scale sales data to facilitate precise time-based reporting and financial analytics in Power BI.",
    tags: ["Data Cleaning", "Power BI", "Excel"],
    link: "#"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 px-4 md:px-6 max-w-5xl mx-auto relative z-10 border-t border-border/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground whitespace-nowrap">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Where technical capability meets project execution. A showcase of end-to-end ownership.
          </p>
        </div>
        
        <a 
          href="https://github.com/Gamuuu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold border border-border/50 bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm"
        >
          <FileCode2 className="mr-2 h-4 w-4" />
          View Github Profile
        </a>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="md:w-1/3 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase mb-2">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold flex items-center group-hover:text-primary transition-colors duration-300">
                {project.title}
                <ArrowUpRight className="ml-2 h-5 w-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
            </div>
            
            <div className="md:w-2/3 flex flex-col justify-between">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
