import { useState,useEffect } from "react";

export default function mostrarMensaje(){
    useEffect(() => {
        console.log('El componente se ha montado');
      }, []);
    return(
        <div>
            <h1>Ejercicio1 montado</h1>
        </div>
    );
}