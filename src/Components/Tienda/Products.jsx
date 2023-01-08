const Products = (props) => {
  const { idProduct, typeProduct, nameMerch, stock, idImg } = props
  return (
    <div>
      <img src={idImg} alt="productImg" /> {typeProduct} {nameMerch}
    </div>
  )
}

export default Products