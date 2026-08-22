"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ChevronDown } from "lucide-react";

const TYPING_WORDS = [
  "CSE-AIML Student",
  "Machine Learning Enthusiast",
  "Problem Solver",
  "Builder of things ✨",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(TYPING_WORDS);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-[500px] h-[500px] bg-brand-purple/15 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-10 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-gold/8 rounded-full blur-[80px] animate-pulse-slow" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-sm font-mono tracking-widest uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          Available for projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-4"
        >
          <span className="gradient-text">Abhyudaya</span>
          <br />
          <span className="text-white">Mohan Hegde</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 font-light mb-10 h-8"
        >
          {typed}
          <span className="inline-block w-0.5 h-6 bg-brand-purple-light ml-0.5 animate-pulse align-middle" />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-brand-purple hover:bg-brand-purple-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="https://github.com/umbralrage345"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-brand-gold/60 text-brand-gold hover:bg-brand-gold/10 font-semibold rounded-full transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:border-brand-gold"
          >
            <Github size={18} />
            GitHub Profile
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-gray-400 transition-colors"
      >
        <span className="text-xs font-mono tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
