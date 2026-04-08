"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copiedData, setCopiedData] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedData(type);
    setTimeout(() => setCopiedData(null), 2000);
  };

  return (
    <section id="contact" className="w-full min-h-[80vh] flex flex-col justify-center py-24 px-4 md:px-6 max-w-4xl mx-auto relative z-10 border-t border-border/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground">
          Open for opportunities and collaborations. Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group flex flex-col items-center p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10 text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Email</h3>
          <p className="text-muted-foreground mb-6">siwakorn.p.1010@gmail.com</p>
          
          <div className="flex gap-3 mt-auto">
            <a 
              href="mailto:siwakorn.p.1010@gmail.com"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-md transition-colors border border-primary/20"
            >
              Send Email
            </a>
            <button 
              onClick={() => handleCopy("siwakorn.p.1010@gmail.com", "email")}
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors border border-border bg-background"
            >
              {copiedData === "email" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group flex flex-col items-center p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="mb-4 inline-flex p-4 rounded-full bg-secondary/10 text-secondary">
            <Phone className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Phone</h3>
          <p className="text-muted-foreground mb-6">092-821-9009</p>
          
          <div className="flex gap-3 mt-auto">
            <a 
              href="tel:0928219009"
              className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary-foreground hover:bg-secondary px-4 py-2 rounded-md transition-colors border border-secondary/20"
            >
              Call Now
            </a>
            <button 
              onClick={() => handleCopy("0928219009", "phone")}
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors border border-border bg-background"
            >
              {copiedData === "phone" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
