import React from "react";
import { motion } from "framer-motion";
import {
  Wand2,
  Zap,
  TrendingUp,
  Brain,
  Network,
  Shield,
} from "lucide-react";
import { BENTO } from "../lib/data";

const ICON_MAP = { Wand2, Zap, TrendingUp, Brain, Network, Shield };

// Bento layout — varied card sizes
const sizeClasses = {
  lg: "md:col-span-2 lg:col-span-2",
  md: "md:col-span-2 lg:col-span-1",
  sm: "md:col-span-1 lg:col-span-1",
};

export const Bento = () => {
  return (
    <section
      id="bento"
      data-testid="bento-section"
      className="relative py-24 lg:py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-sm uppercase tracking-[0.25em] text-[#00D4FF] font-semibold mb-4">
            Inside the seminar
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1]">
            What you'll
            <br />
            <span className="text-slate-400">actually walk away with.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Three hours. Six outcomes. Zero filler. Every minute pulled from
            systems Subbu has personally shipped at companies you've heard of.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENTO.map((b, i) => {
            const Icon = ICON_MAP[b.icon] || Wand2;
            const isLarge = b.size === "lg";
            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                data-testid={`bento-${b.id}`}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#112236] hover:border-[#00D4FF]/40 transition-all duration-300 hover:-translate-y-1 ${
                  sizeClasses[b.size] || sizeClasses.sm
                } ${isLarge ? "p-8 lg:p-10" : "p-7"}`}
              >
                {isLarge && (
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00D4FF]/8 blur-3xl rounded-full pointer-events-none" />
                )}
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] ${
                        isLarge ? "w-14 h-14" : "w-12 h-12"
                      }`}
                    >
                      <Icon size={isLarge ? 26 : 22} strokeWidth={2.2} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                      {b.eyebrow}
                    </span>
                  </div>

                  <h3
                    className={`font-['Outfit'] font-bold text-white tracking-tight leading-[1.15] ${
                      isLarge ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
                    }`}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={`mt-3 text-slate-400 leading-relaxed ${
                      isLarge ? "text-base" : "text-sm"
                    }`}
                  >
                    {b.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
