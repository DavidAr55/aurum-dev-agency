// src/pages/Blog.jsx
import React, { useEffect, useRef, useState } from "react";

// ─── Scroll fade-in utility ───────────────────────────────────────────────────
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
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Blog Data ────────────────────────────────────────────────────────────────
const POSTS = [
  {
    id: 1,
    category: "Desarrollo Web",
    categoryColor: "#4ECFA8",
    date: { day: "15", month: "Ene", year: "2025" },
    title: "Ventajas de tener una página web a la medida de tu negocio",
    excerpt: "La decisión de desarrollar una página web profesional conlleva una serie de beneficios que van mucho más allá de la presencia digital. Descubre por qué vale la pena invertir en un sitio que refleje tu marca.",
    readTime: "5 min",
    tags: ["Web", "Negocio"],
    color: "#F0B429",
    featured: true,
  },
  {
    id: 2,
    category: "Mobile",
    categoryColor: "#B8A9E8",
    date: { day: "04", month: "Mar", year: "2025" },
    title: "Aspectos clave para desarrollar una app móvil exitosa en 2025",
    excerpt: "¿Has considerado hacer una app para tu negocio? El uso de aplicaciones móviles ha crecido exponencialmente. Te explicamos qué necesitas saber antes de iniciar tu proyecto.",
    readTime: "7 min",
    tags: ["Mobile", "Flutter", "iOS", "Android"],
    color: "#B8A9E8",
    featured: false,
  },
  {
    id: 3,
    category: "Sistemas",
    categoryColor: "#F5E642",
    date: { day: "27", month: "Jun", year: "2025" },
    title: "Beneficios de un sistema de gestión empresarial a medida",
    excerpt: "Tener un sistema de gestión personalizado es mejor de lo que crees. A continuación te compartimos los principales beneficios de digitalizar los procesos internos de tu empresa.",
    readTime: "6 min",
    tags: ["Sistemas", "ERP", "Automatización"],
    color: "#1A1208",
    featured: false,
  },
  {
    id: 4,
    category: "UI/UX Design",
    categoryColor: "#F0B429",
    date: { day: "10", month: "Ago", year: "2025" },
    title: "Tendencias de diseño de interfaces para aplicaciones en 2026",
    excerpt: "El diseño de interfaces evoluciona constantemente. Exploramos las tendencias más relevantes que están definiendo la experiencia de usuario en aplicaciones web y móviles este año.",
    readTime: "8 min",
    tags: ["Diseño", "UI", "Tendencias"],
    color: "#4ECFA8",
    featured: false,
  },
  {
    id: 5,
    category: "Desarrollo Web",
    categoryColor: "#4ECFA8",
    date: { day: "02", month: "Sep", year: "2025" },
    title: "¿Por qué elegir React para tu próximo proyecto web?",
    excerpt: "React sigue siendo una de las librerías más demandadas del mercado. Analizamos sus ventajas, casos de uso ideales y por qué nuestro equipo lo elige para proyectos de alto rendimiento.",
    readTime: "6 min",
    tags: ["React", "JavaScript", "Frontend"],
    color: "#f5e8c8",
    featured: false,
  },
  {
    id: 6,
    category: "Negocios",
    categoryColor: "#F0B429",
    date: { day: "18", month: "Oct", year: "2025" },
    title: "Cómo la digitalización puede transformar una PYME en México",
    excerpt: "Muchas pequeñas y medianas empresas aún operan sin herramientas digitales. Compartimos casos reales y estrategias concretas para dar el primer paso hacia la transformación digital.",
    readTime: "9 min",
    tags: ["PYME", "México", "Digital"],
    color: "#18181b",
    featured: false,
  },
];

const CATEGORIES_FILTER = [
  { id: "all", label: "Todos" },
  { id: "Desarrollo Web", label: "Desarrollo Web" },
  { id: "Mobile", label: "Mobile" },
  { id: "Sistemas", label: "Sistemas" },
  { id: "UI/UX Design", label: "UI/UX" },
  { id: "Negocios", label: "Negocios" },
];

