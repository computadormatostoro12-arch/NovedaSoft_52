import React, { useState } from 'react';
import './HorarioAmbiente.css';

export default function HorarioAmbiente({ usuario, onCerrarSesion, onIrAReporte }) {
  // Estados funcionales de la vista
  const [sedeSeleccionada, setSedeSeleccionada] = useState('CIDE Soacha - Torre Principal');
  const [ambienteSeleccionado, setAmbienteSeleccionado] = useState('Ambiente 305 - Laboratorio TIDC / ADSO');
  const [verificadoSinNovedad, setVerificadoSinNovedad] = useState(false);

  // Opciones de sede y ambientes para los selectores
  const sedesList = [
    'CIDE Soacha - Torre Principal',
    'CIDE Soacha - Sede Cazucá',
    'CIDE Soacha - Subsede Tecnológica'
  ];

  const ambientesList = [
    'Ambiente 305 - Laboratorio TIDC / ADSO',
    'Ambiente 201 - Laboratorio de Electrónica',
    'Ambiente 102 - Taller de Redes y Telecomunicaciones',
    'Ambiente 404 - Sala Cómputo Multimedia'
  ];

  const handleVerificacionConforme = () => {
    setVerificadoSinNovedad(true);
  };

  return (
    <div className="horario-page-container">
      {/* Header Fijo Superior Web */}
      <header className="top-header-bar">
        <div className="header-inner">
          <div className="header-left">
            <div className="brand-logo-icon" title="CIDE Soacha">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
              </svg>
            </div>
            <div className="brand-text">
              <div className="brand-title">SENA CIDE Soacha</div>
              <div className="brand-subtitle">Control & Horario de Ambiente</div>
            </div>
          </div>

          <div className="header-right">
            <div className="user-info-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>{usuario ? usuario.correo : 'Usuario CIDE'}</span>
            </div>

            <button type="button" className="btn-logout" onClick={onCerrarSesion} title="Cerrar sesión">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
              </svg>
              <span>Salir</span>
            </button>
          </div>
        </div>
      </header>

      {/* Layout Principal Web */}
      <div className="horario-content-wrapper">
        
        {/* 1. Panel de Control / Selecciones Interactivos */}
        <section className="card-panel monitor-card">
          <div className="card-header-row">
            <div className="status-live-group">
              <span className="live-dot"></span>
              <span className="card-section-title">MONITOR OPERATIVO EN TIEMPO REAL</span>
            </div>
            <div className="time-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Hoy, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          <div className="selectors-grid">
            {/* Selector Sede */}
            <div className="selector-box">
              <div className="selector-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="6" x2="9" y2="6.01" />
                  <line x1="15" y1="6" x2="15" y2="6.01" />
                  <line x1="9" y1="10" x2="9" y2="10.01" />
                  <line x1="15" y1="10" x2="15" y2="10.01" />
                  <line x1="9" y1="14" x2="9" y2="14.01" />
                  <line x1="15" y1="14" x2="15" y2="14.01" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                </svg>
              </div>
              <div className="selector-info">
                <span className="selector-label">SEDE / CAMPUS</span>
                <select 
                  className="interactive-select"
                  value={sedeSeleccionada}
                  onChange={(e) => setSedeSeleccionada(e.target.value)}
                >
                  {sedesList.map((sede) => (
                    <option key={sede} value={sede}>{sede}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selector Ambiente */}
            <div className="selector-box active-selector">
              <div className="selector-icon green-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3z" />
                  <path d="M12 19v3M8 22h8" />
                </svg>
              </div>
              <div className="selector-info">
                <span className="selector-label">AMBIENTE ASIGNADO</span>
                <select 
                  className="interactive-select"
                  value={ambienteSeleccionado}
                  onChange={(e) => {
                    setAmbienteSeleccionado(e.target.value);
                    setVerificadoSinNovedad(false); // resetea la verificación al cambiar de aula
                  }}
                >
                  {ambientesList.map((amb) => (
                    <option key={amb} value={amb}>{amb}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Grid de 2 Columnas para Desktop */}
        <div className="dashboard-grid">
          
          {/* Columna Izquierda: Información del Bloque en Curso */}
          <div className="left-column">
            <section className="card-panel bloque-curso-card">
              <div className="bloque-header-bar">
                <div className="badge-active-time">
                  <span className="pulse-dot"></span>
                  <span>Bloque en Curso (06:00 - 12:00)</span>
                </div>
                <span className="jornada-tag">Jornada Mañana</span>
              </div>

              <div className="bloque-body">
                <div className="aula-detail">
                  <h2>{ambienteSeleccionado}</h2>
                  <div className="ficha-row">
                    <span className="badge-ficha">Ficha 3229879</span>
                    <span className="programa-name">Análisis y Desarrollo de Software (ADSO)</span>
                  </div>
                </div>

                <div className="instructor-card">
                  <div className="instructor-avatar-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="instructor-info">
                    <span className="instructor-label">INSTRUCTOR TITULAR / CONECTADO</span>
                    <span className="instructor-name">{usuario ? usuario.correo : 'Ing. Carlos Mendoza'}</span>
                  </div>
                  <div className="status-presente-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Presente en aula</span>
                  </div>
                </div>

                <div className="competencia-box">
                  <span className="competencia-label">COMPETENCIA TÉCNICA EN CURSO</span>
                  <p>Desarrollar la solución de software de acuerdo con el diseño y metodologías requeridas.</p>
                </div>

                <div className="equipamiento-box">
                  <div className="equipamiento-header">
                    <div className="equipamiento-title">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                      <span>EQUIPAMIENTO & RED VERIFICADA</span>
                    </div>
                    <span className="operativos-badge">3 / 3 Operativos</span>
                  </div>

                  <div className="equipos-grid">
                    <div className="equipo-pill">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                      <span>24 Equipos AIO</span>
                    </div>
                    <div className="equipo-pill">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                        <polyline points="17 2 12 7 7 2" />
                      </svg>
                      <span>Smart TV 65"</span>
                    </div>
                    <div className="equipo-pill">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <span>Red Gigabit OK</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Columna Derecha: Protocolo CIDE + Bloque Siguiente */}
          <div className="right-column">
            
            {/* Tarjeta Protocolo Intercativa */}
            <section className="card-panel protocolo-card">
              <div className="protocolo-header">
                <div className="protocolo-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <span className="brand-tag">COMPROMISO CIDE</span>
                  <h3 className="protocolo-title">Protocolo de Inicio de Jornada</h3>
                </div>
              </div>

              {verificadoSinNovedad ? (
                <div className="verificado-success-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h4>¡Ambiente Verificado Conforme!</h4>
                  <p>Se ha registrado el inicio de jornada sin novedades para este ambiente.</p>
                  <button 
                    type="button" 
                    className="btn-reset-verificacion" 
                    onClick={() => setVerificadoSinNovedad(false)}
                  >
                    Cambiar estado / Reportar
                  </button>
                </div>
              ) : (
                <>
                  <div className="protocolo-question-box">
                    <p className="question-text">
                      ¿Identificó alguna anomalía en el aula, equipos o materiales de formación al iniciar jornada?
                    </p>
                    <p className="help-text">
                      Su reporte oportuno garantiza el buen estado de los bienes públicos y la continuidad pedagógica.
                    </p>
                  </div>

                  <div className="protocolo-actions">
                    <button 
                      type="button" 
                      className="btn-action btn-conforme"
                      onClick={handleVerificacionConforme}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Verificación Conforme (Sin Novedad)</span>
                    </button>

                    <button 
                      type="button" 
                      className="btn-action btn-reportar"
                      onClick={onIrAReporte}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                      <span>Reportar Novedad en este Ambiente</span>
                    </button>
                  </div>
                </>
              )}
            </section>

            {/* Tarjeta Bloque Siguiente */}
            <section className="card-panel siguiente-bloque-card">
              <div className="siguiente-header">
                <span className="siguiente-label">BLOQUE SIGUIENTE PROGRAMADO</span>
                <span className="badge-time">12:00 - 18:00</span>
              </div>
              <div className="siguiente-body">
                <div>
                  <h4 className="siguiente-materia">Redes de Datos</h4>
                  <p className="siguiente-details">Ficha 2910384 • Jornada Tarde</p>
                </div>
                <div className="status-espera-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>En espera</span>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}