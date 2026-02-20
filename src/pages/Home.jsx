// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";

// ─── 3D Laptop SVG ────────────────────────────────────────────────────────────
function Laptop3D() {
  return (
    <div className="relative w-full max-w-lg mx-auto animate-float">
      <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
        <defs>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d2010" /><stop offset="100%" stopColor="#1a1208" />
          </linearGradient>
          <linearGradient id="screenFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f0e8d8" />
          </linearGradient>
          <linearGradient id="baseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d2e14" /><stop offset="100%" stopColor="#1a1208" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#1a120840" />
          </filter>
        </defs>
        <g filter="url(#shadow)">
          <path d="M 70 20 Q 70 10 80 10 L 420 10 Q 430 10 430 20 L 430 270 Q 430 280 420 280 L 80 280 Q 70 280 70 270 Z" fill="url(#screenGrad)" />
          <path d="M 80 22 L 418 22 L 418 268 L 80 268 Z" fill="url(#screenFace)" />
          <rect x="88" y="30" width="322" height="250" rx="2" fill="#fdf8ee" />
          <rect x="88" y="30" width="322" height="22" rx="2" fill="#1a1208" />
          <circle cx="100" cy="41" r="4" fill="#F0B429" />
          <rect x="112" y="37" width="60" height="8" rx="4" fill="#F0B429" opacity="0.6" />
          <rect x="280" y="37" width="30" height="8" rx="4" fill="#ffffff" opacity="0.3" />
          <rect x="320" y="37" width="30" height="8" rx="4" fill="#ffffff" opacity="0.3" />
          <rect x="360" y="37" width="40" height="8" rx="4" fill="#ffffff" opacity="0.3" />
          <rect x="88" y="52" width="322" height="120" rx="0" fill="#F5C842" />
          <rect x="100" y="68" width="80" height="14" rx="3" fill="#1a1208" />
          <rect x="100" y="88" width="110" height="10" rx="3" fill="#1a120880" />
          <rect x="100" y="104" width="90" height="10" rx="3" fill="#1a120860" />
          <rect x="100" y="122" width="50" height="16" rx="8" fill="#1a1208" />
          <rect x="160" y="122" width="50" height="16" rx="8" fill="none" stroke="#1a1208" strokeWidth="1.5" />
          <ellipse cx="330" cy="112" rx="55" ry="55" fill="#60a5fa" opacity="0.3" />
          <rect x="290" y="80" width="80" height="55" rx="4" fill="#2d2010" />
          <rect x="294" y="84" width="72" height="47" rx="2" fill="#f0e8d8" />
          <rect x="280" y="135" width="100" height="6" rx="2" fill="#3d2e14" />
          <rect x="88" y="172" width="322" height="50" rx="0" fill="#fdf8ee" />
          <rect x="108" y="182" width="36" height="30" rx="4" fill="#f5e8c8" />
          <text x="126" y="202" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a1208">28</text>
          <rect x="158" y="182" width="36" height="30" rx="4" fill="#f5e8c8" />
          <text x="176" y="202" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a1208">9</text>
          <rect x="208" y="182" width="36" height="30" rx="4" fill="#f5e8c8" />
          <text x="226" y="202" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a1208">5</text>
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
          <rect x="60" y="278" width="380" height="8" rx="2" fill="#2d2010" />
          <path d="M 40 286 Q 38 296 50 296 L 450 296 Q 462 296 460 286 L 410 286 L 90 286 Z" fill="url(#baseGrad)" />
          <rect x="205" y="288" width="90" height="5" rx="2" fill="#1a120840" />
        </g>
        <ellipse cx="250" cy="330" rx="160" ry="16" fill="#F0B429" opacity="0.25" />
      </svg>
      <div className="absolute -top-4 -right-4 bg-[#1A1208] text-[#F0B429] rounded-2xl px-4 py-2 text-sm font-semibold shadow-xl border border-[#F0B429]/20">
        ✦ Dev Agency
      </div>
    </div>
  );
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ value, label, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          setVisible(true);
          let start = null;
          const duration = 1800;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="relative w-28 h-28 bg-[#1A1208] rounded-3xl flex items-center justify-center shadow-2xl group hover:scale-105 transition-transform duration-300 overflow-hidden">
        {/* Shimmer line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F0B429]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F0B429]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0B429]/5 to-transparent" />
        <span className="font-display text-4xl font-black text-[#F0B429] relative z-10 tabular-nums">
          {count}{suffix}
        </span>
      </div>
      <span className="mt-3 text-sm text-[#1A1208]/60 font-body font-medium tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

// ─── Service Card (featured-plans style) ─────────────────────────────────────
const SERVICE_COLORS = {
  mint:    { bg: "#4ECFA8", text: "#0a2a1f", badge: "#0a2a1f", badgeText: "#4ECFA8" },
  dark:    { bg: "#1A1208", text: "#ffffff", badge: "#F0B429", badgeText: "#1A1208" },
  purple:  { bg: "#B8A9E8", text: "#1a1040", badge: "#1a1040", badgeText: "#B8A9E8" },
  yellow:  { bg: "#F5E642", text: "#1a1a00", badge: "#1a1a00", badgeText: "#F5E642" },
};

function ServiceCard({ color, type, title, description, metric, metricLabel, icon, delay }) {
  const c = SERVICE_COLORS[color];
  return (
    <div
      className="rounded-3xl p-7 flex flex-col justify-between min-h-[260px] opacity-0 animate-fade-up cursor-pointer group hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden"
      style={{ backgroundColor: c.bg, color: c.text, animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span
            className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-full font-body"
            style={{ backgroundColor: c.badge + "30", color: color === "dark" ? "#F0B429" : c.text + "99" }}
          >
            {type}
          </span>
          <h3 className="font-display text-2xl font-black mt-2 leading-tight">{title}</h3>
        </div>
        <span className="text-3xl opacity-80 mt-1">{icon}</span>
      </div>

      {/* Description */}
      <p className="font-body text-sm leading-relaxed opacity-75 flex-1 mb-4">{description}</p>

      {/* Bottom row */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs opacity-50 font-body uppercase tracking-widest mb-0.5">{metricLabel}</p>
          <p className="font-display text-3xl font-black">{metric}</p>
        </div>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all group-hover:scale-110 group-hover:rotate-12"
          style={{ backgroundColor: c.badge, color: c.badgeText }}
        >
          →
        </div>
      </div>

      {/* Decorative corner */}
      <div
        className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10"
        style={{ backgroundColor: color === "dark" ? "#F0B429" : c.text }}
      />
    </div>
  );
}

