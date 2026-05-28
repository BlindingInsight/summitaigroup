import React, { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Credibility } from "@/components/Credibility";
import { Bento } from "@/components/Bento";
import { About } from "@/components/About";
import { Specs } from "@/components/Specs";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { EnrollDialog } from "@/components/EnrollDialog";
import { detectCurrency } from "@/lib/currency";

const Landing = () => {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const openEnroll = () => setEnrollOpen(true);
  const toggleCurrency = () =>
    setCurrency((c) => (c === "USD" ? "INR" : "USD"));

  useEffect(() => {
    setCurrency(detectCurrency());
  }, []);

  return (
    <div className="App min-h-screen bg-[#0A1625] text-white overflow-x-hidden">
      <Navbar
        onEnrollClick={openEnroll}
        currency={currency}
        onToggleCurrency={toggleCurrency}
      />
      <main>
        <Hero onEnrollClick={openEnroll} currency={currency} />
        <Credibility />
        <Bento />
        <About />
        <Specs />
        <Pricing onEnrollClick={openEnroll} currency={currency} />
        <FAQ />
        <FinalCTA onEnrollClick={openEnroll} currency={currency} />
      </main>
      <Footer />
      <EnrollDialog
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
        currency={currency}
      />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter basename="/teaching/ai-edge">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
