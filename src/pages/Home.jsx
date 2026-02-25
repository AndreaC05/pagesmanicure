import "../style/Home.css";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "51950874416";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Quiero reservar una cita 💅");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const nailServices = [
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
    desc: "Construcción en acrílico para mayor fortaleza y longitud. Ideales para quienes deseas un look dramático.",
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

const hairServices = [
  {
    icon: "❀",
    title: "Corte de Cabello",
    desc: "Corte profesional personalizado según tu rostro y estilo. Técnicas modernas para realzar tu belleza natural.",
    detail: "Desde S/ 35",
  },
  {
    icon: "✾",
    title: "Brushing & Planchado",
    desc: "Alisado profesional con productos de protección térmica premium. Brillo espejo que dura días.",
    detail: "Desde S/ 30",
  },
  {
    icon: "❁",
    title: "Coloración Completa",
    desc: "Desde tonos naturales hasta colores vibrantes. Tintes de alta calidad que cuidan la salud de tu cabello.",
    detail: "Desde S/ 80",
  },
  {
    icon: "✺",
    title: "Mechas & Balayage",
    desc: "Iluminación natural con técnicas degradadas profesionales. Efecto sun-kissed o mechas californianas impecables.",
    detail: "Desde S/ 120",
  },
  {
    icon: "❃",
    title: "Tratamientos Capilares",
    desc: "Hidratación profunda, keratina y botox capilar. Restaura brillo, suavidad y salud a tu melena desde la primera sesión.",
    detail: "Desde S/ 60",
  },
  {
    icon: "✹",
    title: "Peinados & Recogidos",
    desc: "Peinados elegantes para eventos especiales, bodas y quinceañeras. Creaciones únicas que perduran impecables.",
    detail: "Desde S/ 80",
  },
];

const galleryItems = [
  { id: 1, label: "Nail Art Floral", category: "Uñas" },
  { id: 2, label: "Gel Nude Elegante", category: "Uñas" },
  { id: 3, label: "Balayage Rubio", category: "Cabello" },
  { id: 4, label: "Semipermanente Vino", category: "Uñas" },
  { id: 5, label: "Coloración Fantasía", category: "Cabello" },
  { id: 6, label: "Pedicure Spa", category: "Uñas" },
  { id: 7, label: "Corte Moderno", category: "Cabello" },
  { id: 8, label: "Diseño Geométrico", category: "Uñas" },
  { id: 9, label: "Recogido Elegante", category: "Cabello" },
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
  const [activeTab, setActiveTab] = useState("uñas");

  const currentServices = activeTab === "uñas" ? nailServices : hairServices;

  // Resetear animaciones cuando cambia el tab
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
      card.classList.remove('revealed');
      setTimeout(() => card.classList.add('revealed'), 50);
    });
  }, [activeTab]);

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
          { num: "800+", label: "Clientas satisfechas" },
          { num: "12+", label: "Servicios especializados" },
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
            Belleza completa en un solo lugar. Uñas perfectas y cabello espectacular.
          </p>
        </div>

        {/* Tabs de servicios */}
        <div className="services__tabs reveal">
          <button
            className={`services__tab ${activeTab === "uñas" ? "services__tab--active" : ""}`}
            onClick={() => setActiveTab("uñas")}
          >
            <span className="services__tab-icon">✦</span>
            Uñas & Manicure
          </button>
          <button
            className={`services__tab ${activeTab === "cabello" ? "services__tab--active" : ""}`}
            onClick={() => setActiveTab("cabello")}
          >
            <span className="services__tab-icon">❀</span>
            Cabello & Estilismo
          </button>
        </div>

        <div className="services__grid" key={activeTab}>
          {currentServices.map((s, i) => (
            <div
              key={`${activeTab}-${s.title}`}
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
            Cada diseño cuenta una historia. Descubre nuestras creaciones en uñas y cabello.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gallery__item gallery__item--${i % 3 === 0 ? "tall" : "normal"} reveal`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Placeholder elegante con gradiente según categoría */}
              <div className={`gallery__placeholder gallery__placeholder--${item.category.toLowerCase()}`}>
                <span className="gallery__placeholder-icon">
                  {item.category === "Uñas" ? "✦" : "❀"}
                </span>
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
                <div className="about__frame-icons">
                  <span className="about__frame-icon about__frame-icon--nails">✦</span>
                  <span className="about__frame-icon about__frame-icon--divider">◆</span>
                  <span className="about__frame-icon about__frame-icon--hair">❀</span>
                </div>
                <p className="about__frame-text">
                  Beauty Studio<br />Uñas &amp; Cabello
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
              Belleza integral con <em>pasión</em>,<br />arte en cada <em>detalle</em>
            </h2>
            <div className="section__divider about__divider">
              <span />
              <span className="section__divider-gem">◆</span>
              <span />
            </div>
            <p className="about__text">
              Somos un beauty studio especializado en el arte de la belleza integral,
              donde cada clienta recibe atención personalizada y tratamientos de lujo.
              Nuestro equipo de profesionales combina técnica depurada con sensibilidad
              estética única para crear resultados que superan expectativas.
            </p>
            <p className="about__text">
              Desde manicure de alta precisión hasta coloraciones y cortes de vanguardia,
              trabajamos exclusivamente con productos premium libres de sustancias dañinas.
              Tu salud, bienestar y belleza son nuestra prioridad. Cada visita es una
              experiencia transformadora — un momento para ti, para sentirte radiante
              de pies a cabeza.
            </p>

            <div className="about__badges">
              {[
                "Productos Premium",
                "Higiene Certificada",
                "Técnicas Actualizadas",
                "Estilistas Profesionales"
              ].map((b) => (
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
          <p className="section__eyebrow section__eyebrow--light">¿Lista para transformarte?</p>
          <h2 className="cta-final__title">
            Reserva tu cita<br /><em>hoy mismo</em>
          </h2>
          <p className="cta-final__sub">
            Uñas perfectas y cabello espectacular. Escríbenos por WhatsApp.
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