import {useState} from "react"
const Contador = (props) => {
    const [contador, setContador] = useState(0)
    const aumentarContador = () => {
        setContador (contador + 1)
    }
    const reducirContador = () => {
        setContador (contador - 1)
    }
    return (
        <div>
            <button onClick = {aumentarContador}>Agregar</button>
            <p>Productos en Carrito : { contador }</p>
            <button onClick = {reducirContador}>Sacar</button>
            <button onClick>Finalizar compra</button>
        </div>
    )
}

export default Contador