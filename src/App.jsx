import React from 'react';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import './index.css';

function App() {
  return (
    <div className="App">
      <header style={{ 
        position: 'fixed', top: 0, width: '100%', zIndex: 1000, 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/images/logo_cropped.png" 
              alt="Distribuidora Prisua Global" 
              style={{ height: '90px', width: 'auto', objectFit: 'contain' }} 
            />
          </a>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 600 }}>Inicio</a>
            <a href="#nosotros" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 600 }}>Nosotros</a>
            <a href="#productos" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 600 }}>Productos</a>
            <a href="#contacto" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 600 }}>Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Nosotros />
        <Productos />
        <Contacto />
      </main>

      <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '15px 30px', borderRadius: '12px', display: 'inline-block' }}>
              <img 
                src="/images/logo_cropped.png" 
                alt="Distribuidora Prisua Global" 
                style={{ height: '80px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>
          </div>
          <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
            Especialistas en aceites y grasas vegetales sostenibles para tu industria.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', fontSize: '0.9rem', opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} Distribuidora Prisua Global. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
