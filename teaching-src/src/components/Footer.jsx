import React from "react";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/10 bg-[#070F1B] px-6 lg:px-10 py-14"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-10 px-3 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#0077FF] text-[#0A1625] font-['Outfit'] font-black text-base tracking-[0.05em] shadow-[0_0_18px_rgba(0,212,255,0.35)]">
              SKI
            </span>
            <span className="font-['Outfit'] text-lg font-bold text-white">
              AI <span className="text-[#00D4FF]">Academy</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
            Enterprise AI education from a 20-year practitioner who has run
            AI at Target, Albertsons, QXO, and earlier at Goldman Sachs and
            Google. Currently Visiting Faculty, IIT Bombay CMINDS.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#00D4FF] font-semibold mb-4">
            Navigate
          </div>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li>
              <a href="#home" className="hover:text-[#00D4FF] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#bento" className="hover:text-[#00D4FF] transition-colors">
                What's Inside
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#00D4FF] transition-colors">
                About Subbu
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[#00D4FF] transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#00D4FF] transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#00D4FF] font-semibold mb-4">
            Connect
          </div>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li>
              <a
                href="https://www.linkedin.com/in/skiyer/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                className="inline-flex items-center gap-2 hover:text-[#00D4FF] transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </li>
            <li>
              <span
                data-testid="footer-email"
                className="inline-flex items-center gap-2 text-slate-500"
              >
                <Mail size={15} /> Email coming soon
              </span>
            </li>
            <li>
              <a
                href="https://www.ai-expo.net/northamerica/speaker/subramanian-subbu-iyer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#00D4FF] transition-colors"
              >
                <ExternalLink size={14} /> AI &amp; Big Data Expo
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-slate-500">
        <div>© {year} SKI AI Academy. All rights reserved.</div>
        <div>Built for engineers who ship.</div>
      </div>
    </footer>
  );
};
