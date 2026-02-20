// src/pages/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const team = [
  { name: "Ana García", role: "CEO & Founder", color: "#F0B429" },
  { name: "Luis Martínez", role: "Lead Developer", color: "#d99a10" },
  { name: "Sara López", role: "UI/UX Designer", color: "#F5C842" },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="font-body">
      {/* Hero */}
      <section className="bg-[#1A1208] py-28 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#F0B429] font-semibold uppercase tracking-widest text-sm mb-4">{t("about.who_we_are")}</p>
          <h1 className="font-display text-6xl font-black text-white leading-tight mb-6">
            {t("about.about_title")}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("about.mission_text_2")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#FDF8EE] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-sm mb-3">{t("about.mission_title")}</p>
            <h2 className="font-display text-4xl font-black text-[#1A1208] mb-6 leading-tight">
              {t("about.mission_text_1")}
            </h2>
            <p className="text-[#1A1208]/60 leading-relaxed mb-4">
              {t("about.mission_text_2")}
            </p>
          </div>

          {/* stats grid (los textos ya son numéricos) */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Proyectos completados", value: "28+" },
              { label: "Clientes satisfechos", value: "89+" },
              { label: "Años de experiencia", value: "9+" },
              { label: "Países alcanzados", value: "12+" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#f5e8c8] rounded-2xl p-6">
                <div className="font-display text-4xl font-black text-[#1A1208] mb-1">{value}</div>
                <div className="text-[#1A1208]/50 text-sm font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f5e8c8] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-[#d99a10] font-semibold uppercase tracking-widest text-sm mb-3">The People</p>
            <h2 className="font-display text-5xl font-black text-[#1A1208]">Nuestro Equipo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map(({ name, role, color }) => (
              <div key={name} className="bg-[#FDF8EE] rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl font-display font-black text-[#1A1208]"
                  style={{ backgroundColor: color }}
                >
                  {name[0]}
                </div>
                <h3 className="font-display text-xl font-bold text-[#1A1208] mb-1">{name}</h3>
                <p className="text-[#1A1208]/50 text-sm font-body">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#F0B429] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl font-black text-[#1A1208] mb-6">¿Trabajamos juntos?</h2>
          <p className="text-[#1A1208]/70 font-body text-lg mb-10">
            Cuéntanos tu idea y la hacemos realidad.
          </p>
          <button className="bg-[#1A1208] text-[#F0B429] px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-[#1A1208]/90 transition-colors shadow-xl">
            Contáctanos →
          </button>
        </div>
      </section>
    </div>
  );
}