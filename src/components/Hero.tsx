"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  const bgX  = useTransform(mouseX, [0, 1], [-20, 20]);
  const bgY  = useTransform(mouseY, [0, 1], [-20, 20]);
  const bg2X = useTransform(mouseX, [0, 1], [20, -20]);
  const bg2Y = useTransform(mouseY, [0, 1], [20, -20]);

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Ambient blobs ── */}
      {mounted && (
        <>
          <motion.div style={{ x: bgX, y: bgY }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-glow pointer-events-none" />
          <motion.div style={{ x: bg2X, y: bg2Y }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-warm/50 blur-[100px] animate-glow pointer-events-none" />
        </>
      )}

      {/* ── Orange accent stripe (editorial reference) ── */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 bg-accent hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left: main copy */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-warm bg-cream/60 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-sans font-medium text-muted tracking-widest uppercase">
                Available for opportunities
              </span>
            </motion.div>

            {/* ── DISPLAY HEADING — Cormorant Garamond ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display font-semibold text-display-md sm:text-display-lg text-dark leading-[0.90] tracking-tight mb-3">
                Aman
              </h1>
              <h1 className="font-display font-bold text-display-md sm:text-display-lg gradient-text leading-[0.90] tracking-tight mb-8">
                Singh<span className="text-accent">.</span>
              </h1>
            </motion.div>

            {/* Role line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-sans text-lg sm:text-xl text-muted max-w-lg leading-relaxed mb-3"
            >
              Software Developer crafting scalable{" "}
              <span className="text-accent font-medium">mobile &amp; web</span>{" "}
              experiences.
            </motion.p>

            {/* Stack pill row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.72 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {["Next.js", "Flutter", "TypeScript", "React", "FastAPI"].map((t) => (
                <span key={t}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-warm text-muted bg-cream hover:border-accent hover:text-accent transition-colors duration-200">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.a href="#projects"
                className="group px-7 py-3.5 bg-accent text-cream rounded-full font-sans font-medium text-sm flex items-center gap-2 hover:bg-dark transition-colors duration-300"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                View Projects
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
              <motion.a href="#contact"
                className="px-7 py-3.5 border border-warm rounded-full font-sans text-sm text-dark hover:border-accent hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github,   href: "https://github.com/amansingh812",              label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/aman-singh-b3a7251a2/", label: "LinkedIn" },
                { icon: Mail,     href: "mailto:amansinghofficial9776@gmail.com",       label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full text-muted border border-warm hover:text-accent hover:border-accent transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Icon size={17} />
                </motion.a>
              ))}
              <span className="text-xs font-mono text-warm ml-2">amansinghofficial9776@gmail.com</span>
            </motion.div>
          </div>

          {/* Right: stat card block (editorial reference: info panel) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-3 min-w-[180px]"
          >
            {[
              { num: "2.5+", label: "Years exp." },
              { num: "5",    label: "Apps shipped" },
              { num: "4",    label: "Products built" },
              { num: "6",    label: "AI providers" },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.08 }}
                className="p-4 rounded-2xl border border-warm bg-cream/50 hover:border-accent group transition-colors duration-300"
              >
                <p className="font-display text-3xl font-bold text-dark group-hover:text-accent transition-colors">{s.num}</p>
                <p className="font-sans text-xs text-muted mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-warm flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
