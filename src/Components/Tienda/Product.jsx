export default function Product(props){
    const { idProduct, typeProduct, nameMerch, stock, idImg } = props
    return (
        <div>
            <h1>Detalles del producto</h1>
            <img src={idImg} alt={typeProduct} />
        </div>
    )
}