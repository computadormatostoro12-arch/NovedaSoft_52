import React, { useState } from 'react';
import './registrar.css';

export default function Registrar() {
  const [formData, setFormData] = useState({
    ambiente: '',
    responsable: '',
    novedad: '',
    observaciones: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Novedad registrada con éxito!');
  };

  return (
    <div className="registrar-container">
      <div className="registrar-header">
        <h2>Registro de Novedades</h2>
        <p>CIDE SENA Soacha - Control de Ambientes</p>
      </div>

      <form onSubmit={handleSubmit} className="registrar-form">
        <div className="form-group">
          <label>Ambiente de Formación:</label>
          <input 
            type="text" 
            name="ambiente" 
            placeholder="Ej. Ambiente 302 - Software" 
            value={formData.ambiente}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>Instructor / Responsable:</label>
          <input 
            type="text" 
            name="responsable" 
            placeholder="Nombre del responsable" 
            value={formData.responsable}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>Tipo de Novedad:</label>
          <select name="novedad" value={formData.novedad} onChange={handleChange} required>
            <option value="">Seleccione una opción...</option>
            <option value="daño">Daño de equipo</option>
            <option value="aseo">Falta de aseo / orden</option>
            <option value="tecnologica">Falla tecnológica / red</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Observaciones:</label>
          <textarea 
            name="observaciones" 
            rows="4" 
            placeholder="Describe brevemente la novedad encontrada..."
            value={formData.observaciones}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn-enviar">Guardar Registro</button>
      </form>
    </div>
  );
}