import "../style/Nostros.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "51950874416";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Quiero conocer más sobre ustedes 💅");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const values = [
  {
    icon: "✦",
    title: "Excelencia",
    description: "Cada servicio es ejecutado con la máxima precisión y cuidado. No aceptamos menos que la perfección."
  },
  {
    icon: "◆",
    title: "Profesionalismo",
    description: "Equipo certificado y en constante actualización con las últimas técnicas y tendencias."
  },
  {
    icon: "❀",
    title: "Pasión",
    description: "Amamos lo que hacemos y se nota en cada detalle. Tu belleza es nuestra obra de arte."
  },
  {
    icon: "◈",
    title: "Higiene",
    description: "Protocolos de sanitización certificados. Tu seguridad es nuestra máxima prioridad."
  }
];

const team = [
  {
    id: 1,
    name: "Ana García",
    role: "Especialista en Uñas",
    specialty: "Nail Art & Diseños Personalizados",
    description: "5 años de experiencia creando diseños únicos. Certificada en técnicas internacionales de nail art."
  },
  {
    id: 2,
    name: "María López",
    role: "Estilista Profesional",
    specialty: "Coloración & Balayage",
    description: "Experta en técnicas de color avanzadas. Especializada en transformaciones capilares impresionantes."
  },
  {
    id: 3,
    name: "Carmen Torres",
    role: "Técnica en Uñas",
    specialty: "Acrílico & Gel",
    description: "Maestra en construcción de uñas. Perfecta para quienes buscan longitud y durabilidad."
  },
  {
    id: 4,
    name: "Sofía Reyes",
    role: "Hair Stylist",
    specialty: "Corte & Peinados",
    description: "Creatividad sin límites en cada look. Especialista en peinados para eventos especiales."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Lucía Martínez",
    service: "Uñas en Gel",
    text: "El mejor lugar para hacerse las uñas en Lima. Siempre salgo encantada con el resultado. ¡Súper recomendado!",
    rating: 5
  },
  {
    id: 2,
    name: "Isabella Rojas",
    service: "Balayage",
    text: "María es una artista con el color. Mi cabello nunca se había visto tan hermoso. Volveré sin duda.",
    rating: 5
  },
  {
    id: 3,
    name: "Valeria Cruz",
    service: "Nail Art",
    text: "Los diseños que crean son impresionantes. Siempre recibo cumplidos por mis uñas. Vale cada sol invertido.",
    rating: 5
  }
];

