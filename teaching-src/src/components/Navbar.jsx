import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../lib/data";
import { priceFor } from "../lib/currency";

export const Navbar = ({ onEnrollClick, currency = "USD", onToggleCurrency }) => {
  const headlinePrice = priceFor(currency);
  const otherCurrency = currency === "USD" ? "INR" : "USD";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    if (href === "#enroll") {
      onEnrollClick?.();
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0A1625]/85 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <button
          onClick={() => handleClick("#home")}
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <span className="relative inline-flex items-center justify-center h-10 px-3 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#0077FF] text-[#0A1625] font-['Outfit'] font-black text-base tracking-[0.05em] shadow-[0_0_22px_rgba(0,212,255,0.45)]">
            SKI
          </span>
          <span className="font-['Outfit'] text-lg sm:text-xl font-bold tracking-tight text-white">
            AI <span className="text-[#00D4FF]">Academy</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.filter((l) => l.label !== "Enroll").map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 hover:text-[#00D4FF] transition-colors"
            >
              {link.label}
            </button>
          ))}
          {onToggleCurrency && (
            <button
              onClick={onToggleCurrency}
              data-testid="nav-currency-toggle"
              aria-label={`Switch to ${otherCurrency}`}
              title={`Switch to ${otherCurrency}`}
              className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] transition-colors px-2 py-1 rounded border border-white/10 hover:border-[#00D4FF]"
            >
              {currency} → {otherCurrency}
            </button>
          )}
          <button
            onClick={onEnrollClick}
            data-testid="nav-enroll-btn"
            className="bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0A1625] font-semibold px-5 py-2.5 rounded-lg transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
          >
            Enroll · {headlinePrice}
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#0A1625]/95 backdrop-blur-xl"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.href)}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  className="text-left text-base font-medium text-slate-200 hover:text-[#00D4FF] transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              {onToggleCurrency && (
                <button
                  onClick={onToggleCurrency}
                  data-testid="mobile-currency-toggle"
                  className="text-left text-sm font-semibold text-slate-400 py-2"
                >
                  Show prices in: {otherCurrency}
                </button>
              )}
              <button
                onClick={onEnrollClick}
                data-testid="mobile-enroll-btn"
                className="mt-2 bg-[#00D4FF] text-[#0A1625] font-semibold px-5 py-3 rounded-lg"
              >
                Enroll Now · {headlinePrice}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
