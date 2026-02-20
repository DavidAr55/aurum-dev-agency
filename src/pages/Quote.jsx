// src/pages/Quote.jsx
import React, { useState } from "react";

// ─── Pricing logic ─────────────────────────────────────────────────────────────
// Base prices per service (MXN)
const BASE_PRICE = {
  web: 18000,
  system: 45000,
  mobile: 55000,
  design: 12000,
};

// Multipliers / adders per answer
const PRICE_MODIFIERS = {
  // Web sub-type
  web_type_informativa:   { add: 0 },
  web_type_landing:       { add: 8000 },
  web_type_catalogo:      { add: 15000 },
  web_type_ecommerce:     { add: 35000 },
  web_type_sistema:       { add: 60000 },
  // Sell product
  sell_yes:   { add: 8000 },
  sell_no:    { add: 0 },
  sell_unsure:{ add: 4000 },
  // Store form data
  form_yes:   { add: 5000 },
  form_no:    { add: 0 },
  form_unsure:{ add: 2500 },
  // Admin slider
  slider_yes: { add: 6000 },
  slider_no:  { add: 0 },
  slider_unsure: { add: 3000 },
  // Languages
  lang_1: { add: 0 },
  lang_2: { add: 7000 },
  lang_3: { add: 14000 },
  // Domain
  domain_yes: { add: 0 },
  domain_no:  { add: 1500 },
  domain_unsure: { add: 1500 },
  // System complexity
  sys_simple: { add: 0 },
  sys_medium: { add: 30000 },
  sys_complex:{ add: 80000 },
  // Mobile platforms
  mob_both:   { add: 15000 },
  mob_one:    { add: 0 },
  // Design scope
  des_small:  { add: 0 },
  des_medium: { add: 8000 },
  des_large:  { add: 20000 },
};

function calcPrice(service, answers) {
  let total = BASE_PRICE[service] || 0;
  Object.values(answers).forEach((key) => {
    if (PRICE_MODIFIERS[key]) total += PRICE_MODIFIERS[key].add;
  });
  return total;
}

function formatMXN(n) {
  return "$" + n.toLocaleString("es-MX") + " MXN";
}

// ─── Step definitions ─────────────────────────────────────────────────────────
// Each service has its own question chain

const WEB_STEPS = [
  {
    id: "web_type",
    question: "¿Qué tipo de página web requieres para tu proyecto?",
    hint: "Selecciona la opción que más se acerque a tus requerimientos.",
    options: [
      { key: "web_type_informativa", label: "Página web informativa",   icon: "🌐", desc: "Ideal para promocionar los servicios de una empresa" },
      { key: "web_type_landing",     label: "Landing page",             icon: "🎯", desc: "Campaña de lanzamiento para promocionar un único producto/servicio" },
      { key: "web_type_catalogo",    label: "Catálogo de productos",    icon: "📋", desc: "Productos específicos o pedidos que requieren una cotización previa" },
      { key: "web_type_ecommerce",   label: "Tienda en línea",          icon: "🛒", desc: "Venta en línea de productos al público en general" },
      { key: "web_type_sistema",     label: "Sistema personalizado",    icon: "⚙️", desc: "Control de inventario, punto de venta, facturación, etc." },
    ],
  },
  {
    id: "sell",
    question: "¿La web requiere vender un producto o servicio?",
    hint: "La venta se puede realizar a través de PayPal o Stripe (con cargo directo a tarjetas de crédito/débito).",
    options: [
      { key: "sell_yes",    label: "Sí",       icon: "🤝" },
      { key: "sell_no",     label: "No",        icon: "✕" },
      { key: "sell_unsure", label: "No lo sé",  icon: "❓" },
    ],
  },
  {
    id: "form",
    question: "¿Requiere almacenar información de un formulario?",
    hint: "Puede ser el registro a un evento o información del usuario (correo, teléfono).",
    options: [
      { key: "form_yes",    label: "Sí",       icon: "🤝" },
      { key: "form_no",     label: "No",        icon: "✕" },
      { key: "form_unsure", label: "No lo sé",  icon: "❓" },
    ],
  },
  {
    id: "slider",
    question: "¿Te gustaría que el slider de la página sea administrable?",
    hint: "El slider es un carrusel de imágenes con enlaces que se encuentra al inicio de la página.",
    options: [
      { key: "slider_yes",    label: "Sí",       icon: "🤝" },
      { key: "slider_no",     label: "No",        icon: "✕" },
      { key: "slider_unsure", label: "No lo sé",  icon: "❓" },
    ],
  },
  {
    id: "lang",
    question: "¿En cuántos idiomas estará desarrollada la página?",
    hint: "Considera que ustedes nos deben de proporcionar las traducciones de todos los textos.",
    options: [
      { key: "lang_1", label: "Un idioma",    icon: "🇲🇽" },
      { key: "lang_2", label: "Dos idiomas",  icon: "🌐" },
      { key: "lang_3", label: "Tres idiomas", icon: "🌍" },
    ],
  },
  {
    id: "domain",
    question: "¿Actualmente tienes contratado un dominio?",
    hint: "El dominio es el nombre exclusivo que identifica una página web, por ejemplo: aurum.dev",
    options: [
      { key: "domain_yes",    label: "Sí",       icon: "🤝" },
      { key: "domain_no",     label: "No",        icon: "✕" },
      { key: "domain_unsure", label: "No lo sé",  icon: "❓" },
    ],
  },
];

