import { useSelector } from 'react-redux'
import s from './css/Tienda.module.css'

const Products = () => {
  const productsDetails = useSelector(state=>state.productsDetails)
  const { idProduct, typeProduct, nameMerch, stock, idImg } = productsDetails
  console.log('idImg: ',idImg)
  return (
    <div className={s.cardProduct}>
      <img className={s.productImg} src={idImg} alt="productImg" /> <br></br> {typeProduct} {nameMerch}
    </div>
  )
}

export default Products