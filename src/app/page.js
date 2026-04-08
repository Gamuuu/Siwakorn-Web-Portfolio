import Navbar from "@/components/Navbar";
import RightNav from "@/components/RightNav";
import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import Experience from "@/components/Experience";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative z-0">
      <Navbar />
      <RightNav />
      <Hero />
      <SkillsGrid />
      <Experience />
      <About />
    </main>
  );
}
