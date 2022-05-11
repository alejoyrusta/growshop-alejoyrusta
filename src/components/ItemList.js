import { useEffect, useState } from "react";
import Contador from "./ItemCount";

const productosStock = [
    {
        id: 1,
        nombre: "productoW",
        precio: 1200,
    },
    {
        id:2,
        nombre: "productoS",
        precio: 700,
    },
    {
        id:3,
        nombre: "ProductoT",
        precio: 200,
    }
]

const Container = (props) => {
    const greetings = "Bienvenido a WeedTF growshop"
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setProductos(productosStock)
        })  
    },[])
    const onAdd = () => {
    }
    return(
        <>
            <h5>{greetings}</h5>
            <Contador stock={10} init={0} onAdd={onAdd}/>
            <ul>
                {productos.map((producto,indice)=>{
                    return <li key={producto.id}>{producto.nombre}</li>   
                })}
            </ul>
        </>
    )
}
export default Container