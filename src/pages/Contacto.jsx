import "../style/Contacto.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const locations = [
  {
    id: 1,
    name: "Sede Miraflores",
    featured: true,
    address: "Av. Larco 1234, Miraflores",
    district: "Miraflores",
    phone: "+51 950 874 416",
    whatsapp: "51950874416",
    email: "miraflores@beautystudio.pe",
    hours: {
      weekdays: "Lun - Vie: 9:00 AM - 8:00 PM",
      saturday: "Sábado: 9:00 AM - 7:00 PM",
      sunday: "Domingo: Cerrado",
    },
    services: ["Uñas Completo", "Cabello Completo", "Tratamientos Premium"],
    mapUrl: "https://maps.google.com",
    coordinates: { lat: -12.1234, lng: -77.0234 },
  },
  {
    id: 2,
    name: "Sede San Isidro",
    featured: false,
    address: "Av. Conquistadores 567, San Isidro",
    district: "San Isidro",
    phone: "+51 945 123 456",
    whatsapp: "51945123456",
    email: "sanisidro@beautystudio.pe",
    hours: {
      weekdays: "Lun - Vie: 10:00 AM - 8:00 PM",
      saturday: "Sábado: 10:00 AM - 6:00 PM",
      sunday: "Domingo: Cerrado",
    },
    services: ["Uñas Premium", "Coloración Experta", "Nail Art Exclusivo"],
    mapUrl: "https://maps.google.com",
    coordinates: { lat: -12.0987, lng: -77.0456 },
  },
  {
    id: 3,
    name: "Sede Surco",
    featured: false,
    address: "Av. Primavera 890, Santiago de Surco",
    district: "Surco",
    phone: "+51 938 765 432",
    whatsapp: "51938765432",
    email: "surco@beautystudio.pe",
    hours: {
      weekdays: "Lun - Vie: 9:00 AM - 7:00 PM",
      saturday: "Sábado: 9:00 AM - 6:00 PM",
      sunday: "Domingo: Cerrado",
    },
    services: ["Uñas & Pedicure", "Corte & Peinados", "Tratamientos Capilares"],
    mapUrl: "https://maps.google.com",
    coordinates: { lat: -12.1456, lng: -76.9876 },
  },
];

const socialLinks = [
  { name: "Instagram", icon: "pi pi-instagram", url: "https://instagram.com" },
  { name: "Facebook", icon: "pi pi-facebook", url: "https://facebook.com" },
  { name: "TikTok", icon: "pi pi-tiktok", url: "https://tiktok.com" },
];

