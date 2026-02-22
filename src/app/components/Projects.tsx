import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import project1Image from "../../projects/project 1.png";
import project1Image2 from "../../projects/project 1 (2).png";
import project2Image from "../../projects/project 2.png";
import project2Image2 from "../../projects/project 2 (2).png";
import project3Image from "../../projects/project 3.png";
import project4Image from "../../projects/project 4.png";
import project4Image2 from "../../projects/project 4 (2).png";
import project4Image3 from "../../projects/project 4 (3).png";
import project5Image from "../../projects/project 5.png";
import project5Image2 from "../../projects/project 5 (2).png";
import { ArrowRight, X, Building2, Calendar, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DIGITAL TWIN DASHBOARD",
    subtitle: "Production Monitoring System",
    company: "PT Sanghiang Perkasa (Kalbe Nutritionals)",
    category: "Digital Twin / 3D Visualization",
    period: "June 2025 – December 2025",
    shortDesc: "Built a personal Digital Twin web dashboard to visualize 3D production processes and machine status monitoring.",
    fullDesc: "Developed a web-based Digital Twin dashboard to visualize the production process in an interactive 3D environment. The system allows users to view machine groupings by production stages (Line A scaled 1–10), monitor machine status, and access key operational information without direct field observation. This personal initiative project was proposed to support manufacturing monitoring and presentation needs.",
    images: [project1Image, project1Image2],
    tech: ["3D Visualization", "Unity", "Blender", "Web Dashboard Concept"],
    impact: "Improved process transparency and monitoring efficiency",
    color: "teal",
    achievements: [
      "Designed interactive 3D production map with grouped machine stages",
      "Implemented clickable machine detail panels for quick information access",
      "Created visual tool suitable for meetings, audits, and operational reviews",
    ],
  },
  {
    id: 2,
    title: "VEHICLE ROUTING OPTIMIZATION",
    subtitle: "DQN-Based VRP Solution",
    company: "Undergraduate Thesis Project",
    category: "Machine Learning / Optimization",
    period: "Mei 2025 - Oktober 2025",
    shortDesc: "Implemented Deep Q-Network (DQN) algorithm to solve Vehicle Routing Problem with dynamic conditions.",
    fullDesc: "Developed a reinforcement learning-based solution for the Vehicle Routing Problem (VRP) using Deep Q-Network (DQN). The model enables an intelligent agent to learn optimal delivery routes by considering dynamic variables such as weather conditions and traffic data across four primary destinations.",
    images: [project2Image, project2Image2],
    tech: ["Python", "Deep Q-Network (DQN)", "Reinforcement Learning", "Data Processing"],
    impact: "Enhanced route optimization under dynamic environmental factors",
    color: "blue",
    achievements: [
      "Designed and trained DQN agent for adaptive route selection",
      "Integrated traffic and weather variables into routing decisions",
      "Evaluated performance improvements compared to baseline routing methods",
    ],
  },
  {
    id: 3,
    title: "3D VISUALIZATION & ANIMATION",
    subtitle: "Factory Process Improvement Support",
    company: "PT Sanghiang Perkasa (Kalbe Nutritionals)",
    category: "3D Development / Industrial Visualization",
    period: "June 2025 – December 2025",
    shortDesc: "Created 3D models and animations to support factory improvement initiatives.",
    fullDesc: "Developed 3D models and animated simulations to support factory improvement initiatives within manufacturing operations. The visualizations were used to illustrate proposed process enhancements, helping teams better understand workflow adjustments and technical modifications before implementation.",
    images: [project3Image],
    tech: ["Blender", "3D Modeling", "Animation", "Process Visualization"],
    impact: "Improved clarity of improvement proposals before implementation",
    color: "teal",
    achievements: [
      "Produced detailed 3D models representing real factory layouts",
      "Created animations to simulate proposed operational improvements",
      "Supported engineering discussions through clear visual storytelling",
    ],
  },
  {
    id: 4,
    title: "VR FACTORY TOUR",
    subtitle: "Immersive Manufacturing Experience",
    company: "OPPO Indonesia Manufacturing",
    category: "Virtual Reality Development",
    period: "November 2024 – February 2025",
    shortDesc: "Developed immersive VR factory tour application using Unity and PICO 4 integration.",
    fullDesc: "Developed an interactive VR Factory Tour application designed for internal presentations and stakeholder engagement. The project involved interaction flow planning, 3D modeling with Blender, scene development in Unity, integration using PICO Unity Integration SDK, and deployment on PICO 4 devices. The final VR application includes Main Lobby, Workshop + VIP Corridor, and Warehouse scenes.",
    images: [project4Image, project4Image2, project4Image3],
    tech: ["Unity", "Blender", "PICO 4", "VR Interaction Design"],
    impact: "Enhanced stakeholder engagement through immersive factory visualization",
    color: "teal",
    achievements: [
      "Designed interaction flow and VR feature planning",
      "Developed 3D assets and structured scene layout in Unity",
      "Implemented navigation, object interaction, and animation systems",
      "Conducted performance testing and application optimization",
    ],
  },
  {
    id: 5,
    title: "GIZIKU",
    subtitle: "AI-Based Nutrition Classifier App",
    company: "Bangkit Academy 2024",
    category: "Mobile Development / AI",
    period: "February 2024 – July 2024",
    shortDesc: "Built AI-powered mobile app to classify food nutrition and recommend healthy Indonesian meals.",
    fullDesc: "Giziku is a mobile application developed as a capstone project at Bangkit Academy 2024. The app classifies food nutrition based on image input and recommends simple, commonly available healthy Indonesian meals. It also provides curated articles promoting healthy lifestyle awareness.",
    images: [project5Image, project5Image2],
    tech: ["Kotlin", "Machine Learning", "Image Classification", "Android Development"],
    impact: "Promoted accessible healthy lifestyle awareness through AI-based recommendations",
    color: "blue",
    achievements: [
      "Integrated image-based nutrition classification feature",
      "Developed recommendation system for healthy Indonesian meals",
      "Collaborated in cross-functional capstone team environment",
    ],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const selectedData = selectedProject !== null ? projects.find(p => p.id === selectedProject) : null;

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <div className="inline-block px-4 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full mb-6">
            <span className="text-xs font-mono text-cyan-400">PROJECT SHOWCASE</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tight relative">
            <span className="block">FEATURED</span>
            <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
        </motion.div>

        {/* Projects List - Alternating Layout */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative"
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                  {/* Text Content */}
                  <div className={`relative ${isEven ? '' : 'md:col-start-2'}`}>
                    {/* Large Number */}
                    <motion.div
                      className="absolute -top-20 -left-4 text-[200px] font-black text-white/5 leading-none"
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 1, delay: index * 0.15 + 0.2 }}
                    >
                      0{index + 1}
                    </motion.div>

                    <div className="relative z-10">
                      {/* Category Badge */}
                      <motion.div
                        className="inline-block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                      >
                        <div className={`px-4 py-1.5 backdrop-blur-md bg-${project.color}-500/20 border border-${project.color}-400/40 rounded-full`}>
                          <span className="text-xs font-mono text-white">{project.category.toUpperCase()}</span>
                        </div>
                      </motion.div>

                      {/* Title */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      >
                        <h3 className="text-5xl md:text-6xl font-black text-white mb-2 leading-none">
                          {project.title}
                        </h3>
                        <h4 className={`text-3xl md:text-4xl font-black bg-gradient-to-r from-${project.color}-400 to-${project.color}-600 bg-clip-text text-transparent mb-6 leading-none`}>
                          {project.subtitle}
                        </h4>
                      </motion.div>

                      {/* Company & Period */}
                      <motion.div
                        className="flex flex-wrap gap-4 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                      >
                        <div className="flex items-center gap-2 text-gray-300">
                          <Building2 className="w-4 h-4 text-teal-400" />
                          <span className="text-sm font-medium">{project.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-mono">{project.period}</span>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        className="text-lg text-gray-300 leading-relaxed mb-6 max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                      >
                        {project.shortDesc}
                      </motion.p>

                      {/* Impact */}
                      <motion.div
                        className="mb-6 p-4 backdrop-blur-md bg-gray-800/40 rounded-xl border border-gray-700/50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${project.color}-400 mt-2 flex-shrink-0`} />
                          <div>
                            <span className="text-xs font-mono text-gray-500">IMPACT: </span>
                            <span className="text-sm text-white">{project.impact}</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Detail Button */}
                      <motion.button
                        onClick={() => setSelectedProject(project.id)}
                        className={`group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-${project.color}-500 to-${project.color}-600 rounded-xl font-bold text-black hover:shadow-2xl hover:shadow-${project.color}-500/50 transition-all duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.7 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="font-mono">VIEW DETAILS</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>

                  {/* 3D Image */}
                  <motion.div
                    className={`relative ${isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}
                    initial={{ opacity: 0, scale: 0.8, rotateY: isEven ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ duration: 1, delay: index * 0.15 + 0.2 }}
                    style={{ perspective: "1000px" }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: isEven ? 5 : -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="relative group cursor-pointer" onClick={() => setSelectedProject(project.id)}>
                      {/* Glow Effect */}
                      <div className={`absolute -inset-4 bg-gradient-to-r from-${project.color}-500 to-${project.color}-700 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />
                      
                      {/* Image Container */}
                      <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-3xl p-2 overflow-hidden group-hover:border-teal-500/50 transition-all duration-300">
                        {/* Corner Accents */}
                        <div className={`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-${project.color}-400/50 rounded-tl-3xl`} />
                        <div className={`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-${project.color}-400/50 rounded-br-3xl`} />
                        
                        {/* Image */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden">
                          <Carousel opts={{ loop: true }} className="h-full">
                            <CarouselContent className="h-full">
                              {project.images.map((image, imageIndex) => (
                                <CarouselItem key={imageIndex} className="h-full">
                                  <div className="relative h-full w-full">
                                    <ImageWithFallback
                                      src={image}
                                      alt={`${project.title} - ${imageIndex + 1}`}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-${project.color}-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Click Indicator */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <motion.div
                                        className="backdrop-blur-md bg-black/60 rounded-full p-4"
                                        whileHover={{ scale: 1.2 }}
                                      >
                                        <ChevronRight className="w-8 h-8 text-white" />
                                      </motion.div>
                                    </div>

                                    {/* Scan Line */}
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent h-32"
                                      animate={{ y: ["-100%", "200%"] }}
                                      transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: index * 0.5,
                                      }}
                                    />

                                    {/* Particle effects on hover */}
                                    <motion.div
                                      className="absolute inset-0 pointer-events-none"
                                      initial={{ opacity: 0 }}
                                      whileHover={{ opacity: 1 }}
                                    >
                                      {[...Array(8)].map((_, i) => (
                                        <motion.div
                                          key={i}
                                          className={`absolute w-1 h-1 bg-${project.color}-400 rounded-full`}
                                          style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                          }}
                                          animate={{
                                            y: [0, -30],
                                            opacity: [0, 1, 0],
                                          }}
                                          transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                          }}
                                        />
                                      ))}
                                    </motion.div>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700/60 text-white hover:bg-black/70" />
                            <CarouselNext className="right-3 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700/60 text-white hover:bg-black/70" />
                          </Carousel>
                        </div>

                        {/* Tech Label */}
                        <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/60 border border-gray-700/50 rounded-lg px-4 py-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-gray-400">
                              PROJECT_{String(index + 1).padStart(2, '0')}.IMG
                            </span>
                            <div className="flex gap-1">
                              <div className={`w-2 h-2 rounded-full bg-${project.color}-500 animate-pulse`} />
                              <div className="w-2 h-2 rounded-full bg-gray-700" />
                              <div className="w-2 h-2 rounded-full bg-gray-700" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/95 to-gray-800/90 border border-gray-700/50 rounded-3xl p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-gray-800/60 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Image */}
                <div className="relative">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Carousel opts={{ loop: true }} className="h-full">
                      <CarouselContent className="h-full">
                        {selectedData.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex} className="h-full">
                            <ImageWithFallback
                              src={image}
                              alt={`${selectedData.title} - ${imageIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700/60 text-white hover:bg-black/70" />
                      <CarouselNext className="right-3 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700/60 text-white hover:bg-black/70" />
                    </Carousel>
                    <div className={`absolute inset-0 bg-gradient-to-t from-${selectedData.color}-500/30 to-transparent pointer-events-none`} />
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mt-6">
                    <div className="text-xs font-mono text-gray-500 mb-3">TECH_STACK:</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedData.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 backdrop-blur-md bg-${selectedData.color}-500/10 border border-${selectedData.color}-500/30 rounded-lg text-xs font-mono text-${selectedData.color}-400`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Details */}
                <div>
                  <div className={`inline-block px-4 py-1.5 backdrop-blur-md bg-${selectedData.color}-500/20 border border-${selectedData.color}-400/40 rounded-full mb-4`}>
                    <span className="text-xs font-mono text-white">{selectedData.category.toUpperCase()}</span>
                  </div>

                  <h3 className="text-4xl font-black text-white mb-2">
                    {selectedData.title}
                  </h3>
                  <h4 className={`text-2xl font-black bg-gradient-to-r from-${selectedData.color}-400 to-${selectedData.color}-600 bg-clip-text text-transparent mb-6`}>
                    {selectedData.subtitle}
                  </h4>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Building2 className="w-4 h-4 text-teal-400" />
                      <span className="text-sm font-medium">{selectedData.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono">{selectedData.period}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-mono text-gray-500 mb-2">DESCRIPTION:</h5>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedData.fullDesc}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-mono text-gray-500 mb-3">KEY_ACHIEVEMENTS:</h5>
                    <ul className="space-y-2">
                      {selectedData.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${selectedData.color}-400 mt-2 flex-shrink-0`} />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-4 backdrop-blur-md bg-${selectedData.color}-500/10 rounded-xl border border-${selectedData.color}-500/30`}>
                    <div className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${selectedData.color}-400 mt-2 flex-shrink-0`} />
                      <div>
                        <span className="text-xs font-mono text-gray-500">IMPACT: </span>
                        <span className="text-sm text-white font-medium">{selectedData.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}