const SYSTEM_STEPS = [
  {
    id: "form",
    question: "¿El sistema requiere almacenar datos en formularios?",
    hint: "Registros de usuarios, alta de productos, captura de información, etc.",
    options: [
      { key: "form_yes",    label: "Sí",       icon: "🤝" },
      { key: "form_no",     label: "No",        icon: "✕" },
      { key: "form_unsure", label: "No lo sé",  icon: "❓" },
    ],
  },
  {
    id: "sys_complexity",
    question: "¿Cuál es la complejidad estimada del sistema?",
    hint: "No te preocupes si no estás seguro, podemos orientarte en la reunión inicial.",
    options: [
      { key: "sys_simple",  label: "Básico",    icon: "🟢", desc: "Pocas pantallas, lógica sencilla (ej. catálogo interno)" },
      { key: "sys_medium",  label: "Intermedio", icon: "🟡", desc: "Módulos múltiples, roles de usuario, reportes" },
      { key: "sys_complex", label: "Avanzado",  icon: "🔴", desc: "Integraciones externas, lógica compleja, alta concurrencia" },
    ],
  },
  {
    id: "lang",
    question: "¿En cuántos idiomas estará disponible el sistema?",
    hint: "Ustedes deberán proporcionar las traducciones de todos los textos.",
    options: [
      { key: "lang_1", label: "Un idioma",    icon: "🇲🇽" },
      { key: "lang_2", label: "Dos idiomas",  icon: "🌐" },
      { key: "lang_3", label: "Tres idiomas", icon: "🌍" },
    ],
  },
  {
    id: "domain",
    question: "¿Ya tienes infraestructura de servidor contratada?",
    hint: "Servidor, hosting o servicio en la nube como AWS, Google Cloud, etc.",
    options: [
      { key: "domain_yes",    label: "Sí",       icon: "🤝" },
      { key: "domain_no",     label: "No",        icon: "✕" },
      { key: "domain_unsure", label: "No lo sé",  icon: "❓" },
    ],
  },
];

const MOBILE_STEPS = [
  {
    id: "mob_platforms",
    question: "¿En qué plataformas necesitas la app?",
    hint: "Desarrollamos en Flutter: un solo código para ambas plataformas.",
    options: [
      { key: "mob_both", label: "iOS + Android", icon: "📱", desc: "Máxima cobertura, un solo proyecto" },
      { key: "mob_one",  label: "Solo una plataforma", icon: "◉", desc: "iOS o Android (indícanos en el mensaje cuál)" },
    ],
  },
  {
    id: "sell",
    question: "¿La app requiere pagos en línea?",
    hint: "Integración con Stripe, PayPal u otros pasarelas de pago.",
    options: [
      { key: "sell_yes",    label: "Sí",       icon: "🤝" },
      { key: "sell_no",     label: "No",        icon: "✕" },
      { key: "sell_unsure", label: "No lo sé",  icon: "❓" },
    ],
  },
  {
    id: "form",
    question: "¿La app almacenará datos de los usuarios?",
    hint: "Registro, perfiles, historial, notificaciones push, etc.",
    options: [
      { key: "form_yes",    label: "Sí",       icon: "🤝" },
      { key: "form_no",     label: "No",        icon: "✕" },
      { key: "form_unsure", label: "No lo sé",  icon: "❓" },
    ],
  },
  {
    id: "lang",
    question: "¿En cuántos idiomas estará disponible la app?",
    hint: "Considera que deberás proporcionar todas las traducciones.",
    options: [
      { key: "lang_1", label: "Un idioma",    icon: "🇲🇽" },
      { key: "lang_2", label: "Dos idiomas",  icon: "🌐" },
      { key: "lang_3", label: "Tres idiomas", icon: "🌍" },
    ],
  },
];

