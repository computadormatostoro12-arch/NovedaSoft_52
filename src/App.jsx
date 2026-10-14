import { useState } from 'react'
import './App.css'
import Login from './components/login/Login.jsx'
import Registrar from './components/registrar/Registrar.jsx'

function App() {
  // Estado para guardar la información del usuario autenticado (correo y rol)
  const [usuarioActual, setUsuarioActual] = useState(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      
      {!usuarioActual ? (
        // Usamos onLoginExitoso para que coincida exactamente con tu Login.jsx
        <Login onLoginExitoso={(datosUsuario) => setUsuarioActual(datosUsuario)} />
      ) : (
        // Si ya inició sesión, mostramos el encabezado con su rol y el módulo Registrar
        <div>
          <header style={{ backgroundColor: '#00324D', color: 'white', padding: '18px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '4px solid #39A900' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold' }}>NovedaSoft</h1>
              <span style={{ fontSize: '13px', color: '#39A900', fontWeight: '600' }}>
                CIDE SENA Soacha • Perfil: {usuarioActual.rol}
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '13px', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '4px' }}>
                {usuarioActual.correo}
              </span>
              <button 
                onClick={() => setUsuarioActual(null)}
                style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Cerrar Sesión
              </button>
            </div>
          </header>

          <main style={{ padding: '30px 20px' }}>
            <Registrar />
          </main>
        </div>
      )}

    </div>
  )
}

export default App