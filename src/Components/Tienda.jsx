import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BodyCss } from '../functions/BodyCss'
import { getProducts } from '../middlewares/redux/actions'

export const Tienda = () => {
  BodyCss()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <div className='browserBody'>
      
    </div>
  )
}
