import React from 'react';

const categorias = [
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

const presentaciones = [
  {
    title: 'Frasco 1kg (Retail)',
    description: 'Presentación de Aceite de Palma puro ideal para venta al por menor y uso en cocinas comerciales o domésticas. Práctico y seguro.',
    image: '/images/producto_frasco.png'
  },
  {
    title: 'Bidones (Mayoreo)',
    description: 'Formato resistente y eficiente de Aceite de Palma para la industria, facilitando el transporte y el vertido controlado en alto volumen.',
    image: '/images/producto_bidon.png'
  },
  {
    title: 'Cubetas (Mayoreo)',
    description: 'Presentación de Aceite de Palma de alto rendimiento para procesos industriales. Sellado hermético para mantener la máxima pureza.',
    image: '/images/producto_cubeta.png'
  }
];

export default function Productos() {
  return (
    <section id="productos" className="section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        
        {/* Presentaciones para Marca Propia */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 className="section-title">Presentaciones para tu Marca</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', margin: '0 auto 2rem' }}></div>
          <p className="section-subtitle">Ofrecemos diversas opciones de envasado para que puedas comercializar nuestros productos con tu propia marca.</p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {presentaciones.map((pres, index) => (
              <div key={`pres-${index}`} className="card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-img-wrapper" style={{ height: '350px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={pres.image} alt={pres.title} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{pres.title}</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>{pres.description}</p>
                  <a href="#contacto" style={{ 
                    color: 'var(--primary)', fontWeight: '600', textDecoration: 'none', 
                    display: 'flex', alignItems: 'center', gap: '0.5rem' 
                  }}>
                    Solicitar Cotización 
                    <span style={{ fontSize: '1.2rem' }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industrias (Categorías previas) */}
        <div>
          <h2 className="section-title">Soluciones por Industria</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', margin: '0 auto 2rem' }}></div>
          <p className="section-subtitle">Aceites y grasas formulados a la medida con la más alta calidad para tu sector.</p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {categorias.map((category, index) => (
              <div key={`cat-${index}`} className="card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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

      </div>
    </section>
  );
}
