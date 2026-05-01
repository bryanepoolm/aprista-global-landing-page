import React from 'react';

export default function Hero() {
  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      backgroundImage: 'url(/images/hero_bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="hero-overlay" style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(31, 69, 41, 0.7)'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content animate-fade-in" style={{
          maxWidth: '800px',
          color: 'white',
        }}>
          <h1 style={{ color: 'white', fontSize: '4rem', marginBottom: '1.5rem', fontWeight: 800 }}>
            El Origen Puro para tu <span style={{ color: 'var(--accent)' }}>Industria</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            En Distribuidora Prisua Global, producimos y proveemos aceites y grasas vegetales sostenibles de la más alta calidad para la industria alimenticia, química, agropecuaria y cuidado personal.
          </p>
          <a href="#contacto" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
            Contáctanos Hoy
          </a>
        </div>
      </div>
    </section>
  );
}
