import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { SEMINAR, PRICING_INCLUDED } from "../lib/data";
import { priceFor, oldPriceFor } from "../lib/currency";

export const Pricing = ({ onEnrollClick, currency = "USD" }) => {
  const headlinePrice = priceFor(currency);
  const oldPrice = oldPriceFor(currency);
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 lg:py-32 px-6 lg:px-10 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00D4FF]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-sm uppercase tracking-[0.25em] text-[#00D4FF] font-semibold mb-4">
            Reserve your seat
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1]">
            One seat. One price.
            <br />
            <span className="text-slate-400">No subscriptions.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl border border-[#00D4FF]/30 bg-gradient-to-b from-[#112236] to-[#0A1625] p-8 lg:p-12 shadow-[0_0_60px_rgba(0,212,255,0.15)]"
          data-testid="pricing-card"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#00D4FF] text-[#0A1625] text-xs font-bold uppercase tracking-wider">
            <Sparkles size={12} /> Launch offer · 80% off
          </div>

          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">
              {SEMINAR.name} — Live Seminar
            </div>
            <div className="mt-5 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1">
              <div className="font-['Outfit'] text-6xl sm:text-7xl font-black text-white tracking-tighter">
                {headlinePrice}
              </div>
              <div className="font-['Outfit'] text-xl font-bold text-slate-500 line-through ml-2">
                {oldPrice}
              </div>
            </div>
            <div className="mt-2 text-sm text-slate-400">
              One-time · No subscription · Lifetime recording included
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#00D4FF]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#00D4FF] font-semibold">
              Launch pricing, goes up soon
            </div>
          </div>

          <ul className="space-y-3 mb-10">
            {PRICING_INCLUDED.map((item, i) => (
              <li
                key={i}
                data-testid={`pricing-item-${i}`}
                className="flex items-start gap-3 text-sm sm:text-base text-slate-200"
              >
                <CheckCircle2
                  size={18}
                  className="text-[#00D4FF] shrink-0 mt-0.5"
                  strokeWidth={2.2}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={onEnrollClick}
            data-testid="pricing-cta"
            className="group w-full inline-flex items-center justify-center gap-2 bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0A1625] font-bold text-base sm:text-lg px-8 py-5 rounded-xl transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.7)] hover:-translate-y-0.5"
          >
            Reserve My Seat · {headlinePrice}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-5 text-center text-xs text-slate-500">
            One-time payment · Lifetime recording access · No subscription
          </div>
        </motion.div>
      </div>
    </section>
  );
};