const DESIGN_STEPS = [
  {
    id: "des_scope",
    question: "¿Cuál es el alcance del diseño?",
    hint: "Esto nos ayuda a estimar el tiempo y entregables del proyecto.",
    options: [
      { key: "des_small",  label: "Pequeño",    icon: "🎨", desc: "Landing page o app de 1-5 pantallas" },
      { key: "des_medium", label: "Mediano",    icon: "✦",  desc: "Sitio web o app de 5-20 pantallas" },
      { key: "des_large",  label: "Completo",   icon: "🏆", desc: "Sistema completo o design system" },
    ],
  },
  {
    id: "sell",
    question: "¿El diseño incluirá flujos de pago?",
    hint: "Pantallas de checkout, carrito, confirmación de pedido, etc.",
    options: [
      { key: "sell_yes",    label: "Sí",       icon: "🤝" },
      { key: "sell_no",     label: "No",        icon: "✕" },
      { key: "sell_unsure", label: "No lo sé",  icon: "❓" },
    ],
  },
  {
    id: "lang",
    question: "¿El diseño contemplará múltiples idiomas?",
    hint: "Diseñamos teniendo en cuenta la expansión de textos en otros idiomas.",
    options: [
      { key: "lang_1", label: "Un idioma",    icon: "🇲🇽" },
      { key: "lang_2", label: "Dos idiomas",  icon: "🌐" },
      { key: "lang_3", label: "Tres idiomas", icon: "🌍" },
    ],
  },
];

const STEPS_MAP = {
  web:    WEB_STEPS,
  system: SYSTEM_STEPS,
  mobile: MOBILE_STEPS,
  design: DESIGN_STEPS,
};

const SERVICES = [
  { key: "web",    label: "Desarrollo Web",      icon: "🌐", color: "#4ECFA8", colorDark: "#0a2a1f", desc: "Sitios informativos, landing pages, ecommerce y más." },
  { key: "system", label: "Sistema Empresarial", icon: "⚙️", color: "#1A1208", colorDark: "#F0B429", desc: "Software a medida para tus procesos internos." },
  { key: "mobile", label: "App Móvil",           icon: "📱", color: "#B8A9E8", colorDark: "#1a1040", desc: "Apps para iOS y Android con Flutter." },
  { key: "design", label: "UI/UX Design",        icon: "✦",  color: "#F5E642", colorDark: "#1a1a00", desc: "Interfaces y sistemas de diseño a medida." },
];

// ─── Micro components ─────────────────────────────────────────────────────────

function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="font-body text-xs text-[#1A1208]/40 uppercase tracking-widest font-semibold">
          Paso {current} de {total}
        </span>
        <span className="font-body text-xs font-bold text-[#d99a10]">{pct}%</span>
      </div>
      <div className="h-1.5 bg-[#1A1208]/8 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#F0B429] rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function OptionCard({ option, selected, onClick, large }) {
  return (
    <button
      type="button"
      onClick={() => onClick(option.key)}
      className={`group flex flex-col items-center text-center gap-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
        large ? "p-6" : "p-5"
      } ${
        selected
          ? "border-[#F0B429] bg-[#F0B429]/8 shadow-[0_0_0_4px_#F0B42920]"
          : "border-[#1A1208]/10 bg-white hover:border-[#F0B429]/40 hover:bg-[#F0B429]/4"
      }`}
    >
      <span
        className={`${large ? "text-4xl" : "text-3xl"} transition-transform duration-200 ${
          selected ? "scale-110" : "group-hover:scale-105"
        }`}
      >
        {option.icon}
      </span>
      <div>
        <p
          className={`font-body font-bold text-sm leading-snug ${
            selected ? "text-[#1A1208]" : "text-[#1A1208]/80"
          }`}
        >
          {option.label}
        </p>
        {option.desc && (
          <p className="font-body text-xs text-[#1A1208]/45 mt-1 leading-relaxed">{option.desc}</p>
        )}
      </div>
      {selected && (
        <div className="w-5 h-5 rounded-full bg-[#F0B429] flex items-center justify-center text-[#1A1208] text-xs font-black">
          ✓
        </div>
      )}
    </button>
  );
}

