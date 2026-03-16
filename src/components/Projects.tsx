"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  Lock,
  Database,
  Users,
  CreditCard,
  Cpu,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type Highlight = { icon: React.ElementType; text: string };

type Project = {
  title: string;
  tagline: string;
  company: string;
  description: string;
  highlights: Highlight[];
  techStack: { category: string; items: string[] }[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  type: string;
  status: "Live" | "In Development" | "Shipped";
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "D2C Farm Loan Top-Up",
    tagline: "Fintech lending platform for agricultural loans",
    company: "L&T Finance",
    description:
      "Contributed to Planet App, L&T Finance's flagship digital lending platform, managing key modules including Farm Loan Top-Up and Personal Loan journeys. Led end-to-end development of the Farm Loan Top-Up flow from KYC to loan customization and bank verification.",
    highlights: [
      { icon: Shield, text: "KYC via HyperVerge with multi-document verification" },
      { icon: CreditCard, text: "UPI Mandate & e-NACH payment integration" },
      { icon: BarChart3, text: "600+ JIRA tickets resolved in production" },
      { icon: Zap, text: "BLOC architecture with clean separation of concerns" },
      { icon: Database, text: "Salesforce API integration for loan eligibility" },
      { icon: Users, text: "Live production support & user feedback analysis" },
    ],
    techStack: [
      { category: "Frontend", items: ["Flutter", "Dart", "BLOC"] },
      { category: "Backend", items: ["Salesforce API", "HyperVerge SDK", "REST APIs"] },
      { category: "Auth", items: ["UPI/e-NACH", "Bank Verification"] },
      { category: "Tools", items: ["JIRA", "Git", "Firebase"] },
    ],
    features: [
      "End-to-end KYC flow with multi-document upload and real-time verification",
      "Loan eligibility checks and BRE validation engine",
      "UPI mandate collection and e-NACH setup for automated repayment",
      "Loan customization interface with term and amount selection",
      "Bank account linking and verification via Salesforce APIs",
      "BLOC-based architecture for predictable state management",
      "Live production support with error logging and user analytics",
      "Performance optimization for sub-2s loan processing times",
    ],
    type: "Mobile App",
    status: "Shipped",
    featured: true,
  },
  {
    title: "D2C Planet TA Portal",
    tagline: "Enterprise portal for trade advance and dealer financing",
    company: "L&T Finance",
    description:
      "Enterprise Flutter application for the Partner Planner team managing Farm Trade Advance and Two-Wheeler dealer financing. Implemented smart nudge system with 5 lifecycle alerts, comprehensive TW performance dashboard, and multi-layered security stack.",
    highlights: [
      { icon: Users, text: "5 TA flows with multi-dealer support & VPP calculator" },
      { icon: BarChart3, text: "Smart Nudges System with 5 lifecycle alerts" },
      { icon: Smartphone, text: "TW Business Performance Dashboard & KRA tracking" },
      { icon: Lock, text: "Biometric auth + AES encryption + emulator/root detection" },
      { icon: Database, text: "Firebase, CleverTap & DevRev integration" },
      { icon: Zap, text: "3-environment flavor config (dev/staging/prod)" },
    ],
    techStack: [
      { category: "Framework", items: ["Flutter 3.x", "flutter_bloc", "auto_route"] },
      { category: "Architecture", items: ["Clean Architecture", "BLoC/Cubit", "get_it/injectable"] },
      { category: "Networking", items: ["dio", "DioInterceptor", "AES Encryption"] },
      { category: "Services", items: ["Firebase", "CleverTap", "DevRev"] },
      { category: "Security", items: ["Biometric Auth", "Root Detection", "Emulator Detection"] },
    ],
    features: [
      "TwNudgesBloc design pattern for complex alert lifecycle management",
      "Smart Nudges System: 5 contextual alerts (initiation, application, disbursement, repayment, renewal)",
      "TA flow implementation: Sanction, Disbursement, Repayment, Renewal, Top-Up",
      "VPP (Voluntary Prepayment) Calculator with dynamic interest computation",
      "TW Business Performance Dashboard with KRA metrics and revenue tracking",
      "Multi-dealer support with role-based access control",
      "Security hardening: biometric authentication, AES encryption for sensitive data",
      "3-environment configuration (dev/staging/prod) with dynamic URLs and API endpoints",
      "Firebase integration for analytics, Crashlytics, and remote config",
      "CleverTap for user engagement tracking and DevRev for issue management",
      "Offline-first capability with local database sync",
    ],
    type: "Mobile App",
    status: "Shipped",
    featured: true,
  },
  {
    title: "Mobile Armour",
    tagline: "AI-powered e-commerce platform for mobile accessories",
    company: "Personal Project",
    description:
      "AI-assisted e-commerce marketplace built with Next.js featuring intelligent product recommendations, OpenAI-powered chatbot support, and secure Stripe payment processing. Achieved 20% engagement increase through personalized recommendations.",
    highlights: [
      { icon: Zap, text: "20% faster load times with SSR/SSG optimization" },
      { icon: Smartphone, text: "AI chatbot via OpenAI for real-time support" },
      { icon: CreditCard, text: "Stripe payment gateway with PCI compliance" },
      { icon: BarChart3, text: "20% engagement increase from AI recommendations" },
      { icon: Cpu, text: "Admin dashboard for product & order management" },
      { icon: Users, text: "User authentication and profile management" },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "MongoDB", "REST APIs"] },
      { category: "AI/ML", items: ["OpenAI API", "Recommendation Engine"] },
      { category: "Payments", items: ["Stripe", "Webhook Integration"] },
    ],
    features: [
      "Server-side rendering (SSR) for improved SEO and 20% faster initial load",
      "Static site generation (SSG) for product catalog pages",
      "OpenAI-powered chatbot for 24/7 customer support",
      "AI-driven product recommendation engine",
      "Secure Stripe payment integration with webhook handling",
      "Admin dashboard for product inventory and order management",
      "User authentication with JWT tokens",
      "Responsive mobile-first design",
    ],
    liveUrl: "https://mobile-armour.vercel.app",
    githubUrl: "https://github.com/amansingh812/mobile-armour",
    type: "Web App",
    status: "Shipped",
    featured: true,
  },
  {
    title: "AutoZenlyAI",
    tagline: "Multi-platform AI social media automation SaaS",
    company: "Personal Project",
    description:
      "Comprehensive SaaS platform for automating social media posting across multiple platforms. Integrates 6 AI providers (Claude, GPT-4, Gemini, Mistral, Cohere, Groq) with visual calendar scheduler, RSS-to-post pipeline, and detailed analytics.",
    highlights: [
      { icon: Zap, text: "6 AI providers for flexible content generation" },
      { icon: BarChart3, text: "Visual calendar scheduler with drag-and-drop" },
      { icon: Database, text: "RSS feed integration for automated content pipeline" },
      { icon: CreditCard, text: "Dodo Payments integration for monetization" },
      { icon: Users, text: "Twitter OAuth & multi-account management" },
      { icon: Cpu, text: "Real-time analytics and performance metrics" },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["FastAPI", "PostgreSQL", "Redis", "Celery"] },
      { category: "AI", items: ["Claude API", "GPT-4", "Gemini", "Mistral", "Cohere", "Groq"] },
      { category: "Auth", items: ["JWT", "OAuth 2.0", "Twitter API"] },
      { category: "Payments", items: ["Dodo Payments", "Webhook Integration"] },
    ],
    features: [
      "Multi-AI provider support with automatic fallback mechanism",
      "Visual content calendar with drag-and-drop scheduling",
      "RSS feed aggregation and content extraction pipeline",
      "AI-powered content generation and optimization",
      "Multi-platform posting: Twitter, LinkedIn, Instagram, Facebook",
      "Twitter OAuth integration for secure account linking",
      "Real-time analytics dashboard with engagement metrics",
      "Monetization via Dodo Payments subscription model",
      "Background task processing with Celery for scheduled posts",
      "PostgreSQL database with optimized queries for analytics",
    ],
    type: "SaaS",
    status: "In Development",
    featured: true,
  },
  {
    title: "HS Race Gear",
    tagline: "Premium e-commerce platform for custom racing gear",
    company: "Client Project",
    description:
      "Custom racing gear e-commerce platform with innovative 3D product viewer, comprehensive measurement forms, and full-featured admin dashboard. Implements advanced SEO strategies and next-generation ecommerce features.",
    highlights: [
      { icon: Smartphone, text: "3D product viewer with Google Model Viewer" },
      { icon: CreditCard, text: "Complete cart, checkout, and wishlist system" },
      { icon: BarChart3, text: "Custom measurement form builder for sizing" },
      { icon: Cpu, text: "Full-featured admin dashboard with analytics" },
      { icon: Lock, text: "NextAuth.js for secure authentication" },
      { icon: Zap, text: "SEO suite with dynamic meta tags and sitemap" },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["MongoDB", "Node.js", "REST APIs"] },
      { category: "3D/Viewer", items: ["Google Model Viewer", "Drift Zoom", "PhotoSwipe"] },
      { category: "UI", items: ["RC Slider", "Headless UI", "Framer Motion"] },
      { category: "Auth", items: ["NextAuth.js"] },
    ],
    features: [
      "3D product viewer with interactive zoom and rotation using Google Model Viewer",
      "Custom measurement capture form with size recommendations",
      "Complete e-commerce flow: product catalog, cart, checkout, order history",
      "Wishlist functionality with sharing capabilities",
      "Admin dashboard for inventory, order, and customer management",
      "NextAuth.js authentication with email and OAuth providers",
      "Dynamic SEO with Open Graph meta tags and structured data",
      "Automated XML sitemap generation",
      "Image gallery with PhotoSwipe lightbox and Drift Zoom",
      "Performance optimization with Next.js 15 App Router",
    ],
    liveUrl: "https://hsracegear.com",
    type: "E-commerce",
    status: "Live",
    featured: true,
  },
];

