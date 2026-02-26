import "../style/Galeria.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "51950874416";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Quiero un diseño personalizado 💅");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const galleryItems = [
  // Uñas - Nail Art
  { id: 1, title: "Nail Art Floral Delicado", category: "nail-art", type: "nails", featured: true },
  { id: 2, title: "Diseño Geométrico Moderno", category: "nail-art", type: "nails", featured: false },
  { id: 3, title: "Arte Minimalista Elegante", category: "nail-art", type: "nails", featured: true },
  { id: 4, title: "Flores 3D Premium", category: "nail-art", type: "nails", featured: false },
  
  // Uñas - Gel
  { id: 5, title: "Gel Nude Natural", category: "gel", type: "nails", featured: true },
  { id: 6, title: "Gel French Clásico", category: "gel", type: "nails", featured: false },
  { id: 7, title: "Gel Efecto Mármol", category: "gel", type: "nails", featured: false },
  { id: 8, title: "Gel Degradado Rosa", category: "gel", type: "nails", featured: true },
  
  // Uñas - Acrílico
  { id: 9, title: "Acrílico Stiletto Elegante", category: "acrilico", type: "nails", featured: false },
  { id: 10, title: "Acrílico Almendra French", category: "acrilico", type: "nails", featured: true },
  { id: 11, title: "Acrílico con Cristales", category: "acrilico", type: "nails", featured: false },
  
  // Uñas - Semipermanente
  { id: 12, title: "Semipermanente Vino Tinto", category: "semipermanente", type: "nails", featured: false },
  { id: 13, title: "Semipermanente Coral", category: "semipermanente", type: "nails", featured: true },
  { id: 14, title: "Semipermanente Nude Rosado", category: "semipermanente", type: "nails", featured: false },
  
  // Uñas - Pedicure
  { id: 15, title: "Pedicure Spa Relajante", category: "pedicure", type: "nails", featured: false },
  { id: 16, title: "Pedicure con Nail Art", category: "pedicure", type: "nails", featured: true },
  
  // Cabello - Corte
  { id: 17, title: "Corte Bob Moderno", category: "corte", type: "hair", featured: true },
  { id: 18, title: "Corte en Capas Texturizado", category: "corte", type: "hair", featured: false },
  { id: 19, title: "Corte Pixie Elegante", category: "corte", type: "hair", featured: false },
  
  // Cabello - Color
  { id: 20, title: "Balayage Rubio Natural", category: "color", type: "hair", featured: true },
  { id: 21, title: "Mechas Californianas", category: "color", type: "hair", featured: false },
  { id: 22, title: "Coloración Caramelo", category: "color", type: "hair", featured: true },
  { id: 23, title: "Tinte Castaño Chocolate", category: "color", type: "hair", featured: false },
  
  // Cabello - Peinados
  { id: 24, title: "Recogido de Novia Romántico", category: "peinados", type: "hair", featured: true },
  { id: 25, title: "Semi Recogido Elegante", category: "peinados", type: "hair", featured: false },
  { id: 26, title: "Ondas Hollywood Glamour", category: "peinados", type: "hair", featured: true },
  
  // Cabello - Tratamientos
  { id: 27, title: "Resultado Keratina Premium", category: "tratamiento", type: "hair", featured: false },
  { id: 28, title: "Botox Capilar Reparador", category: "tratamiento", type: "hair", featured: false },
];

const categories = {
  all: { label: "Todo", icon: "◆", type: "all" },
  nails: { label: "Uñas", icon: "✦", type: "nails" },
  hair: { label: "Cabello", icon: "❀", type: "hair" },
  "nail-art": { label: "Nail Art", icon: "✿", type: "nails" },
  gel: { label: "Gel", icon: "❋", type: "nails" },
  acrilico: { label: "Acrílico", icon: "◇", type: "nails" },
  semipermanente: { label: "Semipermanente", icon: "◈", type: "nails" },
  pedicure: { label: "Pedicure", icon: "◉", type: "nails" },
  corte: { label: "Corte", icon: "❀", type: "hair" },
  color: { label: "Color", icon: "❁", type: "hair" },
  peinados: { label: "Peinados", icon: "✹", type: "hair" },
  tratamiento: { label: "Tratamientos", icon: "❃", type: "hair" },
};

