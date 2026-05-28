import React from "react";
import { motion } from "framer-motion";
import { CREDENTIALS } from "../lib/data";

export const Credibility = () => {
  return (
    <section
      data-testid="credibility-section"
      className="relative py-16 lg:py-20 px-6 lg:px-10 border-y border-white/5 bg-[#0A1625]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">
            20+ years shipped at
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-6">
          {CREDENTIALS.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              data-testid={`credential-${i}`}
              className="font-['Outfit'] text-base sm:text-lg lg:text-xl font-bold tracking-[0.15em] text-slate-400 hover:text-white transition-colors"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
