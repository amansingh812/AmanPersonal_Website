"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experience = [
  {
    role: "Software Developer",
    company: "L&T Finance",
    companyDesc: "Leading Indian fintech company",
    period: "July 2023 — Present",
    location: "Bangalore, India",
    highlights: [
      "Contributed to Planet App, L&T Finance's flagship digital lending platform, managing key modules including Farm Loan Top-Up and Personal Loan journeys",
      "Led end-to-end development of the Farm Loan Top-Up flow — KYC, loan customization, bank verification, eligibility checks, and BRE validations",
      "Provided live production support, analyzing logs and user feedback via User Experian to resolve critical issues and minimize downtime",
      "Collaborated with business and QA teams through JIRA, ensuring on-time delivery of stable builds",
    ],
    tech: ["Flutter", "BLOC", "REST APIs", "JIRA", "Git"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">Experience</p>
          <h2 className="font-heading text-display-md text-dark mb-16">
            Where I&apos;ve been
            <br />
            <span className="text-muted italic">building things.</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[19px] top-0 bottom-0 w-px bg-warm origin-top hidden sm:block"
          />

          {experience.map((exp, i) => (
            <AnimatedSection key={i} delay={0.2 + i * 0.15}>
              <div className="relative flex gap-6 mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full bg-cream border border-warm z-10">
                  <Briefcase size={16} className="text-accent" />
                </div>

                {/* Content card */}
                <div className="flex-1 p-6 rounded-2xl bg-warm/10 border border-warm/20 hover:border-accent/30 transition-all duration-500 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="font-heading text-xl text-dark group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted">
                        {exp.company}{" "}
                        <span className="text-muted/50">— {exp.companyDesc}</span>
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <p className="text-xs font-mono text-accent">{exp.period}</p>
                      <p className="text-xs text-muted/60">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mt-4">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm text-muted leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-1 h-1 rounded-full bg-accent mt-2" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-cream border border-warm/40 text-accent hover:border-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
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
