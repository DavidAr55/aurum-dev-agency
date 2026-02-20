// src/pages/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";

// ─── Scroll fade-in utility (same as About) ───────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Project Data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "Nine Minutes Pizza",
    subtitle: "Plataforma de pedidos en línea",
    desc: "Sistema completo de pedidos en línea para cadena de pizzerías. Incluye selección de sucursales, menú interactivo, carrito de compras, registro de usuario y seguimiento de pedido en tiempo real.",
    url: "https://nineminutes.com.mx/",
    tags: ["E-commerce", "Web App"],
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    color: "#E8352A",
    accent: "#ffffff",
    category: "web",
    year: "2023",
    feature: "Pedidos en línea",
    highlight: "Cadena de pizzerías con múltiples sucursales y sistema de promociones integrado.",
    icon: "🍕",
  },
  {
    id: 2,
    title: "ATSE",
    subtitle: "Alta Tecnología en Sistemas de Ensamble",
    desc: "Sitio corporativo para empresa distribuidora de tornillos y sistemas de ensamble industrial. Catálogo de productos, formulario de cotización y presencia digital profesional para clientes B2B.",
    url: "https://atsegdltornillos.com/",
    tags: ["Corporativo", "B2B"],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    color: "#1A1208",
    accent: "#F0B429",
    category: "web",
    year: "2023",
    feature: "Catálogo B2B",
    highlight: "Portal industrial con catálogo de productos y sistema de cotización en línea.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Moviraider México",
    subtitle: "Distribuidora de baterías y energía",
    desc: "Sitio web para empresa distribuidora de baterías en Zapopan. Carousel de productos, información de tecnología de baterías, sección de recolección y contacto por WhatsApp integrado.",
    url: "https://moviraider.mx/",
    tags: ["Corporativo", "Landing"],
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#0f172a",
    accent: "#38BDF8",
    category: "web",
    year: "2024",
    feature: "E-commerce Local",
    highlight: "Landing con integración directa a WhatsApp Business y mapa de ubicación.",
    icon: "🔋",
  },
  {
    id: 4,
    title: "Sanar en Casa",
    subtitle: "Enfermería y Rehabilitación a Domicilio",
    desc: "Plataforma web para servicio de salud a domicilio en Guadalajara. Presenta servicios de rehabilitación pulmonar, renta de equipo médico, enfermería y agendamiento de citas. Diseño empático y accesible.",
    url: "https://www.sanarencasa.com.mx/",
    tags: ["Salud", "Landing"],
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#0e7490",
    accent: "#ffffff",
    category: "web",
    year: "2024",
    feature: "Servicios de Salud",
    highlight: "Portal de salud con agendamiento de citas y carousel de servicios especializados.",
    icon: "🏥",
  },
  {
    id: 5,
    title: "Hello World",
    subtitle: "Plataforma educativa de programación",
    desc: "Plataforma SaaS para aprender a programar. Incluye sistema de usuarios, planes de suscripción, secciones de práctica interactiva, blog y contenido educativo. Arquitectura full-stack robusta.",
    url: "https://helloworld.com.mx/",
    tags: ["SaaS", "EdTech", "Web App"],
    tech: ["JavaScript", "Node.js", "CSS", "MySQL"],
    color: "#4ECFA8",
    accent: "#0a2a1f",
    category: "webapp",
    year: "2023",
    feature: "SaaS / EdTech",
    highlight: "Plataforma de aprendizaje con suscripciones, editor de código y comunidad.",
    icon: "💻",
  },
  {
    id: 6,
    title: "Agencia Metropolitana de Bosques Urbanos",
    subtitle: "Portal gubernamental · CDMX",
    desc: "Colaboración de ingenieros y desarrolladores de Aurum en portal institucional para la gestión y difusión de bosques urbanos en la Ciudad de México. Sistema de información ambiental y participación ciudadana.",
    url: "#",
    tags: ["Gobierno", "Portal"],
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "#166534",
    accent: "#dcfce7",
    category: "sistema",
    year: "2022",
    feature: "Portal Gubernamental",
    highlight: "Sistema de gestión ambiental con módulos de participación ciudadana y reportes.",
    icon: "🌳",
  },
  {
    id: 7,
    title: "Radial Llantas",
    subtitle: "E-commerce de llantas y autopartes",
    desc: "Plataforma digital para distribuidora de llantas. Nuestros desarrolladores participaron en el sistema de catálogo, cotizador de medidas, carrito y proceso de compra integrado con pasarela de pago.",
    url: "#",
    tags: ["E-commerce", "Automotriz"],
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    color: "#18181b",
    accent: "#F0B429",
    category: "web",
    year: "2022",
    feature: "E-commerce Automotriz",
    highlight: "Catálogo con filtro por medidas de llanta, cotizador y checkout integrado.",
    icon: "🚗",
  },
];

