// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// 3D Laptop SVG Component
function Laptop3D() {
  return (
    <div className="relative w-full max-w-lg mx-auto animate-float">
      <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
        {/* Laptop screen back */}
        <defs>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d2010" />
            <stop offset="100%" stopColor="#1a1208" />
          </linearGradient>
          <linearGradient id="screenFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0e8d8" />
          </linearGradient>
          <linearGradient id="baseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d2e14" />
            <stop offset="100%" stopColor="#1a1208" />
          </linearGradient>
          <linearGradient id="baseTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5c842" />
            <stop offset="100%" stopColor="#d99a10" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#1a120840" />
          </filter>
          <linearGradient id="teamCircle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>

        {/* Screen body */}
        <g filter="url(#shadow)">
          {/* Screen back panel - dark */}
          <path d="M 70 20 Q 70 10 80 10 L 420 10 Q 430 10 430 20 L 430 270 Q 430 280 420 280 L 80 280 Q 70 280 70 270 Z"
            fill="url(#screenGrad)" />

          {/* Screen face - white */}
          <path d="M 80 22 L 418 22 L 418 268 L 80 268 Z"
            fill="url(#screenFace)" />

          {/* Screen content - mini UI */}
          <rect x="88" y="30" width="322" height="250" rx="2" fill="#fdf8ee" />

          {/* Mini nav */}
          <rect x="88" y="30" width="322" height="22" rx="2" fill="#1a1208" />
          <circle cx="100" cy="41" r="4" fill="#F0B429" />
          <rect x="112" y="37" width="60" height="8" rx="4" fill="#F0B429" opacity="0.6" />
          <rect x="280" y="37" width="30" height="8" rx="4" fill="#ffffff" opacity="0.3" />
          <rect x="320" y="37" width="30" height="8" rx="4" fill="#ffffff" opacity="0.3" />
          <rect x="360" y="37" width="40" height="8" rx="4" fill="#ffffff" opacity="0.3" />

          {/* Hero section */}
          <rect x="88" y="52" width="322" height="120" rx="0" fill="#F5C842" />
          <rect x="100" y="68" width="80" height="14" rx="3" fill="#1a1208" />
          <rect x="100" y="88" width="110" height="10" rx="3" fill="#1a120880" />
          <rect x="100" y="104" width="90" height="10" rx="3" fill="#1a120860" />
          <rect x="100" y="122" width="50" height="16" rx="8" fill="#1a1208" />
          <rect x="160" y="122" width="50" height="16" rx="8" fill="none" stroke="#1a1208" strokeWidth="1.5" />

          {/* Laptop illustration inside screen */}
          <ellipse cx="330" cy="112" rx="55" ry="55" fill="#60a5fa" opacity="0.3" />
          <rect x="290" y="80" width="80" height="55" rx="4" fill="#2d2010" />
          <rect x="294" y="84" width="72" height="47" rx="2" fill="#f0e8d8" />
          <rect x="280" y="135" width="100" height="6" rx="2" fill="#3d2e14" />

          {/* Stats row */}
          <rect x="88" y="172" width="322" height="50" rx="0" fill="#fdf8ee" />
          <rect x="108" y="182" width="36" height="30" rx="4" fill="#f5e8c8" />
          <text x="126" y="202" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a1208">28</text>
          <rect x="158" y="182" width="36" height="30" rx="4" fill="#f5e8c8" />
          <text x="176" y="202" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a1208">9</text>
          <rect x="208" y="182" width="36" height="30" rx="4" fill="#f5e8c8" />
          <text x="226" y="202" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a1208">5</text>

          {/* Cards row */}
          <rect x="88" y="222" width="100" height="58" rx="4" fill="#f5e8c8" />
          <rect x="97" y="232" width="60" height="8" rx="3" fill="#1a1208" opacity="0.7" />
          <rect x="97" y="246" width="82" height="5" rx="2" fill="#1a120840" />
          <rect x="97" y="255" width="70" height="5" rx="2" fill="#1a120840" />
          <rect x="198" y="222" width="100" height="58" rx="4" fill="#f5e8c8" />
          <rect x="207" y="232" width="60" height="8" rx="3" fill="#1a1208" opacity="0.7" />
          <rect x="207" y="246" width="82" height="5" rx="2" fill="#1a120840" />
          <rect x="207" y="255" width="70" height="5" rx="2" fill="#1a120840" />
          <rect x="308" y="222" width="100" height="58" rx="4" fill="#f5e8c8" />
          <rect x="317" y="232" width="60" height="8" rx="3" fill="#1a1208" opacity="0.7" />
          <rect x="317" y="246" width="75" height="5" rx="2" fill="#1a120840" />
          <rect x="317" y="255" width="65" height="5" rx="2" fill="#1a120840" />

          {/* Base hinge area */}
          <rect x="60" y="278" width="380" height="8" rx="2" fill="#2d2010" />

          {/* Laptop base */}
          <path d="M 40 286 Q 38 296 50 296 L 450 296 Q 462 296 460 286 L 410 286 L 90 286 Z"
            fill="url(#baseGrad)" />
          <path d="M 40 286 L 460 286 L 450 296 L 50 296 Z"
            fill="url(#baseTop)" opacity="0.2" />
          {/* Trackpad */}
          <rect x="205" y="288" width="90" height="5" rx="2" fill="#1a120840" />
        </g>

        {/* Glow effect under laptop */}
        <ellipse cx="250" cy="330" rx="160" ry="16" fill="#F0B429" opacity="0.25" />
      </svg>

      {/* Floating badge */}
      <div className="absolute -top-4 -right-4 bg-dark text-gold-400 rounded-2xl px-4 py-2 text-sm font-body font-semibold shadow-xl border border-gold-500/20">
        ✦ Dev Agency
      </div>
    </div>
  );
}

