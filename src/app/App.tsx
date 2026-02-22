import { HeroReveal } from "./components/HeroReveal";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FloatingNav } from "./components/FloatingNav";
import { ParticleBackground } from "./components/ParticleBackground";
import { CustomCursor } from "./components/CustomCursor";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Hide default cursor
    document.body.style.cursor = "none";
    document.body.style.userSelect = "none";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.cursor = "auto";
      document.body.style.userSelect = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Custom Cursor - Always visible (glass cursor in HeroReveal handles its own visibility) */}
      <CustomCursor />
      <ParticleBackground />
      
      <FloatingNav />
      <div id="home">
        <HeroReveal />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <Experience />
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}