// ─── Step: select service ─────────────────────────────────────────────────────
function ServiceStep({ onSelect }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/20 rounded-full px-4 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0B429] animate-pulse" />
          <span className="text-[#F0B429] font-body font-semibold text-xs uppercase tracking-widest">
            Paso 1
          </span>
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
          ¿Qué servicio necesitas?
        </h2>
        <p className="text-white/50 font-body text-base">
          Selecciona el tipo de proyecto para generar tu cotización.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {SERVICES.map((svc) => (
          <button
            key={svc.key}
            type="button"
            onClick={() => onSelect(svc.key)}
            className="group flex items-start gap-4 p-5 rounded-2xl border-2 border-white/10 bg-white/5 hover:border-[#F0B429]/50 hover:bg-white/10 transition-all duration-200 text-left cursor-pointer hover:-translate-y-0.5"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ backgroundColor: svc.color + "25" }}
            >
              {svc.icon}
            </div>
            <div>
              <p className="font-body font-bold text-white text-sm mb-1 group-hover:text-[#F0B429] transition-colors">
                {svc.label}
              </p>
              <p className="font-body text-xs text-white/45 leading-relaxed">{svc.desc}</p>
            </div>
            <span className="text-white/20 group-hover:text-[#F0B429]/60 transition-colors ml-auto flex-shrink-0 text-lg">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Step: a question ────────────────────────────────────────────────────────
function QuestionStep({ stepNum, totalSteps, step, answer, onAnswer, onBack, onNext, service }) {
  const cols = step.options.length <= 3 ? step.options.length : 2;
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/20 rounded-full px-4 py-1.5 mb-4">
          <span className="font-display font-black text-[#F0B429] text-2xl">{stepNum}</span>
        </div>
        <h2 className="font-display text-2xl lg:text-3xl font-black text-white leading-tight mb-2 max-w-2xl mx-auto">
          {step.question}
        </h2>
        {step.hint && (
          <p className="text-white/45 font-body text-sm max-w-xl mx-auto">{step.hint}</p>
        )}
      </div>

      {/* Options */}
      <div
        className="max-w-2xl mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(cols, step.options.length)}, minmax(0, 1fr))`,
          gap: "12px",
        }}
      >
        {step.options.map((opt) => (
          <OptionCard
            key={opt.key}
            option={opt}
            selected={answer === opt.key}
            onClick={onAnswer}
            large={step.options.length <= 3}
          />
        ))}
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between max-w-2xl mx-auto pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 font-body text-sm font-semibold text-white/40 hover:text-white transition-colors"
        >
          ← Atrás
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!answer}
          className="px-8 py-3 rounded-2xl font-body font-bold text-sm transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            backgroundColor: answer ? "#F0B429" : "#ffffff30",
            color: answer ? "#1A1208" : "#ffffff",
          }}
        >
          {stepNum === totalSteps ? "Ver cotización →" : "Siguiente →"}
        </button>
      </div>
    </div>
  );
}

// ─── Summary + contact form ───────────────────────────────────────────────────
const QUESTION_LABELS = {
  web_type:      "¿Qué tipo de página web?",
  sell:          "¿Requiere vender?",
  form:          "¿Almacena formulario?",
  slider:        "¿Slider administrable?",
  lang:          "¿Cuántos idiomas?",
  domain:        "¿Dominio contratado?",
  sys_complexity:"¿Complejidad del sistema?",
  mob_platforms: "¿Plataformas móviles?",
  des_scope:     "¿Alcance del diseño?",
};

