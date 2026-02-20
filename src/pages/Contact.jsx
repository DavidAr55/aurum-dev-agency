// src/pages/Contact.jsx
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

// ─── Info Card ────────────────────────────────────────────────────────────────
function InfoCard({ icon, label, value, sub, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="group flex items-start gap-4 bg-white rounded-2xl px-6 py-5 border border-[#1A1208]/6 hover:border-[#F0B429]/40 hover:shadow-lg transition-all duration-300 cursor-default">
        <div className="w-12 h-12 rounded-xl bg-[#F0B429]/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#F0B429]/20 transition-colors">
          {icon}
        </div>
        <div>
          <p className="font-body text-xs text-[#1A1208]/40 uppercase tracking-widest mb-0.5">{label}</p>
          <p className="font-body font-semibold text-[#1A1208] text-sm">{value}</p>
          {sub && <p className="font-body text-xs text-[#1A1208]/35 mt-0.5">{sub}</p>}
        </div>
      </div>
    </FadeIn>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div
        className="border border-[#1A1208]/8 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:border-[#F0B429]/30"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-4 text-left group"
        >
          <span className="font-body font-semibold text-sm text-[#1A1208] group-hover:text-[#d99a10] transition-colors pr-4">
            {q}
          </span>
          <span
            className="w-7 h-7 rounded-full bg-[#1A1208]/5 flex items-center justify-center text-[#1A1208]/40 flex-shrink-0 transition-all duration-300 font-bold text-sm"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
        >
          <p className="font-body text-sm text-[#1A1208]/55 leading-relaxed px-6 pb-5">{a}</p>
        </div>
      </div>
    </FadeIn>
  );
}

const FAQS = [
  {
    q: "¿Cuánto tiempo tarda el desarrollo de un proyecto?",
    a: "Depende del alcance. Una landing page puede estar lista en 1-2 semanas. Una app móvil o sistema empresarial suele tomar entre 2 y 5 meses. Te damos un cronograma detallado antes de empezar.",
  },
  {
    q: "¿Cómo es el proceso de trabajo con Aurum?",
    a: "Comenzamos con una reunión de descubrimiento para entender tu negocio y objetivos. Luego preparamos una propuesta con alcance, tiempos y presupuesto. Una vez aprobada, iniciamos con diseño, desarrollo e iteraciones hasta el lanzamiento.",
  },
  {
    q: "¿Ofrecen soporte después del lanzamiento?",
    a: "Sí. Todos nuestros proyectos incluyen 30 días de soporte post-lanzamiento. Después, tenemos planes de mantenimiento mensuales para garantizar que tu producto siempre funcione al 100%.",
  },
  {
    q: "¿Trabajan con clientes fuera de México?",
    a: "Absolutamente. Trabajamos de forma remota con clientes en toda Latinoamérica, Estados Unidos y España. La diferencia horaria nunca ha sido un obstáculo.",
  },
];

const SERVICES_LIST = [
  "Desarrollo Web",
  "Desarrollo de Sistemas",
  "App Móvil",
  "UI/UX Design",
  "Consultoría",
  "Otro",
];

