import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Building2, Calendar, MapPin, TrendingUp, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "3D Design Engineer Intern",
    company: "Kalbe Nutritionals - PT. Sanghiang Perkasa",
    location: "Cikampek, Indonesia",
    period: "June 2025 – December 2025",
    type: "Work Experience",
    impacts: [
      "Supported Digital Twin initiative with accurate 3D factory models",
      "Improved operational visualization and training effectiveness",
      "Coordinated with engineers to align simulations with business requirements",
    ],
    color: "teal",
  },
  {
    title: "3D Simulation - Virtual Reality Development Intern",
    company: "OPPO Indonesia Manufacturing",
    location: "Tangerang City, Indonesia",
    period: "November 2024 – February 2025",
    type: "Work Experience",
    impacts: [
      "Developed interactive virtual factory tour for training & presentations",
      "Enhanced understanding of manufacturing processes through VR",
      "Maintained technical documentation for cross-functional stakeholders",
    ],
    color: "cyan",
  },
  {
    title: "Data Analyst Intern",
    company: "PLN Icon Plus",
    location: "South Jakarta, Indonesia",
    period: "October 2025 – January 2025",
    type: "Work Experience",
    impacts: [
      "Analyzed electrical disruption data using Python for strategic planning",
      "Standardized reporting workflows, improving efficiency",
      "Produced structured reports supporting data-driven decision making",
    ],
    color: "blue",
  },
  {
    title: "Head of Software Division",
    company: "ASLABKOM FTEN IT PLN",
    location: "West Jakarta, Indonesia",
    period: "March 2024 – January 2025",
    type: "Leadership",
    impacts: [
      "Managed software documentation and version control systems",
      "Supervised system performance monitoring across laboratory",
      "Developed training guides for 40+ students and staff",
    ],
    color: "teal",
  },
  {
    title: "Chief Executive - PWA Workshop",
    company: "Institut Teknologi PLN",
    location: "West Jakarta, Indonesia",
    period: "April 2024 – May 2024",
    type: "Leadership",
    impacts: [
      "Led planning and execution for 108 participants",
      "Managed Event Planning, PR, Documentation & Operations divisions",
      "Delivered successful workshop on progressive web app development",
    ],
    color: "cyan",
  },
  {
    title: "Head of Creative Director",
    company: "IT PLN Media",
    location: "West Jakarta, Indonesia",
    period: "November 2023 – April 2024",
    type: "Leadership",
    impacts: [
      "Directed team of 33 creative staff across multiple projects",
      "Enhanced visibility of IT-PLN Media initiatives",
      "Collaborated with Program & Marketing divisions on strategy",
    ],
    color: "blue",
  },
  {
    title: "Co-Mentor",
    company: "ENERGIZE IT PLN",
    location: "West Jakarta, Indonesia",
    period: "October 2023 – July 2024",
    type: "Leadership",
    impacts: [
      "Collaborated with PLN employees to guide and mentor a group of 15 students from 80 existing groups, contribute to national energy conservation efforts",
      "Instilled key soft skills pertinent to the energy sector, such as public speaking and leadership",
      "Efficiently managed and scheduled educational sessions that align with Indonesia's energy sustainability goals, training students in essential soft skills to prepare them for professional roles",
    ],
    color: "teal",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 bg-teal-500/20 border border-teal-500/40 rounded-full mb-4">
            <span className="text-xs font-mono text-teal-400">PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tight relative">
            <span className="block">CAREER</span>
            <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              JOURNEY
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/20 border border-gray-700/50 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 overflow-hidden">
                  {/* Animated gradient on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, transparent, rgba(20, 184, 166, 0.05), transparent)`,
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Type Badge - Floating */}
                  <motion.div 
                    className="absolute -top-3 right-6"
                    whileHover={{ y: -2 }}
                  >
                    <div className="px-4 py-1.5 backdrop-blur-md bg-teal-500/20 border border-teal-400/40 rounded-full">
                      <span className="text-xs font-mono text-teal-300">{exp.type.toUpperCase()}</span>
                    </div>
                  </motion.div>

                  {/* Status Indicator */}
                  <div className="absolute top-6 left-6">
                    <motion.div 
                      className={`w-2 h-2 rounded-full bg-${exp.color}-400`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 pl-6 relative z-10">
                    {/* Left: Company Info */}
                    <div className="md:col-span-1 space-y-3">
                      <motion.h3 
                        className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <div className="flex items-start gap-2 text-gray-300">
                        <Building2 className="w-4 h-4 mt-1 flex-shrink-0 text-teal-400" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-mono">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-mono">{exp.period}</span>
                      </div>

                      {/* Decorative Barcode */}
                      <div className="flex gap-[1px] opacity-30 pt-2">
                        {[2, 4, 3, 5, 2, 6, 3].map((height, i) => (
                          <motion.div
                            key={i}
                            className="w-0.5 bg-teal-400"
                            style={{ height: `${height * 3}px` }}
                            whileHover={{ scaleY: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Right: Impact Points */}
                    <div className="md:col-span-2 space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-teal-400" />
                        <span className="text-sm font-mono text-teal-400">KEY_IMPACTS</span>
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </div>
                      <ul className="space-y-3">
                        {exp.impacts.map((impact, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                            className="flex items-start gap-3 text-gray-300 group/item"
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0"
                              whileHover={{ 
                                scale: 2,
                                boxShadow: "0 0 10px rgba(20, 184, 166, 0.8)",
                              }}
                            />
                            <span className="text-sm leading-relaxed group-hover/item:text-white transition-colors">{impact}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Tech Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}