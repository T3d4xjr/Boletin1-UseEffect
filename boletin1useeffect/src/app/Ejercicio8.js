import { useState,useEffect } from "react";

export default function Chat(){
    const [mensajes,setMensaje]=useState([]);
    useEffect(() => {
        // Función simulada para recibir nuevos mensajes
        const cogerNuevoMensaje = () => {
          const nuevoMensaje = `Mensaje ${mensajes.length + 1} recibido a las ${new Date().toLocaleTimeString()}`;
          setMensaje((mensajes) => [...mensajes, nuevoMensaje]);
        };
    
        // Configuramos el intervalo para simular la recepción de mensajes
        const intervalId = setInterval(cogerNuevoMensaje, 5000);
    
        // Limpieza del efecto
        return () => clearInterval(intervalId);
      }, [mensajes]);

    return(
    <div>
        <h1>Chat Simulado</h1>
        <div>
            {mensajes.length > 0 ? (
            mensajes.map((mensaje, index) => <p key={index}>{mensaje}</p>)
            ) : (
            <p>No hay mensajes aún.</p>
            )}
        </div>
    </div>
    );
}