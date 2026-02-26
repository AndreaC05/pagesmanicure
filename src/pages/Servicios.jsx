import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../style/Servicio.css";
import { useState } from "react";

const WHATSAPP_NUMBER = "51950874416";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Quiero reservar una cita 💅");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const nailServices = [
  {
    icon: "✦",
    title: "Manicure Clásico",
    shortDesc: "Cuidado esencial para tus manos",
    desc: "Tratamiento completo que incluye limpieza profunda de cutículas, limado profesional, pulido de uñas y aplicación de esmalte tradicional. Perfecto para mantener tus uñas saludables y hermosas.",
    price: "S/ 25",
    duration: "45 min",
    includes: [
      "Limpieza y corte de cutículas",
      "Limado y forma personalizada",
      "Exfoliación de manos",
      "Masaje hidratante",
      "Esmaltado tradicional"
    ]
  },
  {
    icon: "◈",
    title: "Esmaltado Semipermanente",
    shortDesc: "Duración perfecta hasta 3 semanas",
    desc: "Técnica de esmaltado de larga duración con acabado brillante profesional. Resistente al agua, no se descascara y mantiene el color vibrante por semanas sin perder su brillo.",
    price: "S/ 40",
    duration: "60 min",
    includes: [
      "Preparación de uñas",
      "Aplicación de base protectora",
      "2 capas de color semipermanente",
      "Sellado con top coat",
      "Secado con lámpara LED/UV"
    ]
  },
  {
    icon: "❋",
    title: "Uñas en Gel",
    shortDesc: "Extensiones naturales y resistentes",
    desc: "Sistema de extensión con gel que proporciona resistencia y durabilidad sin dañar la uña natural. Acabado natural, brillante o mate según tu preferencia.",
    price: "S/ 80",
    duration: "90 min",
    includes: [
      "Preparación y desinfección",
      "Aplicación de tips o moldes",
      "Esculpido con gel UV",
      "Limado y forma perfecta",
      "Esmaltado o decoración"
    ]
  },
  {
    icon: "◇",
    title: "Uñas Acrílicas",
    shortDesc: "Máxima resistencia y longitud",
    desc: "Construcción en acrílico para uñas extra resistentes y de mayor longitud. Ideal para quienes buscan un look dramático y duradero con acabado impecable.",
    price: "S/ 90",
    duration: "100 min",
    includes: [
      "Preparación de uña natural",
      "Aplicación de primer",
      "Construcción con acrílico",
      "Esculpido y forma deseada",
      "Esmaltado semipermanente incluido"
    ]
  },
  {
    icon: "✿",
    title: "Nail Art & Diseños",
    shortDesc: "Arte personalizado en tus uñas",
    desc: "Diseños únicos creados a mano por nuestras artistas especializadas. Desde flores delicadas hasta geometrías modernas, cada diseño es una obra de arte.",
    price: "Desde S/ 15",
    duration: "Variable",
    includes: [
      "Diseño personalizado",
      "Técnicas de nail art profesional",
      "Decoraciones premium (strass, foil, etc.)",
      "Sellado de larga duración",
      "Asesoría de diseño"
    ]
  },
  {
    icon: "◉",
    title: "Pedicure Spa",
    shortDesc: "Tratamiento completo para tus pies",
    desc: "Experiencia relajante que combina cuidado profesional con momento de bienestar. Tus pies lucirán suaves, hidratados y con uñas perfectas.",
    price: "S/ 35",
    duration: "60 min",
    includes: [
      "Baño de pies con sales aromáticas",
      "Exfoliación profunda",
      "Retiro de callosidades",
      "Masaje relajante de pies y pantorrillas",
      "Esmaltado tradicional o semipermanente"
    ]
  }
];

