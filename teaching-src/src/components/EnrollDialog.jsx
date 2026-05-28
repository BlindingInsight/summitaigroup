import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { priceFor } from "../lib/currency";

// Lead capture posts to Formspree (same endpoint as the rest of summitaigroup.com).
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgbolpa";

export const EnrollDialog = ({ open, onOpenChange, currency = "USD" }) => {
  const headlinePrice = priceFor(currency);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...form,
          site: "summitaigroup.com/teaching",
          course: "The AI Edge (India intro seminar)",
        }),
      });
      if (!res.ok) {
        let detail = "Something went wrong. Try again.";
        try {
          const body = await res.json();
          if (body && Array.isArray(body.errors) && body.errors.length) {
            detail = body.errors[0]?.message || detail;
          }
        } catch (_) {}
        throw new Error(detail);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Try again.");
    }
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
  };

  const handleOpenChange = (o) => {
    onOpenChange(o);
    if (!o) setTimeout(reset, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-md bg-[#0F1F33] border border-[#00D4FF]/20 text-white"
        data-testid="enroll-dialog"
      >
        {status === "success" ? (
          <div className="py-6 text-center" data-testid="enroll-success">
            <div className="mx-auto w-14 h-14 rounded-full bg-[#00D4FF]/15 flex items-center justify-center text-[#00D4FF] mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-['Outfit'] text-2xl font-bold text-white">
              You're on the list.
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              We'll email you within 24 hours with the live seminar date,
              payment link ({headlinePrice}), and prep materials. Welcome to the cohort.
            </p>
            <button
              onClick={() => handleOpenChange(false)}
              data-testid="enroll-success-close"
              className="mt-6 inline-flex items-center justify-center bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0A1625] font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Got it
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="text-xs uppercase tracking-[0.2em] text-[#00D4FF] font-semibold mb-2">
                Reserve your seat · {headlinePrice}
              </div>
              <DialogTitle className="font-['Outfit'] text-2xl font-bold text-white tracking-tight">
                Enroll in the next cohort
              </DialogTitle>
              <DialogDescription className="text-sm text-slate-300 pt-1">
                Fill this out — we'll email you the schedule and payment link
                within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={submit} className="mt-4 space-y-4" data-testid="enroll-form">
              <div>
                <Label htmlFor="enroll-name" className="text-xs uppercase tracking-wider text-slate-400">
                  Full name
                </Label>
                <Input
                  id="enroll-name"
                  data-testid="enroll-name"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                  minLength={2}
                  placeholder="Priya Raghavan"
                  className="mt-1.5 bg-[#0A1625] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-0"
                />
              </div>

              <div>
                <Label htmlFor="enroll-email" className="text-xs uppercase tracking-wider text-slate-400">
                  Work email
                </Label>
                <Input
                  id="enroll-email"
                  data-testid="enroll-email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                  placeholder="priya@company.com"
                  className="mt-1.5 bg-[#0A1625] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-0"
                />
              </div>

              <div>
                <Label htmlFor="enroll-phone" className="text-xs uppercase tracking-wider text-slate-400">
                  Phone (with country code)
                </Label>
                <Input
                  id="enroll-phone"
                  data-testid="enroll-phone"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  required
                  placeholder="+91 98765 43210"
                  className="mt-1.5 bg-[#0A1625] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-0"
                />
              </div>

              <div>
                <Label htmlFor="enroll-message" className="text-xs uppercase tracking-wider text-slate-400">
                  What do you want Subbu to cover? <span className="text-slate-600">(optional)</span>
                </Label>
                <Textarea
                  id="enroll-message"
                  data-testid="enroll-message"
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="One specific question or challenge..."
                  maxLength={500}
                  className="mt-1.5 bg-[#0A1625] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-0 min-h-[80px]"
                />
              </div>

              {status === "error" && (
                <div
                  data-testid="enroll-error"
                  className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
                >
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                data-testid="enroll-submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00D4FF] hover:bg-[#33DDFF] disabled:opacity-60 text-[#0A1625] font-semibold px-6 py-3.5 rounded-lg transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  "Reserve My Seat"
                )}
              </button>
              <p className="text-xs text-slate-500 text-center">
                No spam. We email once with the schedule, then once when seats are confirmed.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
