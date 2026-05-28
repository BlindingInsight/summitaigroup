// Static content for SKI AI Academy — single seminar landing page (AuraMax-inspired)

export const SEMINAR = {
  name: "The AI Edge",
  tagline: "Stay Ahead of the Curve",
  price: 200,
  priceUsd: 20, // PPP framing (~10 INR per USD), not the spot rate
  currency: "INR",
  currencySymbol: "₹",
  oldPrice: 999,
  oldPriceUsd: 99, // PPP framing of the strike-through price
  duration: "3 hours",
  format: "Live online",
  language: "English + Hinglish",
  recording: "Lifetime access",
  cohortSize: "Capped at 200 seats",
};

export const HERO_RHYTHM = ["Adapt.", "Master.", "Compound."];

export const HERO_STATS = [
  { label: "Years in AI", value: "20+" },
  { label: "Fortune 500s", value: "12" },
  { label: "Patents", value: "9" },
  { label: "Engineers Mentored", value: "1,200+" },
];

// Bento — What you'll walk away with
export const BENTO = [
  {
    id: "b1",
    size: "lg", // spans 2 cols
    icon: "Wand2",
    eyebrow: "01 — The Tools",
    title: "The exact AI stack winners are using in 2026",
    body:
      "Not another list of 50 tools. A curated workflow of 7 — what to use, when, and the prompts that actually move the needle. From Claude & GPT to nano-banana, Sora, n8n, and beyond.",
  },
  {
    id: "b2",
    size: "sm",
    icon: "Zap",
    eyebrow: "02 — Speed",
    title: "Get 10x faster at what you already do",
    body:
      "Concrete time-savings on writing, research, decisions, and analysis — measured, not promised.",
  },
  {
    id: "b3",
    size: "sm",
    icon: "TrendingUp",
    eyebrow: "03 — Growth",
    title: "Compound your career, not your tab count",
    body:
      "How to position yourself as the AI-native person in any room — without becoming an influencer.",
  },
  {
    id: "b4",
    size: "lg",
    icon: "Brain",
    eyebrow: "04 — The Mindset",
    title: "Think like someone who builds AI for $100B companies",
    body:
      "Subbu shares the mental models he developed while running AI at Target, Albertsons, and QXO. How to spot which AI trends matter, which are noise, and how to make a five-year bet without getting it wrong.",
  },
  {
    id: "b5",
    size: "md",
    icon: "Network",
    eyebrow: "05 — Workflows",
    title: "Real automations you'll deploy the same week",
    body: "Email triage, research agents, content systems — copy them, run them.",
  },
  {
    id: "b6",
    size: "md",
    icon: "Shield",
    eyebrow: "06 — The Moat",
    title: "What stays valuable when everyone has AI",
    body: "The skills, taste, and judgment that compound. The ones that don't.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Subbu cuts through the AI hype like nobody else. Three hours saved me a six-month detour.",
    name: "Priya R.",
    role: "Head of AI, Fortune 100 Bank",
    handle: "@priya.r",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
  },
  {
    quote: "I've sat through $5,000 conferences that taught me less.",
    name: "Marcus C.",
    role: "Principal Data Scientist",
    handle: "@marcus.c",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
  },
  {
    quote:
      "Finally — a senior practitioner who teaches the failure modes, not just the happy path.",
    name: "Aditi S.",
    role: "VP Engineering, Healthtech",
    handle: "@aditi.s",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
  },
  {
    quote:
      "I went in skeptical. Came out with a 6-page redesign of our forecasting stack.",
    name: "Elena V.",
    role: "Staff ML Engineer",
    handle: "@elenavoss",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces",
  },
  {
    quote: "He has lived Goldman, Google, Target, and IIT. That mix is the whole point.",
    name: "Karthik N.",
    role: "Founding Engineer, AI Infra",
    handle: "@karthikn",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
  },
  {
    quote:
      "Quoted Subbu's governance framework verbatim in our regulator review.",
    name: "Rohan M.",
    role: "Director, Model Risk",
    handle: "@rohan.m",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=faces",
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "GraduationCap",
    label: "Visiting Faculty (current)",
    detail: "IIT Bombay CMINDS",
  },
  {
    icon: "Building2",
    label: "Enterprise AI Leadership",
    detail: "QXO (SVP AI) · Albertsons (Group VP DS) · Target (Sr Director AI)",
  },
  {
    icon: "Landmark",
    label: "Financial Services",
    detail: "First Republic Bank (later acquired by JPMorgan Chase) · Goldman Sachs IBD",
  },
  {
    icon: "Search",
    label: "Earlier Technical Roles",
    detail: "Google · Synopsys · Fujitsu · Lucent Bell Labs",
  },
  {
    icon: "FileBadge",
    label: "8 US Patents",
    detail: "Automated Verification & AI Systems",
  },
  {
    icon: "GraduationCap",
    label: "Education",
    detail: "PhD UT Austin · BTech IIT Bombay · HBS GMP",
  },
];

// Credibility row. Institutions Subbu has shipped at or been trained by.
export const CREDENTIALS = [
  "IIT BOMBAY",
  "UT AUSTIN",
  "HARVARD",
  "GOLDMAN SACHS",
  "TARGET",
  "GOOGLE",
];

export const SEMINAR_SPECS = [
  { label: "Format", value: "Live online — Zoom + interactive Q&A" },
  { label: "Duration", value: "3 hours (incl. 45-min live Q&A)" },
  { label: "Language", value: "English with Hindi-context examples" },
  { label: "Audience", value: "Professionals, founders, senior ICs, managers" },
  { label: "Recording", value: "Lifetime access — re-watch anytime" },
  { label: "Resources", value: "Prompt pack, tool stack PDF, automation templates" },
  { label: "Certificate", value: "Verified completion certificate" },
];

export const PRICING_INCLUDED = [
  "3-hour live seminar with Subbu",
  "Lifetime recording access",
  "Curated AI tool stack PDF",
  "20+ battle-tested prompts",
  "3 plug-and-play automation templates",
  "Live Q&A with Subbu",
  "Private alumni community access",
  "Completion certificate",
];

export const FAQ_ITEMS = [
  {
    q: "Do I need to be technical to attend?",
    a: "No. This seminar is built for professionals across roles — managers, founders, marketers, analysts, engineers. If you can use a browser, you can apply everything Subbu teaches. The depth is in the thinking, not the syntax.",
  },
  {
    q: "Is this the actual price? What's the catch?",
    a: "Yes. This is launch pricing for the first cohorts. The goal is volume. Subbu wants tens of thousands of professionals to become AI-fluent, not a few who can afford a five-thousand-dollar training. There is no upsell during the seminar. Once early demand validates the format, pricing will go up, so the launch seats are the early-window seats.",
  },
  {
    q: "What if I miss the live session?",
    a: "Every enrolled seat gets the full recording within 24 hours — yours for life. You can also re-watch the live segments as many times as you want.",
  },
  {
    q: "Will the tools and prompts work in 6 months?",
    a: "The specific tools may evolve — the principles won't. Subbu teaches the meta-framework so you stay ahead even when the tools change. Plus, you get free updates to the resource pack for one year.",
  },
  {
    q: "How is this different from free YouTube AI content?",
    a: "Free content teaches you what AI is. This teaches you what to actually do — informed by 20 years of shipping AI at companies that can't afford to ship hype. The difference is signal-to-noise.",
  },
  {
    q: "Can I expense this through my company?",
    a: "Yes. You'll receive a proper invoice in the name of your company. Most participants expense it as professional development.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Inside", href: "#bento" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];
