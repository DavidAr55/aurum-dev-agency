// src/pages/About.jsx
import React, { useEffect, useRef, useState } from "react";

// ─── Team Data ────────────────────────────────────────────────────────────────
const TEAM = [
  {
    name: "Alejandro Ruiz",
    role: "CEO & Founder",
    initials: "AR",
    color: "#F0B429",
    bio: "10+ años liderando proyectos digitales. Apasionado por convertir ideas en productos que impactan.",
  },
  {
    name: "Daniela Torres",
    role: "Lead Developer",
    initials: "DT",
    color: "#4ECFA8",
    bio: "Arquitecta de software full-stack. Experta en sistemas escalables y arquitecturas limpias.",
  },
  {
    name: "Marco Ibáñez",
    role: "Mobile Engineer",
    initials: "MI",
    color: "#B8A9E8",
    bio: "Especialista en Flutter y React Native. Ha lanzado más de 15 apps a producción.",
  },
  {
    name: "Valeria Soto",
    role: "UI/UX Designer",
    initials: "VS",
    color: "#F5E642",
    bio: "Diseña interfaces que el usuario ama. Obsesionada con la accesibilidad y los detalles.",
  },
  {
    name: "Rodrigo Méndez",
    role: "Backend Engineer",
    initials: "RM",
    color: "#F0B429",
    bio: "Domina Node.js, Python y bases de datos. Hace que los sistemas vuelen bajo el capó.",
  },
  {
    name: "Camila Fuentes",
    role: "Project Manager",
    initials: "CF",
    color: "#4ECFA8",
    bio: "Garantiza que cada entrega sea a tiempo. El eslabón que conecta visión con ejecución.",
  },
];

// ─── Client logos ─────────────────────────────────────────────────────────────
const CLIENTS = [
  "AMD", "FinTrack", "MedConnect", "ShopWave", "PROCAM",
  "Deslart", "Bengala Studio", "NizaCorp", "Verde Valle", "LogiFleet",
  "TaskFlow", "PortalGeek", "Arcana", "Sumie Ideas", "Redhogar",
  "SAVVY", "PCZ.MX", "CAD/CAM", "TILLIT", "Pase Directo",
];

// ─── Process steps ────────────────────────────────────────────────────────────
const PROCESS = [
  {
    step: "01",
    title: "Descubrimiento",
    desc: "Nos sumergimos en tu negocio. Analizamos objetivos, audiencia, competencia y restricciones técnicas para definir una hoja de ruta sólida.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Diseño & Prototipo",
    desc: "Creamos wireframes y prototipos interactivos. Validamos cada flujo antes de escribir una sola línea de código.",
    icon: "✦",
  },
  {
    step: "03",
    title: "Desarrollo",
    desc: "Construimos con las mejores tecnologías del mercado. Código limpio, revisiones constantes y entregas incrementales.",
    icon: "⚙️",
  },
  {
    step: "04",
    title: "Lanzamiento & Soporte",
    desc: "Desplegamos, monitoreamos y optimizamos. No desaparecemos después del go-live; somos tu equipo a largo plazo.",
    icon: "🚀",
  },
];

const VALUES = [
  { label: "Calidad sin compromiso", icon: "◈", color: "#F0B429" },
  { label: "Comunicación radical", icon: "◉", color: "#4ECFA8" },
  { label: "Innovación constante", icon: "◆", color: "#B8A9E8" },
  { label: "Resultados medibles", icon: "▲", color: "#F5E642" },
];

