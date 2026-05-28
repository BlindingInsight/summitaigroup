import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";

export const Testimonials = () => {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    const delta = (t.clientWidth * 0.8) * (dir === "left" ? -1 : 1);
    t.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-[#00D4FF] font-semibold mb-4">
              Testimonials
            </div>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1]">
              Loved by senior
              <br />
              <span className="text-slate-400">AI practitioners.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              data-testid="testimonial-prev"
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-white/15 bg-[#112236] hover:bg-[#00D4FF] hover:text-[#0A1625] text-white transition-all flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              data-testid="testimonial-next"
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-white/15 bg-[#112236] hover:bg-[#00D4FF] hover:text-[#0A1625] text-white transition-all flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none" }}
        data-testid="testimonials-track"
      >
        <style>{`[data-testid='testimonials-track']::-webkit-scrollbar{display:none}`}</style>
        <div className="flex gap-5 pl-6 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] pr-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              data-testid={`testimonial-${i}`}
              className="snap-start shrink-0 w-[85vw] sm:w-[440px] bg-[#112236] border border-white/10 rounded-3xl p-7 lg:p-8 hover:border-[#00D4FF]/40 transition-all"
            >
              <Quote size={26} className="text-[#00D4FF]/50 mb-5" />
              <blockquote className="text-lg sm:text-xl text-white leading-snug font-['Outfit'] font-medium tracking-tight">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-white/5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/10"
                />
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400 truncate">
                    {t.role} · <span className="text-[#00D4FF]">{t.handle}</span>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