const hairServices = [
  {
    icon: "❀",
    title: "Corte de Cabello",
    shortDesc: "Corte personalizado a tu estilo",
    desc: "Corte profesional adaptado a la forma de tu rostro y tipo de cabello. Nuestras estilistas analizan tu estructura facial para crear el look perfecto que realce tu belleza natural.",
    price: "S/ 35",
    duration: "45 min",
    includes: [
      "Consultoría de estilo personalizada",
      "Lavado con productos premium",
      "Corte con técnicas profesionales",
      "Secado y peinado",
      "Asesoría de mantenimiento"
    ]
  },
  {
    icon: "✾",
    title: "Brushing & Planchado",
    shortDesc: "Alisado perfecto con brillo",
    desc: "Técnica profesional de alisado que respeta la salud de tu cabello. Utilizamos protectores térmicos de alta gama para lograr un acabado liso, brillante y sedoso.",
    price: "S/ 30",
    duration: "40 min",
    includes: [
      "Lavado con shampoo nutritivo",
      "Aplicación de protector térmico",
      "Brushing o planchado profesional",
      "Tratamiento de brillo",
      "Acabado con productos anti-frizz"
    ]
  },
  {
    icon: "❁",
    title: "Coloración Completa",
    shortDesc: "Color vibrante y duradero",
    desc: "Servicio de coloración profesional con tintes de alta calidad libres de amoniaco. Desde coberturas de canas hasta cambios de look completos con colores vibrantes.",
    price: "S/ 80",
    duration: "120 min",
    includes: [
      "Análisis de cabello y cuero cabelludo",
      "Prueba de sensibilidad",
      "Aplicación de color profesional",
      "Lavado y tratamiento post-color",
      "Secado y peinado incluido"
    ]
  },
  {
    icon: "✺",
    title: "Mechas & Balayage",
    shortDesc: "Iluminación natural y sofisticada",
    desc: "Técnicas de iluminación degradadas que aportan dimensión y luminosidad. Efecto sun-kissed, mechas californianas o babylights para un look natural y elegante.",
    price: "S/ 120",
    duration: "150 min",
    includes: [
      "Diseño personalizado de mechas",
      "Aplicación con técnica balayage",
      "Tonalización para matizar",
      "Tratamiento de hidratación",
      "Brushing de acabado profesional"
    ]
  },
  {
    icon: "❃",
    title: "Tratamientos Capilares",
    shortDesc: "Restauración y nutrición profunda",
    desc: "Tratamientos intensivos que devuelven vida a tu cabello. Keratina, botox capilar, hidratación profunda o reconstrucción según las necesidades de tu melena.",
    price: "S/ 60",
    duration: "90 min",
    includes: [
      "Diagnóstico capilar profesional",
      "Lavado con shampoo especializado",
      "Aplicación de tratamiento seleccionado",
      "Masaje capilar estimulante",
      "Secado y acabado"
    ]
  },
  {
    icon: "✹",
    title: "Peinados & Recogidos",
    shortDesc: "Elegancia para ocasiones especiales",
    desc: "Peinados sofisticados para eventos, bodas, graduaciones o cualquier ocasión especial. Creaciones únicas que combinan técnica y creatividad para que luzcas impecable.",
    price: "S/ 80",
    duration: "90 min",
    includes: [
      "Consulta previa de estilo",
      "Lavado y preparación del cabello",
      "Peinado o recogido personalizado",
      "Fijación de larga duración",
      "Accesorios decorativos (opcional)"
    ]
  }
];

const whyChooseUs = [
  {
    icon: "✦",
    title: "Profesionales Certificadas",
    desc: "Equipo con años de experiencia y capacitación constante en las últimas tendencias"
  },
  {
    icon: "◆",
    title: "Productos Premium",
    desc: "Solo utilizamos marcas de reconocido prestigio internacional, libres de sustancias nocivas"
  },
  {
    icon: "❋",
    title: "Higiene Impecable",
    desc: "Protocolos de esterilización certificados y herramientas desinfectadas después de cada uso"
  },
  {
    icon: "✿",
    title: "Atención Personalizada",
    desc: "Cada cliente recibe un servicio adaptado a sus necesidades y preferencias únicas"
  }
];

