import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO_RHYTHM, HERO_STATS, SEMINAR } from "../lib/data";
import { priceFor } from "../lib/currency";

export const Hero = ({ onEnrollClick, currency = "USD" }) => {
  const headlinePrice = priceFor(currency);
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 -left-20 w-[700px] h-[700px] bg-[#00D4FF]/10 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-[#0077FF]/15 blur-[140px] rounded-full" />

      {/* Giant repeated wordmark backdrop */}
      <div className="absolute inset-x-0 top-[22%] flex flex-col items-center pointer-events-none select-none opacity-[0.035]">
        <div className="font-['Outfit'] text-[22vw] font-black tracking-tighter text-white leading-[0.85] whitespace-nowrap">
          SKI · AI · EDGE ·
        </div>
      </div>

      <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT: text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 mb-8"
              data-testid="hero-badge"
            >
              <Sparkles size={14} className="text-[#00D4FF]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#00D4FF] font-semibold">
                One seminar · {headlinePrice} · {SEMINAR.duration}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              data-testid="hero-headline"
              className="font-['Outfit'] text-[16vw] sm:text-[12vw] lg:text-[8.5rem] xl:text-[10rem] font-black tracking-[-0.05em] text-white leading-[0.85]"
            >
              THE AI
              <br />
              <span className="text-[#00D4FF] glow-text">EDGE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              data-testid="hero-subheadline"
              className="mt-8 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              A 3-hour live seminar from a 20-year AI veteran. Learn the exact
              tools, workflows, and mental models top professionals are using
              to grow exponentially — while everyone else is still watching
              YouTube.
            </motion.p>

            {/* Three-word rhythm */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5"
              data-testid="hero-rhythm"
            >
              {HERO_RHYTHM.map((word, i) => (
                <React.Fragment key={word}>
                  <span className="font-['Outfit'] text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {word}
                  </span>
                  {i < HERO_RHYTHM.length - 1 && (
                    <span className="text-[#00D4FF] text-xl">·</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={onEnrollClick}
                data-testid="hero-cta-primary"
                className="group inline-flex items-center justify-center gap-2 bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0A1625] font-semibold px-7 py-4 rounded-lg transition-all shadow-[0_0_30px_rgba(0,212,255,0.35)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] hover:-translate-y-0.5"
              >
                Reserve My Seat · {headlinePrice}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#bento")}
                data-testid="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:border-[#00D4FF] text-white hover:text-[#00D4FF] font-semibold px-7 py-4 rounded-lg transition-all"
              >
                See What's Inside
              </button>
            </motion.div>

            <div
              className="mt-5 text-xs text-slate-500 text-center lg:text-left"
              data-testid="hero-cohort-note"
            >
              Next cohort starts soon · Limited to 200 seats · Lifetime recording access
            </div>
          </div>

          {/* RIGHT: AI Hero comic graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative order-first lg:order-last"
            data-testid="hero-graphic-wrap"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Glow behind hero */}
              <div className="absolute inset-0 bg-[#00D4FF]/25 blur-[80px] rounded-full" />
              <motion.img
                src={`${process.env.PUBLIC_URL}/generated/ai-hero.png`}
                alt="AI Hero illustration — flying superhero"
                data-testid="hero-graphic"
                className="relative w-full h-auto drop-shadow-[0_0_60px_rgba(0,212,255,0.45)]"
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Speed-streak overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-4 w-24 h-[2px] bg-gradient-to-r from-transparent to-[#00D4FF]/60 blur-sm" />
                <div className="absolute top-1/3 -left-10 w-32 h-[1px] bg-gradient-to-r from-transparent to-[#00D4FF]/40" />
                <div className="absolute bottom-1/3 -left-6 w-20 h-[2px] bg-gradient-to-r from-transparent to-[#00D4FF]/50 blur-sm" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-t border-white/10 pt-10"
          data-testid="hero-stats"
        >
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#00D4FF]">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