// Counter component
function AnimatedCounter({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        let start = 0;
        const duration = 1500;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="w-20 h-20 bg-[#f5e8c8] rounded-2xl flex items-center justify-center shadow-inner">
        <span className="font-display text-4xl font-black text-dark">{count}</span>
      </div>
      <span className="mt-2 text-sm text-dark/60 font-body">{label}</span>
    </div>
  );
}

// Service card
function ServiceCard({ title, description, icon, delay }) {
  return (
    <div
      className="bg-[#f5e8c8] rounded-3xl p-8 opacity-0 animate-fade-up hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-display text-xl font-bold text-dark mb-3">{title}</h3>
      <p className="font-body text-dark/60 leading-relaxed text-sm">{description}</p>
      <div className="mt-6 flex items-center gap-2 text-gold-600 font-semibold text-sm group-hover:gap-3 transition-all">
        Learn more <span>→</span>
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-[#F8B936] overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid lg:grid-cols-2 gap-12 items-center py-24">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-dark/10 rounded-full px-4 py-2 text-sm font-semibold text-dark">
              <span className="w-2 h-2 bg-dark rounded-full animate-pulse" />
              {t("hero.available")}
            </div>
            <h1 className="font-display text-6xl lg:text-7xl font-black text-dark leading-tight">
              {t("hero.heading_line1")}<br />
              <span className="italic font-light">{t("hero.heading_line2")}</span><br />
              {t("hero.heading_line3")}
            </h1>
            <p className="font-body text-dark/70 text-lg leading-relaxed max-w-md">
              {t("hero.subtext")}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-dark text-gold-400 px-8 py-4 rounded-2xl font-semibold hover:bg-dark/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                {t("buttons.get_started")}
              </button>
              <button className="bg-transparent border-2 border-dark text-dark px-8 py-4 rounded-2xl font-semibold hover:bg-dark/10 transition-colors">
                {t("buttons.portfolio")}
              </button>
            </div>
          </div>

          {/* Right: 3D Laptop */}
          <div className="opacity-0 animate-fade-up animation-delay-300" style={{ animationFillMode: 'forwards' }}>
            <Laptop3D />
          </div>
        </div>
      </section>

      {/* Stats / Our Works */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Team illustration placeholder */}
            <div className="relative flex-shrink-0">
              <div className="w-64 h-64 bg-gold-400/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gold-400/30 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-40 h-40" xmlns="http://www.w3.org/2000/svg">
                    {/* Simple 3D team illustration */}
                    <circle cx="100" cy="60" r="28" fill="#F0B429" />
                    <circle cx="100" cy="60" r="22" fill="#f5d6a0" />
                    <ellipse cx="100" cy="140" rx="38" ry="30" fill="#F0B429" />
                    <circle cx="55" cy="75" r="20" fill="#d99a10" />
                    <ellipse cx="55" cy="140" rx="28" ry="22" fill="#d99a10" />
                    <circle cx="145" cy="75" r="20" fill="#F5C842" />
                    <ellipse cx="145" cy="140" rx="28" ry="22" fill="#F5C842" />
                    {/* Laptop */}
                    <rect x="72" y="148" width="56" height="32" rx="3" fill="#1a1208" />
                    <rect x="75" y="151" width="50" height="26" rx="2" fill="#f0e8d8" />
                    <rect x="65" y="180" width="70" height="5" rx="2" fill="#2d2010" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="font-display text-5xl font-black text-dark">Our Works</h2>
                <p className="text-dark/50 mt-2 font-body">Numbers that speak for themselves</p>
              </div>
              <div className="grid grid-cols-4 gap-6">
                <AnimatedCounter value={0} label="Awards" />
                <AnimatedCounter value={28} label="Projects" />
                <AnimatedCounter value={89} label="Clients" />
                <AnimatedCounter value={9} label="Years" />
              </div>
              <p className="font-body text-dark/60 leading-relaxed max-w-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-gold-600 font-semibold uppercase tracking-widest text-sm mb-3">What we do</p>
            <h2 className="font-display text-5xl font-black text-dark leading-tight">
              Services we're offering to<br />our consumers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Web Development"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
              icon="🖥️"
              delay={100}
            />
            <ServiceCard
              title="UI/UX Design"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
              icon="🎨"
              delay={250}
            />
            <ServiceCard
              title="Digital Marketing"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
              icon="📈"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #F0B429 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F0B429 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="font-display text-5xl font-black text-gold-400 mb-6">
            Ready to start your<br />next project?
          </h2>
          <p className="text-white/60 font-body mb-10 text-lg">
            Let's build something extraordinary together.
          </p>
          <button className="bg-gold-400 text-dark px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gold-500 transition-colors shadow-2xl hover:-translate-y-1 transform duration-200">
            Start a Project →
          </button>
        </div>
      </section>
    </div>
  );
}