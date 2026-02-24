import { useState, useEffect } from "react";
import "../style/Banner.css";
import { Button } from "primereact/button";
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";

const slides = [Banner1, Banner2, Banner3];

const WHATSAPP_NUMBER = "51950874416"; // Perú +51
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Quiero reservar una cita 💅");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
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
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`banner__slide ${i === current ? "banner__slide--active" : ""} ${animating && i === current ? "banner__slide--out" : ""}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}

      {/* Overlay */}
      <div className="banner__overlay" />

      {/* Decorative line top */}
      <div className="banner__deco-line banner__deco-line--top" />
      <div className="banner__deco-line banner__deco-line--bottom" />

      {/* Content */}
      <div className="banner__content">
        <p className="banner__eyebrow">Studio de Uñas &amp; Belleza</p>

        <h1 className="banner__title">
          <span className="banner__title--thin">Arte en</span>
          <br />
          <span className="banner__title--bold">Tus Manos</span>
        </h1>

        <div className="banner__divider">
          <span className="banner__divider-line" />
          <span className="banner__divider-diamond">◆</span>
          <span className="banner__divider-line" />
        </div>

        <p className="banner__subtitle">
          Cada detalle cuenta. Cada uña, una obra de arte.
        </p>

        <div className="banner__cta">
          <Button
            label="Ver Servicios"
            className="banner__btn-prime banner__btn-prime--primary"
            onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
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
        {slides.map((_, i) => (
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