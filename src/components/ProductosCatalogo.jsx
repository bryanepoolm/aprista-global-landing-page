import React from 'react';

const catalogoData = [
  {
    category: 'Aceites Vegetales',
    image: '/images/cat_aceites.png',
    description: 'Nuestros aceites son saludables, 100% vegetales, sin hidrogenar, sin colesterol y libres de ácidos grasos trans.',
    products: [
      { name: 'Aceite de Palma RBD', usa: 'Frituras, sopas, coberturas, cosméticos, jabones.', life: '6 meses' },
      { name: 'Aceite de Palmiste RBD', usa: 'Sustitutos de manteca de cacao, cremas para rellenos, caramelos, cosméticos.', life: '12 meses' },
      { name: 'Aceite Oleína de Palma RBD (Easy Fried)', usa: 'Freído profundo, frituras, cereales, lácteos.', life: '6 meses' },
      { name: 'Estearina de Palma RBD', usa: 'Margarinas, mantecas, jabones, crayones, parafinas.', life: '6 meses' },
      { name: 'Aceite de Coco CB (Crudo y Blanqueado)', usa: 'Cosmético/estético, cuidado personal, jabones.', life: '12 meses' },
      { name: 'Aceite de Coco RBD', usa: 'Consumo personal, confitería, fórmulas lácteas, jabones.', life: '12 meses' },
      { name: 'Aceite de Canola RBD', usa: 'Food service, fórmulas infantiles, repostería, salsas.', life: 'Granel: 6 meses / Envasado: 12 meses' },
      { name: 'Aceite de Maíz RBD', usa: 'Food service, repostería, salsas, alimentos enlatados.', life: 'Granel: 6 meses / Envasado: 12 meses' },
      { name: 'Aceite de Soya RBD', usa: 'Food service, repostería, salsas, pintura alquidálica.', life: 'Granel: 6 meses / Envasado: 12 meses' },
    ]
  },
  {
    category: 'Grasas Vegetales',
    image: '/images/cat_grasas.png',
    description: 'Grasas especializadas elaboradas a partir del Aceite de Palma y sus fracciones. 100% vegetales y sin colesterol.',
    products: [
      { name: 'Grasa Vegetal para Panificación (Grasa Pan Pro Batido)', usa: 'Masas para panificación, galletas, churros, donas.', life: '12 meses' },
      { name: 'Grasa para Panificación y Freído (Grasa Pan-Pro Extra)', usa: 'Masas, pizzas, tamales, freído de alimentos.', life: '12 meses' },
      { name: 'Grasa para Quesos (Grasa Olfilac)', usa: 'Quesos análogos y extendidos.', life: '12 meses' },
      { name: 'Grasa para Quesos (Grasa Olfilac Extra)', usa: 'Quesos con mayor firmeza.', life: '12 meses' },
      { name: 'Grasa para Freído (Donuts-Pro T5)', usa: 'Freído de donas, churros y buñuelos.', life: '12 meses' },
      { name: 'Grasa para Bases de Helados (Ice-Pro)', usa: 'Base para helado y paletas estándar, crema acidificada.', life: '12 meses' },
      { name: 'Grasa para Bases de Helados Finos (Ice-Pro Supreme)', usa: 'Base para helados y paletas finas, crema acidificada.', life: '12 meses' },
    ]
  }
];

export default function ProductosCatalogo() {
  return (
    <section id="catalogo" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 className="section-title">Catálogo de Productos</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', margin: '0 auto 2rem' }}></div>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Somos expertos en aceites y grasas vegetales. Conoce nuestra amplia gama de productos diseñados para la industria alimentaria, química y cosmética.
          </p>
        </div>

        {catalogoData.map((cat, index) => (
          <div key={`catalogo-cat-${index}`} style={{ marginBottom: '5rem' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: '3rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1 1 400px' }}>
                <img 
                  src={cat.image} 
                  alt={cat.category} 
                  style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--text)', marginBottom: '1rem' }}>{cat.category}</h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem' }}>{cat.description}</p>
                <a href="#contacto" style={{ 
                    padding: '12px 24px', 
                    backgroundColor: 'var(--primary)', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '8px', 
                    fontWeight: '600',
                    display: 'inline-block'
                }}>
                  Solicitar Información
                </a>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {cat.products.map((prod, pIndex) => (
                <div key={`prod-${index}-${pIndex}`} style={{ 
                  backgroundColor: 'var(--background)', 
                  padding: '2rem', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.2rem', minHeight: '3rem' }}>{prod.name}</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ fontWeight: '600', display: 'block', marginBottom: '0.2rem', color: 'var(--text)' }}>Usos Recomendados:</span>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', margin: 0 }}>{prod.usa}</p>
                  </div>
                  <div>
                    <span style={{ fontWeight: '600', display: 'inline-block', marginRight: '0.5rem', color: 'var(--text)' }}>Vida Útil:</span>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{prod.life}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}
