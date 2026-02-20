// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import aurumIcon from "./assets/aurum-icon.svg";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Quote from "./pages/Quote";

export default function App() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/portfolio", label: t("nav.portfolio") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
    { to: "/cotiza", label: t("nav.quote") }
  ];

  return (
    <div className="min-h-screen bg-[#FDF8EE] font-body">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1A1208]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-[#1A1208] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#5f4508]/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <img src={aurumIcon} alt="Aurum Logo" className="w-6 h-6" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-[#F0B429] text-lg leading-none">{t('logo.title')}</div>
              <div className="text-white/40 text-xs font-body">{t('logo.subtitle')}</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-5 py-2.5 rounded-xl font-body font-medium text-sm transition-all duration-200 ${
                  location.pathname === to
                    ? "bg-[#F0B429] text-[#1A1208]"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="ml-4 flex items-center gap-2">
              <button
                onClick={() => changeLang("es")}
                className={`px-3 py-1 rounded-md text-sm ${i18n.language?.startsWith("es") ? "bg-white/90 text-[#1A1208]" : "text-white/70 hover:bg-white/10"}`}
                aria-label="Español"
              >
                ES
              </button>
              <button
                onClick={() => changeLang("en")}
                className={`px-3 py-1 rounded-md text-sm ${i18n.language?.startsWith("en") ? "bg-white/90 text-[#1A1208]" : "text-white/70 hover:bg-white/10"}`}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1A1208]/98 border-t border-white/10 px-6 py-4 space-y-2">
            {navItems.map(({ to, label }) => (
              <Link key={to} to={to} className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 font-body">
                {label}
              </Link>
            ))}

            <div className="flex gap-2 mt-2">
              <button onClick={() => changeLang("es")} className="px-3 py-1 rounded-md text-sm bg-white/5">ES</button>
              <button onClick={() => changeLang("en")} className="px-3 py-1 rounded-md text-sm bg-white/5">EN</button>
            </div>
          </div>
        )}
      </header>

      {/* Page content — padded for fixed navbar */}
      <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cotiza" element={<Quote />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1208] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#5f4508]/70 rounded-lg flex items-center justify-center">
              <img src={aurumIcon} alt="Aurum Logo" className="w-6 h-6" />
            </div>
            <span className="text-[#F0B429] font-display font-bold">{t("logo.title")} Dev Agency</span>
          </div>
          <div className="flex gap-6 text-white/40 text-sm font-body">
            <Link to="/" className="hover:text-white/70 transition-colors">{t("nav.home")}</Link>
            <Link to="/about" className="hover:text-white/70 transition-colors">{t("nav.about")}</Link>
            <Link to="/portfolio" className="hover:text-white/70 transition-colors">{t("nav.portfolio")}</Link>
          </div>
          <small className="text-white/30 font-body text-sm">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </small>
        </div>
      </footer>
    </div>
  );
}