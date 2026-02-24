import "../style/Home.css";
import { useEffect, useRef } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "51950874416";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Quiero reservar una cita 💅");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const services = [
  {
    icon: "✦",
    title: "Manicure Clásico",
    desc: "Limpieza, corte y esmaltado tradicional con acabado impecable. El cuidado esencial que tus manos merecen.",
    detail: "Desde S/ 25",
  },
  {
    icon: "◈",
    title: "Esmaltado Semipermanente",
    desc: "Brillo y duración de hasta 3 semanas sin descascararse. Colores vibrantes que resisten tu día a día.",
    detail: "Desde S/ 40",
  },
  {
    icon: "❋",
    title: "Uñas en Gel",
    desc: "Extensiones naturales y resistentes con acabado brillante o mate. Forma perfecta, durabilidad máxima.",
    detail: "Desde S/ 80",
  },
  {
    icon: "◇",
    title: "Uñas Acrílicas",
    desc: "Construcción en acrílico para mayor fortaleza y longitud. Ideales para quienes desean un look dramático.",
    detail: "Desde S/ 90",
  },
  {
    icon: "✿",
    title: "Nail Art & Diseños",
    desc: "Desde flores delicadas hasta geometrías atrevidas. Cada diseño es creado a mano con precisión artística.",
    detail: "Desde S/ 15 c/u",
  },
  {
    icon: "◉",
    title: "Pedicure",
    desc: "Exfoliación, masaje relajante e hidratación profunda. Pies suaves y uñas perfectas de punta a talón.",
    detail: "Desde S/ 35",
  },
];

const galleryItems = [
  { id: 1, label: "Nail Art Floral", category: "Nail Art" },
  { id: 2, label: "Gel Nude", category: "Gel" },
  { id: 3, label: "Acrílico French", category: "Acrílico" },
  { id: 4, label: "Semipermanente Vino", category: "Semipermanente" },
  { id: 5, label: "Diseño Geométrico", category: "Nail Art" },
  { id: 6, label: "Pedicure Clásico", category: "Pedicure" },
];

// Hook para animaciones al hacer scroll
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      {/* ── BANNER ── */}
      <section id="inicio">
        <Banner />
      </section>

      {/* ── FRANJA ESTADÍSTICAS ── */}
      <section className="stats-bar">
        {[
          { num: "500+", label: "Clientas satisfechas" },
          { num: "6", label: "Servicios especializados" },
          { num: "3+", label: "Años de experiencia" },
          { num: "100%", label: "Productos certificados" },
        ].map((s) => (
          <div key={s.label} className="stats-bar__item reveal">
            <span className="stats-bar__num">{s.num}</span>
            <span className="stats-bar__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="section section--light">
        <div className="section__header reveal">
          <p className="section__eyebrow">Lo que hacemos</p>
          <h2 className="section__title">
            Nuestros <em>Servicios</em>
          </h2>
          <div className="section__divider">
            <span />
            <span className="section__divider-gem">◆</span>
            <span />
          </div>
          <p className="section__subtitle">
            Cada servicio es una experiencia diseñada para hacerte sentir única.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="service-card reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="service-card__icon">{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <span className="service-card__price">{s.detail}</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="service-card__cta">
                Reservar <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERÍA ── */}
      <section id="galeria" className="section section--dark">
        <div className="section__header reveal">
          <p className="section__eyebrow section__eyebrow--light">Nuestro trabajo</p>
          <h2 className="section__title section__title--light">
            Galería de <em>Arte</em>
          </h2>
          <div className="section__divider">
            <span />
            <span className="section__divider-gem">◆</span>
            <span />
          </div>
          <p className="section__subtitle section__subtitle--light">
            Cada diseño cuenta una historia. Aquí algunas de nuestras creaciones.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gallery__item gallery__item--${i % 3 === 0 ? "tall" : "normal"} reveal`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Placeholder elegante — reemplaza con tus imágenes reales */}
              <div className="gallery__placeholder">
                <span className="gallery__placeholder-icon">✦</span>
              </div>
              <div className="gallery__overlay">
                <span className="gallery__category">{item.category}</span>
                <span className="gallery__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery__cta reveal">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
            <i className="pi pi-whatsapp" /> Quiero un diseño así
          </a>
        </div>
      </section>

      {/* ── SOBRE NOSOTROS ── */}
      <section id="nosotros" className="section section--cream">
        <div className="about__wrapper">
          {/* Imagen / decoración */}
          <div className="about__visual reveal">
            <div className="about__frame">
              <div className="about__frame-inner">
                <span className="about__frame-icon">◆</span>
                <p className="about__frame-text">
                  Studio de Uñas<br />&amp; Belleza
                </p>
              </div>
            </div>
            <div className="about__frame-deco about__frame-deco--1" />
            <div className="about__frame-deco about__frame-deco--2" />
          </div>

          {/* Texto */}
          <div className="about__content reveal">
            <p className="section__eyebrow">Quiénes somos</p>
            <h2 className="about__title">
              Pasión por el <em>detalle</em>,<br />arte en cada <em>uña</em>
            </h2>
            <div className="section__divider about__divider">
              <span />
              <span className="section__divider-gem">◆</span>
              <span />
            </div>
            <p className="about__text">
              Somos un studio especializado en el arte de la manicure, donde cada
              clienta es tratada con la delicadeza y atención que merece. Nuestro
              equipo de profesionales combina técnica depurada con una sensibilidad
              estética única para crear resultados que superan expectativas.
            </p>
            <p className="about__text">
              Trabajamos exclusivamente con productos de alta gama, libres de
              sustancias dañinas, porque tu salud y bienestar son nuestra prioridad.
              Cada visita es una experiencia de lujo accesible — un momento para ti,
              para sentirte bella desde la punta de los dedos.
            </p>

            <div className="about__badges">
              {["Productos Premium", "Higiene Certificada", "Técnicas Actualizadas"].map((b) => (
                <span key={b} className="about__badge">
                  <span className="about__badge-dot">◆</span> {b}
                </span>
              ))}
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--dark">
              <i className="pi pi-whatsapp" /> Agenda tu cita hoy
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-final">
        <div className="cta-final__deco-line cta-final__deco-line--top" />
        <div className="cta-final__content reveal">
          <p className="section__eyebrow section__eyebrow--light">¿Lista para transformar tus uñas?</p>
          <h2 className="cta-final__title">
            Reserva tu cita<br /><em>hoy mismo</em>
          </h2>
          <p className="cta-final__sub">
            Escríbenos por WhatsApp y te atendemos al instante.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--gold btn--lg">
            <i className="pi pi-whatsapp" /> Escribir por WhatsApp
          </a>
        </div>
        <div className="cta-final__deco-line cta-final__deco-line--bottom" />
      </section>

      <Footer />
    </>
  );
}