const milestones = [
  { year: "2021", event: "Apertura del Studio" },
  { year: "2022", event: "500+ Clientas Felices" },
  { year: "2023", event: "Expansión de Servicios de Cabello" },
  { year: "2024", event: "Reconocimiento de Excelencia" }
];

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <Banner />

      {/* Hero Section */}
      <section className="nosotros-hero">
        <div className="nosotros-hero__content">
          <p className="nosotros-hero__eyebrow">Sobre Nosotros</p>
          <h1 className="nosotros-hero__title">
            Donde la <em>belleza</em><br />encuentra su <em>arte</em>
          </h1>
          <div className="nosotros-hero__divider">
            <span />
            <span className="nosotros-hero__diamond">◆</span>
            <span />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="nosotros-story">
        <div className="nosotros-story__container">
          <div className="nosotros-story__visual">
            <div className="nosotros-story__frame">
              <div className="nosotros-story__placeholder">
                <div className="nosotros-story__icons">
                  <span className="nosotros-story__icon">✦</span>
                  <span className="nosotros-story__icon-divider">◆</span>
                  <span className="nosotros-story__icon">❀</span>
                </div>
              </div>
            </div>
            <div className="nosotros-story__deco nosotros-story__deco--1" />
            <div className="nosotros-story__deco nosotros-story__deco--2" />
          </div>

          <div className="nosotros-story__content">
            <h2 className="nosotros-story__title">
              Nuestra <em>Historia</em>
            </h2>
            <div className="nosotros-story__divider">
              <span />
              <span className="nosotros-story__gem">◆</span>
              <span />
            </div>
            
            <p className="nosotros-story__text">
              Comenzamos en 2021 con un sueño simple pero ambicioso: crear un espacio donde 
              cada mujer pudiera sentirse especial, valorada y hermosa. Lo que empezó como un 
              pequeño studio especializado en manicure ha crecido hasta convertirse en un 
              referente de belleza integral en Lima.
            </p>
            
            <p className="nosotros-story__text">
              Nuestra pasión por la excelencia nos llevó a expandir nuestros servicios hacia 
              el estilismo capilar, manteniendo siempre el mismo compromiso: productos premium, 
              técnicas actualizadas y un trato personalizado que hace la diferencia.
            </p>

            <p className="nosotros-story__text">
              Hoy, con más de 800 clientas satisfechas y un equipo de profesionales certificadas, 
              continuamos innovando y perfeccionando nuestro arte. Porque cada visita no es solo 
              un servicio, es una experiencia de transformación.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="nosotros-timeline">
        <div className="nosotros-timeline__header">
          <h2 className="nosotros-timeline__title">Nuestro <em>Recorrido</em></h2>
          <div className="nosotros-timeline__divider">
            <span />
            <span className="nosotros-timeline__gem">◆</span>
            <span />
          </div>
        </div>

        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="timeline__item" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="timeline__marker">
                <span className="timeline__dot" />
              </div>
              <div className="timeline__content">
                <span className="timeline__year">{milestone.year}</span>
                <span className="timeline__event">{milestone.event}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="nosotros-values">
        <div className="nosotros-values__header">
          <p className="nosotros-values__eyebrow">Nuestros Pilares</p>
          <h2 className="nosotros-values__title">
            Lo que nos <em>define</em>
          </h2>
          <div className="nosotros-values__divider">
            <span />
            <span className="nosotros-values__gem">◆</span>
            <span />
          </div>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={value.title} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="value-card__icon">{value.icon}</span>
              <h3 className="value-card__title">{value.title}</h3>
              <p className="value-card__description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="nosotros-team">
        <div className="nosotros-team__header">
          <p className="nosotros-team__eyebrow">Conoce al Equipo</p>
          <h2 className="nosotros-team__title">
            Nuestras <em>Profesionales</em>
          </h2>
          <div className="nosotros-team__divider">
            <span />
            <span className="nosotros-team__gem">◆</span>
            <span />
          </div>
          <p className="nosotros-team__subtitle">
            Expertas certificadas con pasión por la belleza y el detalle perfecto.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <article key={member.id} className="team-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="team-card__image">
                <div className="team-card__placeholder">
                  <span className="team-card__icon">◆</span>
                </div>
              </div>
              <div className="team-card__content">
                <h3 className="team-card__name">{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <div className="team-card__specialty">
                  <span className="team-card__specialty-icon">✦</span>
                  {member.specialty}
                </div>
                <p className="team-card__description">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="nosotros-testimonials">
        <div className="nosotros-testimonials__header">
          <p className="nosotros-testimonials__eyebrow">Lo que dicen nuestras clientas</p>
          <h2 className="nosotros-testimonials__title">
            Experiencias <em>Reales</em>
          </h2>
          <div className="nosotros-testimonials__divider">
            <span />
            <span className="nosotros-testimonials__gem">◆</span>
            <span />
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-card__stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="testimonial-card__star">★</span>
                ))}
              </div>
              <p className="testimonial-card__text">"{testimonial.text}"</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">{testimonial.name}</span>
                <span className="testimonial-card__service">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="nosotros-cta">
        <div className="nosotros-cta__content">
          <span className="nosotros-cta__icon">◆</span>
          <h2 className="nosotros-cta__title">
            ¿Lista para vivir la <em>experiencia</em>?
          </h2>
          <p className="nosotros-cta__text">
            Únete a las cientos de mujeres que confían en nosotras.<br />
            Tu primera visita será el inicio de una hermosa transformación.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nosotros-cta__btn"
          >
            <i className="pi pi-whatsapp" />
            Agenda tu Primera Cita
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}