const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "webapp", label: "Web App / SaaS" },
  { id: "sistema", label: "Sistemas" },
];

const STATS = [
  { value: "7+", label: "Proyectos reales" },
  { value: "5", label: "Industrias" },
  { value: "100%", label: "Entregados" },
  { value: "9+", label: "Años de exp." },
];

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => onClick(project)}
      className="rounded-3xl flex flex-col cursor-pointer group overflow-hidden relative"
      style={{
        backgroundColor: project.color,
        color: project.accent,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 70}ms, transform 0.6s ease ${index * 70}ms`,
        minHeight: "340px",
      }}
    >
      {/* Top section */}
      <div className="p-7 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: project.accent + "18", color: project.accent }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-body text-xs opacity-40 uppercase tracking-widest">{project.year}</span>
          </div>
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ml-3 group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: project.accent + "15" }}
          >
            {project.icon}
          </div>
        </div>

        {/* Title & desc */}
        <div className="flex-1">
          <h3 className="font-display text-2xl font-black leading-tight mb-2">{project.title}</h3>
          <p className="font-body text-xs uppercase tracking-widest mb-3" style={{ opacity: 0.5 }}>{project.subtitle}</p>
          <p className="font-body text-sm leading-relaxed" style={{ opacity: 0.65 }}>
            {project.desc.length > 120 ? project.desc.slice(0, 120) + "..." : project.desc}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-body text-[10px] font-semibold px-2 py-1 rounded-lg"
              style={{ backgroundColor: project.accent + "12", color: project.accent, opacity: 0.8 }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between px-7 py-4 border-t"
        style={{ borderColor: project.accent + "15" }}
      >
        <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ opacity: 0.4 }}>
          {project.feature}
        </span>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
          style={{ backgroundColor: project.accent, color: project.color }}
        >
          →
        </div>
      </div>

      {/* Decorative blob */}
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-[0.06] pointer-events-none"
        style={{ backgroundColor: project.accent }}
      />
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const esc = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "#1A120890", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: project.color, color: project.accent, maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg z-10 transition-all hover:scale-110"
          style={{ backgroundColor: project.accent + "20", color: project.accent }}
        >
          ×
        </button>

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ backgroundColor: project.accent + "15" }}
            >
              {project.icon}
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: project.accent + "20", color: project.accent }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-3xl font-black leading-tight">{project.title}</h2>
              <p className="font-body text-xs uppercase tracking-widest mt-1" style={{ opacity: 0.5 }}>{project.subtitle}</p>
            </div>
          </div>

          {/* Highlight strip */}
          <div
            className="rounded-2xl px-5 py-4 mb-6"
            style={{ backgroundColor: project.accent + "12" }}
          >
            <p className="font-body text-sm leading-relaxed font-medium" style={{ opacity: 0.8 }}>
              ✦ {project.highlight}
            </p>
          </div>

          {/* Full description */}
          <p className="font-body text-sm leading-relaxed mb-6" style={{ opacity: 0.7 }}>
            {project.desc}
          </p>

          {/* Tech stack */}
          <div className="mb-6">
            <p className="font-body text-xs uppercase tracking-widest mb-3" style={{ opacity: 0.4 }}>Stack tecnológico</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-body text-sm font-semibold px-4 py-2 rounded-xl"
                  style={{ backgroundColor: project.accent + "15", color: project.accent }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Meta row */}
          <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${project.accent}18` }}>
            <div>
              <p className="font-body text-xs uppercase tracking-widest" style={{ opacity: 0.4 }}>Año</p>
              <p className="font-display font-black text-xl">{project.year}</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-widest" style={{ opacity: 0.4 }}>Categoría</p>
              <p className="font-display font-black text-xl capitalize">{project.feature}</p>
            </div>
            {project.url !== "#" ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body font-semibold text-sm px-6 py-3 rounded-2xl transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: project.accent, color: project.color }}
              >
                Ver sitio <span>↗</span>
              </a>
            ) : (
              <div
                className="flex items-center gap-2 font-body font-semibold text-sm px-6 py-3 rounded-2xl opacity-40 cursor-not-allowed"
                style={{ backgroundColor: project.accent + "30", color: project.accent }}
              >
                Privado
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="font-body">

      {/* ── HERO ── */}
      <section className="bg-[#F8B936] relative overflow-hidden pt-28 pb-36">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F0B429]/40 -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#1A1208]/10 translate-y-1/2 -translate-x-1/3 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1A1208]/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A1208] animate-pulse" />
              <span className="text-[#1A1208] font-body font-semibold text-xs uppercase tracking-widest">Portafolio</span>
            </div>
            <h1 className="font-display text-6xl lg:text-7xl font-black text-[#1A1208] leading-tight mb-6">
              Proyectos que<br />
              <span className="italic font-light">hablan</span> por sí solos
            </h1>
            <p className="text-[#1A1208]/65 font-body text-lg leading-relaxed max-w-xl">
              Cada proyecto es una historia diferente. Aquí están algunos de los productos digitales que hemos construido junto a nuestros clientes.
            </p>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-5 mt-10">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-[#1A1208] rounded-2xl px-6 py-4 flex flex-col items-center shadow-xl">
                <span className="font-display font-black text-2xl text-[#F0B429]">{value}</span>
                <span className="font-body text-xs text-white/50 uppercase tracking-widest mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-12 fill-[#FDF8EE]">
            <path d="M0,60 C400,0 800,60 1200,0 L1200,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="bg-[#FDF8EE] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          {/* Filter pills */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-12">
              {CATEGORIES.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className="px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-all duration-200"
                  style={{
                    backgroundColor: activeCategory === id ? "#1A1208" : "transparent",
                    color: activeCategory === id ? "#F0B429" : "#1A120860",
                    border: `1.5px solid ${activeCategory === id ? "#1A1208" : "#1A120820"}`,
                  }}
                >
                  {label}
                  <span
                    className="ml-2 text-xs px-1.5 py-0.5 rounded-md font-normal"
                    style={{
                      backgroundColor: activeCategory === id ? "#F0B42920" : "#1A120810",
                      color: activeCategory === id ? "#F0B429" : "#1A120850",
                    }}
                  >
                    {id === "all" ? PROJECTS.length : PROJECTS.filter(p => p.category === id).length}
                  </span>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={setSelectedProject}
              />
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display text-2xl font-black text-[#1A1208]/20">Sin proyectos en esta categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* ── FEATURED HIGHLIGHT ── */}
      <section className="bg-[#f5e8c8] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-2 font-body">Destacado</p>
              <h2 className="font-display text-4xl font-black text-[#1A1208]">Proyecto estrella</h2>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-[#4ECFA8] rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[360px]">
              {/* Left: info */}
              <div className="p-10 flex flex-col justify-between">
                <div style={{ padding: "20px" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 bg-[#0a2a1f]/20 rounded-2xl flex items-center justify-center text-3xl">💻</div>
                    <div>
                      <div className="inline-flex gap-1.5 mb-1">
                        {["SaaS", "EdTech"].map(t => (
                          <span key={t} className="text-[10px] font-body font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-[#0a2a1f]/15 text-[#0a2a1f]">{t}</span>
                        ))}
                      </div>
                      <h3 className="font-display text-3xl font-black text-[#0a2a1f]">Hello World</h3>
                    </div>
                  </div>
                  <p className="font-body text-[#0a2a1f]/70 text-base leading-relaxed mb-6">
                    Plataforma SaaS completa para aprender a programar. Desde cero hasta proyectos reales, con planes de suscripción, editor interactivo y comunidad activa de estudiantes.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["JavaScript", "Node.js", "CSS", "MySQL"].map(t => (
                      <span key={t} className="font-body text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#0a2a1f]/10 text-[#0a2a1f]">{t}</span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://helloworld.com.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#0a2a1f] text-[#4ECFA8] px-7 py-3.5 rounded-2xl font-semibold font-body w-fit hover:bg-[#0a2a1f]/90 transition-colors shadow-xl hover:-translate-y-0.5 transform duration-200"
                >
                  Visitar sitio ↗
                </a>
              </div>

              {/* Right: decorative */}
              <div className="relative flex items-center justify-center p-10 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{ background: "radial-gradient(circle at 70% 50%, #0a2a1f 0%, transparent 70%)" }} />
                <div className="relative z-10 text-center">
                  <div className="font-display font-black text-8xl text-[#0a2a1f]/10 mb-4 leading-none select-none">&lt;/&gt;</div>
                  <div className="space-y-3">
                    {[
                      { label: "Módulos de aprendizaje", v: "12+" },
                      { label: "Ejercicios prácticos", v: "200+" },
                      { label: "Usuarios registrados", v: "5K+" },
                    ].map(({ label, v }) => (
                      <div key={label} className="bg-[#0a2a1f]/10 rounded-2xl px-5 py-3 flex items-center justify-between gap-8">
                        <span className="font-body text-xs text-[#0a2a1f]/60 text-left">{label}</span>
                        <span className="font-display font-black text-[#0a2a1f] text-lg">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-[#FDF8EE] py-20 border-t border-[#1A1208]/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-2 font-body">Experiencia</p>
              <h2 className="font-display text-4xl font-black text-[#1A1208]">Industrias en las que hemos trabajado</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { label: "Restaurantes & Food", icon: "🍕", color: "#E8352A" },
              { label: "Industrial & B2B", icon: "⚙️", color: "#F0B429" },
              { label: "Salud & Bienestar", icon: "🏥", color: "#4ECFA8" },
              { label: "Educación & EdTech", icon: "📚", color: "#B8A9E8" },
              { label: "Gobierno & Sector Público", icon: "🌳", color: "#166534" },
            ].map(({ label, icon, color }, i) => (
              <FadeIn key={label} delay={i * 70}>
                <div className="bg-[#f5e8c8] rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform duration-300 cursor-default">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mx-auto mb-3"
                    style={{ backgroundColor: color + "20" }}
                  >
                    {icon}
                  </div>
                  <p className="font-body text-xs font-semibold text-[#1A1208]/70 leading-snug">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A1208] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #F0B429 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F0B429 0%, transparent 50%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#F0B429]/50 font-semibold uppercase tracking-widest text-xs mb-3 font-body">¿Siguiente?</p>
          <h2 className="font-display text-5xl font-black text-[#F0B429] leading-tight mb-4">
            Tu proyecto podría<br />estar aquí
          </h2>
          <p className="text-white/50 font-body mb-10 text-lg max-w-xl mx-auto">
            Cuéntanos tu idea y construyamos algo extraordinario juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F0B429] text-[#1A1208] px-10 py-4 rounded-2xl font-semibold text-base hover:bg-[#F5C842] transition-colors shadow-2xl hover:-translate-y-1 transform duration-200">
              Iniciar un proyecto →
            </button>
            <button className="border border-white/20 text-white px-10 py-4 rounded-2xl font-semibold text-base hover:border-[#F0B429]/40 hover:text-[#F0B429] transition-colors">
              Ver servicios
            </button>
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

    </div>
  );
}