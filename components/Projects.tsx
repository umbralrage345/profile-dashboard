"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  accent: "purple" | "gold" | "red";
}

const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A machine learning model that classifies images using a convolutional neural network trained on custom datasets. Built with PyTorch and deployed via FastAPI.",
    tags: ["Python", "PyTorch", "FastAPI", "CNN"],
    github: "https://github.com/umbralrage345",
    accent: "purple",
  },
  {
    title: "Project Beta",
    description:
      "A full-stack web application with real-time data processing, authentication, and a clean dashboard UI. Built with Next.js and a REST API backend.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    github: "https://github.com/umbralrage345",
    accent: "gold",
  },
  {
    title: "Project Gamma",
    description:
      "An NLP pipeline for sentiment analysis and text summarization using transformer models. Fine-tuned on domain-specific data for improved accuracy.",
    tags: ["Python", "HuggingFace", "Transformers", "NLP"],
    github: "https://github.com/umbralrage345",
    accent: "red",
  },
  {
    title: "Project Delta",
    description:
      "A CLI tool that automates repetitive development tasks — environment setup, scaffolding, and deployment — saving hours of manual work.",
    tags: ["Python", "CLI", "Automation", "DevTools"],
    github: "https://github.com/umbralrage345",
    accent: "purple",
  },
  {
    title: "Project Epsilon",
    description:
      "A data visualization dashboard that fetches live data and renders interactive charts, built with React and D3.js for rich visual storytelling.",
    tags: ["React", "D3.js", "Data Viz", "API"],
    github: "https://github.com/umbralrage345",
    accent: "gold",
  },
  {
    title: "Project Zeta",
    description:
      "A Reinforcement Learning agent trained to solve classic control problems. Experimented with PPO, DQN, and A3C algorithms using OpenAI Gym.",
    tags: ["Python", "RL", "OpenAI Gym", "PyTorch"],
    github: "https://github.com/umbralrage345",
    accent: "red",
  },
];

const accentMap = {
  purple: {
    border: "hover:border-brand-purple/60",
    glow: "hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]",
    tag: "bg-brand-purple/10 text-brand-purple-lighter border-brand-purple/20",
    dot: "bg-brand-purple-light",
  },
  gold: {
    border: "hover:border-brand-gold/60",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
    tag: "bg-brand-gold/10 text-brand-gold-light border-brand-gold/20",
    dot: "bg-brand-gold",
  },
  red: {
    border: "hover:border-brand-red/60",
    glow: "hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]",
    tag: "bg-brand-red/10 text-brand-red-light border-brand-red/20",
    dot: "bg-brand-red-light",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-brand-gold text-sm tracking-[0.3em] uppercase mb-3">
            02. Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What I&apos;ve Built
          </h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-brand-purple to-brand-gold" />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto">
            A selection of projects I&apos;ve worked on — from ML experiments to
            full-stack web apps.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`card-glass p-6 flex flex-col gap-4 transition-all duration-300 ${accent.border} ${accent.glow} group`}
              >
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${accent.dot}`}
                  />
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={17} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-border">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full border font-mono ${accent.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/umbralrage345"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors group font-medium"
          >
            <Github size={18} />
            See all projects on GitHub
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
