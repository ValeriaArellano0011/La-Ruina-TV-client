import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BodyCss } from '../../functions/BodyCss'
import { getProducts } from '../../middlewares/redux/actions'
import Products from './Products'
import s from './css/Tienda.module.css'

export const Tienda = () => {
  BodyCss()
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <div className={s.tiendaCont}>
      <ul className={s.ulProducts}>
        <h1>Merchandising</h1>
        {
          products?.map(e => {
            return(
            <>  
              <li key={e.idProduct}><Products idProduct={e.idProduct} typeProduct={e.typeProduct} nameMerch={e.nameMerch} stock={e.stock} idImg={e.idImg} /></li>
            </>  
              )
            }
          )
        }
      </ul>
    </div>
  )
}
