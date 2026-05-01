import React from 'react';

const categories = [
  {
    title: 'Industria Alimenticia',
    description: 'Aceites y grasas diseñados para panificación, frituras, lácteos y confitería, garantizando sabor y textura excepcional.',
    image: '/images/hero_bg.png'
  },
  {
    title: 'Química e Industrial',
    description: 'Materias primas especializadas para procesos industriales, lubricantes y desarrollo de biocombustibles.',
    image: '/images/industria.png'
  },
  {
    title: 'Agropecuaria',
    description: 'Nutrición animal de alta calidad, proporcionando energía y ácidos grasos esenciales para el desarrollo del ganado.',
    image: '/images/agro.png'
  },
  {
    title: 'Cuidado Personal',
    description: 'Bases puras y naturales para la elaboración de cosméticos, jabones y productos de higiene de primer nivel.',
    image: '/images/cuidado.png'
  }
];

export default function Productos() {
  return (
    <section id="productos" className="section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h2 className="section-title">Nuestros Productos</h2>
        <p className="section-subtitle">Soluciones a la medida con la más alta calidad para diversas industrias</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {categories.map((category, index) => (
            <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-img-wrapper">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{category.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>{category.description}</p>
                <a href="#contacto" style={{ 
                  color: 'var(--primary)', fontWeight: '600', textDecoration: 'none', 
                  display: 'flex', alignItems: 'center', gap: '0.5rem' 
                }}>
                  Solicitar Información 
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
