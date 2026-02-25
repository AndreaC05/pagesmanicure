import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import Logo from "../assets/Logo.png";

const navLinks = [
  { label: "Inicio",    href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Galería",   href: "/galeria" },
  { label: "Nosotros",  href: "/nosotros" },
  { label: "Contacto",  href: "/contacto" },
];

const WHATSAPP_NUMBER  = "51950874416";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Quiero reservar una cita 💅");
const WHATSAPP_URL     = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href) => {
    setMenuOpen(false);
    navigate(href);          // navega a la ruta
    window.scrollTo({ top: 0, behavior: "smooth" }); // sube al top
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--transparent"}`}>

      {/* Logo */}
      <Link className="navbar__logo" to="/" onClick={() => setMenuOpen(false)}>
        <img src={Logo} alt="Studio de Uñas & Belleza" />
      </Link>

      {/* Desktop nav */}
      <nav className="navbar__links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="navbar__link"
            onClick={() => handleLink(link.href)}
          >
            {link.label}
            <span className="navbar__link-underline" />
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__cta"
      >
        <span className="navbar__cta-icon">
          <i className="pi pi-whatsapp" />
        </span>
        Reservar
      </a>

      {/* Hamburger */}
      <button
        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menú"
      >
        <span /><span /><span />
      </button>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="navbar__mobile-link"
            onClick={() => handleLink(link.href)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__mobile-cta"
        >
          <i className="pi pi-whatsapp" /> Reservar Cita
        </a>
      </div>

    </header>
  );
}