const ItemDetail = () => {
    const ProductosAPI = fetch('https://fakestoreapi.com/products')
    ProductosAPI
        .then((respuesta)=>{
            const productos = respuesta.json()
            return productos    
        })
        .then((respuesta)=>{
            console.log(respuesta)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
export default ItemDetail