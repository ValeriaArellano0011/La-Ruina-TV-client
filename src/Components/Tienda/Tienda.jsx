import React, { useEffect } from 'react'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'
import s from './css/Tienda.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, resetProductDetails } from '../../middlewares/redux/actions'
import { BodyCss } from '../../functions'
import { Link } from 'react-router-dom'

export const Tienda = () => {
  BodyCss()
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)
  useEffect(()=>{
    dispatch(resetProductDetails())
    dispatch(getProducts())
  },[dispatch])
  return (
    <div className={s.tiendaCont}>
      <div className={s.tiendaBg}>
        <div className={s.tiendaSliderCont}>
          <h1 className={s.tiendaTituloSlider}>Bienvenidos a la tienda oficial de La Ruina Records</h1>
          {/* <img classname={s.tiendaSlider} src={bannerTienda} alt="" /> */}
          <div className='bgNav'></div>
        </div>
        <ul className={s.ulTitle}>
          <h1 className={s.tiendaMerch}>Merchandising</h1>
        <ul className={s.ulProducts}>
          {
            products?
            products.map(e => {
              return(
              <>  
                <Link to={`/tienda/product/${e.idProduct}`}><li key={products.indexOf(e)+'tienda'}>
                  <Products 
                    idProduct={e.idProduct} 
                    typeProduct={e.typeProduct} 
                    nameMerch={e.nameMerch} 
                    stock={e.stock} 
                    idImg={e.idImg} />
                </li></Link>
              </>  
                )
              }
            ) : null
          }
          </ul>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
