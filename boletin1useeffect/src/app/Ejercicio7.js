import { useState,useEffect } from "react";

export default function autentificacionLocalStorage(){
    const[estaAutentificado,setAutentificada]=useState(false);

    // useEffect para sincronizar el estado con localStorage
  useEffect(() => {
    const guardadoEstado = localStorage.getItem('estaAutentificado');
    if (guardadoEstado === 'true') {
        setAutentificada(true);
    }
  }, []); // Solo se ejecuta al montar el componente

  // Función para iniciar sesión
  const handleLogin = () => {
    setAutentificada(true);
    localStorage.setItem('estaAutentificado', 'true');
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setAutentificada(false);
    localStorage.removeItem('estaAutentificado');
  };
    return(
        <div>
      <h1>Sistema de Autenticación</h1>
      {estaAutentificado ? (
        <div>
          <p>¡Estás autenticado!</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <p>No estás autenticado.</p>
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
    );
}