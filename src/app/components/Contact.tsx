import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, Phone, Send, Zap } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "muamardwihanggoro@gmail.com",
    link: "mailto:muamardwihanggoro@gmail.com",
    color: "teal",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/muamar-dwihanggoro-71a170259/",
    color: "blue",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+682375384372",
    link: "tel:+682375384372",
    color: "cyan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "West Jakarta, Indonesia, 11750",
    link: null,
    color: "cyan",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-teal-500/20 border border-teal-500/40 rounded-full mb-4">
            <span className="text-xs font-mono text-teal-400">CONTACT INTERFACE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring technical expertise and leadership to your organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Contact Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/20 border border-gray-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-700/50">
                <Zap className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-mono text-gray-500">CONTACT_INFO</span>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className={`flex items-start gap-4 p-4 rounded-xl backdrop-blur-md bg-gray-800/40 border border-gray-700/50 hover:border-${info.color}-500/50 transition-all duration-300 group`}>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${info.color}-400 to-${info.color}-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-mono text-gray-500 mb-1">{info.label.toUpperCase()}</p>
                        <p className={`font-medium ${info.link ? `text-${info.color}-400` : 'text-white'} break-words text-sm`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Right: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/20 border border-gray-700/50 rounded-2xl p-8 h-full flex flex-col justify-center"
          >
            <div className="text-center space-y-6">
              {/* Animated Icon */}
              <motion.div
                className="relative w-24 h-24 mx-auto"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl opacity-20 blur-xl" />
                <div className="relative w-full h-full bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                  <Send className="w-12 h-12 text-black" />
                </div>
              </motion.div>
              
              <div>
                <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-mono text-green-400">AVAILABLE NOW</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-3">
                  Open for Opportunities
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Open to collaboration and new opportunities across a wide range of roles and projects.
                </p>
              </div>


              <motion.a
                href="mailto:muamardwihanggoro@gmail.com"
                className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-black rounded-xl font-bold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-mono">SEND MESSAGE →</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-[1px]">
              {[3, 5, 2, 7, 4, 8, 3, 6].map((height, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-teal-500/30"
                  style={{ height: `${height * 2}px` }}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-500 font-mono text-sm">
            © 2025 MUAMAR_DWIHANGGORO // TECH-TO-IMPACT_SPECIALIST
          </p>
        </motion.div>
      </div>
    </section>
  );
}
