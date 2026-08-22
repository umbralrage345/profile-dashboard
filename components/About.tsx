"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={20} className="text-brand-purple-light" />,
    title: "Developer",
    desc: "Passionate about building clean, efficient software solutions.",
  },
  {
    icon: <Brain size={20} className="text-brand-gold" />,
    title: "AI/ML Explorer",
    desc: "Diving deep into machine learning, neural networks, and intelligent systems.",
  },
  {
    icon: <Rocket size={20} className="text-brand-red-light" />,
    title: "Builder",
    desc: "Turning ideas into reality — one project at a time.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-brand-gold text-sm tracking-[0.3em] uppercase mb-3">
            01. About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I Am
          </h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-brand-purple to-brand-gold" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              Hey! I&apos;m{" "}
              <span className="text-white font-semibold">
                Abhyudaya Mohan Hegde
              </span>
              , a Computer Science &amp; AI/ML student with a deep curiosity for
              how intelligent systems are built.
            </p>
            <p>
              I enjoy working at the intersection of{" "}
              <span className="text-brand-purple-light font-medium">
                software engineering
              </span>{" "}
              and{" "}
              <span className="text-brand-gold font-medium">
                machine learning
              </span>
              , crafting projects that are both technically interesting and
              impactful.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              research papers, experimenting with side projects, or leveling up
              my skills.
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/umbralrage345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light font-medium transition-colors group"
              >
                Explore my work on GitHub
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="card-glass p-5 flex items-start gap-4 hover:border-brand-purple/50 transition-all duration-300 hover:glow-purple group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