// ─── Tech Carousel ────────────────────────────────────────────────────────────
const TECHS = [
  { name: "React", icon: "⚛️", color: "#61DAFB", desc: "UI library for building interactive interfaces" },
  { name: "Next.js", icon: "▲", color: "#ffffff", desc: "React framework for production-grade apps" },
  { name: "TypeScript", icon: "TS", color: "#3178C6", desc: "Typed JavaScript for scalable codebases" },
  { name: "Node.js", icon: "⬡", color: "#8CC84B", desc: "JavaScript runtime for server-side development" },
  { name: "Flutter", icon: "◆", color: "#54C5F8", desc: "Cross-platform mobile apps from one codebase" },
  { name: "React Native", icon: "◉", color: "#61DAFB", desc: "Native mobile apps with React" },
  { name: "Python", icon: "🐍", color: "#F7C948", desc: "Versatile language for backends & automation" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1", desc: "Robust relational database" },
  { name: "MongoDB", icon: "🍃", color: "#4DB33D", desc: "Flexible NoSQL document database" },
  { name: "Docker", icon: "🐳", color: "#2496ED", desc: "Containerization for consistent deployments" },
  { name: "Figma", icon: "◈", color: "#F24E1E", desc: "Collaborative UI/UX design tool" },
  { name: "Tailwind", icon: "🌊", color: "#38BDF8", desc: "Utility-first CSS framework" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28", desc: "Google's backend-as-a-service platform" },
  { name: "GraphQL", icon: "◈", color: "#E10098", desc: "Flexible API query language" },
];

function TechBadge({ tech }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative flex-shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ zIndex: hovered ? 30 : "auto" }}
    >
      <div
        className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border cursor-pointer min-w-[140px] transition-all duration-300"
        style={{
          backgroundColor: hovered ? "#1A1208" : "#FDF8EE",
          borderColor: hovered ? tech.color + "60" : "#1A120815",
          transform: hovered ? "scale(1.08) translateY(-3px)" : "scale(1)",
          boxShadow: hovered ? `0 12px 32px ${tech.color}30, 0 4px 12px #1A120820` : "none",
        }}
      >
        <span
          className="text-lg w-8 h-8 flex items-center justify-center rounded-lg font-bold flex-shrink-0 font-body text-sm transition-all duration-300"
          style={{
            backgroundColor: hovered ? tech.color + "25" : tech.color + "18",
            color: tech.color,
          }}
        >
          {tech.icon}
        </span>
        <span
          className="font-body font-semibold text-sm whitespace-nowrap transition-colors duration-300"
          style={{ color: hovered ? "#ffffff" : "#1A1208" }}
        >
          {tech.name}
        </span>
      </div>

      {/* Tooltip — aparece arriba con animación */}
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none transition-all duration-200"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(-50%) translateY(0px)" : "translateX(-50%) translateY(6px)",
        }}
      >
        <div
          className="rounded-2xl px-4 py-3 shadow-2xl font-body text-center min-w-[180px] border"
          style={{
            backgroundColor: "#1A1208",
            borderColor: tech.color + "40",
            boxShadow: `0 16px 40px #1A120860, 0 0 0 1px ${tech.color}20`,
          }}
        >
          {/* Tech name en color */}
          <p className="font-display font-black text-sm mb-1" style={{ color: tech.color }}>
            {tech.name}
          </p>
          {/* Descripción */}
          <p className="text-white/70 text-xs leading-relaxed">{tech.desc}</p>
          {/* Arrow */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent"
            style={{ borderTopColor: tech.color + "40" }}
          />
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-[-1px] border-[5px] border-transparent"
            style={{ borderTopColor: "#1A1208" }}
          />
        </div>
      </div>
    </div>
  );
}

