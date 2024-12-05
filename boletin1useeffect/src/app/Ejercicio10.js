import { useState,useEffect } from "react";

export default function carritoCompras(){
    const [carrito, setCarrito] = useState([]);
    const [producto, setProducto] = useState("");
     // Cargar el carrito desde localStorage al inicializar el componente
    useEffect(() => {
        const carritoGuardado = localStorage.getItem("carrito");
        if (carritoGuardado) {
        setCarrito(JSON.parse(carritoGuardado));
        }
    }, []);

    function agregarProducto(){
        if (producto.trim() !== "") {
        setCarrito([...carrito, producto]);
        setProducto(""); // Limpiar el input
        }
    }
    function eliminarProducto(indice){
        setCarrito(carrito.filter((_, i) => i !== indice));
    }
    return(
        <div>
            <h1>Carrito de compras</h1>
            <input
            type="text"
            value={producto}
            onChange={(e)=>setProducto(e.target.value)}
            placeholder="Agregar un producto"
            />
            <button onClick={agregarProducto}>Agregar</button>
            <ul>
            {carrito.map((item, index) => (
            <li key={index}>
                {item} <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
            ))}

            </ul>
            {carrito.length === 0 &&<p>El carrito esta vacio</p> }
        </div>
        
    );
}