function TechBadge({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-cream border border-warm/50 text-muted hover:text-olive hover:border-olive/30 transition-colors cursor-default">
      {label}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const statusColor =
    project.status === "Live"
      ? "bg-green-50 text-green-700 border-green-200"
      : project.status === "In Development"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-warm/40 text-olive border-warm";

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        className="group relative rounded-3xl border border-warm/30 bg-warm/5 hover:border-warm/60 transition-all duration-500 overflow-hidden"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-olive/30 to-transparent" />

        {/* Hover glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-olive/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 p-7 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-olive/10 text-olive border border-olive/20">
                  {project.type}
                </span>
                <span className={`px-3 py-1 text-[11px] font-mono rounded-full border ${statusColor}`}>
                  {project.status === "Live" && <span className="mr-1">●</span>}
                  {project.status}
                </span>
                {project.featured && (
                  <span className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono rounded-full bg-warm/30 text-muted border border-warm/40">
                    <Star size={9} /> Featured
                  </span>
                )}
                {project.company !== "Personal Project" && (
                  <span className="text-[11px] text-muted/50 font-mono">@ {project.company}</span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-dark group-hover:text-olive transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-muted mt-1 font-medium italic">{project.tagline}</p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {project.githubUrl && (
                <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-warm/30 text-muted hover:text-dark hover:border-olive/40 transition-all"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} title="GitHub">
                  <Github size={15} />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-warm/30 text-muted hover:text-dark hover:border-olive/40 transition-all"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} title="Live Site">
                  <ExternalLink size={15} />
                </motion.a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-3xl">{project.description}</p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6">
            {project.highlights.map((h, j) => (
              <div key={j} className="flex items-start gap-3 p-3 rounded-xl bg-cream/60 border border-warm/20">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-olive/10 flex items-center justify-center mt-0.5">
                  <h.icon size={13} className="text-olive" />
                </div>
                <span className="text-xs text-dark leading-snug">{h.text}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="space-y-2.5 mb-5 p-4 rounded-2xl bg-cream/40 border border-warm/20">
            <p className="text-[10px] font-mono text-muted/50 uppercase tracking-widest mb-3">Tech Stack</p>
            {project.techStack.map((cat) => (
              <div key={cat.category} className="flex flex-wrap items-start gap-2">
                <span className="text-[10px] font-mono text-muted/60 uppercase tracking-wider w-24 flex-shrink-0 pt-1">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <TechBadge key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Expand features */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs font-mono text-olive/70 hover:text-olive transition-colors"
          >
            {expanded ? <><ChevronUp size={13} /> Hide features</> : <><ChevronDown size={13} /> View all features ({project.features.length})</>}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2 border-t border-warm/20 pt-4">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-olive/60 mt-2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-mono text-olive tracking-wider uppercase mb-4">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-4 tracking-tight">
            Things I&apos;ve built
          </h2>
          <p className="text-muted mb-16 max-w-xl leading-relaxed">
            From AI-powered SaaS platforms to fintech mobile apps serving millions — a detailed
            look at what I&apos;ve shipped, the stack behind each, and the problems they solve.
          </p>
        </AnimatedSection>

        {/* Featured projects */}
        <div className="space-y-8 mb-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-mono text-muted/50 uppercase tracking-widest mb-6 mt-14">
                More work
              </p>
            </AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2">
              {others.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i + 2} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="section-divider mt-28 max-w-4xl mx-auto" />
    </section>
  );
}
