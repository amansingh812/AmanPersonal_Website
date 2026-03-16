"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contactLinks = [
  {
    label: "Email",
    value: "amansinghofficial9776@gmail.com",
    href: "mailto:amansinghofficial9776@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "amansingh812",
    href: "https://github.com/amansingh812",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "aman-singh-b3a7251a2",
    href: "https://www.linkedin.com/in/aman-singh-b3a7251a2/",
    icon: Linkedin,
  },
  {
    label: "Phone",
    value: "+91 9900604665",
    href: "tel:+919900604665",
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm font-mono text-olive tracking-wider uppercase mb-4">
            Contact
          </p>
          <h2 className="font-heading text-display-md sm:text-display-lg text-dark mb-6">
            Let&apos;s work
            <br />
            <span className="gradient-text">together.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted max-w-md mx-auto mb-16 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something great.
          </p>
        </AnimatedSection>

        {/* Main CTA */}
        <AnimatedSection delay={0.15}>
          <motion.a
            href="mailto:amansinghofficial9776@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-cream rounded-full font-sans font-semibold text-base hover:bg-dark transition-colors duration-300 mb-16"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Say Hello
            <ArrowUpRight size={18} />
          </motion.a>
        </AnimatedSection>

        {/* Contact links grid */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-warm/20 hover:border-warm/50 bg-warm/5 hover:bg-warm/10 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon size={18} className="text-accent" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs text-muted/60 uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="font-sans text-sm text-dark group-hover:text-accent transition-colors truncate">
                    {value}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="ml-auto text-muted/30 group-hover:text-accent transition-all"
                />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
