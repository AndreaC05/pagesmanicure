import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../style/Banner.css";
import { Button } from "primereact/button";
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";

const WHATSAPP_NUMBER = "51950874416";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "¡Hola! Quiero reservar una cita 💅",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const images = [Banner1, Banner2, Banner3];

// Contenido por ruta
const contentByRoute = {
  "/": {
    eyebrow: "Studio de Belleza Integral",
    thinTitle: "Donde el estilo",
    boldTitle: "Cobra Vida",
    subtitle:
      "Especialistas en uñas, cabello y tratamientos de belleza para ti.",
    btnLabel: "Ver Servicios",
    scrollTo: "servicios",
  },
  "/servicios": {
    eyebrow: "Nuestros Servicios",
    thinTitle: "Lo que",
    boldTitle: "Ofrecemos",
    subtitle:
      "Uñas, cabello y mucho más. Descubre todo lo que tenemos para ti.",
    btnLabel: "Ver Todo",
    scrollTo: "servicios",
  },
  "/galeria": {
    eyebrow: "Galería de Trabajos",
    thinTitle: "Nuestra",
    boldTitle: "Inspiración",
    subtitle: "Cada trabajo refleja pasión, detalle y dedicación.",
    btnLabel: "Ver Galería",
    scrollTo: "galeria",
  },
  "/nosotros": {
    eyebrow: "Conoce el Equipo",
    thinTitle: "Quiénes",
    boldTitle: "Somos",
    subtitle: "Un equipo apasionado por la belleza y el cuidado personal.",
    btnLabel: "Conócenos",
    scrollTo: "nosotros",
  },
  "/contacto": {
    eyebrow: "Estamos para Ti",
    thinTitle: "Escríbenos",
    boldTitle: "Hoy",
    subtitle:
      "Reserva tu cita o consulta lo que necesites. Con gusto te atendemos.",
    btnLabel: "Ver Contacto",
    scrollTo: "contacto",
  },
};

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const location = useLocation();
  const content = contentByRoute[location.pathname] ?? contentByRoute["/"];

  // Animar texto al cambiar de ruta
  useEffect(() => {
    setTextVisible(false);
    const timer = setTimeout(() => setTextVisible(true), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Auto-slide de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setAnimating(false);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => {
    if (index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 800);
  };

  return (
    <section className="banner">
      {/* Slides de imágenes — siempre rotan */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`banner__slide ${i === current ? "banner__slide--active" : ""} ${
            animating && i === current ? "banner__slide--out" : ""
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="banner__overlay" />
      <div className="banner__deco-line banner__deco-line--top" />
      <div className="banner__deco-line banner__deco-line--bottom" />

      {/* Contenido — cambia por ruta */}
      <div
        className={`banner__content ${!textVisible ? "banner__content--fade" : ""}`}
      >
        <p className="banner__eyebrow">{content.eyebrow}</p>

        <h1 className="banner__title">
          <span className="banner__title--thin">{content.thinTitle}</span>
          <br />
          <span className="banner__title--bold">{content.boldTitle}</span>
        </h1>

        <div className="banner__divider">
          <span className="banner__divider-line" />
          <span className="banner__divider-diamond">◆</span>
          <span className="banner__divider-line" />
        </div>

        <p className="banner__subtitle">{content.subtitle}</p>

        <div className="banner__cta">
          <Button
            label={content.btnLabel}
            className="banner__btn-prime banner__btn-prime--primary"
            onClick={() =>
              document
                .getElementById(content.scrollTo)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <Button
            label="Reservar Cita"
            icon="pi pi-whatsapp"
            className="banner__btn-prime banner__btn-prime--whatsapp"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
          />
        </div>
      </div>

      {/* Dots */}
      <div className="banner__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`banner__dot ${i === current ? "banner__dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="banner__scroll">
        <span className="banner__scroll-text">Scroll</span>
        <span className="banner__scroll-line" />
      </div>
    </section>
  );
}
