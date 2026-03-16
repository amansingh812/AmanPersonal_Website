"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Pen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const posts = [
  {
    title: "Building Scalable Flutter Apps with BLOC Architecture",
    excerpt:
      "Lessons learned from managing state in a production fintech application serving millions of users.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["Flutter", "Architecture"],
  },
  {
    title: "From REST to Real-time: Optimizing Mobile API Layers",
    excerpt:
      "How we improved the Planet App's response times and reduced API calls with smart caching strategies.",
    date: "Coming Soon",
    readTime: "6 min read",
    tags: ["Performance", "Mobile"],
  },
  {
    title: "Integrating AI Chatbots in E-commerce with OpenAI",
    excerpt:
      "A deep dive into building conversational product discovery that increased engagement by 20%.",
    date: "Coming Soon",
    readTime: "10 min read",
    tags: ["AI", "Next.js"],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-mono text-olive tracking-wider uppercase mb-4">
            Blog
          </p>
          <h2 className="font-heading text-display-md text-dark mb-4">Writing &amp; thoughts</h2>
          <p className="font-sans text-base sm:text-lg text-muted mb-16 max-w-lg">Sharing what I learn about building software, one post at a time.</p>
        </AnimatedSection>

        <div className="grid gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.1}>
              <motion.div
                className="group relative p-6 rounded-2xl border border-warm/20 hover:border-warm/50 bg-warm/5 transition-all duration-500 cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-xl text-dark group-hover:text-accent transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed max-w-xl">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-xs text-muted/60">
                        <Pen size={10} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted/60">
                        <Clock size={10} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-warm/30 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                      <ArrowUpRight
                        size={16}
                        className="text-muted group-hover:text-accent transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 p-8 rounded-2xl bg-accent/5 border border-accent/15 text-center">
            <p className="text-sm text-muted mb-2">
              Blog launching soon. Stay tuned for technical deep-dives and
              project case studies.
            </p>
            <p className="text-xs font-mono text-accent">
              Subscribe below to get notified when I publish.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="section-divider mt-28 max-w-4xl mx-auto" />
    </section>
  );
}
