import { useState,useEffect } from "react";

export default function contadorComparador(){
    const[contador,setContador]=useState(0);

    useEffect(()=>{
        console.log('Este efecto al no tener dependencias.Se ejecuta en cada renderizado');
    });
    useEffect(()=>{
        console.log(`Efecto con dependecia [contador].El contador cambio a ${contador}.`);
    },[contador]);

    return(
        <div>
            <h1>Comparador de comportamientos con useEffect</h1>
            <p>Contador: {contador}</p>
            <button onClick={()=>setContador(contador + 1)}>Incrementar</button>
            <button onClick={()=>setContador(0)}>Reiniciar</button>
        </div>
    );
}