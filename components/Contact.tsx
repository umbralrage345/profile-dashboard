"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/umbralrage345",
    icon: <Github size={22} />,
    color: "hover:text-brand-purple-light hover:border-brand-purple hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin size={22} />,
    color: "hover:text-brand-gold hover:border-brand-gold hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
    icon: <Mail size={22} />,
    color: "hover:text-brand-red-light hover:border-brand-red hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-brand-gold text-sm tracking-[0.3em] uppercase mb-3">
            04. Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Connect
          </h2>
          <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-brand-purple to-brand-gold mb-8" />
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Whether you want to collaborate on a project, discuss AI/ML ideas,
            or just say hi — I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full border border-brand-border bg-brand-card/60 text-gray-400 font-medium transition-all duration-300 ${c.color} hover:-translate-y-0.5`}
            >
              {c.icon}
              {c.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider / email highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="card-glass inline-block px-8 py-5 rounded-2xl"
        >
          <p className="text-gray-500 text-sm mb-1">Prefer email?</p>
          <a
            href="mailto:your@email.com"
            className="text-brand-gold hover:text-brand-gold-light font-mono font-medium transition-colors text-lg"
          >
            your@email.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
