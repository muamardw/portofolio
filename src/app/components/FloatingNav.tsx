import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Home, Briefcase, Lightbulb, Award, Mail, Folder } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Expertise", href: "#skills", icon: Award },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.href,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      const currentSection = sections.findIndex(
        section => section && section.top <= 200 && section.bottom > 200
      );

      if (currentSection !== -1) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      style={{ opacity }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div className="pointer-events-auto backdrop-blur-xl bg-gray-900/80 border border-teal-500/30 rounded-full px-6 py-3 shadow-2xl shadow-teal-500/20">
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === index;

            return (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className={`text-sm font-medium font-mono ${isActive ? 'block' : 'hidden lg:block'}`}>
                    {item.label.toUpperCase()}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}