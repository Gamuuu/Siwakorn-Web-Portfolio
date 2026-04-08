"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BrainCircuit, Workflow, Mail, Phone, Copy, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [copiedData, setCopiedData] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedData(type);
    setTimeout(() => setCopiedData(null), 2000);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const deepDives = [
    {
      id: "intp",
      title: "INTP Cognitive Profile",
      titleHighlight: "The Architect",
      icon: <BrainCircuit className="w-5 h-5" />,
      shortDesc: "นักชำแหละระบบผู้ประเมินความเสี่ยงล่วงหน้า (Ti & Ne Dominant)",
      details: [
        { subtitle: "Ti (Introverted Thinking) - Systematic Deconstructor", text: "มองทุกอย่างเป็นสมการที่ต้องหาจุด Optimize ที่ดีที่สุด ไม่ว่าจะเป็นการวาง System Architecture (Supabase Storage) หรือแม้แต่การคุมตัวแปรดริปกาแฟ (4:6 Method)" },
        { subtitle: "Ne (Extraverted Intuition) - Disaster Scanner", text: "เรดาร์มองเห็น Worst-case Scenario ล่วงหน้า (เช่น ห้ามใช้ ngrok รันโปรดักชั่น) ทำให้สามารถดักทางปัญหาทางเทคนิคได้ก่อนพัง" },
        { subtitle: "Si (Introverted Sensing) - Personal Database", text: "แคตตาล็อกเก็บสเปกข้อมูลเชิงลึกเป็นฐานข้อมูลส่วนตัว เพื่อเป็นรากฐานในการป้องกันความผิดพลาดซ้ำเดิม" },
        { subtitle: "Fe (Extraverted Feeling) - The Blindspot", text: "ความอดทนต่ำต่อความไร้ประสิทธิภาพ (Incompetence) มักเลือกแก้ปัญหาโดย 'แบกทำเอง' แทนการจัดการคน ซึ่งเป็นความท้าทายหลักในการก้าวสู่ระดับบริหาร" }
      ]
    },
    {
      id: "pm",
      title: "Project Management",
      titleHighlight: "AI Seminar",
      icon: <Workflow className="w-5 h-5" />,
      shortDesc: "บริหารทรัพยากรและคนภายใต้ข้อจำกัดสูง",
      details: [
        { subtitle: "Initiation & Structuring", text: "ร่าง Project Charter เริ่มจากศูนย์ ตีกรอบ Objective, Scope และ Deliverables ให้ตอบโจทย์เทรนด์เด็กจบใหม่" },
        { subtitle: "Stakeholder Management", text: "ใช้ทักษะ Business Negotiation นำเสนอ Value Proposition ให้สปอนเซอร์เห็นภาพความคุ้มค่าที่ชัดเจน" },
        { subtitle: "Crisis Leadership", text: "วางระบบ Follow-up รับมือกับทีมงานที่ไม่ได้มาตรฐาน เรียนรู้ข้อผิดพลาดเรื่อง Band-aid Solution จากการไม่ยอมกระจายงาน (Delegation)" },
        { subtitle: "Data & Feedback Loop", text: "สร้างระบบเก็บข้อมูลเพื่อวัดผลความสำเร็จด้วย Empirical Evidence แทนการกะเกณฑ์ด้วยความรู้สึก" }
      ]
    }
  ];

  return (
    <section id="about" className="w-full min-h-[80vh] flex flex-col justify-center py-24 px-4 md:px-6 max-w-5xl mx-auto relative z-10 border-t border-border/50">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Bio & Education */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground inline-flex items-center gap-3">
              About Me <span className="text-sm px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20">INTP</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              นิสิตวิทยาลัยนวัตกรรมสื่อสารสังคม (COSCI) มหาวิทยาลัยศรีนครินทรวิโรฒ 
              ผู้มีความหลงใหลในการสร้างสรรค์นวัตกรรม (Innovation) โดยการผสมผสานเทคโนโลยี 
              <span className="text-primary font-medium"> Full-Stack</span> และ 
              <span className="text-primary font-medium"> Mobile Development</span> เข้ากับกลยุทธ์ทางธุรกิจ 
              มีประสบการณ์การทำงานในบริษัท Tech ชั้นนำ เชื่อมั่นในการเรียนรู้แบบ On-ground 
              และมีความมุ่งมั่นพัฒนาศักยภาพเพื่อเป็นผู้นำที่ <span className="text-foreground font-semibold">"เข้าใจทั้งระบบงาน และเข้าใจคน"</span>
            </p>

            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education Route
            </h3>
            <div className="relative border-l border-border pl-6 space-y-8 mb-10">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[30px] top-1.5 ring-4 ring-background" />
                <h4 className="font-bold text-foreground">Srinakharinwirot University (COSCI)</h4>
                <p className="text-muted-foreground text-sm mb-1">Major: Computer for Communication</p>
                <span className="text-xs font-mono bg-card px-2 py-1 rounded text-primary border border-primary/20">2023 - 2026</span>
              </div>
              <div className="relative">
                <div className="absolute w-3 h-3 bg-muted rounded-full -left-[30px] top-1.5 ring-4 ring-background" />
                <h4 className="font-bold text-foreground">Samsenwittayalai School</h4>
                <p className="text-muted-foreground text-sm mb-1">IMP (Intensive Mathematics Program)</p>
                <span className="text-xs font-mono bg-card px-2 py-1 rounded text-muted-foreground border border-border">2016 - 2022</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Deep Dives Accordion & Contact */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-2">Deep Dive Analysis</h3>
          
          {deepDives.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div 
                key={item.id}
                initial={false}
                animate={{ backgroundColor: isExpanded ? "var(--background)" : "var(--card)" }}
                className={`rounded-2xl border transition-colors overflow-hidden ${isExpanded ? 'border-primary/50' : 'border-border/50 bg-card/40 backdrop-blur-sm'}`}
              >
                <button 
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left p-5 flex items-start gap-4 hover:bg-muted/10 transition-colors"
                >
                  <div className={`mt-1 transition-colors ${isExpanded ? 'text-primary' : 'text-secondary'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1 flex flex-wrap items-center gap-2">
                      {item.title}
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {item.titleHighlight}
                      </span>
                    </h4>
                    {!isExpanded && (
                      <p className="text-sm text-muted-foreground line-clamp-1">{item.shortDesc}</p>
                    )}
                  </div>
                  <motion.div 
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-muted-foreground mt-1 mx-2"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-2 flex flex-col gap-4 border-t border-border/30 mx-5">
                        {item.details.map((detail, i) => (
                          <div key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                            <h5 className="text-sm font-semibold text-foreground mb-1">{detail.subtitle}</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">{detail.text}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Quick Contact Inline */}
          <div className="mt-auto pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 p-4 rounded-xl border border-border/50 bg-card/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="text-primary w-5 h-5" />
                <span className="text-sm font-medium">siwakorn.p.1010@gmail...</span>
              </div>
              <button 
                onClick={() => handleCopy("siwakorn.p.1010@gmail.com", "email")} 
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="Copy Email"
              >
                {copiedData === "email" ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="flex-1 p-4 rounded-xl border border-border/50 bg-card/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="text-secondary w-5 h-5" />
                <span className="text-sm font-medium">092-821-9009</span>
              </div>
              <button 
                onClick={() => handleCopy("0928219009", "phone")} 
                className="text-muted-foreground hover:text-secondary transition-colors p-2"
                aria-label="Copy Phone"
              >
                {copiedData === "phone" ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
