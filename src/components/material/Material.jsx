import React, { useState } from 'react';
import './material.css';

export default function VerificacionRecursos({ onVolver, onContinuarFormulario }) {
  // Estado para el campo de búsqueda de placa/serial
  const [busquedaPlaca, setBusquedaPlaca] = useState('92321023342');

  // Estado del activo seleccionado/encontrado
  const [activoConfirmado, setActivoConfirmado] = useState({
    nombre: 'PC Lenovo ThinkCentre M70a',
    placa: '92321023342',
    serial: 'MJ08KL44',
    cuentadante: 'Yolanda Cortés Niño (Almacén CIDE)',
    ubicacion: 'Mesa Docente 01 - Ambiente 305',
    estado: 'Operativo / Apto',
    imagen: 'https://placehold.co/600x300/e2e8f0/0f172a?text=PC+Lenovo+ThinkCentre+M70a'
  });

  // Base de datos ficticia de accesos rápidos para simular la búsqueda interactiva
  const activosDemo = [
    {
      nombre: 'PC Instructor Mesa 01',
      placa: '92321023342',
      serial: 'MJ08KL44',
      cuentadante: 'Yolanda Cortés Niño (Almacén CIDE)',
      ubicacion: 'Mesa Docente 01 - Ambiente 305',
      estado: 'Operativo / Apto',
      imagen: 'https://placehold.co/600x300/e2e8f0/0f172a?text=PC+Lenovo+ThinkCentre+M70a'
    },
    {
      nombre: 'Smart TV 65"',
      placa: '92321029981',
      serial: 'LG65TV305',
      cuentadante: 'Coordinación de Infraestructura',
      ubicacion: 'Pared Frontal - Ambiente 305',
      estado: 'Operativo / Apto',
      imagen: 'https://placehold.co/600x300/e2e8f0/0f172a?text=Smart+TV+65+Pol'
    },
    {
      nombre: 'Switch Rack A',
      placa: '92321011200',
      serial: 'CISCO2960X',
      cuentadante: 'Soporte TIC CIDE',
      ubicacion: 'Rack de Comunicaciones - Blq B P3',
      estado: 'Operativo / Apto',
      imagen: 'https://placehold.co/600x300/e2e8f0/0f172a?text=Switch+Cisco+Rack+A'
    },
    {
      nombre: 'Kit Conectividad RJ45',
      placa: '92321088412',
      serial: 'KIT-RJ45-305',
      cuentadante: 'Instructor Titular ADSO',
      ubicacion: 'Caja Insumos 01 - Ambiente 305',
      estado: 'Operativo / Apto',
      imagen: 'https://placehold.co/600x300/e2e8f0/0f172a?text=Kit+Conectividad'
    }
  ];

  // Función para consultar activo por placa
  const handleConsultar = (e) => {
    e.preventDefault();
    const encontrado = activosDemo.find(a => a.placa === busquedaPlaca.trim() || a.serial.toLowerCase() === busquedaPlaca.trim().toLowerCase());
    if (encontrado) {
      setActivoConfirmado(encontrado);
    } else {
      // Si no coincide exactamente, actualiza la placa de forma dinámica
      setActivoConfirmado({
        ...activoConfirmado,
        placa: busquedaPlaca,
        nombre: `Equipo con Placa ${busquedaPlaca}`
      });
    }
  };

  // Seleccionar desde los accesos rápidos
  const handleAccesoRapido = (item) => {
    setBusquedaPlaca(item.placa);
    setActivoConfirmado(item);
  };

  return (
    <div className="verificacion-page-container">
      {/* Header Fijo Superior Web */}
      <header className="top-header-bar">
        <div className="header-inner">
          <div className="header-left">
            <button type="button" className="btn-back-header" onClick={onVolver} title="Volver al Horario">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <div className="brand-text">
              <div className="brand-title">SENA CIDE Soacha</div>
              <div className="brand-subtitle">Verificación de Recursos e Inventario</div>
            </div>
          </div>

          <div className="header-right">
            <div className="status-notification-pill">
              <span className="live-dot-green"></span>
              <span>Sistema en Línea</span>
            </div>
            <div className="user-avatar-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Wrapper Principal Desktop */}
      <main className="verificacion-content-wrapper">
        
        {/* Banner Informativo Superior */}
        <section className="card-panel info-context-card">
          <div className="context-header-row">
            <div className="step-badge-pill">
              <span className="step-dot"></span>
              <span>Paso 1 de 2: Identificación del Activo</span>
            </div>
            <span className="location-tag">Ambiente 305</span>
          </div>

          <div className="context-body-box">
            <div className="context-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#39a900" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="context-text-col">
              <h3 className="ficha-title">Ficha 3229879 (ADSO)</h3>
              <div className="ficha-meta-row">
                <span><strong>Instructor:</strong> Carlos Mendoza</span>
                <span className="divider">•</span>
                <span><strong>Jornada:</strong> Mañana (06:00 - 12:00)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Separador Institucional */}
        <div className="separator-divider-row">
          <span className="line"></span>
          <span className="divider-label">O INGRESO MANUAL DE PLACA</span>
          <span className="line"></span>
        </div>

        {/* Layout Grid de 2 Columnas para Desktop */}
        <div className="verificacion-grid">
          
          {/* Columna Izquierda: Búsqueda Directa e Inventario */}
          <section className="card-panel busqueda-card">
            <div className="busqueda-header">
              <div className="busqueda-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <div>
                <h3 className="busqueda-title">Búsqueda Directa en Inventario</h3>
                <p className="busqueda-sub">Ingrese la placa de inventario institucional o número de serial</p>
              </div>
            </div>

            <form onSubmit={handleConsultar} className="busqueda-form">
              <div className="input-search-wrapper">
                <div className="search-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="styled-search-input mono-font"
                  value={busquedaPlaca}
                  onChange={(e) => setBusquedaPlaca(e.target.value)}
                  placeholder="Ej: 92321023342 o MJ08KL44"
                  required
                />
              </div>

              <button type="submit" className="btn-consultar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Consultar Activo</span>
              </button>
            </form>

            {/* Accesos Rápidos */}
            <div className="accesos-rapidos-section">
              <span className="accesos-title">Accesos rápidos en Ambiente 305:</span>
              <div className="accesos-grid">
                {activosDemo.map((item) => (
                  <button
                    key={item.placa}
                    type="button"
                    className={`acceso-btn ${activoConfirmado.placa === item.placa ? 'active-quick' : ''}`}
                    onClick={() => handleAccesoRapido(item)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    <span>{item.nombre}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Columna Derecha: Resultado del Activo Confirmado */}
          <section className="card-panel resultado-card">
            <div className="resultado-header">
              <div className="resultado-title-group">
                <div className="confirmed-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="confirmed-title">Activo Confirmado en Sistema</span>
              </div>

              <div className="status-op-pill">
                <span className="op-dot"></span>
                <span>{activoConfirmado.estado}</span>
              </div>
            </div>

            <div className="resultado-body">
              <div className="asset-image-box">
                <img src={activoConfirmado.imagen} alt={activoConfirmado.nombre} />
              </div>

              <div className="asset-info-col">
                <h3 className="asset-name">{activoConfirmado.nombre}</h3>
                <div className="asset-badges-row">
                  <span className="mono-badge">Placa: {activoConfirmado.placa}</span>
                  <span className="mono-badge">Serial: {activoConfirmado.serial}</span>
                </div>

                <div className="asset-details-box">
                  <div className="detail-row">
                    <span className="detail-label">Cuentadante Asignada:</span>
                    <span className="detail-value">{activoConfirmado.cuentadante}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Ubicación asignada:</span>
                    <span className="detail-value">{activoConfirmado.ubicacion}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Acciones de Continuar */}
            <div className="continuar-action-box">
              <button 
                type="button" 
                className="btn-continuar-form"
                onClick={onContinuarFormulario}
              >
                <span>Continuar al Formulario de Novedad</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <p className="continuar-caption">
                Se adjuntará el identificador institucional automáticamente al acta digital.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}