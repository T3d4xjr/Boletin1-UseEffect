import { useState,useEffect } from "react";

export default function mostrarTitulo(){
    useEffect(() =>{
        document.title="Bienvenidos a mi app"
    })
    return(
        <div>
            <h1>Ejercicio2 montado</h1>
        </div>
    );
}