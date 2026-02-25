import { useState } from "react";
import "../style/Footer.css";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "51950874416";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Quiero reservar una cita 💅");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Galería", href: "/galeria" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "pi pi-instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "pi pi-facebook",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    icon: "pi pi-whatsapp",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: "pi pi-tiktok",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="footer">
      {/* Top decorative border */}
      <div className="footer__top-border">
        <span className="footer__border-line" />
        <span className="footer__border-diamond">◆</span>
        <span className="footer__border-line" />
      </div>

      <div className="footer__inner">
        {/* Column 1 — Brand */}
        <div className="footer__brand">
          <img src={Logo} alt="Beauty Studio - Uñas & Cabello" className="footer__logo" />
          <p className="footer__tagline">
            Belleza integral en cada detalle.<br />Uñas perfectas. Cabello radiante.
          </p>
          <div className="footer__socials">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label={s.label}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider vertical */}
        <div className="footer__vdivider" />

        {/* Column 2 — Navigation */}
        <div className="footer__col">
          <h4 className="footer__col-title">Navegación</h4>
          <nav className="footer__nav">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="footer__nav-link">
                <span className="footer__nav-arrow">→</span>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider vertical */}
        <div className="footer__vdivider" />

        {/* Column 3 — Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contacto</h4>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <i className="pi pi-whatsapp footer__contact-icon" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                +51 950 874 416
              </a>
            </li>
            <li className="footer__contact-item">
              <i className="pi pi-map-marker footer__contact-icon" />
              <span>Lima, Perú</span>
            </li>
            <li className="footer__contact-item">
              <i className="pi pi-clock footer__contact-icon" />
              <span>Lun – Sáb: 9am – 7pm</span>
            </li>
          </ul>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer__reserve-btn">
            <i className="pi pi-whatsapp" />
            Reservar Cita
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <span className="footer__bottom-line" />
        <p className="footer__copy">
          © {year} Beauty Studio — Uñas &amp; Cabello — Todos los derechos reservados
        </p>
        <span className="footer__bottom-line" />
      </div>
    </footer>
  );
}