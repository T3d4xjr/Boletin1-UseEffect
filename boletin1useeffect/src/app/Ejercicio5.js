import { useState,useEffect } from "react";

export default function detectarTamañoVentana(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight)
          };
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      

    return(
    <div>
    <p>Renderizado para ajustar el ancho</p>
    {width}
    <p>Renderizado para ajustar el largo</p>
    {height}
    </div>)
}