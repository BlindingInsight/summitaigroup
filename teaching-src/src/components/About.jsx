import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  TrendingUp,
  Search,
  FileBadge,
  GraduationCap,
  Mic,
  ExternalLink,
} from "lucide-react";
import { ACHIEVEMENTS } from "../lib/data";

const ICON_MAP = {
  Building2,
  Landmark,
  TrendingUp,
  Search,
  FileBadge,
  GraduationCap,
};

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 lg:py-32 px-6 lg:px-10 bg-[#0B1A2C]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            {/* Outer glow halo */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#00D4FF]/40 via-[#0077FF]/20 to-transparent rounded-[2rem] blur-3xl opacity-60 animate-pulse-glow" />
            {/* Conic gradient border ring */}
            <div
              className="absolute -inset-[2px] rounded-[1.75rem] opacity-90"
              style={{
                background:
                  "conic-gradient(from 140deg at 50% 50%, #00D4FF 0deg, transparent 90deg, transparent 270deg, #0077FF 360deg)",
              }}
            />
            <div className="relative rounded-[1.625rem] overflow-hidden bg-[#0A1625]">
              <img
                src={`${process.env.PUBLIC_URL}/generated/subbu-portrait.png`}
                alt="Subramanian 'Subbu' Iyer"
                data-testid="subbu-photo"
                className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-[1.02]"
                style={{
                  filter:
                    "contrast(1.04) saturate(1.02) brightness(1.01)",
                }}
              />
              {/* Color grade overlay — subtle cyan rim light */}
              <div
                className="absolute inset-0 mix-blend-soft-light pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 0%, rgba(0,212,255,0.35), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(10,22,37,0.55), transparent 60%)",
                }}
              />
              {/* Vignette */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(10,22,37,0.7)]" />
              {/* Scan-line tech texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)",
                }}
              />
              {/* Corner ticks */}
              <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-[#00D4FF]/70" />
              <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-[#00D4FF]/70" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-[#00D4FF]/70" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-[#00D4FF]/70" />

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1625] via-[#0A1625]/85 to-transparent p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#00D4FF] font-semibold">
                    Your Instructor
                  </span>
                </div>
                <div className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Subramanian "Subbu" Iyer
                </div>
              </div>
            </div>

            <a
              href="https://www.ai-expo.net/northamerica/speaker/subramanian-subbu-iyer/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="ai-expo-link"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-semibold hover:bg-[#00D4FF]/15 transition-all"
            >
              <Mic size={15} />
              Featured at AI &amp; Big Data Expo
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="text-sm uppercase tracking-[0.2em] text-[#00D4FF] font-semibold mb-4">
            Meet your instructor
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Two decades shipping AI where
            <br />
            <span className="text-[#00D4FF]">the stakes are real.</span>
          </h2>

          <div className="mt-6 space-y-4 text-base text-slate-300 leading-relaxed">
            <p>
              Subbu is{" "}
              <strong className="text-white">
                Visiting Faculty at IIT Bombay CMINDS
              </strong>{" "}
              (Centre for Machine Intelligence and Data Science) and works
              with founders building vertical AI companies. Before that, he
              ran enterprise AI at three Fortune-100 retailers:{" "}
              <strong className="text-white">Senior Director, AI</strong> at
              Target (forecasting, pricing, supply-chain AI, and the
              generative-AI platform at $100B+ retail scale), then{" "}
              <strong className="text-white">Group VP, Data Science</strong>{" "}
              at Albertsons (personalization, retail media,
              experimentation), and{" "}
              <strong className="text-white">SVP, AI</strong> at QXO.
            </p>
            <p>
              His earlier career spans financial services and engineering:{" "}
              <strong className="text-white">
                Head of Analytics at First Republic Bank
              </strong>{" "}
              (later acquired by JPMorgan Chase) and{" "}
              <strong className="text-white">
                VP, Investment Banking Division at Goldman Sachs
              </strong>{" "}
              (derivatives pricing, quantitative modeling). Earlier technical
              roles at <strong className="text-white">Google</strong>,{" "}
              <strong className="text-white">Synopsys</strong>,{" "}
              <strong className="text-white">Fujitsu</strong>, and{" "}
              <strong className="text-white">Lucent Bell Labs</strong>, with
              eight US patents in automated verification and AI systems.
            </p>
            <p>
              PhD in Computer Science from{" "}
              <strong className="text-white">UT Austin</strong> (symbolic
              model checking, advised by Prof E. Allen Emerson, a Turing
              Award laureate). BTech in Computer Science from{" "}
              <strong className="text-white">IIT Bombay</strong>. General
              Management Program at{" "}
              <strong className="text-white">Harvard Business School</strong>.
            </p>
            <p className="text-slate-400 italic border-l-2 border-[#00D4FF]/40 pl-4">
              "I teach the systems I have actually been on call for.
              Everything else is content marketing."
            </p>
          </div>

          {/* Achievements grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ACHIEVEMENTS.map((a, i) => {
              const Icon = ICON_MAP[a.icon] || Building2;
              return (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  data-testid={`achievement-${i}`}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-[#0A1625] hover:border-[#00D4FF]/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Icon size={16} strokeWidth={2.3} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white leading-tight">
                      {a.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {a.detail}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
