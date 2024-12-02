import { useState,useEffect } from "react";

export default function Reloj() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setHora(new Date().toLocaleTimeString()); 
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return <h1>Hora actual: {hora}</h1>;
  }