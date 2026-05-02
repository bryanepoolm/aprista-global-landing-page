import React, { useState } from 'react';

export default function Contacto() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Hubo un error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Error de conexión al servidor. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <section id="contacto" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 className="section-title" style={{ textAlign: 'left' }}>¿Tienes algo que decirnos?</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '2rem' }}></div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
              Estamos listos para atender tus requerimientos y ofrecerte la mejor solución en aceites y grasas vegetales sostenibles para tu industria.
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Correo Electrónico</h4>
              <a href="mailto:gerencia@distribuidoraprisuaglobal.mx" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600' }}>
                gerencia@distribuidoraprisuaglobal.mx
              </a>
            </div>
          </div>
          
          <div className="glass-panel" style={{ flex: '1 1 400px', padding: '3rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid #eee' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }} className="animate-fade-in">
                <div style={{ fontSize: '4rem', color: 'var(--secondary)', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>¡Mensaje Enviado!</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Gracias por contactarnos. Hemos recibido tu información y te responderemos a la brevedad posible.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary" style={{ fontSize: '1rem' }}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="animate-fade-in">
                {status === 'error' && (
                  <div style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                    {errorMessage}
                  </div>
                )}
                <div className="form-group">
                  <label className="form-label">Nombre Completo</label>
                  <input type="text" name="nombre" className="form-input" placeholder="Tu nombre" required disabled={status === 'loading'} />
                </div>
                <div className="form-group">
                  <label className="form-label">Correo Electrónico</label>
                  <input type="email" name="correo" className="form-input" placeholder="tu@empresa.com" required disabled={status === 'loading'} />
                </div>
                <div className="form-group">
                  <label className="form-label">Empresa / Industria</label>
                  <input type="text" name="empresa" className="form-input" placeholder="Nombre de tu empresa" required disabled={status === 'loading'} />
                </div>
                <div className="form-group">
                  <label className="form-label">Mensaje</label>
                  <textarea name="mensaje" className="form-input" rows="4" placeholder="¿En qué podemos ayudarte?" required disabled={status === 'loading'}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', marginTop: '1rem', opacity: status === 'loading' ? 0.7 : 1, transition: 'all 0.3s ease' }} disabled={status === 'loading'}>
                  {status === 'loading' ? 'Enviando Mensaje...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
