import { useState,useEffect } from "react";

export default function contador(){
    const[contador,setContador]=useState(0);
    useEffect(()=>{
        document.title= `Contador: ${contador}`;
    })
    return(
        <div>
            <h1>Contador : {contador}</h1>
            <button onClick={()=>setContador(contador+1)}>Aumentar</button>
        </div>
    );
}