const ANSWER_LABELS = {
  web_type_informativa: "Página web informativa",
  web_type_landing:     "Landing page",
  web_type_catalogo:    "Catálogo de productos",
  web_type_ecommerce:   "Tienda en línea (ecommerce)",
  web_type_sistema:     "Sistema personalizado",
  sell_yes:    "Sí", sell_no: "No", sell_unsure: "No lo sé",
  form_yes:    "Sí", form_no: "No", form_unsure: "No lo sé",
  slider_yes:  "Sí", slider_no: "No", slider_unsure: "No lo sé",
  lang_1: "Un idioma", lang_2: "Dos idiomas", lang_3: "Tres idiomas",
  domain_yes: "Sí", domain_no: "No", domain_unsure: "No lo sé",
  sys_simple: "Básico", sys_medium: "Intermedio", sys_complex: "Avanzado",
  mob_both: "iOS + Android", mob_one: "Una plataforma",
  des_small: "Pequeño", des_medium: "Mediano", des_large: "Completo",
};

function SummaryStep({ service, answers, stepsDone, onChangeAnswer, onSubmit, sent }) {
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState(null);
  const price = calcPrice(service, answers);
  const svc = SERVICES.find(s => s.key === service);

  const handleChange = (e) =>
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contactForm);
  };

  const inputClass = (name) =>
    `w-full bg-[#F8F4EC] border rounded-xl px-4 py-3.5 font-body text-sm text-[#1A1208] placeholder-[#1A1208]/25 focus:outline-none transition-all duration-200 ${
      focused === name
        ? "border-[#1A1208]/40 shadow-[0_0_0_3px_#1A120810]"
        : "border-[#1A1208]/12 hover:border-[#1A1208]/25"
    }`;

  if (sent) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-5">
        <div className="w-24 h-24 bg-[#4ECFA8]/15 rounded-full flex items-center justify-center text-5xl border-2 border-[#4ECFA8]/30">
          ✓
        </div>
        <h2 className="font-display text-3xl font-black text-white">¡Solicitud enviada!</h2>
        <p className="font-body text-white/50 max-w-md text-base">
          Gracias por tu interés. Nuestro equipo revisará tu cotización y te contactará en menos de 24 horas con una propuesta detallada.
        </p>
        <div
          className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 border"
          style={{ backgroundColor: svc.color + "20", borderColor: svc.color + "40" }}
        >
          <span className="text-2xl">{svc.icon}</span>
          <div className="text-left">
            <p className="font-body text-xs text-white/40 uppercase tracking-widest">Cotización estimada</p>
            <p className="font-display font-black text-xl" style={{ color: svc.color }}>
              {formatMXN(price)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-2">
        <h2 className="font-display text-2xl lg:text-3xl font-black text-white leading-tight mb-1">
          ¡Gracias por completar el cuestionario!
        </h2>
        <p className="text-white/45 font-body text-sm">
          Este es un estimado. Para obtener el precio final, completa tus datos.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* LEFT: Contact form */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-[#1A1208] px-7 py-5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle at 90% 50%, #F0B429 0%, transparent 60%)" }} />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/40 to-transparent" />
            <p className="font-body text-xs text-[#F0B429]/60 uppercase tracking-widest mb-0.5">Solicitar cotización</p>
            <h3 className="font-display font-black text-lg text-white">Completa tus datos</h3>
          </div>
          <div className="p-7 space-y-4">
            <div className="flex items-center gap-3 bg-[#F0B429]/8 rounded-xl px-4 py-3 border border-[#F0B429]/20">
              <span className="text-xl">{svc.icon}</span>
              <div>
                <p className="font-body text-[10px] text-[#1A1208]/40 uppercase tracking-widest">Servicio seleccionado</p>
                <p className="font-body font-bold text-sm text-[#1A1208]">{svc.label}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="font-body text-[10px] text-[#1A1208]/40 uppercase tracking-widest">Estimado</p>
                <p className="font-display font-black text-base text-[#d99a10]">{formatMXN(price)}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text" name="name" value={contactForm.name}
                onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                placeholder="Nombre completo" required
                className={inputClass("name")}
              />
              <input
                type="email" name="email" value={contactForm.email}
                onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                placeholder="Correo electrónico" required
                className={inputClass("email")}
              />
              <input
                type="tel" name="phone" value={contactForm.phone}
                onChange={handleChange} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                placeholder="Teléfono / WhatsApp"
                className={inputClass("phone")}
              />
              <textarea
                name="message" value={contactForm.message}
                onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                placeholder="Cuéntanos más sobre tu proyecto (opcional)..."
                rows={3}
                className={inputClass("message") + " resize-none"}
              />
              <button
                type="submit"
                className="w-full bg-[#F0B429] text-[#1A1208] py-3.5 rounded-2xl font-body font-bold text-base hover:bg-[#F5C842] transition-all duration-200 shadow-lg hover:-translate-y-0.5 transform flex items-center justify-center gap-2"
              >
                Solicitar cotización oficial →
              </button>
              <p className="font-body text-[10px] text-center text-[#1A1208]/30">
                Sin spam. Te respondemos en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>

        {/* RIGHT: Resumen */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-7 py-5 border-b border-[#1A1208]/8">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-black text-xl text-[#1A1208]">Resumen</h3>
              <div className="text-right">
                <p className="font-body text-[10px] text-[#1A1208]/40 uppercase tracking-widest">Costo aproximado</p>
                <p className="font-display font-black text-2xl text-[#d99a10]">{formatMXN(price)}</p>
              </div>
            </div>
          </div>

          <div className="px-7 py-5 space-y-0 overflow-y-auto" style={{ maxHeight: "420px" }}>
            {/* Service row */}
            <div className="flex items-center gap-3 py-4 border-b border-[#1A1208]/6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: svc.color + "20" }}
              >
                {svc.icon}
              </div>
              <div className="flex-1">
                <p className="font-body text-[10px] text-[#1A1208]/40 uppercase tracking-widest">Servicio</p>
                <p className="font-body font-bold text-sm text-[#1A1208]">{svc.label}</p>
              </div>
            </div>

            {/* Answer rows */}
            {stepsDone.map((step) => {
              const ansKey = answers[step.id];
              if (!ansKey) return null;
              return (
                <div key={step.id} className="flex items-start gap-3 py-4 border-b border-[#1A1208]/6 last:border-0">
                  <div className="w-11 h-11 rounded-xl bg-[#1A1208]/4 flex items-center justify-center text-lg flex-shrink-0">
                    {step.options.find(o => o.key === ansKey)?.icon || "◉"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[10px] text-[#1A1208]/40 uppercase tracking-widest leading-none mb-1">
                      {QUESTION_LABELS[step.id] || step.question}
                    </p>
                    <p className="font-body font-bold text-sm text-[#1A1208]">
                      {ANSWER_LABELS[ansKey] || ansKey}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onChangeAnswer(step.id)}
                    className="font-body text-[10px] text-[#d99a10] hover:underline flex-shrink-0 font-semibold pt-0.5"
                  >
                    Cambiar
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Quote Component ─────────────────────────────────────────────────────
export default function Quote() {
  const [service, setService] = useState(null);   // selected service key
  const [stepIndex, setStepIndex] = useState(0);  // current question index (0 = first question)
  const [answers, setAnswers] = useState({});      // { stepId: answerKey }
  const [showSummary, setShowSummary] = useState(false);
  const [sent, setSent] = useState(false);

  const steps = service ? STEPS_MAP[service] : [];
  const totalSteps = steps.length;
  const currentStep = steps[stepIndex];

  const handleSelectService = (key) => {
    setService(key);
    setStepIndex(0);
    setAnswers({});
    setShowSummary(false);
  };

  const handleAnswer = (key) => {
    setAnswers({ ...answers, [currentStep.id]: key });
  };

  const handleNext = () => {
    if (stepIndex < totalSteps - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleBack = () => {
    if (showSummary) {
      setShowSummary(false);
    } else if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    } else {
      setService(null);
    }
  };

  const handleChangeAnswer = (stepId) => {
    const idx = steps.findIndex(s => s.id === stepId);
    setShowSummary(false);
    setStepIndex(idx);
  };

  const handleSubmit = (contactData) => {
    console.log("Quote submit:", { service, answers, ...contactData });
    setSent(true);
  };

  const handleReset = () => {
    setService(null);
    setStepIndex(0);
    setAnswers({});
    setShowSummary(false);
    setSent(false);
  };

  // Progress: service selection = step 0, each question = steps 1..n, summary = n+1
  const progressCurrent = !service ? 0 : showSummary ? totalSteps + 1 : stepIndex + 1;
  const progressTotal = service ? totalSteps + 1 : 4; // approx for service step

  return (
    <div className="font-body">

      {/* ── HERO / WIZARD WRAPPER ── */}
      <section className="bg-[#1A1208] min-h-screen relative overflow-hidden">
        {/* Background radials */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #F0B42910 0%, transparent 60%)" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/20 to-transparent" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-[#F0B429]/5 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-[#F0B429]/5 pointer-events-none" />

        {/* Top nav within section */}
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-6">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0B429] animate-pulse" />
              <span className="text-[#F0B429] font-body font-semibold text-xs uppercase tracking-widest">
                Cotizador
              </span>
            </div>
            {service && (
              <>
                <span className="text-white/20 text-sm">·</span>
                <span className="font-body text-sm text-white/40">
                  {SERVICES.find(s => s.key === service)?.label}
                </span>
              </>
            )}
            {service && (
              <button
                type="button"
                onClick={handleReset}
                className="ml-auto font-body text-xs text-white/25 hover:text-white/60 transition-colors font-semibold"
              >
                Reiniciar
              </button>
            )}
          </div>

          {/* Progress (only once service is selected) */}
          {service && !showSummary && (
            <div className="mb-10 max-w-2xl mx-auto">
              <ProgressBar current={stepIndex + 1} total={totalSteps} />
            </div>
          )}

          {/* ── CONTENT ── */}
          <div className="pb-20">
            {/* Phase 1: Select service */}
            {!service && (
              <ServiceStep onSelect={handleSelectService} />
            )}

            {/* Phase 2: Questions */}
            {service && !showSummary && currentStep && (
              <QuestionStep
                stepNum={stepIndex + 1}
                totalSteps={totalSteps}
                step={currentStep}
                answer={answers[currentStep.id]}
                onAnswer={handleAnswer}
                onBack={handleBack}
                onNext={handleNext}
                service={service}
              />
            )}

            {/* Phase 3: Summary */}
            {showSummary && (
              <SummaryStep
                service={service}
                answers={answers}
                stepsDone={steps}
                onChangeAnswer={handleChangeAnswer}
                onSubmit={handleSubmit}
                sent={sent}
              />
            )}
          </div>
        </div>
      </section>

      {/* ── BOTTOM INFO STRIP (when no service selected) ── */}
      {!service && (
        <section className="bg-[#FDF8EE] py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-10">
              <p className="text-[#d99a10] font-body font-semibold text-xs uppercase tracking-widest mb-2">
                ¿Cómo funciona?
              </p>
              <h3 className="font-display text-3xl font-black text-[#1A1208]">
                Tu cotización en 3 pasos
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", icon: "🎯", title: "Selecciona tu servicio", desc: "Elige entre desarrollo web, sistema, app móvil o diseño UI/UX." },
                { step: "02", icon: "✅", title: "Responde las preguntas", desc: "Un cuestionario breve para entender el alcance de tu proyecto." },
                { step: "03", icon: "💰", title: "Recibe tu estimado", desc: "Obtén un precio aproximado y solicita una propuesta formal." },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 border border-[#1A1208]/5 hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute top-4 right-4 font-display font-black text-4xl text-[#1A1208]/4">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0B429]/10 flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#1A1208] mb-2">{item.title}</h4>
                  <p className="font-body text-sm text-[#1A1208]/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#1A1208] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ background: "radial-gradient(circle at 80% 50%, #F0B429 0%, transparent 60%)" }} />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/30 to-transparent" />
              <div className="relative text-center md:text-left">
                <p className="text-[#F0B429]/60 font-body text-xs uppercase tracking-widest font-semibold mb-1">¿Prefieres hablar?</p>
                <h4 className="font-display font-black text-xl text-white">Agenda una reunión gratuita</h4>
                <p className="text-white/45 font-body text-sm mt-1">30 minutos para entender tu proyecto, sin compromiso.</p>
              </div>
              <div className="relative flex gap-3 flex-shrink-0">
                <a href="https://wa.me/5215512345678" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-body font-semibold text-sm hover:bg-[#20bd5a] transition-colors shadow-lg">
                  💬 WhatsApp
                </a>
                <a href="mailto:hola@aurum.dev"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-xl font-body font-semibold text-sm hover:border-[#F0B429]/40 hover:text-[#F0B429] transition-all">
                  📧 Email
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}