export default function Contacto() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: locations[0].id,
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Si cambia la sede, actualizar la sede seleccionada
    if (name === "location") {
      const location = locations.find((loc) => loc.id === parseInt(value));
      if (location) setSelectedLocation(location);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = locations.find(
      (loc) => loc.id === parseInt(formData.location),
    );
    const message = encodeURIComponent(
      `¡Hola! Quiero agendar una cita.\n\n` +
        `Nombre: ${formData.name}\n` +
        `Teléfono: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Sede: ${location.name}\n` +
        `Servicio: ${formData.service}\n` +
        `Mensaje: ${formData.message}`,
    );
    window.open(`https://wa.me/${location.whatsapp}?text=${message}`, "_blank");
  };

  const getWhatsAppUrl = (location) => {
    const message = encodeURIComponent(
      `¡Hola! Quiero agendar una cita en ${location.name} 💅`,
    );
    return `https://wa.me/${location.whatsapp}?text=${message}`;
  };

  return (
    <>
      <Navbar />
      <Banner />

      {/* Hero Section */}
      <section className="contacto-hero">
        <div className="contacto-hero__content">
          <p className="contacto-hero__eyebrow">Contáctanos</p>
          <h1 className="contacto-hero__title">
            Estamos aquí
            <br />
            para <em>ti</em>
          </h1>
          <div className="contacto-hero__divider">
            <span />
            <span className="contacto-hero__diamond">◆</span>
            <span />
          </div>
          <p className="contacto-hero__subtitle">
            Visítanos en cualquiera de nuestras tres sedes en Lima.
            <br />
            Cada espacio diseñado para tu comodidad y belleza.
          </p>
        </div>
      </section>

      {/* Locations Selector */}
      <section className="contacto-selector">
        <div className="contacto-selector__tabs">
          {locations.map((location) => (
            <button
              key={location.id}
              className={`contacto-selector__tab ${selectedLocation.id === location.id ? "contacto-selector__tab--active" : ""}`}
              onClick={() => setSelectedLocation(location)}
            >
              <span className="contacto-selector__tab-icon">
                {location.featured ? "✦" : "◆"}
              </span>
              <div className="contacto-selector__tab-content">
                <span className="contacto-selector__tab-name">
                  {location.name}
                </span>
                <span className="contacto-selector__tab-district">
                  {location.district}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Selected Location Details */}
      <section className="contacto-location">
        <div className="contacto-location__container">
          {/* Map Placeholder */}
          <div className="contacto-location__map">
            <div className="contacto-location__map-placeholder">
              <span className="contacto-location__map-icon">📍</span>
              <p className="contacto-location__map-text">
                {selectedLocation.name}
              </p>
              <a
                href={selectedLocation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-location__map-btn"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="contacto-location__info">
            <div className="contacto-location__header">
              <h2 className="contacto-location__title">
                {selectedLocation.name}
              </h2>
              {selectedLocation.featured && (
                <span className="contacto-location__badge">
                  <span className="contacto-location__badge-icon">✦</span>
                  Principal
                </span>
              )}
            </div>

            {/* Contact Details */}
            <div className="contacto-location__details">
              {/* Address */}
              <div className="contacto-detail">
                <div className="contacto-detail__icon">
                  <i className="pi pi-map-marker" />
                </div>
                <div className="contacto-detail__content">
                  <span className="contacto-detail__label">Dirección</span>
                  <span className="contacto-detail__value">
                    {selectedLocation.address}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="contacto-detail">
                <div className="contacto-detail__icon">
                  <i className="pi pi-phone" />
                </div>
                <div className="contacto-detail__content">
                  <span className="contacto-detail__label">Teléfono</span>
                  <a
                    href={`tel:${selectedLocation.phone}`}
                    className="contacto-detail__value contacto-detail__value--link"
                  >
                    {selectedLocation.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contacto-detail">
                <div className="contacto-detail__icon contacto-detail__icon--whatsapp">
                  <i className="pi pi-whatsapp" />
                </div>
                <div className="contacto-detail__content">
                  <span className="contacto-detail__label">WhatsApp</span>
                  <a
                    href={getWhatsAppUrl(selectedLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto-detail__value contacto-detail__value--link"
                  >
                    {selectedLocation.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contacto-detail">
                <div className="contacto-detail__icon">
                  <i className="pi pi-envelope" />
                </div>
                <div className="contacto-detail__content">
                  <span className="contacto-detail__label">Email</span>
                  <a
                    href={`mailto:${selectedLocation.email}`}
                    className="contacto-detail__value contacto-detail__value--link"
                  >
                    {selectedLocation.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="contacto-location__hours">
              <h3 className="contacto-location__hours-title">
                <i className="pi pi-clock" />
                Horarios de Atención
              </h3>
              <div className="contacto-location__hours-list">
                <div className="contacto-hours-item">
                  <span className="contacto-hours-item__days">
                    Lunes a Viernes
                  </span>
                  <span className="contacto-hours-item__time">
                    {selectedLocation.hours.weekdays.split(": ")[1]}
                  </span>
                </div>
                <div className="contacto-hours-item">
                  <span className="contacto-hours-item__days">Sábados</span>
                  <span className="contacto-hours-item__time">
                    {selectedLocation.hours.saturday.split(": ")[1]}
                  </span>
                </div>
                <div className="contacto-hours-item contacto-hours-item--closed">
                  <span className="contacto-hours-item__days">Domingos</span>
                  <span className="contacto-hours-item__time">
                    {selectedLocation.hours.sunday.split(": ")[1]}
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="contacto-location__services">
              <h3 className="contacto-location__services-title">
                Servicios Disponibles
              </h3>
              <div className="contacto-location__services-list">
                {selectedLocation.services.map((service) => (
                  <span key={service} className="contacto-service-tag">
                    <span className="contacto-service-tag__icon">✓</span>
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={getWhatsAppUrl(selectedLocation)}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-location__cta"
            >
              <i className="pi pi-whatsapp" />
              Reservar en {selectedLocation.name}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contacto-form-section">
        <div className="contacto-form-container">
          <div className="contacto-form-header">
            <p className="contacto-form-header__eyebrow">Agenda tu Cita</p>
            <h2 className="contacto-form-header__title">
              Completa el <em>formulario</em>
            </h2>
            <div className="contacto-form-header__divider">
              <span />
              <span className="contacto-form-header__gem">◆</span>
              <span />
            </div>
            <p className="contacto-form-header__subtitle">
              Te contactaremos vía WhatsApp para confirmar tu cita y horario
              disponible.
            </p>
          </div>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="contacto-form__row">
              <div className="contacto-form__field">
                <label className="contacto-form__label">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="contacto-form__input"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="contacto-form__field">
                <label className="contacto-form__label">Teléfono *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="contacto-form__input"
                  placeholder="+51 999 999 999"
                  required
                />
              </div>
            </div>

            <div className="contacto-form__field">
              <label className="contacto-form__label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="contacto-form__input"
                placeholder="tu@email.com"
              />
            </div>

            <div className="contacto-form__row">
              <div className="contacto-form__field">
                <label className="contacto-form__label">
                  Sede de Preferencia *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="contacto-form__select"
                  required
                >
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contacto-form__field">
                <label className="contacto-form__label">
                  Servicio de Interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="contacto-form__select"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Manicure">Manicure & Uñas</option>
                  <option value="Pedicure">Pedicure</option>
                  <option value="Nail Art">Nail Art & Diseños</option>
                  <option value="Corte">Corte de Cabello</option>
                  <option value="Color">Coloración</option>
                  <option value="Tratamiento">Tratamientos Capilares</option>
                  <option value="Peinado">Peinados & Eventos</option>
                </select>
              </div>
            </div>

            <div className="contacto-form__field">
              <label className="contacto-form__label">Mensaje Adicional</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="contacto-form__textarea"
                placeholder="Cuéntanos qué servicio te interesa o si tienes alguna pregunta especial..."
                rows="4"
              />
            </div>

            <button type="submit" className="contacto-form__submit">
              <i className="pi pi-whatsapp" />
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="contacto-social">
        <div className="contacto-social__content">
          <h3 className="contacto-social__title">Síguenos en Redes</h3>
          <p className="contacto-social__text">
            Mantente al día con nuestros últimos trabajos, promociones y tips de
            belleza.
          </p>
          <div className="contacto-social__links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-social__link"
                aria-label={social.name}
              >
                <i className={social.icon} />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