// Full article content
const CONTENT = {
  1: `Tener una página web profesional va mucho más allá de simplemente "estar en internet". Es la carta de presentación más poderosa que puede tener tu empresa hoy en día.\n\nUna web a la medida te permite reflejar la identidad única de tu marca, sin las limitaciones de plantillas genéricas. Cada sección, cada color, cada interacción puede diseñarse pensando en tu cliente ideal.\n\nAdemás, un sitio personalizado es técnicamente más eficiente: carga más rápido, es más seguro y puede integrarse con las herramientas que ya usa tu equipo (CRM, sistemas de pago, inventario, etc.).\n\nDesde el punto de vista del posicionamiento en buscadores (SEO), una web desarrollada desde cero con buenas prácticas tiene ventajas significativas sobre sitios construidos con builders como Wix o Squarespace.\n\nFinalmente, la escalabilidad: una página web a medida puede crecer contigo. ¿Quieres agregar un portal de clientes? ¿Un ecommerce? ¿Un blog? Todo es posible sin empezar de cero.`,
  2: `El mercado de aplicaciones móviles sigue creciendo a un ritmo acelerado. En 2025, el tiempo promedio que un usuario pasa en apps móviles supera las 4 horas diarias.\n\nAntes de iniciar el desarrollo de tu app, hay preguntas fundamentales que debes responder: ¿Quién es tu usuario? ¿Qué problema resuelve tu app? ¿Necesitas presencia en iOS, Android o ambas plataformas?\n\nHoy, tecnologías como Flutter permiten desarrollar para ambas plataformas desde una sola base de código, reduciendo significativamente costos y tiempos de desarrollo sin sacrificar rendimiento nativo.\n\nOtro aspecto crítico es el diseño de la experiencia de usuario (UX). Una app técnicamente impecable que sea difícil de usar fracasará en el mercado. La inversión en diseño de interfaces no es opcional.\n\nFinalmente, considera la estrategia de lanzamiento y monetización desde el día uno. ¿Será gratuita con compras in-app? ¿Por suscripción? ¿Modelo freemium? Estas decisiones impactan directamente la arquitectura técnica.`,
  3: `Un sistema de gestión empresarial (ERP) a la medida puede transformar por completo la operación de tu empresa.\n\nA diferencia de soluciones genéricas como SAP o Odoo, un sistema desarrollado específicamente para tu negocio no requiere que adaptes tus procesos al software — el software se adapta a tus procesos.\n\nBeneficios concretos que nuestros clientes han experimentado: reducción del tiempo en tareas administrativas hasta en un 60%, eliminación de errores humanos en procesos críticos, visibilidad en tiempo real del estado del negocio y capacidad de tomar decisiones basadas en datos reales.\n\nEl costo de desarrollo de un sistema a medida suele recuperarse en los primeros 12 a 18 meses gracias a la eficiencia ganada. Es una inversión, no un gasto.`,
  4: `El diseño de interfaces en 2026 está marcado por la vuelta a la claridad y la funcionalidad. Después de años de glassmorphism y neomorphism, el diseño vuelve a priorizar la legibilidad y la jerarquía visual.\n\nTendencias que están dominando este año: tipografías display con personalidad fuerte, paletas de color reducidas pero impactantes, micro-animaciones que guían al usuario sin distraerlo, y diseños asimétricos que rompen con la rigidez de los grids tradicionales.\n\nEn el ámbito de las apps móviles, el diseño se está optimizando para el uso con una sola mano y pantallas más grandes. Los elementos interactivos migran hacia la parte inferior de la pantalla.\n\nLa accesibilidad ya no es opcional: contraste de colores, tamaño de tipografía y navegación por teclado son estándares que cualquier diseñador serio debe dominar.`,
  5: `React cumple más de una década en el mercado y sigue siendo la librería de UI más demandada del mundo. ¿Por qué nuestro equipo la elige repetidamente?\n\nPrimero, su ecosistema maduro: herramientas como Next.js, React Query y Zustand hacen que sea posible construir prácticamente cualquier tipo de aplicación web con una base sólida y bien documentada.\n\nSegundo, el modelo de componentes reutilizables permite construir interfaces complejas de manera ordenada y mantenible. Un componente bien diseñado puede usarse en múltiples proyectos.\n\nTercero, la curva de aprendizaje aunque existe, produce desarrolladores más versátiles. Un desarrollador React puede adaptarse fácilmente a React Native para móviles.\n\nFinalmente, el mercado laboral: hay más desarrolladores React disponibles que de cualquier otra tecnología frontend, lo que facilita escalar equipos.`,
  6: `México tiene más de 4 millones de PYMES que generan el 72% del empleo formal del país. Sin embargo, la adopción de herramientas digitales en este segmento sigue siendo baja.\n\nLas barreras más comunes que encontramos: percepción de alto costo, miedo al cambio, falta de conocimiento sobre las opciones disponibles y malas experiencias previas con tecnología genérica que no se adaptó al negocio.\n\nPero la realidad es que digitalizar no siempre significa una inversión enorme. Muchos negocios pueden empezar con un sitio web profesional, un sistema de facturación y una presencia en redes sociales bien gestionada.\n\nLos negocios que dieron ese primer paso durante la pandemia no solo sobrevivieron: muchos crecieron. La transformación digital ya no es una ventaja competitiva — es un requisito de supervivencia.`,
};

