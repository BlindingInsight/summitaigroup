import React from "react";
import { motion } from "framer-motion";
import { SEMINAR_SPECS } from "../lib/data";

export const Specs = () => {
  return (
    <section
      id="specs"
      data-testid="specs-section"
      className="relative py-24 lg:py-32 px-6 lg:px-10 bg-[#0B1A2C]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="text-sm uppercase tracking-[0.25em] text-[#00D4FF] font-semibold mb-4">
            Seminar specs
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1]">
            Engineered for
            <br />
            <span className="text-[#00D4FF]">working professionals.</span>
          </h2>
          <p className="mt-6 text-base text-slate-300 leading-relaxed">
            One evening. No travel. No fluff. Every detail of what you're
            signing up for — in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="rounded-2xl border border-white/10 bg-[#0A1625] overflow-hidden divide-y divide-white/5">
            {SEMINAR_SPECS.map((s, i) => (
              <div
                key={s.label}
                data-testid={`spec-row-${i}`}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-5 hover:bg-[#112236]/40 transition-colors"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold sm:col-span-1">
                  {s.label}
                </div>
                <div className="text-sm text-white sm:col-span-2 leading-relaxed">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
