import { useEffect, useState } from "react";
import Contador from "./ItemCount";
import Items from "./Item";

const Container = (props) => {
    const greetings = "Bienvenido a WeedTF growshop"
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setProductos(Items)
        }, 2000)
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