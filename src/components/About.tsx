"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">About</p>
          <h2 className="font-heading text-display-md text-dark mb-8">
            Building digital products
            <br />
            <span className="text-muted italic">that people love to use.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="space-y-5 font-sans text-base sm:text-lg text-muted leading-relaxed">
            <p>
              I&apos;m a Software Developer based in <span className="text-dark font-semibold">Bangalore</span> with <span className="text-accent font-semibold">2.5+ years</span> of experience specialising in scalable mobile and web applications. My work sits at the intersection of clean code and intuitive design — the best software is invisible to its users.
            </p>
            <p>
              Currently at{" "}
              <span className="text-dark font-semibold">L&amp;T Finance</span>, I lead development of critical modules in the <span className="text-accent font-medium">Planet App</span> — their flagship digital lending platform serving millions of users. From KYC flows to complex loan disbursement logic, I ship features that directly impact how people access financial services.
            </p>
            <p>
              Outside work, I build full-stack <span className="text-dark font-medium">SaaS products</span>, explore new frameworks, and stay obsessive about making interfaces feel effortless.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: "2.5+", label: "Years Experience" },
              { number: "5",    label: "Apps Shipped" },
              { number: "4",    label: "Products Built" },
              { number: "20%",  label: "Performance Boost" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-2xl bg-warm/20 border border-warm/30"
              >
                <p className="font-display text-4xl font-bold text-dark group-hover:text-accent transition-colors">{stat.number}</p>
                <p className="font-sans text-xs text-muted mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="section-divider mt-28 max-w-4xl mx-auto" />
    </section>
  );
}
