import s from './css/Tienda.module.css'

const Products = (props) => {
  const { idProduct, typeProduct, nameMerch, stock, idImg } = props
  console.log('idImg: ',idImg)
  return (
    <div>
      <img className={s.productImg} src={idImg} alt="productImg" /> <br></br> {typeProduct} {nameMerch}
    </div>
  )
}

export default Products