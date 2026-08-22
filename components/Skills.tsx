"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level?: string;
}

interface SkillCategory {
  category: string;
  color: "purple" | "gold" | "red";
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    category: "Languages",
    color: "purple",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "C++" },
      { name: "SQL" },
      { name: "Bash" },
    ],
  },
  {
    category: "AI / Machine Learning",
    color: "gold",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "HuggingFace" },
      { name: "Scikit-learn" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "OpenCV" },
    ],
  },
  {
    category: "Web & Frameworks",
    color: "red",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "purple",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "VS Code" },
      { name: "Vercel" },
    ],
  },
];

const colorMap = {
  purple: {
    header: "text-brand-purple-lighter",
    badge:
      "bg-brand-purple/10 border-brand-purple/30 text-brand-purple-lighter hover:bg-brand-purple/20 hover:border-brand-purple/60 hover:shadow-[0_0_12px_rgba(124,58,237,0.3)]",
    divider: "bg-brand-purple",
  },
  gold: {
    header: "text-brand-gold-light",
    badge:
      "bg-brand-gold/10 border-brand-gold/30 text-brand-gold-light hover:bg-brand-gold/20 hover:border-brand-gold/60 hover:shadow-[0_0_12px_rgba(245,158,11,0.3)]",
    divider: "bg-brand-gold",
  },
  red: {
    header: "text-brand-red-light",
    badge:
      "bg-brand-red/10 border-brand-red/30 text-brand-red-light hover:bg-brand-red/20 hover:border-brand-red/60 hover:shadow-[0_0_12px_rgba(220,38,38,0.3)]",
    divider: "bg-brand-red",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-brand-gold text-sm tracking-[0.3em] uppercase mb-3">
            03. Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tech Stack
          </h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-brand-purple to-brand-gold" />
        </motion.div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 gap-8">
          {skillData.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-glass p-6"
              >
                {/* Category title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-1 h-5 rounded-full ${c.divider}`} />
                  <h3 className={`font-semibold text-sm tracking-wide ${c.header}`}>
                    {cat.category}
                  </h3>
                </div>
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className={`px-3 py-1.5 rounded-full border text-xs font-mono cursor-default transition-all duration-200 ${c.badge}`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