function TechCarousel() {
  const half = Math.ceil(TECHS.length / 2);
  const row1 = TECHS.slice(0, half);
  const row2 = TECHS.slice(half);

  // Seamless loop: render exactly 2 identical copies side-by-side.
  // Animation moves -50% (one full copy width), then resets — perfectly seamless.
  const trackStyle = (name, duration) => ({
    display: "flex",
    gap: "16px",
    width: "max-content",
    willChange: "transform",
    animation: `${name} ${duration} linear infinite`,
  });

  return (
    <>
      <style>{`
        @keyframes aurum-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes aurum-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-row:hover .marquee-inner {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
        {/* Row 1 — scrolls left */}
        <div className="marquee-row overflow-hidden relative mb-4">
          <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #FDF8EE 0%, transparent 100%)" }} />
          <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #FDF8EE 0%, transparent 100%)" }} />
          <div className="marquee-inner" style={trackStyle("aurum-left", "36s")}>
            {[...row1, ...row1].map((tech, i) => <TechBadge key={`r1-${i}`} tech={tech} />)}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-row overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #FDF8EE 0%, transparent 100%)" }} />
          <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #FDF8EE 0%, transparent 100%)" }} />
          <div className="marquee-inner" style={trackStyle("aurum-right", "28s")}>
            {[...row2, ...row2].map((tech, i) => <TechBadge key={`r2-${i}`} tech={tech} />)}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Portfolio Card ───────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: "FinTrack Dashboard",
    type: "Web App · Fintech",
    desc: "Panel de control financiero con gráficas en tiempo real, análisis de gastos e integración con múltiples cuentas bancarias.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "#1A1208",
    accent: "#F0B429",
    year: "2024",
  },
  {
    title: "MedConnect",
    type: "Mobile App · Health",
    desc: "App multiplataforma para citas médicas, historial clínico y teleconsultas. Disponible en Android e iOS.",
    tags: ["Flutter", "Firebase", "Python"],
    color: "#4ECFA8",
    accent: "#0a2a1f",
    year: "2024",
  },
  {
    title: "ShopWave",
    type: "E-commerce · Retail",
    desc: "Plataforma de e-commerce con carrito en tiempo real, pagos integrados y panel administrativo avanzado.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    color: "#B8A9E8",
    accent: "#1a1040",
    year: "2023",
  },
  {
    title: "TaskFlow",
    type: "SaaS · Productivity",
    desc: "Sistema de gestión de proyectos con tableros Kanban, colaboración en tiempo real y automatizaciones.",
    tags: ["React", "GraphQL", "Node.js"],
    color: "#F5E642",
    accent: "#1a1a00",
    year: "2023",
  },
  {
    title: "Arcana UI Kit",
    type: "Design System · UI/UX",
    desc: "Sistema de diseño completo con más de 200 componentes, tokens de color y guías de uso para equipos de producto.",
    tags: ["Figma", "React", "Tailwind"],
    color: "#1A1208",
    accent: "#F0B429",
    year: "2023",
  },
  {
    title: "LogiFleet",
    type: "System · Logistics",
    desc: "Sistema de gestión de flotas con rastreo GPS, análisis de rutas óptimas y reportes automatizados.",
    tags: ["Python", "Docker", "PostgreSQL"],
    color: "#f5e8c8",
    accent: "#1A1208",
    year: "2022",
  },
];

function PortfolioCard({ project, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-3xl p-7 flex flex-col justify-between min-h-[320px] cursor-pointer group hover:scale-[1.02] hover:shadow-2xl transition-all duration-400 relative overflow-hidden"
      style={{
        backgroundColor: project.color,
        color: project.accent,
        transitionDelay: `${index * 80}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms, box-shadow 0.3s ease, scale 0.3s ease`,
      }}
    >
      {/* Year badge */}
      <div className="flex items-start justify-between mb-6">
        <span
          className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full font-body"
          style={{ backgroundColor: project.accent + "18", color: project.accent }}
        >
          {project.type}
        </span>
        <span className="text-xs font-body opacity-40 font-medium">{project.year}</span>
      </div>

      {/* Title */}
      <div className="flex-1">
        <h3 className="font-display text-2xl font-black leading-tight mb-3">{project.title}</h3>
        <p className="font-body text-sm leading-relaxed opacity-70">{project.desc}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-5 mb-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-body font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: project.accent + "15", color: project.accent }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="flex justify-end mt-2">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all group-hover:scale-110 group-hover:rotate-12"
          style={{ backgroundColor: project.accent, color: project.color }}
        >
          →
        </div>
      </div>

      {/* Decorative blob */}
      <div
        className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full opacity-[0.07]"
        style={{ backgroundColor: project.accent }}
      />
    </div>
  );
}

// ─── Main Home Component ──────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="font-body">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] bg-[#F8B936] overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0B429]/40 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1A1208]/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid lg:grid-cols-2 gap-12 items-center py-28">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#1A1208]/10 rounded-full px-4 py-2 text-sm font-semibold text-[#1A1208]">
              <span className="w-2 h-2 bg-[#1A1208] rounded-full animate-pulse" />
              Available for new projects
            </div>
            <h1 className="font-display text-6xl lg:text-7xl font-black text-[#1A1208] leading-tight">
              Landing Page<br />
              <span className="italic font-light">Wireframe</span><br />
              Website
            </h1>
            <p className="font-body text-[#1A1208]/70 text-lg leading-relaxed max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1A1208] text-[#F0B429] px-8 py-4 rounded-2xl font-semibold hover:bg-[#1A1208]/90 transition-colors shadow-lg hover:-translate-y-0.5 transform duration-200">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-[#1A1208] text-[#1A1208] px-8 py-4 rounded-2xl font-semibold hover:bg-[#1A1208]/10 transition-colors">
                Our Portfolio
              </button>
            </div>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            <Laptop3D />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-[#FDF8EE]">
            <path d="M0,80 C300,0 900,80 1200,0 L1200,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── OUR WORKS ── */}
      <section className="bg-[#FDF8EE] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Modern isometric illustration */}
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#1A1208]/10 animate-spin" style={{ animationDuration: "30s" }} />
                {/* Inner glow */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#F8B936]/30 to-[#F0B429]/10" />

                {/* Central icon block */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#1A1208] w-40 h-40 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F0B429]/50 to-transparent" />
                    <span className="text-4xl">📊</span>
                    <span className="text-[#F0B429] font-display font-black text-sm">Our Works</span>
                  </div>
                </div>

                {/* Orbiting dots */}
                {[0, 72, 144, 216, 288].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: i === 0 ? "#F0B429" : i === 1 ? "#4ECFA8" : i === 2 ? "#B8A9E8" : i === 3 ? "#F5E642" : "#1A1208",
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translateX(130px) translateY(-50%)`,
                      boxShadow: `0 0 12px ${i === 0 ? "#F0B429" : "#ffffff"}40`,
                    }}
                  />
                ))}

                {/* Floating metric chips */}
                <div className="absolute -top-2 -right-4 bg-white rounded-2xl px-3 py-2 shadow-xl border border-[#1A1208]/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4ECFA8]" />
                  <span className="text-xs font-body font-semibold text-[#1A1208]">+40% growth</span>
                </div>
                <div className="absolute -bottom-2 -left-4 bg-white rounded-2xl px-3 py-2 shadow-xl border border-[#1A1208]/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F0B429]" />
                  <span className="text-xs font-body font-semibold text-[#1A1208]">98% satisfaction</span>
                </div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="space-y-10">
              <div>
                <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-2 font-body">Metrics</p>
                <h2 className="font-display text-5xl font-black text-[#1A1208] leading-tight">Our Works</h2>
                <p className="text-[#1A1208]/50 mt-2 font-body">Numbers that speak louder than words.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <AnimatedCounter value={28} label="Projects" suffix="+" />
                <AnimatedCounter value={89} label="Clients" suffix="+" />
                <AnimatedCounter value={9} label="Years" suffix="+" />
                <AnimatedCounter value={98} label="Satisfied" suffix="%" />
              </div>

              <p className="font-body text-[#1A1208]/60 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.
              </p>

              <button className="inline-flex items-center gap-3 bg-[#1A1208] text-[#F0B429] px-7 py-3.5 rounded-2xl font-semibold font-body hover:bg-[#1A1208]/90 transition-colors">
                View All Projects <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#FDF8EE] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-2 font-body">What we do</p>
              <h2 className="font-display text-5xl font-black text-[#1A1208] leading-tight">
                Services we're<br />offering to you
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[#1A1208]/50 hover:text-[#1A1208] font-body font-medium transition-colors text-sm">
              Explore All <span className="text-lg">→</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              color="mint"
              type="Strategy"
              title="Web Development"
              description="From landing pages to complex web apps. We build fast, accessible and beautifully crafted experiences."
              metric="Basic → Pro"
              metricLabel="Complexity level"
              icon="🌐"
              delay={0}
            />
            <ServiceCard
              color="dark"
              type="Systems"
              title="System Development"
              description="Custom software systems tailored to your business logic. APIs, backends, microservices and integrations."
              metric="Full Stack"
              metricLabel="Coverage"
              icon="⚙️"
              delay={120}
            />
            <ServiceCard
              color="purple"
              type="Strategy"
              title="Mobile Apps"
              description="Cross-platform mobile apps for Android & iOS. One codebase, two platforms, native performance."
              metric="iOS + Android"
              metricLabel="Platforms"
              icon="📱"
              delay={240}
            />
            <ServiceCard
              color="yellow"
              type="Design"
              title="UI/UX Design"
              description="Clean, minimal and modern interfaces that users love. From wireframes to pixel-perfect prototypes."
              metric="100% Custom"
              metricLabel="Design approach"
              icon="✦"
              delay={360}
            />
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="bg-[#FDF8EE] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12">
          <div className="text-center">
            <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-2 font-body">Our Stack</p>
            <h2 className="font-display text-5xl font-black text-[#1A1208] leading-tight mb-3">
              Technologies we use
            </h2>
            <p className="text-[#1A1208]/50 font-body max-w-xl mx-auto">
              We work with modern, battle-tested technologies to deliver fast, scalable and maintainable products.
            </p>
          </div>
        </div>

        <TechCarousel />

        {/* Pause hint */}
        <p className="text-center text-xs text-[#1A1208]/30 font-body mt-6">Hover any technology to learn more</p>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="bg-[#f5e8c8] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-2 font-body">Our Work</p>
              <h2 className="font-display text-5xl font-black text-[#1A1208] leading-tight">
                Selected<br />Projects
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[#1A1208]/50 hover:text-[#1A1208] font-body font-medium transition-colors text-sm border border-[#1A1208]/20 px-5 py-2.5 rounded-xl hover:border-[#1A1208]/40">
              View All <span>→</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project, i) => (
              <PortfolioCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── BLOG ── */}
      <BlogSection />

      {/* ── CONTACT ── */}
      <ContactSection />

      {/* ── CTA ── */}
      <section className="bg-[#1A1208] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #F0B429 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F0B429 0%, transparent 50%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="font-display text-5xl font-black text-[#F0B429] mb-6">
            Ready to start your<br />next project?
          </h2>
          <p className="text-white/60 font-body mb-10 text-lg">
            Let's build something extraordinary together.
          </p>
          <button className="bg-[#F0B429] text-[#1A1208] px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-[#F5C842] transition-colors shadow-2xl hover:-translate-y-1 transform duration-200">
            Start a Project →
          </button>
        </div>
      </section>

    </div>
  );
}

