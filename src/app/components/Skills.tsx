import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Brain, GraduationCap, Award, Trophy } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code2,
    color: "teal",
    skills: [
      "Python & Data Analysis",
      "Unity & VR Development",
      "3D Modeling (Blender)",
      "Data Visualization (Tableau)",
    ],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    color: "cyan",
    skills: [
      "Analytical Thinking",
      "Team Leadership",
      "Communication",
      "Problem Solving",
    ],
  },
];

const certifications = [
  {
    name: "Associate Data Analyst",
    issuer: "BNSP (National Professional Certification Agency)",
    date: "Feb 2025",
    expiration: "Feb 2028",
    credentialId: "13525432",
    status: "Competent",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "Jan 2025",
    expiration: null,
    credentialId: "wLv4o-FahH",
    score: "836",
  },
  {
    name: "English for Business Communication",
    issuer: "TBI - The British Institute",
    date: "Jul 2024",
    expiration: null,
    credentialId: "TBI-DAGO/CORP/9739",
    status: "Competent",
  },
  {
    name: "Intermediate Android App Development",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024",
    expiration: "Jun 2027",
    credentialId: "GRX5O06O2P0M",
    status: "Competent",
  },
  {
    name: "Fundamental Android App Development",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024",
    expiration: "Jun 2027",
    credentialId: "07Z60Q1WMZQR",
    status: "Competent",
  },
  {
    name: "Machine Learning Implementation for Android",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024",
    expiration: "Jun 2027",
    credentialId: "L4PQ1WG97XO1",
    status: "Competent",
  },
  {
    name: "Android App Development for Beginners",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024",
    expiration: "Jun 2027",
    credentialId: "GRX5O0D4VP0M",
    status: "Competent",
  },
  {
    name: "AI Fundamentals (Belajar Dasar AI)",
    issuer: "Dicoding Indonesia",
    date: "May 2024",
    expiration: "May 2027",
    credentialId: "EYX4VO6Q6ZDL",
    status: "Competent",
  },
  {
    name: "SOLID Programming Principles",
    issuer: "Dicoding Indonesia",
    date: "May 2024",
    expiration: "May 2027",
    credentialId: "JLX17KD9NX72",
    status: "Competent",
  },
  {
    name: "Starting Programming with Kotlin",
    issuer: "Dicoding Indonesia",
    date: "Feb 2024",
    expiration: "Feb 2027",
    credentialId: "N9ZOORMRRZG5",
    status: "Competent",
  },
  {
    name: "Microsoft Office Specialist: Excel (Office 2019)",
    issuer: "Microsoft",
    date: "Oct 2022",
    expiration: null,
    credentialId: "rwvV-uSRY",
    score: "800",
  },
];

const awards = [
  {
    name: "Sertifikat Penghargaan Pekan Seni Mahasiswa Daerah DKI Jakarta 2024",
    issuer: "BPSMI DKI Jakarta",
    year: "2024",
  },
];

const education = [
  {
    degree: "Bachelor of Engineering in Informatics",
    institution: "Institut Teknologi PLN",
    period: "Sept 2021 – Sept 2025",
    gpa: "3.75",
    icon: GraduationCap,
    color: "teal",
  },
  {
    degree: "Mobile Development Learning Path",
    institution: "Bangkit Academy 2024",
    period: "Feb 2024 – Jul 2024",
    partner: "Google, GoTo, Traveloka",
    icon: GraduationCap,
    color: "cyan",
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Tech Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:25px_25px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full mb-6">
            <span className="text-xs font-mono text-blue-400">QUALIFICATIONS</span>
          </div>
          
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tight relative">
            <span className="block">EXPERTISE</span>
            <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              & CREDENTIALS
            </span>
          </h2>
        </motion.div>

        {/* 1. Education Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/20 border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                EDUCATION
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-6 backdrop-blur-md bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-700/50">
                      <Icon className={`w-6 h-6 text-${edu.color}-400`} />
                      <span className="text-xs font-mono text-gray-500">
                        {edu.gpa ? 'BACHELOR_DEGREE' : 'CERTIFICATION'}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-300 mb-3 text-sm">
                      {edu.degree}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-mono">{edu.period}</span>
                      {edu.gpa && (
                        <span className={`px-3 py-1 bg-${edu.color}-500/20 border border-${edu.color}-500/40 rounded-lg font-mono text-${edu.color}-400 text-xs`}>
                          GPA: {edu.gpa}
                        </span>
                      )}
                      {edu.partner && (
                        <span className={`px-3 py-1 bg-${edu.color}-500/20 border border-${edu.color}-500/40 rounded-lg font-mono text-${edu.color}-400 text-xs`}>
                          {edu.partner}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 2. Certifications - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/20 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                CERTIFICATIONS
              </h3>
              <span className="ml-auto text-xs font-mono text-gray-500">
                {certifications.length} CREDENTIALS
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, certIndex) => (
                <motion.div
                  key={certIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + certIndex * 0.05 }}
                  className="p-4 backdrop-blur-md bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm mb-1 leading-tight group-hover:text-blue-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-mono text-teal-400 mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-500 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-xs pt-2 border-t border-gray-700/30">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-mono">{cert.date}</span>
                      {cert.expiration && (
                        <span className="text-gray-500 font-mono">→ {cert.expiration}</span>
                      )}
                    </div>
                    {cert.score && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded font-mono text-center">
                        Score: {cert.score}
                      </span>
                    )}
                    {cert.status && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded font-mono text-center">
                        {cert.status}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/20 border border-gray-700/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                AWARDS & HONORS
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {awards.map((award, awardIndex) => (
                <motion.div
                  key={awardIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + awardIndex * 0.1 }}
                  className="p-6 backdrop-blur-md bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Trophy className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm mb-2 leading-tight group-hover:text-amber-400 transition-colors">
                        {award.name}
                      </h4>
                      <p className="text-xs font-mono text-teal-400 mb-3">
                        {award.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-700/30">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded font-mono">
                      {award.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4. Skills Grid - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 }}
                  className="group"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: -2,
                  }}
                  style={{ 
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="h-full backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/20 border border-gray-700/50 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 relative overflow-hidden">
                    {/* Animated Background Gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(20, 184, 166, 0.1), transparent 50%)`,
                      }}
                    />
                    
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50 relative z-10">
                      <motion.div 
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br from-${category.color}-400 to-${category.color}-600 flex items-center justify-center`}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                        }}
                        transition={{ 
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white font-mono">
                        {category.title.toUpperCase()}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3 relative z-10">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center gap-3 group/skill"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className={`w-1.5 h-1.5 rounded-full bg-${category.color}-400`}
                            whileHover={{ 
                              scale: 2,
                              boxShadow: `0 0 10px rgba(20, 184, 166, 0.8)`,
                            }}
                          />
                          <span className="text-sm text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Corner Accent */}
                    <motion.div
                      className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-${category.color}-500/10 to-transparent rounded-tl-full`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: categoryIndex * 0.2 + 0.5 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}