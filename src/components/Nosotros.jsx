import React from 'react';

export default function Nosotros() {
  return (
    <section id="nosotros" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px' }} className="animate-fade-in">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Nuestra Empresa</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '2rem' }}></div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
              Nos dedicamos a la producción y distribución de aceites y grasas vegetales de primer nivel, asegurando procesos sustentables y responsables con el medio ambiente.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
              Trabajamos bajo el principio de responsabilidad socioambiental, conservación de recursos naturales y biodiversidad, inspirados en los más altos estándares de calidad de la industria. Nuestro compromiso va más allá de entregar un producto; entregamos la base para el éxito de tu negocio y familia.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', top: '-20px', left: '-20px', 
              width: '100%', height: '100%', border: '4px solid var(--accent)', 
              borderRadius: 'var(--radius)', zIndex: 0 
            }}></div>
            <img 
              src="/images/industria.png" 
              alt="Instalaciones Prisua Global" 
              style={{ 
                width: '100%', borderRadius: 'var(--radius)', 
                position: 'relative', zIndex: 1, boxShadow: 'var(--shadow)' 
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
