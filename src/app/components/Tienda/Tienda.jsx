import React, { useEffect } from 'react'
import Products from '../Products/Products'
import s from './css/Tienda.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, resetProductDetails } from '../../middlewares/redux/actions'
import { Link } from 'react-router-dom'

export const Tienda = () => {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)
  useEffect(()=>{
    dispatch(resetProductDetails())
    dispatch(getProducts())
  },[dispatch])
  return (
    <div className="browserBody">
      <div className='divProfile'>
        <div className={s.tiendaSliderCont}></div>
        <div className={s.tiendaMerch}>Merchandising         </div>

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

      {/* 
          <ul className={s.ulTitle}>
        <div className={s.tiendaBg}>
          <div className={s.tiendaSliderCont}>
          </div>
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
        </div>
          </ul> */}
      </div>
    </div>
  )
}
