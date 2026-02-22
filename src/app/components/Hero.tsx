import { motion } from "motion/react";
import { Linkedin, Mail, MapPin, Terminal } from "lucide-react";

export function Hero() {
  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl"
          animate={{
            y: [0, -60, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* 3D Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-cyan-400/30"
          style={{ perspective: "1000px" }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm"
          style={{ perspective: "1000px" }}
          animate={{
            rotateZ: [0, 180, 360],
            scale: [1, 1.2, 1],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full border-2 border-blue-400/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-14 h-14"
          style={{ 
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: [0, 360],
            rotateZ: [0, 180],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm transform rotate-45" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/5 border border-teal-500/30 rounded-3xl p-8 shadow-2xl">
              {/* Tech Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-teal-500/20">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-mono text-teal-400">PORTFOLIO.SYS</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-teal-500" />
                  <div className="w-3 h-3 rounded-full bg-cyan-500" />
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
              </div>

              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl rotate-6" />
                <div className="relative bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl w-full h-full flex items-center justify-center text-4xl font-bold text-black">
                  MD
                </div>
                {/* Scan Line Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"
                  animate={{ y: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Name */}
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">
                  MUAMAR DWIHANGGORO
                </h1>
                <div className="inline-block px-4 py-1 bg-teal-500/20 border border-teal-500/40 rounded-full">
                  <span className="text-sm font-mono text-teal-300">INFORMATICS ENGINEER</span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-black/30 rounded-lg border border-teal-500/20">
                  <div className="text-2xl font-bold text-teal-400 font-mono">3.75</div>
                  <div className="text-xs text-gray-400 font-mono">GPA</div>
                </div>
                <div className="text-center p-3 bg-black/30 rounded-lg border border-cyan-500/20">
                  <div className="text-2xl font-bold text-cyan-400 font-mono">5+</div>
                  <div className="text-xs text-gray-400 font-mono">PROJECTS</div>
                </div>
                <div className="text-center p-3 bg-black/30 rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400 font-mono">3</div>
                  <div className="text-xs text-gray-400 font-mono">CERTS</div>
                </div>
              </div>

              {/* Barcode */}
              <div className="flex justify-center mb-4">
                <div className="flex gap-[2px] opacity-50">
                  {[3, 5, 2, 7, 4, 8, 3, 6, 2, 9, 4, 5].map((height, i) => (
                    <div
                      key={i}
                      className="w-1 bg-white"
                      style={{ height: `${height * 4}px` }}
                    />
                  ))}
                </div>
              </div>

              {/* ID Number */}
              <div className="text-center">
                <span className="text-xs font-mono text-gray-500">ID: MDP-2025-ITPLN</span>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 backdrop-blur-md bg-cyan-500/20 border border-cyan-400/40 rounded-xl px-4 py-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs font-mono text-cyan-300">AVAILABLE FOR MT POSITION</span>
            </motion.div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Title Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-teal-400">STATUS: ACTIVE</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">
                Tech-to-Impact
                <span className="block text-teal-400">Specialist</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Transforming cutting-edge technology into measurable business outcomes through{" "}
                <span className="text-teal-400 font-semibold">VR/3D Development</span>,{" "}
                <span className="text-cyan-400 font-semibold">Data Analysis</span>, and{" "}
                <span className="text-blue-400 font-semibold">Strategic Leadership</span>
              </p>
              
              {/* Loading Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-gray-400">
                  <span>SKILLS LOADING</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="mailto:muamardwihanggoro@gmail.com"
                className="group cursor-pointer backdrop-blur-md bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-xl p-4 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-teal-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-mono text-gray-400 mb-1">EMAIL</div>
                <div className="text-sm text-white font-medium truncate">Contact Me</div>
              </a>

              <a
                href="https://www.linkedin.com/in/muamar-dwihanggoro-71a170259/"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer backdrop-blur-md bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-4 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-mono text-gray-400 mb-1">LINKEDIN</div>
                <div className="text-sm text-white font-medium">Connect</div>
              </a>
            </div>

            {/* Location Card */}
            <div className="backdrop-blur-md bg-gray-900/40 border border-gray-700/50 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-1">LOCATION</div>
                  <div className="text-sm text-white">West Jakarta, Indonesia, 11750</div>
                  <div className="text-xs text-gray-400 mt-1 font-mono">+682375384372</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={scrollToSkills}
              className="group cursor-pointer relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl font-bold text-black hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono">EXPLORE PORTFOLIO →</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-teal-400/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}