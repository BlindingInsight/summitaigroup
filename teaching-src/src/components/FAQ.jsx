import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQ_ITEMS } from "../lib/data";

export const FAQ = () => {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 lg:py-32 px-6 lg:px-10 bg-[#0B1A2C]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-sm uppercase tracking-[0.25em] text-[#00D4FF] font-semibold mb-4">
            FAQ
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1]">
            Got questions?
            <br />
            <span className="text-slate-400">We've got answers.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            data-testid="faq-accordion"
          >
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="rounded-xl border border-white/10 bg-[#0A1625] px-5 sm:px-6 overflow-hidden hover:border-[#00D4FF]/30 transition-colors data-[state=open]:border-[#00D4FF]/40"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-white hover:text-[#00D4FF] py-5 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-slate-300 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
