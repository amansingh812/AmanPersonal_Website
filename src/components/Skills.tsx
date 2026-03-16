"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Dart", level: 85 },
      { name: "Java", level: 50 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Next.js", level: 88 },
      { name: "Flutter", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Cloud & Database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 78 },
      { name: "SQL Server", level: 70 },
      { name: "MySQL", level: 72 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "JIRA", level: 85 },
      { name: "Postman", level: 82 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-sans text-sm text-dark group-hover:text-accent transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-warm/30 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-mono text-olive tracking-wider uppercase mb-4">
            Skills
          </p>
          <h2 className="font-heading text-display-md text-dark mb-4">My toolkit</h2>
          <p className="font-sans text-base sm:text-lg text-muted mb-16 max-w-lg">Technologies and tools I use to bring ideas to life.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-warm/10 border border-warm/20 hover:border-accent/30 transition-all duration-500">
                <h3 className="font-mono text-xs text-accent mb-6 tracking-widest uppercase">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, j) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.1 + j * 0.1}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="section-divider mt-28 max-w-4xl mx-auto" />
    </section>
  );
}
