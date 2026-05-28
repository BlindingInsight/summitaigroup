import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { priceFor } from "../lib/currency";

export const FinalCTA = ({ onEnrollClick, currency = "USD" }) => {
  const headlinePrice = priceFor(currency);
  return (
    <section
      id="cta"
      data-testid="final-cta-section"
      className="relative py-24 lg:py-32 px-6 lg:px-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://static.prod-images.emergentagent.com/jobs/e652e07f-b3e1-43e8-9b7d-49c340405f3f/images/870c65a7f1a3f5c65f6e5c90c06fcaa769001a06d5c9b67f4888cb8cd061af6b.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1625] via-[#0A1625]/80 to-[#0A1625]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00D4FF]/15 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto text-center"
      >
        <div className="text-sm uppercase tracking-[0.2em] text-[#00D4FF] font-semibold mb-6">
          One seat · {headlinePrice} · Limited cohort
        </div>
        <h2 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05]">
          Ready to build AI that
          <br />
          <span className="text-[#00D4FF] glow-text">actually works</span> at
          scale?
        </h2>
        <p className="mt-8 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Reserve your seat for the next live cohort. You'll join Fortune 500 AI
          practitioners learning directly from someone who's been on call for
          these systems.
        </p>
        <button
          onClick={onEnrollClick}
          data-testid="final-cta-button"
          className="group mt-10 inline-flex items-center gap-3 bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0A1625] font-bold text-base sm:text-lg px-10 py-5 rounded-xl transition-all shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:shadow-[0_0_60px_rgba(0,212,255,0.7)] hover:-translate-y-1 animate-pulse-glow"
        >
          Enroll Now · {headlinePrice}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <div className="mt-6 text-xs text-slate-400">
          Lifetime recording access · No subscription · Limited seats
        </div>
      </motion.div>
    </section>
  );
};