// ─── TESTIMONIALS DATA & COMPONENT ───────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Carlos Mendoza",
    role: "CEO · StartupMX",
    initials: "CM",
    color: "#4ECFA8",
    quote: "Desde que pusimos en manos de Aurum el desarrollo de nuestra plataforma, los resultados han sido increíbles. El sitio es visualmente impecable y funciona perfecto en cualquier dispositivo. Siempre están ahí para apoyarte.",
    highlight: ["resultados han sido increíbles", "perfecto en cualquier dispositivo"],
  },
  {
    name: "Ana Rodríguez",
    role: "Directora de Producto · FinTrack",
    initials: "AR",
    color: "#B8A9E8",
    quote: "El equipo de Aurum transformó completamente nuestra visión en una app móvil que nuestros usuarios aman. La calidad del código, la atención al detalle y la comunicación durante todo el proyecto fueron excepcionales.",
    highlight: ["app móvil que nuestros usuarios aman", "excepcionales"],
  },
  {
    name: "Luis Hernández",
    role: "CTO · LogiFleet",
    initials: "LH",
    color: "#F0B429",
    quote: "Necesitábamos un sistema de gestión robusto y escalable. Aurum entendió desde el primer día lo que necesitábamos y entregaron una solución que superó todas nuestras expectativas en tiempo y forma.",
    highlight: ["superó todas nuestras expectativas"],
  },
  {
    name: "Sofía Vargas",
    role: "Fundadora · Arcana Studio",
    initials: "SV",
    color: "#F5E642",
    quote: "Trabajar con Aurum en nuestro sistema de diseño fue una experiencia increíble. Su dominio del UI/UX y la precisión con la que ejecutaron cada componente nos ahorraron meses de trabajo interno.",
    highlight: ["experiencia increíble", "ahorraron meses de trabajo"],
  },
  {
    name: "Roberto Kim",
    role: "Director Comercial · MedConnect",
    initials: "RK",
    color: "#4ECFA8",
    quote: "La app que desarrollaron para nosotros ha sido descargada miles de veces y tiene una calificación de 4.9 en ambas plataformas. La inversión en Aurum fue la mejor decisión que tomamos este año.",
    highlight: ["4.9 en ambas plataformas", "mejor decisión"],
  },
];