// ─── Main Contact Component ───────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass = (name) =>
    `w-full bg-[#FDF8EE] border rounded-xl px-4 py-3.5 font-body text-sm text-[#1A1208] placeholder-[#1A1208]/25 focus:outline-none transition-all duration-200 ${
      focused === name
        ? "border-[#F0B429]/60 shadow-[0_0_0_3px_#F0B42918]"
        : "border-[#1A1208]/10 hover:border-[#1A1208]/20"
    }`;

  return (
    <div className="font-body">

      {/* ── HERO ── */}
      <section className="bg-[#1A1208] relative overflow-hidden pt-28 pb-40">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 110%, #F0B42918 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/20 to-transparent" />

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-[#F0B429]/8 pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-[#F0B429]/6 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECFA8] animate-pulse" />
            <span className="text-[#F0B429] font-body font-semibold text-xs uppercase tracking-widest">
              Disponibles para nuevos proyectos
            </span>
          </div>

          <h1 className="font-display text-6xl lg:text-7xl font-black text-white leading-tight mb-5">
            Hablemos de tu<br />
            <span className="text-[#F0B429]">próximo proyecto</span>
          </h1>

          <p className="text-white/50 font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Cuéntanos tu idea y te respondemos en menos de 24 horas con una propuesta personalizada.
          </p>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-12 fill-[#FDF8EE]"
          >
            <path d="M0,60 C400,0 800,60 1200,0 L1200,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-[#FDF8EE] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* ── LEFT: Info + FAQ ── */}
            <div className="lg:col-span-2 space-y-5">
              <FadeIn>
                <p className="text-[#d99a10] font-body font-semibold text-xs uppercase tracking-widest mb-1">
                  Información de contacto
                </p>
                <h2 className="font-display text-3xl font-black text-[#1A1208] leading-tight mb-6">
                  Estamos aquí<br />para ayudarte
                </h2>
              </FadeIn>

              <InfoCard icon="📍" label="Ubicación" value="Ciudad de México, México" sub="Trabajamos de forma remota a nivel global" delay={50} />
              <InfoCard icon="📧" label="Email" value="hola@aurum.dev" sub="Respondemos en menos de 24 hrs" delay={120} />
              <InfoCard icon="📱" label="WhatsApp" value="+52 55 1234 5678" sub="Lun – Vie, 9am – 7pm CST" delay={190} />
              <InfoCard icon="🕐" label="Horario de atención" value="Lunes a Viernes" sub="9:00 am – 6:00 pm (CST)" delay={260} />

              {/* Social links */}
              <FadeIn delay={320}>
                <div className="bg-white rounded-2xl px-6 py-5 border border-[#1A1208]/6">
                  <p className="font-body text-xs text-[#1A1208]/40 uppercase tracking-widest mb-3 font-semibold">
                    Síguenos
                  </p>
                  <div className="flex gap-2">
                    {[
                      { label: "LinkedIn", icon: "in" },
                      { label: "GitHub", icon: "<>" },
                      { label: "Dribbble", icon: "◉" },
                      { label: "Twitter", icon: "𝕏" },
                    ].map((s) => (
                      <button
                        key={s.label}
                        className="flex-1 flex flex-col items-center gap-1 bg-[#1A1208]/4 hover:bg-[#F0B429]/12 border border-transparent hover:border-[#F0B429]/30 text-[#1A1208]/50 hover:text-[#d99a10] font-body py-2.5 rounded-xl transition-all duration-200"
                      >
                        <span className="text-sm font-bold">{s.icon}</span>
                        <span className="text-[9px] font-semibold uppercase tracking-wider">{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* FAQ */}
              <FadeIn delay={380}>
                <p className="font-display font-bold text-lg text-[#1A1208] mt-8 mb-4">
                  Preguntas frecuentes
                </p>
              </FadeIn>
              {FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} delay={400 + i * 60} />
              ))}
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="lg:col-span-3">
              <FadeIn delay={80}>
                <div className="bg-white rounded-3xl shadow-xl border border-[#1A1208]/5 overflow-hidden">
                  {/* Form header */}
                  <div className="bg-[#1A1208] px-8 py-6 relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at 90% 50%, #F0B429 0%, transparent 60%)",
                      }}
                    />
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/40 to-transparent" />
                    <h3 className="font-display font-black text-xl text-white relative">
                      Cuéntanos tu proyecto
                    </h3>
                    <p className="font-body text-white/45 text-sm mt-1 relative">
                      Completa el formulario y te contactamos en menos de 24 horas.
                    </p>
                  </div>

                  {/* Form body */}
                  <div className="p-8">
                    {sent ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-20 h-20 bg-[#4ECFA8]/15 rounded-full flex items-center justify-center text-4xl mb-5 border-2 border-[#4ECFA8]/30">
                          ✓
                        </div>
                        <h3 className="font-display text-2xl font-black text-[#1A1208] mb-2">
                          ¡Mensaje enviado!
                        </h3>
                        <p className="font-body text-[#1A1208]/50 text-sm max-w-xs">
                          Gracias por contactarnos. Te responderemos en menos de 24 horas con una propuesta.
                        </p>
                        <button
                          onClick={() => setSent(false)}
                          className="mt-6 font-body text-sm font-semibold text-[#d99a10] hover:underline"
                        >
                          Enviar otro mensaje →
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name + Email */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block font-body text-xs text-[#1A1208]/45 uppercase tracking-widest mb-2 font-semibold">
                              Nombre *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              onFocus={() => setFocused("name")}
                              onBlur={() => setFocused(null)}
                              placeholder="Tu nombre completo"
                              required
                              className={inputClass("name")}
                            />
                          </div>
                          <div>
                            <label className="block font-body text-xs text-[#1A1208]/45 uppercase tracking-widest mb-2 font-semibold">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              onFocus={() => setFocused("email")}
                              onBlur={() => setFocused(null)}
                              placeholder="tu@email.com"
                              required
                              className={inputClass("email")}
                            />
                          </div>
                        </div>

                        {/* Phone + Service */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block font-body text-xs text-[#1A1208]/45 uppercase tracking-widest mb-2 font-semibold">
                              Teléfono / WhatsApp
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              onFocus={() => setFocused("phone")}
                              onBlur={() => setFocused(null)}
                              placeholder="+52 55 0000 0000"
                              className={inputClass("phone")}
                            />
                          </div>
                          <div>
                            <label className="block font-body text-xs text-[#1A1208]/45 uppercase tracking-widest mb-2 font-semibold">
                              Servicio de interés
                            </label>
                            <select
                              name="service"
                              value={form.service}
                              onChange={handleChange}
                              onFocus={() => setFocused("service")}
                              onBlur={() => setFocused(null)}
                              className={inputClass("service") + " appearance-none cursor-pointer"}
                            >
                              <option value="">Selecciona...</option>
                              {SERVICES_LIST.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Budget */}
                        <div>
                          <label className="block font-body text-xs text-[#1A1208]/45 uppercase tracking-widest mb-2 font-semibold">
                            Presupuesto aproximado
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "< $5,000 USD",
                              "$5k – $15k",
                              "$15k – $40k",
                              "$40k+",
                              "Por definir",
                            ].map((b) => (
                              <button
                                key={b}
                                type="button"
                                onClick={() =>
                                  setForm({ ...form, budget: form.budget === b ? "" : b })
                                }
                                className="px-4 py-2 rounded-xl font-body text-xs font-semibold transition-all duration-200"
                                style={{
                                  backgroundColor:
                                    form.budget === b ? "#1A1208" : "#1A1208/5",
                                  color: form.budget === b ? "#F0B429" : "#1A120860",
                                  border: `1.5px solid ${
                                    form.budget === b ? "#1A1208" : "#1A120815"
                                  }`,
                                }}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block font-body text-xs text-[#1A1208]/45 uppercase tracking-widest mb-2 font-semibold">
                            Mensaje *
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            onFocus={() => setFocused("message")}
                            onBlur={() => setFocused(null)}
                            placeholder="Cuéntanos sobre tu proyecto: qué necesitas, cuáles son tus objetivos, plazos estimados..."
                            rows={5}
                            required
                            className={inputClass("message") + " resize-none"}
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full bg-[#F0B429] text-[#1A1208] py-4 rounded-2xl font-body font-bold text-base hover:bg-[#F5C842] transition-all duration-200 shadow-lg hover:-translate-y-0.5 transform flex items-center justify-center gap-2"
                        >
                          Enviar mensaje
                          <span className="text-lg">→</span>
                        </button>

                        <p className="font-body text-xs text-center text-[#1A1208]/30">
                          Al enviar aceptas nuestra política de privacidad. Sin spam, te lo prometemos.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP / OFFICE STRIP ── */}
      <section className="bg-[#f5e8c8] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: "⚡",
                  color: "#F0B429",
                  title: "Respuesta rápida",
                  desc: "Te contactamos en menos de 24 horas hábiles con una propuesta inicial.",
                },
                {
                  icon: "🎯",
                  color: "#4ECFA8",
                  title: "Propuesta a medida",
                  desc: "Analizamos tu proyecto en detalle antes de presentarte un presupuesto.",
                },
                {
                  icon: "🔒",
                  color: "#B8A9E8",
                  title: "Confidencialidad",
                  desc: "Tu información y tu idea están protegidas. Firmamos NDA si lo requieres.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="bg-white rounded-2xl p-6 border border-[#1A1208]/5 hover:shadow-md transition-shadow">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                      style={{ backgroundColor: item.color + "20" }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="font-display font-bold text-lg text-[#1A1208] mb-2">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-[#1A1208]/55 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-[#1A1208] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #F0B429 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F0B429 0%, transparent 50%)",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0B429]/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#F0B429]/50 font-body font-semibold text-xs uppercase tracking-widest mb-3">
            ¿Prefieres hablar directo?
          </p>
          <h2 className="font-display text-5xl font-black text-white mb-4 leading-tight">
            Escríbenos por<br />
            <span className="text-[#F0B429]">WhatsApp</span>
          </h2>
          <p className="text-white/50 font-body text-lg mb-10 max-w-xl mx-auto">
            Si prefieres una conversación más directa, mándanos un mensaje y te respondemos al instante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5215512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-2xl font-semibold font-body text-base hover:bg-[#20bd5a] transition-colors shadow-xl hover:-translate-y-0.5 transform duration-200"
            >
              <span className="text-xl">💬</span>
              Abrir WhatsApp
            </a>
            <a
              href="mailto:hola@aurum.dev"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-10 py-4 rounded-2xl font-semibold font-body text-base hover:border-[#F0B429]/50 hover:text-[#F0B429] transition-all duration-200"
            >
              📧 hola@aurum.dev
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}