export default function Servicios() {
  const [activeCategory, setActiveCategory] = useState("uñas");
  const [expandedService, setExpandedService] = useState(null);

  const currentServices = activeCategory === "uñas" ? nailServices : hairServices;

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <Banner />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero__content">
          <p className="services-hero__eyebrow">Nuestros Servicios</p>
          <h1 className="services-hero__title">
            Belleza <em>Integral</em> para Ti
          </h1>
          <div className="services-hero__divider">
            <span />
            <span className="services-hero__gem">◆</span>
            <span />
          </div>
          <p className="services-hero__subtitle">
            Descubre nuestra gama completa de servicios profesionales de uñas y cabello.
            Cada tratamiento está diseñado para realzar tu belleza natural con técnicas
            de vanguardia y productos premium.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="services-main">
        <div className="services-tabs-wrapper">
          <button
            className={`services-tab-btn ${activeCategory === "uñas" ? "services-tab-btn--active" : ""}`}
            onClick={() => setActiveCategory("uñas")}
          >
            <span className="services-tab-btn__icon">✦</span>
            <span className="services-tab-btn__text">Uñas & Manicure</span>
          </button>
          <button
            className={`services-tab-btn ${activeCategory === "cabello" ? "services-tab-btn--active" : ""}`}
            onClick={() => setActiveCategory("cabello")}
          >
            <span className="services-tab-btn__icon">❀</span>
            <span className="services-tab-btn__text">Cabello & Estilismo</span>
          </button>
        </div>

        {/* Services List */}
        <div className="services-list">
          {currentServices.map((service, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              className={`service-detail ${expandedService === index ? "service-detail--expanded" : ""}`}
            >
              {/* Service Header */}
              <div 
                className="service-detail__header"
                onClick={() => toggleService(index)}
              >
                <div className="service-detail__header-left">
                  <span className="service-detail__icon">{service.icon}</span>
                  <div className="service-detail__header-text">
                    <h3 className="service-detail__title">{service.title}</h3>
                    <p className="service-detail__short-desc">{service.shortDesc}</p>
                  </div>
                </div>
                <div className="service-detail__header-right">
                  <div className="service-detail__meta">
                    <span className="service-detail__price">{service.price}</span>
                    <span className="service-detail__duration">{service.duration}</span>
                  </div>
                  <button className="service-detail__toggle">
                    <i className={`pi pi-chevron-${expandedService === index ? "up" : "down"}`} />
                  </button>
                </div>
              </div>

              {/* Service Expanded Content */}
              {expandedService === index && (
                <div className="service-detail__body">
                  <div className="service-detail__description">
                    <p>{service.desc}</p>
                  </div>
                  
                  <div className="service-detail__includes">
                    <h4 className="service-detail__includes-title">Incluye:</h4>
                    <ul className="service-detail__includes-list">
                      {service.includes.map((item, i) => (
                        <li key={i} className="service-detail__includes-item">
                          <span className="service-detail__includes-dot">◆</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail__actions">
                    <a 
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-detail__cta"
                    >
                      <i className="pi pi-whatsapp" />
                      Reservar este servicio
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="services-why">
        <div className="services-why__header">
          <p className="services-why__eyebrow">¿Por qué elegirnos?</p>
          <h2 className="services-why__title">
            Excelencia en cada <em>servicio</em>
          </h2>
          <div className="services-why__divider">
            <span />
            <span className="services-why__gem">◆</span>
            <span />
          </div>
        </div>

        <div className="services-why__grid">
          {whyChooseUs.map((item, index) => ( 
            <div key={index} className="why-card">
              <span className="why-card__icon">{item.icon}</span>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta__content">
          <h2 className="services-cta__title">
            ¿Lista para tu <em>transformación</em>?
          </h2>
          <p className="services-cta__text">
            Reserva tu cita ahora y descubre la diferencia de un servicio profesional
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta__btn"
          >
            <i className="pi pi-whatsapp" />
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}