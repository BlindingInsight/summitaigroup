// Currency helper. The seminar lists $20 (USD) and ₹200 (INR) as the headline price.
// Both are launch prices; both are PPP-equivalent (the headline number is NOT the
// spot exchange rate). The PPP rationale is internal context; the public site
// just shows ONE currency to the visitor at a time.

import { SEMINAR } from "./data";

export const detectCurrency = () => {
  if (typeof window === "undefined") return "USD";
  try {
    const tz =
      Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.includes("Asia/Kolkata") || tz.includes("Asia/Calcutta")) {
      return "INR";
    }
    const lang = (navigator.language || "").toLowerCase();
    if (lang.endsWith("-in") || lang === "hi" || lang.startsWith("hi-")) {
      return "INR";
    }
  } catch (_) {
    // fall through
  }
  return "USD";
};

export const priceFor = (currency) =>
  currency === "INR"
    ? `${SEMINAR.currencySymbol}${SEMINAR.price}`
    : `$${SEMINAR.priceUsd}`;

export const oldPriceFor = (currency) =>
  currency === "INR"
    ? `${SEMINAR.currencySymbol}${SEMINAR.oldPrice}`
    : `$${SEMINAR.oldPriceUsd}`;
