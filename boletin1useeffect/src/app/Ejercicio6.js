import { useState,useEffect } from "react";

export default function JSONPlaceholder(){
    const[posts,setpost]=useState([]);
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        console.log("Consultando la API...");
    
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((respuesta) => respuesta.json()) 
          .then((data) => {
            setpost(data);
            setCargando(false); 
          })
          .catch((error) => {
            console.error('Error al consultar la API:', error);
            setCargando(false);
          });
      }, []); 
      
        if (cargando) {
            return <h2>Cargando usuarios...</h2>;
        }
    
    return(
        <div>
            <h1>Lista de titulos</h1>
            <ul>
                {posts.map((post)=>
                <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}