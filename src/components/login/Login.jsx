import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLoginExitoso }) {
  // Estado para el rol seleccionado (Predeterminado: Instructor / Cuentadante)
  const [rolSeleccionado, setRolSeleccionado] = useState('Instructor / Cuentadante');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [recordar, setRecordar] = useState(true);

  // Lista de Roles con "Soporte" actualizado
  const rolesSena = [
    {
      titulo: 'Instructor / Cuentadante',
      desc: 'Recepción, custodia y entrega de ambiente'
    },
    {
      titulo: 'Facilitador',
      desc: 'Apoyo técnico y horarios trimestrales'
    },
    {
      titulo: 'Coordinación Académica',
      desc: 'Supervisión y control de formación'
    },
    {
      titulo: 'Admin Edificio',
      desc: 'Mantenimiento e infraestructura'
    },
    {
      titulo: 'Soporte',
      desc: 'Inventario y soporte TIC'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!correo || !password) {
      alert('Por favor ingrese su correo o documento y su contraseña.');
      return;
    }

    const usuarioAutenticado = {
      correo,
      rol: rolSeleccionado
    };

    if (onLoginExitoso) {
      onLoginExitoso(usuarioAutenticado);
    }
  };

  return (
    <div className="login-page-container">
      {/* 1. Banner Encabezado CIDE */}
      <div className="login-header-banner">
        <div className="sena-logo-badge">
          <div className="sena-symbol"></div>
        </div>
        <p className="banner-regional">SENA • REGIONAL CUNDINAMARCA</p>
        
        {/* Título en Blanco Puro */}
        <h1 className="banner-title">Corresponsabilidad de Ambiente</h1>
        
        <p className="banner-sub">
          Centro Industrial y de Desarrollo Empresarial (CIDE)<br />Soacha
        </p>
        
        <div className="banner-pill">
          <div className="pill-indicator"></div>
          <span>Control de Ambientes, Horarios y Novedades</span>
        </div>
      </div>

      {/* 2. Tarjeta Principal de Formulario */}
      <div className="login-card-wrapper">
        <div className="login-card">
          
          {/* Sede Info Badge */}
          <div className="sede-info-box">
            <div className="sede-details">
              <h4>Sede CIDE Soacha</h4>
              <p>Cll 13 # 10-63 • Cundinamarca</p>
            </div>
            <div className="sede-status">
              <span className="status-dot">●</span> Activa
            </div>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            
            {/* Seleccionar Perfil / Rol */}
            <div className="perfil-selector-section">
              <div className="section-label-row">
                <span className="section-label">Perfil de Acceso</span>
                <span className="role-badge-current">{rolSeleccionado}</span>
              </div>

              <div className="roles-grid">
                {rolesSena.map((item) => (
                  <div
                    key={item.titulo}
                    className={`role-option ${rolSeleccionado === item.titulo ? 'active' : ''}`}
                    onClick={() => setRolSeleccionado(item.titulo)}
                  >
                    <div className="role-info">
                      <h5>{item.titulo}</h5>
                      <p>{item.desc}</p>
                    </div>
                    {rolSeleccionado === item.titulo && <span className="check-icon">✓</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Campo: Correo Institucional / Documento */}
            <div className="input-group">
              <div className="input-label-row">
                <span className="section-label">Correo Institucional o Documento</span>
                <span className="input-required">Requerido</span>
              </div>
              <input
                type="text"
                className="styled-input"
                placeholder="nombre.apellido@sena.edu.co o CC"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
              <p className="input-help-text">
                Use su cuenta @sena.edu.co o número de cédula registrado en Sofia Plus
              </p>
            </div>

            {/* Campo: Contraseña / PIN */}
            <div className="input-group">
              <div className="input-label-row">
                <span className="section-label">Contraseña / PIN Seguro</span>
                <span className="input-link">¿Olvidó su clave?</span>
              </div>
              <input
                type="password"
                className="styled-input"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Checkbox: Recordar Sesión */}
            <div className="remember-checkbox-row">
              <input
                type="checkbox"
                id="rememberMe"
                checked={recordar}
                onChange={(e) => setRecordar(e.target.checked)}
              />
              <label htmlFor="rememberMe" className="checkbox-text">
                <h6>Recordar sesión en este equipo</h6>
                <p>Recomendado solo para dispositivos personales o institucionales seguros</p>
              </label>
            </div>

            {/* Botón Iniciar Sesión */}
            <div className="submit-container">
              <button type="submit" className="btn-submit-login">
                 Iniciar Sesión en CIDE
              </button>
              <p className="btn-caption">
                Ingreso con redirección automática al módulo de <strong>Horarios</strong> y <strong>Bitácora de Entrega</strong> según el rol seleccionado.
              </p>
            </div>
          </form>

          {/* Acceso Rápido Demo */}
          <div className="demo-access-section">
            <span className="demo-title">ACCESO RÁPIDO DE DEMOSTRACIÓN</span>
            <div className="demo-grid">
              <div 
                className="demo-card" 
                onClick={() => { setCorreo('instructor@sena.edu.co'); setPassword('123456'); }}
              >
                <div className="demo-icon"></div>
                <div>
                  <h6>Ambiente 305</h6>
                  <p>Lab. Electrónica</p>
                </div>
              </div>

              <div 
                className="demo-card" 
                onClick={() => { setRolSeleccionado('Coordinación Académica'); setCorreo('coordinacion@sena.edu.co'); setPassword('123456'); }}
              >
                <div className="demo-icon"></div>
                <div>
                  <h6>Dashboard</h6>
                  <p>Matriz de Horarios</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Legal & Ley 1581 de 2012 */}
        <div className="login-legal-footer">
          <div className="legal-links">
            <span>Mesa de Ayuda CIDE</span>
            <span>•</span>
            <span>Manual de Uso</span>
          </div>

          <div className="ley-1581-box">
            <strong>Protección de Datos:</strong> El uso de este sistema está regido por la Ley Estatutaria 1581 de 2012 y la Política de Privacidad del SENA[cite: 1, 2]. El acceso con credenciales no autorizadas constituye falta disciplinaria.
          </div>

          <span className="app-version-tag">
            Versión Oficial 2.4 • CIDE Soacha • 2025[cite: 1, 2]
          </span>
        </div>

      </div>
    </div>
  );
}