function highlightText(text, highlights) {
  if (!highlights || highlights.length === 0) return text;
  let parts = [text];
  for (const h of highlights) {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const idx = part.toLowerCase().indexOf(h.toLowerCase());
      if (idx === -1) return [part];
      return [
        part.slice(0, idx),
        <strong key={h} className="font-bold text-[#1A1208]">{part.slice(idx, idx + h.length)}</strong>,
        part.slice(idx + h.length),
      ];
    });
  }
  return parts;
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const t = TESTIMONIALS[active];

  return (
    <section className="bg-[#FDF8EE] py-28 relative overflow-hidden">
      {/* Decorative bg arc */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#f5e8c8]/60 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-2 font-body">Testimonios</p>
          <h2 className="font-display text-5xl font-black text-[#1A1208]">Lo que dicen<br />nuestros clientes</h2>
        </div>

        {/* Card */}
        <div className="relative bg-white rounded-[2rem] shadow-2xl px-10 py-12 text-center border border-[#1A1208]/5 min-h-[320px] flex flex-col items-center justify-between transition-all duration-500">
          {/* Avatar */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center font-display font-black text-xl text-[#1A1208] shadow-lg mb-2"
            style={{ backgroundColor: t.color }}
          >
            {t.initials}
          </div>

          {/* Name */}
          <div className="mb-6">
            <p className="font-display font-bold text-lg text-[#1A1208]">{t.name}</p>
            <p className="font-body text-sm text-[#1A1208]/50">{t.role}</p>
          </div>

          {/* Quote */}
          <blockquote className="font-body text-[#1A1208]/70 text-lg leading-relaxed max-w-2xl mx-auto mb-6 italic">
            "{highlightText(t.quote, t.highlight)}"
          </blockquote>

          {/* Stars */}
          <div className="flex gap-1 text-[#F0B429] text-xl mb-2">
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border-2 border-[#1A1208]/20 flex items-center justify-center hover:border-[#1A1208] hover:bg-[#1A1208] hover:text-white text-[#1A1208] transition-all duration-200 font-bold"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === active ? "#F0B429" : "#1A120830",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-[#F0B429] flex items-center justify-center hover:bg-[#F5C842] text-[#1A1208] transition-all duration-200 font-bold shadow-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── BLOG DATA & COMPONENT ────────────────────────────────────────────────────
const POSTS = [
  {
    date: { day: "15", month: "Ene" },
    category: "Web Dev",
    categoryColor: "#4ECFA8",
    title: "Ventajas de desarrollar una página web a la medida",
    excerpt: "La decisión de desarrollar una página web por lo general conlleva a múltiples beneficios que pueden transformar la presencia digital de tu empresa.",
    bg: "#F0B429",
  },
  {
    date: { day: "04", month: "Mar" },
    category: "Mobile",
    categoryColor: "#B8A9E8",
    title: "Aspectos clave para hacer una app móvil exitosa",
    excerpt: "¿Has considerado hacer una app para tu negocio? ¿Sabes cuánto ha incrementado el uso de aplicaciones móviles en los últimos años?",
    bg: "#1A1208",
  },
  {
    date: { day: "27", month: "Jun" },
    category: "Sistemas",
    categoryColor: "#F5E642",
    title: "Beneficios de tener un sistema de gestión empresarial",
    excerpt: "Tener un sistema de gestión en línea es mejor de lo que crees. A continuación te compartimos los principales beneficios.",
    bg: "#4ECFA8",
  },
];

function BlogSection() {
  return (
    <section className="bg-[#FDF8EE] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-5">
          <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-2 font-body">Blog</p>
          <h2 className="font-display text-5xl font-black text-[#1A1208] mb-4">
            Últimas publicaciones
          </h2>
          <p className="font-body text-[#1A1208]/60 max-w-2xl mx-auto">
            Entérate de las <strong className="text-[#1A1208]">novedades</strong> de nuestra empresa o simplemente lee{" "}
            <strong className="text-[#1A1208]">artículos de interés</strong> relacionados con el{" "}
            <strong className="text-[#1A1208]">desarrollo web</strong>, aplicaciones móviles o{" "}
            <strong className="text-[#1A1208]">diseño de interfaces</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 mt-14">
          {POSTS.map((post, i) => (
            <article
              key={i}
              className="group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Image area */}
              <div
                className="relative w-full h-52 rounded-2xl overflow-hidden mb-5 flex items-end p-5"
                style={{ backgroundColor: post.bg }}
              >
                {/* Date badge */}
                <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-lg min-w-[52px]">
                  <p className="font-display font-black text-lg text-[#1A1208] leading-none">{post.date.day}</p>
                  <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-[#1A1208]/60">{post.date.month}</p>
                </div>

                {/* Category badge */}
                <span
                  className="absolute top-4 right-4 text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: post.categoryColor + "25", color: post.categoryColor === "#F5E642" ? "#1a1a00" : post.categoryColor }}
                >
                  {post.category}
                </span>

                {/* Decorative shapes */}
                <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-10 bg-white -mb-8 -mr-8" />
                <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-2xl opacity-10 bg-white rotate-12 -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Text */}
              <h3 className="font-display text-lg font-bold text-[#1A1208] mb-2 group-hover:text-[#d99a10] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="font-body text-sm text-[#1A1208]/55 leading-relaxed mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <button className="font-body text-sm font-semibold text-[#d99a10] hover:gap-3 flex items-center gap-1.5 transition-all group-hover:gap-2.5">
                Leer más <span>→</span>
              </button>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-[#1A1208]/20 text-[#1A1208] px-8 py-3 rounded-2xl font-body font-semibold hover:border-[#1A1208] hover:bg-[#1A1208] hover:text-white transition-all duration-200">
            Ver todas las publicaciones <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT SECTION ─────────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", service: "", message: "" });
  };

  const SERVICES_LIST = [
    "Desarrollo Web", "Desarrollo de Sistemas", "App Móvil", "UI/UX Design", "Otro",
  ];

  const INFO = [
    { icon: "📍", label: "Ubicación", value: "Ciudad de México, México" },
    { icon: "📧", label: "Email", value: "hola@aurum.dev" },
    { icon: "📱", label: "WhatsApp", value: "+52 55 1234 5678" },
    { icon: "🕐", label: "Horario", value: "Lun – Vie, 9am – 6pm" },
  ];

  return (
    <section className="bg-[#1A1208] py-28 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, #F0B429 0%, transparent 40%), radial-gradient(circle at 90% 80%, #F0B429 0%, transparent 40%)" }} />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F0B429]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
        <div className="text-center mb-16">
          <p className="text-[#F0B429]/60 font-semibold uppercase tracking-widest text-xs mb-2 font-body">Contacto</p>
          <h2 className="font-display text-5xl font-black text-white leading-tight mb-3">
            Hablemos de tu<br /><span className="text-[#F0B429]">próximo proyecto</span>
          </h2>
          <p className="text-white/50 font-body max-w-xl mx-auto">
            Cuéntanos tu idea y te respondemos en menos de 24 horas con una propuesta personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: Info cards */}
          <div className="lg:col-span-2 space-y-4">
            {INFO.map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 bg-white/5 rounded-2xl px-5 py-4 border border-white/10 hover:border-[#F0B429]/30 transition-colors group">
                <div className="w-11 h-11 bg-[#F0B429]/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#F0B429]/20 transition-colors">
                  {icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs font-body uppercase tracking-widest">{label}</p>
                  <p className="text-white font-body font-medium text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {["LinkedIn", "GitHub", "Dribbble"].map((s) => (
                <button key={s} className="flex-1 bg-white/5 hover:bg-[#F0B429]/10 border border-white/10 hover:border-[#F0B429]/30 text-white/60 hover:text-[#F0B429] font-body text-xs py-3 rounded-xl transition-all font-medium">
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white/5 rounded-3xl p-8 border border-white/10">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 bg-[#4ECFA8]/20 rounded-full flex items-center justify-center text-3xl mb-4">✓</div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                <p className="text-white/50 font-body">Te contactaremos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs font-body uppercase tracking-widest mb-2">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-body uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-body uppercase tracking-widest mb-2">Servicio de interés</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white font-body text-sm focus:outline-none focus:border-[#F0B429]/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1A1208]">Selecciona un servicio...</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s} className="bg-[#1A1208]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-body uppercase tracking-widest mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y plazos..."
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-[#F0B429]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F0B429] text-[#1A1208] py-4 rounded-2xl font-semibold font-body text-base hover:bg-[#F5C842] transition-colors shadow-xl hover:-translate-y-0.5 transform duration-200 flex items-center justify-center gap-2"
                >
                  Enviar mensaje <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}