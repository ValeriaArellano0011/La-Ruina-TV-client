import s from '../Tienda/css/Tienda.module.css'

const Products = (props) => {
  const { typeProduct, nameMerch, idImg } = props
  return (
    
    <div className={s.cardProduct}>
      <img className={s.productImg} src={idImg} alt="productImg" /> <br></br> {typeProduct} {nameMerch}
    </div>
  )
}

export default Products