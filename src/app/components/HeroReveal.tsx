import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function HeroReveal() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [cursorScale, setCursorScale] = useState(0.3);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Always track mouse position for reveal
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if cursor is inside home section
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const inside = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        setIsMouseInside(inside);

        // Calculate scale based on VERTICAL CENTER position (not horizontal)
        if (inside) {
          // Get vertical center of the viewport
          const viewportCenterY = window.innerHeight / 2;
          
          // Calculate VERTICAL distance from center (ignore X axis)
          const distanceFromCenterY = Math.abs(e.clientY - viewportCenterY);
          
          // Scale based on vertical distance only
          // At vertical center = maxScale (1.8x)
          // At vertical edges (top/bottom >400px away) = minScale (0.7x)
          const maxDistance = 400;
          const minScale = 0.3;
          const maxScale = 2.2;
          
          let scale;
          if (distanceFromCenterY < maxDistance) {
            // Inverse: vertical center = bigger, vertical edges = smaller
            const normalizedDistance = distanceFromCenterY / maxDistance;
            scale = maxScale - (normalizedDistance * (maxScale - minScale));
          } else {
            scale = minScale;
          }
          
          setCursorScale(scale);
        } else {
          setCursorScale(0.3);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate reveal radius - synced with glass cursor
  const revealRadius = 300 * cursorScale;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        {/* Background Text Layer - HIDE in cursor area */}
        <div 
          className="absolute inset-0 flex items-center justify-center px-8 pointer-events-none"
          style={{
            maskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 50%, black 70%, black 100%)`,
            WebkitMaskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 50%, black 70%, black 100%)`,
          }}
        >
          <h1 className="font-black text-center leading-[1.1] tracking-tighter">
            {/* Baris Welcome To dibuat lebih kecil */}
            <span className="block text-[clamp(1rem,3vw,2rem)] text-gray-800">
              HELLO
            </span>
            <span className="block text-[clamp(2rem,10vw,8rem)] text-gray-800">
              WELCOME TO
            </span>
            {/* Baris My Portfolio tetap berukuran besar */}
            <span className="block text-[clamp(2rem,10vw,8rem)] text-gray-800">
              MY PORTFOLIO
            </span>
          </h1>
        </div>

        {/* Revealed Text Layer - SHOW in cursor area */}
        <div
          className="absolute inset-0 flex items-center justify-center px-8 pointer-events-none"
          style={{
            maskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 50%, transparent 70%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 50%, transparent 70%, transparent 100%)`,
          }}
        >
          <h1 className="font-black text-center leading-[1.1] tracking-tighter">
            {/* Teks I'M dibuat lebih kecil dengan clamp yang berbeda */}
            <span className="block text-[clamp(1rem,3vw,2rem)] bg-gradient-to-r from-teal-100 via-cyan-150 to-blue-100 bg-clip-text text-transparent">
              I AM
            </span>
            
            {/* Nama tetap menggunakan ukuran besar */}
            <span className="block text-[clamp(2rem,10vw,8rem)] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              MUAMAR
            </span>
            <span className="block text-[clamp(2rem,10vw,8rem)] bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              DWIHANGGORO
            </span>
          </h1>
        </div>

        {/* Magnifying Glass Cursor Effect - Only show when mouse is inside */}
        {isMouseInside && (
          <div
            className="fixed pointer-events-none z-50"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: `translate(-50%, -50%) scale(${cursorScale})`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* Glass Ring - Base size 400px, scales via transform */}
            <div className="relative w-[400px] h-[400px]">
              {/* Outer Glass Border */}
              <div className="absolute inset-0 rounded-full border-[3px] border-teal-400/60 shadow-[0_0_40px_rgba(20,184,166,0.4)]" />
              
              {/* Glass Shine Effect */}
              <div className="absolute inset-3 rounded-full border-[2px] border-white/20" />
              
              {/* Subtle inner ring */}
              <div className="absolute inset-6 rounded-full border border-cyan-400/30" />
              
              {/* Center Crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-teal-400/90 shadow-[0_0_15px_rgba(20,184,166,0.8)]" />
              </div>
              
              {/* Crosshair lines */}
              <div className="absolute top-1/2 left-1/2 w-24 h-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
              <div className="absolute top-1/2 left-1/2 h-24 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-teal-400/50 to-transparent" />
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20"
        onClick={scrollToSkills}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-gray-400 text-sm font-mono uppercase tracking-wider">Scroll to Explore</span>
        <div className="w-10 h-10 rounded-full border-2 border-teal-400/40 flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-teal-400" />
        </div>
      </motion.div>

      {/* Hint Text */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-gray-500 text-sm font-mono">
          Move your cursor to reveal
        </p>
      </motion.div>
    </section>
  );
}