// ─── Scroll fade-in utility ───────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
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
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="font-body">

      {/* ── HERO ── */}
      <section className="bg-[#1A1208] relative overflow-hidden pt-28 pb-36">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, #F0B42918 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0B429] animate-pulse" />
            <span className="text-[#F0B429] font-body font-semibold text-xs uppercase tracking-widest">Nosotros</span>
          </div>

          <h1 className="font-display text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Construimos el futuro<br />
            <span className="text-[#F0B429]">digital</span> de tu empresa
          </h1>

          <p className="text-white/55 font-body text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Somos Aurum, una agencia de desarrollo de software enfocada en crear productos digitales de alto impacto. Diseño, código y estrategia en un solo equipo.
          </p>

          {/* Metric strip */}
          <div className="inline-flex flex-wrap justify-center gap-px rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            {[
              { v: "28+", l: "Proyectos" },
              { v: "89+", l: "Clientes" },
              { v: "9+", l: "Años" },
              { v: "12+", l: "Países" },
            ].map(({ v, l }) => (
              <div key={l} className="bg-white/5 px-8 py-4 flex flex-col items-center gap-0.5">
                <span className="font-display font-black text-2xl text-[#F0B429]">{v}</span>
                <span className="font-body text-xs text-white/40 uppercase tracking-widest">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-12 fill-[#FDF8EE]">
            <path d="M0,60 C400,0 800,60 1200,0 L1200,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section className="bg-[#FDF8EE] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <FadeIn>
              <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-3 font-body">Quiénes somos</p>
              <h2 className="font-display text-5xl font-black text-[#1A1208] leading-tight mb-6">
                Más que una agencia,<br />somos tu equipo
              </h2>
              <p className="text-[#1A1208]/60 font-body leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aurum nació con una misión clara: democratizar el acceso a software de calidad para empresas de todos los tamaños. Desde startups hasta corporativos, construimos soluciones que funcionan de verdad.
              </p>
              <p className="text-[#1A1208]/60 font-body leading-relaxed mb-8">
                Creemos que el buen software no se trata solo de código limpio — se trata de entender el negocio, empatizar con el usuario final y entregar resultados medibles. Por eso cada proyecto comienza con una conversación, no con un contrato.
              </p>
              <div className="flex flex-wrap gap-3">
                {VALUES.map(({ label, icon, color }) => (
                  <div key={label} className="flex items-center gap-2 bg-[#f5e8c8] rounded-full px-4 py-2 border border-[#1A1208]/5">
                    <span className="text-sm" style={{ color }}>{icon}</span>
                    <span className="font-body text-sm font-semibold text-[#1A1208]">{label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Visual card */}
            <FadeIn delay={150}>
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute w-72 h-56 bg-[#F0B429]/20 rounded-3xl rotate-6 border border-[#F0B429]/20" />
                <div className="absolute w-72 h-56 bg-[#1A1208] rounded-3xl rotate-2 shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/40 to-transparent rounded-t-3xl" />
                </div>
                <div className="relative w-72 h-56 bg-[#F0B429] rounded-3xl shadow-2xl p-7 flex flex-col justify-between -rotate-1">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#1A1208] rounded-xl flex items-center justify-center">
                      <span className="font-display font-black text-[#F0B429] text-sm">A</span>
                    </div>
                    <div>
                      <p className="font-display font-black text-[#1A1208] text-sm leading-none">Aurum</p>
                      <p className="font-body text-[10px] text-[#1A1208]/60 uppercase tracking-widest">Dev Agency</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#1A1208]/60 uppercase tracking-widest mb-1">Proyectos activos</p>
                    <p className="font-display font-black text-4xl text-[#1A1208]">28+</p>
                  </div>
                  <div className="flex gap-2">
                    {["#4ECFA8", "#B8A9E8", "#F5E642", "#1A1208"].map((c, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-[#F0B429]" style={{ backgroundColor: c }} />
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-[#F0B429] bg-[#1A1208] flex items-center justify-center">
                      <span className="text-[#F0B429] text-[8px] font-bold">+6</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-[#1A1208]/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4ECFA8] animate-pulse" />
                  <span className="font-body font-semibold text-xs text-[#1A1208]">Disponibles ahora</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CÓMO LO HACEMOS ── */}
      <section className="bg-[#f5e8c8] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-3 font-body">Metodología</p>
              <h2 className="font-display text-5xl font-black text-[#1A1208] leading-tight mb-4">Cómo lo hacemos</h2>
              <p className="text-[#1A1208]/55 font-body max-w-xl mx-auto">
                Un proceso probado que convierte ideas en productos exitosos. Sin sorpresas, sin retrasos, con resultados.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map(({ step, title, desc, icon }, i) => (
              <FadeIn key={step} delay={i * 100}>
                <div className="bg-[#FDF8EE] rounded-3xl p-7 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-5xl leading-none select-none" style={{ color: "#1A120812" }}>
                      {step}
                    </span>
                    <div className="w-12 h-12 bg-[#1A1208] rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-black text-[#1A1208] mb-3">{title}</h3>
                  <p className="font-body text-sm text-[#1A1208]/60 leading-relaxed flex-1">{desc}</p>
                  <div className="mt-6 h-0.5 w-0 bg-[#F0B429] rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIÓN ── */}
      <section className="bg-[#1A1208] py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, #F0B42910 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <FadeIn>
              <p className="text-[#F0B429]/60 font-semibold uppercase tracking-widest text-xs mb-3 font-body">Nuestra visión</p>
              <h2 className="font-display text-5xl font-black text-white leading-tight mb-6">
                Ser el partner digital<br />de referencia en<br />
                <span className="text-[#F0B429]">Latinoamérica</span>
              </h2>
              <p className="text-white/55 font-body leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Visualizamos un futuro donde cada empresa, sin importar su tamaño, tenga acceso a software de clase mundial — un ecosistema donde la tecnología no sea una barrera, sino el motor del crecimiento.
              </p>
              <p className="text-white/55 font-body leading-relaxed mb-8">
                Para 2030, aspiramos a haber transformado digitalmente más de 200 empresas en la región, dejando una huella medible en su crecimiento, eficiencia y competitividad global.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#F0B429] text-[#1A1208] px-7 py-3.5 rounded-2xl font-semibold font-body hover:bg-[#F5C842] transition-colors shadow-xl">
                  Únete al equipo →
                </button>
                <button className="border border-white/20 text-white px-7 py-3.5 rounded-2xl font-semibold font-body hover:border-[#F0B429]/40 hover:text-[#F0B429] transition-colors">
                  Ver vacantes
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-4">
                {[
                  { title: "Accesibilidad", desc: "Software de calidad al alcance de cualquier empresa, sin importar su presupuesto.", color: "#F0B429" },
                  { title: "Impacto real", desc: "Medimos nuestro éxito en el crecimiento de nuestros clientes, no en líneas de código.", color: "#4ECFA8" },
                  { title: "Equipo primero", desc: "Un equipo feliz construye mejores productos. Invertimos en las personas que mueven Aurum.", color: "#B8A9E8" },
                  { title: "Tecnología de frontera", desc: "Siempre al día con las últimas herramientas sin sacrificar la estabilidad.", color: "#F5E642" },
                ].map(({ title, desc, color }) => (
                  <div key={title} className="flex gap-4 p-5 rounded-2xl border border-white/8 hover:border-white/15 transition-colors bg-white/3">
                    <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: color, minHeight: "44px" }} />
                    <div>
                      <h4 className="font-display font-bold text-white text-base mb-1">{title}</h4>
                      <p className="font-body text-sm text-white/50 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section className="bg-[#FDF8EE] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-3 font-body">Las personas</p>
              <h2 className="font-display text-5xl font-black text-[#1A1208]">Nuestro equipo</h2>
              <p className="text-[#1A1208]/50 mt-3 font-body max-w-md mx-auto">
                Apasionados, curiosos y obsesionados con construir cosas que funcionen.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map(({ name, role, initials, color, bio }, i) => (
              <FadeIn key={name} delay={i * 80}>
                <div className="bg-[#f5e8c8] rounded-3xl p-7 hover:-translate-y-1 transition-transform duration-300 group flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-xl text-[#1A1208] flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: color }}
                    >
                      {initials}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[#1A1208] text-base leading-tight">{name}</h3>
                      <p className="font-body text-xs text-[#1A1208]/50 uppercase tracking-widest mt-0.5">{role}</p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-[#1A1208]/60 leading-relaxed flex-1">{bio}</p>
                  <div className="mt-5 h-px bg-[#1A1208]/8" />
                  <div className="mt-4 flex gap-2">
                    {["in", "gh", "dr"].map((s) => (
                      <div key={s} className="w-7 h-7 rounded-lg bg-[#1A1208]/8 flex items-center justify-center cursor-pointer hover:bg-[#1A1208] transition-colors group/btn">
                        <span className="text-[10px] font-bold text-[#1A1208]/40 group-hover/btn:text-white font-body uppercase transition-colors">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <section className="bg-[#FDF8EE] py-20 border-t border-[#1A1208]/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-black text-[#1A1208] mb-3">
                Empresas que confían en nosotros
              </h2>
              <p className="font-body text-[#1A1208]/50 max-w-2xl mx-auto">
                Estas son algunas de las empresas con las que hemos trabajado a lo largo de nuestra historia, a las cuales les hemos ofrecido{" "}
                <strong className="text-[#1A1208]">diseño de interfaces</strong>,{" "}
                <strong className="text-[#1A1208]">desarrollo web</strong>,{" "}
                <strong className="text-[#1A1208]">sistemas a medida</strong> o{" "}
                <strong className="text-[#1A1208]">apps móviles</strong>.
              </p>
            </div>
          </FadeIn>

          {/* Logo grid — border-grid style like the reference */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 border-l border-t border-[#1A1208]/8">
            {CLIENTS.map((name, i) => (
              <FadeIn key={name} delay={i * 25}>
                <div className="border-r border-b border-[#1A1208]/8 flex items-center justify-center px-4 py-8 hover:bg-[#F0B429]/5 transition-colors cursor-pointer group">
                  <span
                    className="font-display font-black text-sm text-center leading-tight tracking-tight transition-all duration-300 group-hover:opacity-100"
                    style={{ color: "#1A120830" }}
                    onMouseEnter={e => e.target.style.color = "#1A1208"}
                    onMouseLeave={e => e.target.style.color = "#1A120830"}
                  >
                    {name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F0B429] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A1208]/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#1A1208]/50 font-body font-semibold uppercase tracking-widest text-xs mb-3">¿Listo?</p>
          <h2 className="font-display text-5xl font-black text-[#1A1208] leading-tight mb-5">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-[#1A1208]/65 font-body text-lg mb-10 max-w-xl mx-auto">
            Cuéntanos tu idea y la hacemos realidad. Te respondemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1A1208] text-[#F0B429] px-10 py-4 rounded-2xl font-semibold text-base hover:bg-[#1A1208]/90 transition-colors shadow-xl hover:-translate-y-0.5 transform duration-200">
              Contáctanos →
            </button>
            <button className="border-2 border-[#1A1208]/20 text-[#1A1208] px-10 py-4 rounded-2xl font-semibold text-base hover:border-[#1A1208]/40 transition-colors">
              Ver proyectos
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}