export default function Galeria() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeType, setActiveType] = useState("all");

  // Filtrar items
  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === "all") return true;
    if (activeFilter === "nails") return item.type === "nails";
    if (activeFilter === "hair") return item.type === "hair";
    return item.category === activeFilter;
  });

  // Obtener categorías según el tipo activo
  const availableCategories = Object.entries(categories).filter(([key, cat]) => {
    if (activeType === "all") return key === "all" || key === "nails" || key === "hair";
    return key === "all" || cat.type === activeType;
  });

  return (
    <>
      <Navbar />
      <Banner />

      {/* Hero Section */}
      <section className="galeria-hero">
        <div className="galeria-hero__content">
          <p className="galeria-hero__eyebrow">Nuestro Trabajo</p>
          <h1 className="galeria-hero__title">
            Galería de <em>Arte</em>
          </h1>
          <div className="galeria-hero__divider">
            <span />
            <span className="galeria-hero__diamond">◆</span>
            <span />
          </div>
          <p className="galeria-hero__subtitle">
            Cada diseño cuenta una historia. Explora nuestras creaciones más destacadas
            y déjate inspirar para tu próximo look.
          </p>
        </div>
      </section>

      {/* Type Filter */}
      <section className="galeria-type-section">
        <div className="galeria-type-filters">
          <button
            className={`galeria-type-btn ${activeType === "all" ? "galeria-type-btn--active" : ""}`}
            onClick={() => {
              setActiveType("all");
              setActiveFilter("all");
            }}
          >
            <span className="galeria-type-btn__icon">◆</span>
            <span className="galeria-type-btn__text">Todo</span>
          </button>
          <button
            className={`galeria-type-btn ${activeType === "nails" ? "galeria-type-btn--active" : ""}`}
            onClick={() => {
              setActiveType("nails");
              setActiveFilter("nails");
            }}
          >
            <span className="galeria-type-btn__icon">✦</span>
            <span className="galeria-type-btn__text">Uñas</span>
          </button>
          <button
            className={`galeria-type-btn ${activeType === "hair" ? "galeria-type-btn--active" : ""}`}
            onClick={() => {
              setActiveType("hair");
              setActiveFilter("hair");
            }}
          >
            <span className="galeria-type-btn__icon">❀</span>
            <span className="galeria-type-btn__text">Cabello</span>
          </button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="galeria-filters-section">
        <div className="galeria-filters">
          {availableCategories.map(([key, cat]) => (
            <button
              key={key}
              className={`galeria-filter-btn ${activeFilter === key ? "galeria-filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(key)}
            >
              <span className="galeria-filter-btn__icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="galeria-grid-section">
        <div className="galeria-grid">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className={`galeria-item ${item.featured ? "galeria-item--featured" : ""}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Placeholder */}
              <div className={`galeria-item__image galeria-item__image--${item.type}`}>
                <span className="galeria-item__icon">
                  {categories[item.category]?.icon || "◆"}
                </span>
              </div>

              {/* Overlay */}
              <div className="galeria-item__overlay">
                <div className="galeria-item__content">
                  <span className="galeria-item__category">
                    {categories[item.category]?.label || item.category}
                  </span>
                  <h3 className="galeria-item__title">{item.title}</h3>
                  {item.featured && (
                    <span className="galeria-item__featured-badge">
                      <span className="galeria-item__star">✦</span>
                      Destacado
                    </span>
                  )}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="galeria-item__cta"
                >
                  Quiero este diseño
                  <span className="galeria-item__arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="galeria-empty">
            <span className="galeria-empty__icon">◆</span>
            <p className="galeria-empty__text">
              No hay diseños en esta categoría aún.<br />
              ¡Pronto agregaremos más!
            </p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="galeria-stats">
        <div className="galeria-stats__grid">
          <div className="galeria-stat">
            <span className="galeria-stat__number">{galleryItems.length}+</span>
            <span className="galeria-stat__label">Diseños Realizados</span>
          </div>
          <div className="galeria-stat">
            <span className="galeria-stat__number">800+</span>
            <span className="galeria-stat__label">Clientas Felices</span>
          </div>
          <div className="galeria-stat">
            <span className="galeria-stat__number">100%</span>
            <span className="galeria-stat__label">Satisfacción</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="galeria-cta">
        <div className="galeria-cta__content">
          <span className="galeria-cta__icon">◆</span>
          <h2 className="galeria-cta__title">
            ¿Te inspiraste con algún <em>diseño</em>?
          </h2>
          <p className="galeria-cta__text">
            Agenda tu cita y crea tu look personalizado.<br />
            Nuestras artistas harán realidad tu visión.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="galeria-cta__btn"
          >
            <i className="pi pi-whatsapp" />
            Reservar mi Cita
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}