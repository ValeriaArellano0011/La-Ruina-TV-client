import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BodyCss } from '../functions/BodyCss'
import { getProducts } from '../middlewares/redux/actions'
import Product from './Products/Product'

export const Tienda = () => {
  BodyCss()
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <div className='browserBody'>
      {
        products?.map(e => {
          return <Product idProduct={e.idProduct} typeProduct={e.typeProduct} nameMerch={e.nameMerch} stock={e.stock} idImg={e.idImg} />
        })
      }
    </div>
  )
}
