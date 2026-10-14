import React, { useState, useRef } from 'react';
import './ReporteNovedad.css';

export default function ReporteNovedad({ onVolver, onEnviarExitoso }) {
  const fileInputRef = useRef(null);

  // Estados editables para el Elemento Identificado
  const [nombreElemento, setNombreElemento] = useState('PC Lenovo ThinkCentre M70a');
  const [placaSerial, setPlacaSerial] = useState('92321023342');
  const [cuentadante, setCuentadante] = useState('Yolanda Cortés (Almacén CIDE)');
  const [ubicacion, setUbicacion] = useState('Ambiente 305 - Blq. B P3');

  // Estados funcionales del formulario de novedad
  const [tipoRecurso, setTipoRecurso] = useState('Equipo de Cómputo');
  const [estadoViabilidad, setEstadoViabilidad] = useState('NO APTO');
  const [descripcion, setDescripcion] = useState(
    'El conector de poder del PC AIO presenta recalentamiento y pantalla con artefactos gráficos. Cable HDMI de extensión roto. Se requiere revisión inmediata del equipo en el puesto 14.'
  );

  // Lista de ambientes disponibles para selección
  const ambientesDisponibles = [
    'Ambiente 305 - Blq. B P3',
    'Ambiente 201 - Blq. A P2',
    'Ambiente 102 - Blq. C P1',
    'Ambiente 404 - Blq. A P4',
    'Almacén General CIDE'
  ];

  // Lista interactiva de imágenes
  const [fotos, setFotos] = useState([
    { id: 1, label: 'Conector dañado', url: 'https://placehold.co/150x150/e2e8f0/475569?text=Foto+1' },
    { id: 2, label: 'Falla gráfica AIO', url: 'https://placehold.co/150x150/e2e8f0/475569?text=Foto+2' }
  ]);

  const handleAgregarFoto = (e) => {
    const file = e.target.files[0];
    if (file && fotos.length < 3) {
      const newPhoto = {
        id: Date.now(),
        label: file.name.substring(0, 14),
        url: URL.createObjectURL(file)
      };
      setFotos([...fotos, newPhoto]);
    }
  };

  const handleEliminarFoto = (id) => {
    setFotos(fotos.filter((f) => f.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descripcion.trim()) {
      alert('Por favor ingrese la descripción del fallo técnico.');
      return;
    }

    alert(`✅ Reporte de Novedad del bien "${placaSerial}" enviado exitosamente a la Mesa de Ayuda y Coordinación.`);
    if (onEnviarExitoso) {
      onEnviarExitoso();
    } else if (onVolver) {
      onVolver();
    }
  };

  return (
    <div className="reporte-page-container">
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
              <div className="brand-title">Detalle de Novedad</div>
              <div className="brand-subtitle">SENA CIDE Soacha • Registro Operativo</div>
            </div>
          </div>

          <div className="header-right">
            <div className="user-avatar-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Wrapper Principal del Formulario Web */}
      <main className="reporte-content-wrapper">
        <form onSubmit={handleSubmit} className="reporte-form">
          
          {/* Barra de Progreso */}
          <div className="progress-section">
            <div className="progress-header-row">
              <div className="step-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <span>Paso 2 de 2: Diligenciamiento de la Novedad</span>
              </div>
              <span className="completeness-tag">Completitud: 85%</span>
            </div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: '85%' }}></div>
            </div>
          </div>

          {/* Título e Instrucciones */}
          <div className="section-title-box">
            <h2>Registrar Reporte de Novedad</h2>
            <p>Detalle la condición del recurso técnico o insumo didáctico asignado para gestionar soporte o reposición.</p>
          </div>

          {/* Tarjeta Elemento Identificado (EDITABLE) */}
          <section className="card-panel elemento-card">
            <div className="card-accent-line"></div>
            <div className="elemento-header-row">
              <div className="elemento-title-group">
                <div className="elemento-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div className="elemento-title-edit-col">
                  <span className="label-uppercase">ELEMENTO IDENTIFICADO</span>
                  <input
                    type="text"
                    className="editable-header-input"
                    value={nombreElemento}
                    onChange={(e) => setNombreElemento(e.target.value)}
                    placeholder="Nombre o descripción del recurso..."
                    required
                  />
                </div>
              </div>

              <div className="fecha-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>07/10/2026 - 08:35 AM</span>
              </div>
            </div>

            <div className="elemento-details-grid">
              {/* 1. Placa / Serial SENA Editable */}
              <div className="detail-item-box editable-box">
                <label className="detail-label">Placa / Serial SENA</label>
                <input
                  type="text"
                  className="editable-detail-input mono-font"
                  value={placaSerial}
                  onChange={(e) => setPlacaSerial(e.target.value)}
                  placeholder="Ingrese placa o serial..."
                  required
                />
              </div>

              {/* 2. Cuentadante Asignado Editable */}
              <div className="detail-item-box editable-box">
                <label className="detail-label">Cuentadante Asignado</label>
                <input
                  type="text"
                  className="editable-detail-input"
                  value={cuentadante}
                  onChange={(e) => setCuentadante(e.target.value)}
                  placeholder="Nombre del cuentadante..."
                  required
                />
              </div>

              {/* 3. Ubicación Actual (Desplegable Select) */}
              <div className="detail-item-box editable-box">
                <label className="detail-label">Ubicación Actual</label>
                <div className="select-with-icon-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <select
                    className="editable-detail-select"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                  >
                    {ambientesDisponibles.map((amb) => (
                      <option key={amb} value={amb}>
                        {amb}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Grid de 2 Columnas para Selección */}
          <div className="form-sections-grid">
            
            {/* 1. Tipo de Recurso */}
            <section className="form-group-section">
              <div className="section-label-row">
                <label className="section-title">Tipo de Recurso / Categoría</label>
                <span className="required-tag">Obligatorio</span>
              </div>

              <div className="recursos-grid">
                {[
                  { id: 'Equipo de Cómputo', label: 'Equipo de Cómputo', sub: '(Activo fijo)', icon: 'pc' },
                  { id: 'Mobiliario', label: 'Mobiliario', sub: 'Mesas, sillas, atriles', icon: 'chair' },
                  { id: 'Insumo / Material', label: 'Insumo / Material', sub: 'Consumibles', icon: 'box' },
                  { id: 'Red / Eléctrico', label: 'Red / Eléctrico', sub: 'Tomas, switches', icon: 'zap' }
                ].map((item) => (
                  <div 
                    key={item.id}
                    className={`recurso-card ${tipoRecurso === item.id ? 'active' : ''}`}
                    onClick={() => setTipoRecurso(item.id)}
                  >
                    {item.icon === 'pc' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    )}
                    {item.icon === 'chair' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
                        <path d="M2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5z" />
                        <path d="M4 18v3M20 18v3" />
                      </svg>
                    )}
                    {item.icon === 'box' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    )}
                    {item.icon === 'zap' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    )}
                    <span className="recurso-title">{item.label}</span>
                    <span className="recurso-sub">{item.sub}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Impacto de Viabilidad */}
            <section className="form-group-section">
              <div className="section-label-row">
                <label className="section-title">Impacto de Viabilidad en el Ambiente</label>
                <span className="help-label">Defina estado operativo</span>
              </div>

              <div className="viabilidad-options-column">
                <div 
                  className={`viabilidad-card ${estadoViabilidad === 'APTO' ? 'selected-apto' : ''}`}
                  onClick={() => setEstadoViabilidad('APTO')}
                >
                  <div className="radio-circle">
                    {estadoViabilidad === 'APTO' && <div className="radio-inner-dot green-dot"></div>}
                  </div>
                  <div className="viabilidad-info">
                    <div className="viabilidad-header-row">
                      <span className="status-title green-title">APTO para formación</span>
                    </div>
                    <p className="viabilidad-desc">
                      Operativo con observación técnica leve. No suspende ni compromete la sesión ni la seguridad de los aprendices.
                    </p>
                  </div>
                </div>

                <div 
                  className={`viabilidad-card no-apto-card ${estadoViabilidad === 'NO APTO' ? 'selected-no-apto' : ''}`}
                  onClick={() => setEstadoViabilidad('NO APTO')}
                >
                  <div className="radio-circle red-border">
                    {estadoViabilidad === 'NO APTO' && <div className="radio-inner-dot red-dot"></div>}
                  </div>
                  <div className="viabilidad-info">
                    <div className="viabilidad-header-row">
                      <span className="status-title red-title">NO APTO (Inhabilitado)</span>
                      <span className="critico-pill">CRÍTICO</span>
                    </div>
                    <p className="viabilidad-desc red-desc">
                      Requiere Mantenimiento o Reemplazo urgente. Afecta directamente la seguridad física o el desarrollo formativo.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* 3. Descripción del Fallo Técnico */}
          <section className="form-group-section">
            <div className="section-label-row">
              <div className="title-with-star">
                <label className="section-title">Descripción del fallo técnico o deterioro del material</label>
                <span className="star-required">*</span>
              </div>
              <button type="button" className="btn-clear-text" onClick={() => setDescripcion('')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                <span>Limpiar texto</span>
              </button>
            </div>

            <div className="textarea-box-container">
              <textarea
                className="styled-textarea"
                rows="4"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                maxLength={500}
                placeholder="Escriba de forma detallada la anomalía encontrada..."
              ></textarea>

              <div className="textarea-footer-row">
                <div className="advice-text">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span>Sea preciso con el número de puesto y daños físicos</span>
                </div>
                <span className="char-counter">{descripcion.length} / 500 caracteres</span>
              </div>
            </div>
          </section>

          {/* 4. Evidencia Fotográfica */}
          <section className="form-group-section">
            <div className="section-label-row">
              <div className="title-with-sub">
                <label className="section-title">Evidencia Fotográfica</label>
                <span className="sub-label">(Máx. 3 fotos)</span>
              </div>
              <span className="photos-counter">{fotos.length} de 3 cargadas</span>
            </div>

            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              accept="image/*"
              onChange={handleAgregarFoto}
            />

            <div className="photos-grid">
              {fotos.map((foto) => (
                <div key={foto.id} className="photo-preview-card">
                  <img src={foto.url} alt={foto.label} />
                  <div className="photo-label-overlay">
                    <span>{foto.label}</span>
                  </div>
                  <button 
                    type="button" 
                    className="btn-remove-photo"
                    onClick={() => handleEliminarFoto(foto.id)}
                    title="Eliminar foto"
                  >
                    ×
                  </button>
                </div>
              ))}

              {fotos.length < 3 && (
                <div 
                  className="add-photo-card"
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                >
                  <div className="add-photo-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </div>
                  <span className="add-photo-title">Agregar Foto</span>
                  <span className="add-photo-sub">Cámara / Galería</span>
                </div>
              )}
            </div>
          </section>

          {/* Aviso Informativo de Destinatarios */}
          <div className="notice-info-box">
            <div className="notice-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <p className="notice-text">
              Esta novedad será notificada automáticamente al <strong>Coordinador Académico</strong> y a la <strong>Mesa de Ayuda / Almacén del CIDE Soacha</strong> para su trámite oportuno según la normatividad de inventarios y control de bienes formativos SENA.
            </p>
          </div>

          {/* Botones de Acción Formulario */}
          <div className="form-actions-row">
            <button type="submit" className="btn-submit-reporte">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <span>Enviar Reporte de Novedad</span>
            </button>

            <button type="button" className="btn-cancel-reporte" onClick={onVolver}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span>Cancelar y Volver</span>
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}