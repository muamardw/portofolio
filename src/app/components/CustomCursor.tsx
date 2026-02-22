import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isInHome, setIsInHome] = useState(false);

  useEffect(() => {
    let trailId = 0;
    let checkingHome = false;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if cursor is inside home section
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        const inside = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        
        if (inside !== checkingHome) {
          checkingHome = inside;
          setIsInHome(inside);
        }
      }

      // Only add trails when NOT in home
      if (!checkingHome) {
        const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() + trailId++ };
        setTrails((prev) => [...prev.slice(-15), newTrail]);
      }

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer");
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Don't render cursor if in home section
  if (isInHome) {
    return null;
  }

  return (
    <>
      {/* Cursor Trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-[9999] mix-blend-screen"
          style={{
            left: trail.x,
            top: trail.y,
          }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ 
            scale: 0,
            opacity: 0,
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <div 
            className="w-3 h-3 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 blur-sm"
            style={{
              transform: "translate(-50%, -50%)",
              opacity: (index / trails.length) * 0.6,
            }}
          />
        </motion.div>
      ))}

      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="relative w-8 h-8">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white"
            animate={{
              scale: isHovering ? 1.2 : 1,
              rotate: 360,
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 0.3,
              },
            }}
          />
          
          {/* Inner Dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            animate={{
              scale: isHovering ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/40 to-cyan-400/40 blur-md"
            animate={{
              opacity: isHovering ? 0.8 : 0.3,
              scale: isHovering ? 1.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Click Ripple Effect */}
      <ClickRipple isInHome={isInHome} />
    </>
  );
}

function ClickRipple({ isInHome }: { isInHome: boolean }) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't show ripple in home section
      if (isInHome) return;

      const newRipple = { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() };
      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isInHome]);

  return (
    <>
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-teal-400/60" />
        </motion.div>
      ))}
    </>
  );
}