// ─── Post Image Area (colored thumbnail) ─────────────────────────────────────
function PostThumb({ post, size = "md" }) {
  const isDark = post.color === "#1A1208" || post.color === "#18181b";
  const textColor = isDark ? "#ffffff" : "#1A1208";
  const h = size === "lg" ? "h-64" : size === "sm" ? "h-36" : "h-48";

  return (
    <div
      className={`relative w-full ${h} rounded-2xl overflow-hidden flex-shrink-0`}
      style={{ backgroundColor: post.color }}
    >
      {/* Decorative shapes */}
      <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-[0.08]"
        style={{ backgroundColor: textColor }} />
      <div className="absolute top-1/2 left-2/3 w-16 h-16 rounded-2xl opacity-[0.06] rotate-12"
        style={{ backgroundColor: textColor }} />
      <div className="absolute top-4 left-1/2 w-10 h-10 rounded-full opacity-[0.07]"
        style={{ backgroundColor: textColor }} />

      {/* Date badge */}
      <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-lg min-w-[52px]">
        <p className="font-display font-black text-lg text-[#1A1208] leading-none">{post.date.day}</p>
        <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-[#1A1208]/60">{post.date.month}</p>
      </div>

      {/* Category badge */}
      <span
        className="absolute top-4 right-4 text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
        style={{
          backgroundColor: post.categoryColor + "30",
          color: post.categoryColor === "#F5E642" ? "#1a1a00" : post.categoryColor,
        }}
      >
        {post.category}
      </span>
    </div>
  );
}

// ─── Main list post card (horizontal on md+) ──────────────────────────────────
function PostCard({ post, index, onClick }) {
  return (
    <FadeIn delay={index * 80}>
      <article
        onClick={() => onClick(post)}
        className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#1A1208]/5 flex flex-col md:flex-row gap-0 hover:-translate-y-0.5"
      >
        {/* Thumb */}
        <div className="md:w-64 lg:w-72 flex-shrink-0">
          <PostThumb post={post} size="md" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: post.categoryColor + "20",
                  color: post.categoryColor === "#F5E642" ? "#8a7500" : post.categoryColor,
                }}
              >
                {post.category}
              </span>
              <span className="text-[#1A1208]/35 font-body text-xs">
                {post.date.day} {post.date.month} {post.date.year}
              </span>
            </div>

            <h3 className="font-display font-bold text-xl text-[#1A1208] leading-snug mb-2 group-hover:text-[#d99a10] transition-colors">
              {post.title}
            </h3>
            <p className="font-body text-sm text-[#1A1208]/55 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#1A1208]/8">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="font-body text-[10px] font-semibold px-2 py-1 rounded-lg bg-[#1A1208]/5 text-[#1A1208]/50"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="font-body text-xs text-[#1A1208]/35">⏱ {post.readTime}</span>
              <span className="font-body text-sm font-semibold text-[#d99a10] group-hover:gap-2 flex items-center gap-1 transition-all">
                Leer más <span>→</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

// ─── Sidebar recent post mini card ───────────────────────────────────────────
function SidebarPostCard({ post, onClick }) {
  return (
    <div
      onClick={() => onClick(post)}
      className="flex gap-3 cursor-pointer group hover:bg-[#1A1208]/3 rounded-xl p-2 -mx-2 transition-colors"
    >
      {/* Mini thumb */}
      <div
        className="w-14 h-14 rounded-xl flex-shrink-0 relative overflow-hidden"
        style={{ backgroundColor: post.color }}
      >
        <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full opacity-15 bg-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body text-xs text-[#1A1208]/40 mb-0.5">
          {post.date.day} {post.date.month}
        </p>
        <p className="font-body font-semibold text-sm text-[#1A1208] leading-snug line-clamp-2 group-hover:text-[#d99a10] transition-colors">
          {post.title}
        </p>
      </div>
    </div>
  );
}

// ─── Post Modal (article detail) ─────────────────────────────────────────────
function PostModal({ post, onClose, onSelectPost }) {
  const isDark = post.color === "#1A1208" || post.color === "#18181b";
  const textColor = isDark ? "#ffffff" : "#1A1208";
  const textMuted = isDark ? "rgba(255,255,255,0.55)" : "rgba(26,18,8,0.6)";

  // Related posts (same category, exclude current)
  const related = POSTS.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);
  const otherPosts = POSTS.filter(p => p.id !== post.id).slice(0, 3);

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
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ backgroundColor: "rgba(26,18,8,0.85)", backdropFilter: "blur(6px)" }}
    >
      {/* Close bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-[#1A1208]/90 backdrop-blur border-b border-white/10">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-white/60 hover:text-[#F0B429] font-body text-sm font-semibold transition-colors"
        >
          ← Volver al blog
        </button>
        <div className="flex items-center gap-3">
          <span
            className="text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: post.categoryColor + "25", color: post.categoryColor === "#F5E642" ? "#c8b800" : post.categoryColor }}
          >
            {post.category}
          </span>
          <span className="text-white/40 font-body text-xs">⏱ {post.readTime}</span>
        </div>
      </div>

      {/* Article layout: like reference image 3 */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">

        {/* Main content (left 2 cols) */}
        <div className="lg:col-span-2">
          {/* Featured image */}
          <div
            className="w-full h-64 rounded-3xl overflow-hidden relative mb-8"
            style={{ backgroundColor: post.color }}
          >
            <div className="absolute inset-0 opacity-10"
              style={{ background: "radial-gradient(circle at 70% 50%, #1A1208 0%, transparent 60%)" }} />
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full"
              style={{ backgroundColor: isDark ? "#F0B42915" : "#1A120810" }} />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-3xl rotate-12"
              style={{ backgroundColor: isDark ? "#F0B42910" : "#1A120808" }} />
            {/* Date badge on image */}
            <div className="absolute top-6 left-6 bg-white rounded-xl px-3 py-2 text-center shadow-lg">
              <p className="font-display font-black text-2xl text-[#1A1208] leading-none">{post.date.day}</p>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#1A1208]/60">{post.date.month} {post.date.year}</p>
            </div>
          </div>

          {/* Article card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: post.categoryColor + "20", color: post.categoryColor === "#F5E642" ? "#8a7500" : post.categoryColor }}
                >
                  {post.category}
                </span>
                <span className="font-body text-xs text-[#1A1208]/40">
                  {post.date.day} {post.date.month} {post.date.year}
                </span>
                <span className="font-body text-xs text-[#1A1208]/40">⏱ {post.readTime} de lectura</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl lg:text-4xl font-black text-[#1A1208] leading-tight mb-4">
                {post.title}
              </h1>

              <div className="h-px bg-[#1A1208]/8 mb-7" />

              {/* Body */}
              <div className="space-y-5">
                {(CONTENT[post.id] || post.excerpt).split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-base leading-relaxed text-[#1A1208]/65">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-[#1A1208]/8">
                {post.tags.map((tag) => (
                  <span key={tag} className="font-body text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#1A1208]/6 text-[#1A1208]/55">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share bar */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[#1A1208]/8">
                <span className="font-body text-xs text-[#1A1208]/40 uppercase tracking-widest font-semibold">Compartir:</span>
                {["Facebook", "Twitter", "LinkedIn"].map(s => (
                  <button key={s} className="font-body text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1A1208]/5 text-[#1A1208]/50 hover:bg-[#F0B429]/15 hover:text-[#d99a10] transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Comments placeholder */}
            <div className="border-t border-[#1A1208]/8 px-8 lg:px-10 py-8">
              <h3 className="font-display font-bold text-lg text-[#1A1208] mb-4">Comentarios</h3>
              <div className="bg-[#FDF8EE] rounded-2xl p-5">
                <textarea
                  placeholder="Deja tu comentario..."
                  rows={3}
                  className="w-full bg-transparent font-body text-sm text-[#1A1208]/70 placeholder-[#1A1208]/25 resize-none focus:outline-none"
                />
                <div className="flex justify-end mt-3">
                  <button className="bg-[#1A1208] text-[#F0B429] px-5 py-2 rounded-xl font-body font-semibold text-sm hover:bg-[#1A1208]/90 transition-colors">
                    Publicar →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (right col) */}
        <div className="space-y-6">
          {/* Search */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1208]/30 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full bg-[#FDF8EE] rounded-xl pl-9 pr-4 py-2.5 font-body text-sm text-[#1A1208] placeholder-[#1A1208]/30 focus:outline-none border border-[#1A1208]/8 focus:border-[#F0B429]/50 transition-colors"
              />
            </div>
          </div>

          {/* Recent posts */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h4 className="font-display font-bold text-base text-[#1A1208] mb-4">Últimas publicaciones</h4>
            <div className="space-y-2">
              {POSTS.filter(p => p.id !== post.id).slice(0, 3).map(p => (
                <SidebarPostCard key={p.id} post={p} onClick={(selected) => onSelectPost(selected)} />
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h4 className="font-display font-bold text-base text-[#1A1208] mb-4">Categorías</h4>
            <div className="space-y-1">
              {CATEGORIES_FILTER.filter(c => c.id !== "all").map(cat => (
                <button
                  key={cat.id}
                  onClick={onClose}
                  className="w-full text-left px-3 py-2 rounded-xl font-body text-sm text-[#1A1208]/60 hover:bg-[#F0B429]/10 hover:text-[#d99a10] transition-colors font-medium"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tags cloud */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h4 className="font-display font-bold text-base text-[#1A1208] mb-4">Etiquetas</h4>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(POSTS.flatMap(p => p.tags))).map(tag => (
                <span
                  key={tag}
                  className="font-body text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1A1208]/5 text-[#1A1208]/50 hover:bg-[#F0B429]/15 hover:text-[#d99a10] cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA box */}
          <div className="bg-[#1A1208] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#F0B429]/10" />
            <p className="font-display font-bold text-white text-lg leading-snug mb-2">¿Tienes un proyecto?</p>
            <p className="font-body text-white/50 text-sm mb-4">Cuéntanos tu idea y te armamos una propuesta.</p>
            <button className="w-full bg-[#F0B429] text-[#1A1208] py-2.5 rounded-xl font-body font-semibold text-sm hover:bg-[#F5C842] transition-colors">
              Iniciar proyecto →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Featured Post Banner ─────────────────────────────────────────────────────
function FeaturedCard({ post, onClick }) {
  return (
    <FadeIn>
      <article
        onClick={() => onClick(post)}
        className="group cursor-pointer bg-[#F0B429] rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[340px] hover:shadow-2xl transition-all duration-300"
      >
        {/* Left: content */}
        <div className="p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#1A1208] text-[#F0B429] text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                ✦ Artículo destacado
              </div>
              <span className="text-[#1A1208]/50 text-xs font-body">
                {post.date.day} {post.date.month} {post.date.year}
              </span>
            </div>
            <span
              className="inline-block text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: post.categoryColor + "30", color: post.categoryColor }}
            >
              {post.category}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-black text-[#1A1208] leading-tight mb-3">
              {post.title}
            </h2>
            <p className="font-body text-[#1A1208]/65 text-sm leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-[#1A1208] text-[#F0B429] px-6 py-3 rounded-2xl font-body font-semibold text-sm hover:bg-[#1A1208]/90 transition-colors shadow-lg">
              Leer artículo →
            </button>
            <span className="text-[#1A1208]/50 text-xs font-body">⏱ {post.readTime} de lectura</span>
          </div>
        </div>

        {/* Right: visual */}
        <div className="relative flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(circle at 70% 50%, #1A1208 0%, transparent 60%)" }} />
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#1A1208]/8" />
          <div className="absolute -bottom-12 -left-8 w-36 h-36 rounded-3xl rotate-12 bg-[#1A1208]/6" />
          <div className="relative z-10 bg-[#1A1208] rounded-3xl p-6 w-full max-w-xs shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#F0B429]" />
              <span className="text-[#F0B429]/60 font-body text-xs uppercase tracking-widest">Blog · Aurum</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-3 bg-white/10 rounded-full w-full" />
              <div className="h-3 bg-white/10 rounded-full w-4/5" />
              <div className="h-3 bg-white/10 rounded-full w-3/5" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map(tag => (
                <span key={tag} className="text-[10px] font-body font-semibold px-2 py-1 rounded-lg bg-[#F0B429]/15 text-[#F0B429]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

// ─── Newsletter strip ─────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="bg-[#1A1208] rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 50%, #F0B429 0%, transparent 60%)" }} />
      <div className="relative text-center lg:text-left">
        <p className="text-[#F0B429]/60 font-body font-semibold text-xs uppercase tracking-widest mb-1">Newsletter</p>
        <h3 className="font-display text-2xl font-black text-white">Contenido directo a tu correo</h3>
        <p className="text-white/50 font-body text-sm mt-1">Tips, tendencias y casos de éxito cada dos semanas.</p>
      </div>
      <div className="relative w-full lg:w-auto">
        {sent ? (
          <div className="flex items-center gap-3 bg-[#4ECFA8]/20 rounded-2xl px-6 py-4 border border-[#4ECFA8]/30">
            <span className="text-[#4ECFA8] text-lg">✓</span>
            <p className="font-body font-semibold text-[#4ECFA8] text-sm">¡Suscrito exitosamente!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 min-w-0 lg:min-w-[380px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 font-body text-sm focus:outline-none focus:border-[#F0B429]/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#F0B429] text-[#1A1208] px-5 py-3 rounded-xl font-body font-semibold text-sm hover:bg-[#F5C842] transition-colors shadow-lg flex-shrink-0"
            >
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Main Blog Component ──────────────────────────────────────────────────────
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
  const [search, setSearch] = useState("");

  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  const filtered = rest.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-body">

      {/* ── HERO ── */}
      <section className="bg-[#1A1208] relative overflow-hidden pt-28 pb-36">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, #F0B42914 0%, transparent 70%)" }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0B429] animate-pulse" />
            <span className="text-[#F0B429] font-body font-semibold text-xs uppercase tracking-widest">Blog</span>
          </div>

          <h1 className="font-display text-6xl lg:text-7xl font-black text-white leading-tight mb-5">
            Ideas que<br />
            <span className="text-[#F0B429]">construyen</span> negocios
          </h1>

          <p className="text-white/50 font-body text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Compartimos lo que sabemos sobre desarrollo web, apps móviles, diseño de interfaces y transformación digital.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-base select-none">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setActiveCategory("all"); }}
              placeholder="Busca un artículo..."
              className="w-full bg-white/8 border border-white/15 rounded-2xl pl-11 pr-5 py-3.5 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-[#F0B429]/40 transition-colors"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-12 fill-[#FDF8EE]">
            <path d="M0,60 C400,0 800,60 1200,0 L1200,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-[#FDF8EE] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* ── Left: Posts list (2 cols) ── */}
            <div className="lg:col-span-2 space-y-8">

              {/* Featured (only when no filter/search active) */}
              {featured && !search && activeCategory === "all" && (
                <div>
                  <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-xs mb-4 font-body">Destacado</p>
                  <FeaturedCard post={featured} onClick={handleSelectPost} />
                </div>
              )}

              {/* Category filters */}
              <FadeIn>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES_FILTER.map(({ id, label }) => (
                      <button
                        key={id}
                        onClick={() => { setActiveCategory(id); setSearch(""); }}
                        className="px-4 py-2 rounded-xl font-body font-semibold text-sm transition-all duration-200"
                        style={{
                          backgroundColor: activeCategory === id ? "#1A1208" : "transparent",
                          color: activeCategory === id ? "#F0B429" : "#1A120860",
                          border: `1.5px solid ${activeCategory === id ? "#1A1208" : "#1A120820"}`,
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <p className="font-body text-xs text-[#1A1208]/40 uppercase tracking-widest flex-shrink-0">
                    {filtered.length} artículo{filtered.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </FadeIn>

              {/* Posts */}
              {filtered.length > 0 ? (
                <div className="space-y-5">
                  {filtered.map((post, i) => (
                    <PostCard key={post.id} post={post} index={i} onClick={handleSelectPost} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-[#1A1208]/5">
                  <p className="font-display text-2xl font-black text-[#1A1208]/15 mb-2">Sin resultados</p>
                  <p className="font-body text-sm text-[#1A1208]/30 mb-4">Intenta con otro término o categoría</p>
                  <button
                    onClick={() => { setSearch(""); setActiveCategory("all"); }}
                    className="font-body text-sm font-semibold text-[#d99a10] hover:underline"
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}
            </div>

            {/* ── Right Sidebar ── */}
            <div className="space-y-6 lg:sticky lg:top-6">
              {/* Search */}
              <FadeIn delay={100}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#1A1208]/5">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1208]/30 text-sm">🔍</span>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value); setActiveCategory("all"); }}
                      placeholder="Buscar..."
                      className="w-full bg-[#FDF8EE] rounded-xl pl-9 pr-4 py-2.5 font-body text-sm text-[#1A1208] placeholder-[#1A1208]/30 focus:outline-none border border-[#1A1208]/8 focus:border-[#F0B429]/50 transition-colors"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Recent posts */}
              <FadeIn delay={150}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#1A1208]/5">
                  <h4 className="font-display font-bold text-base text-[#1A1208] mb-4">Últimas publicaciones</h4>
                  <div className="space-y-2">
                    {POSTS.slice(0, 4).map(p => (
                      <SidebarPostCard key={p.id} post={p} onClick={handleSelectPost} />
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Categories */}
              <FadeIn delay={200}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#1A1208]/5">
                  <h4 className="font-display font-bold text-base text-[#1A1208] mb-4">Categorías</h4>
                  <div className="space-y-1">
                    {CATEGORIES_FILTER.filter(c => c.id !== "all").map(cat => {
                      const count = POSTS.filter(p => p.category === cat.id).length;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => { setActiveCategory(cat.id); setSearch(""); }}
                          className="w-full text-left px-3 py-2 rounded-xl font-body text-sm transition-colors flex items-center justify-between group"
                          style={{
                            color: activeCategory === cat.id ? "#d99a10" : "#1A120860",
                            backgroundColor: activeCategory === cat.id ? "#F0B42910" : "transparent",
                          }}
                        >
                          <span className="font-medium group-hover:text-[#d99a10] transition-colors">{cat.label}</span>
                          <span className="text-xs bg-[#1A1208]/5 px-2 py-0.5 rounded-full">{count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>

              {/* Tags */}
              <FadeIn delay={250}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#1A1208]/5">
                  <h4 className="font-display font-bold text-base text-[#1A1208] mb-4">Etiquetas</h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(POSTS.flatMap(p => p.tags))).map(tag => (
                      <button
                        key={tag}
                        onClick={() => { setSearch(tag); setActiveCategory("all"); }}
                        className="font-body text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1A1208]/5 text-[#1A1208]/50 hover:bg-[#F0B429]/15 hover:text-[#d99a10] cursor-pointer transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={300}>
                <div className="bg-[#1A1208] rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#F0B429]/10" />
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/30 to-transparent" />
                  <p className="font-display font-bold text-white text-lg leading-snug mb-2 relative">¿Tienes un proyecto?</p>
                  <p className="font-body text-white/50 text-sm mb-4 relative">Cuéntanos tu idea y te armamos una propuesta personalizada.</p>
                  <button className="w-full bg-[#F0B429] text-[#1A1208] py-2.5 rounded-xl font-body font-semibold text-sm hover:bg-[#F5C842] transition-colors relative">
                    Iniciar proyecto →
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-[#f5e8c8] py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <Newsletter />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F8B936] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A1208]/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#1A1208]/40 font-body font-semibold uppercase tracking-widest text-xs mb-3">¿Tienes un proyecto?</p>
          <h2 className="font-display text-5xl font-black text-[#1A1208] leading-tight mb-4">Del artículo a la realidad</h2>
          <p className="text-[#1A1208]/60 font-body text-lg mb-10 max-w-xl mx-auto">
            Lo que lees aquí, lo construimos. Cuéntanos tu idea y te armamos una propuesta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1A1208] text-[#F0B429] px-10 py-4 rounded-2xl font-semibold font-body text-base hover:bg-[#1A1208]/90 transition-colors shadow-xl hover:-translate-y-0.5 transform duration-200">
              Iniciar un proyecto →
            </button>
            <button className="border-2 border-[#1A1208]/20 text-[#1A1208] px-10 py-4 rounded-2xl font-semibold font-body text-base hover:border-[#1A1208]/40 transition-colors">
              Ver portafolio
            </button>
          </div>
        </div>
      </section>

      {/* ── MODAL (Article detail) ── */}
      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onSelectPost={handleSelectPost}
        />
      )}

    </div>
  );
}