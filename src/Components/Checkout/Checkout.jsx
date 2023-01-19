import React from 'react'
import { BodyCss } from '../../functions'
import s from './css/Checkout.module.css'
import { handleCheckout, handleCheckout2 } from "../Checkout/js/CheckoutFunction"
import { useParams } from 'react-router-dom'

export const Checkout = () => {
  BodyCss()
  const {type} = useParams()
  console.log('type', type)
  const urlFlow = "https://www.flow.cl/btn.php?token=kljrekt"
  return (
    <div className={s.donateCont}>
        <div className='navFixed' ></div>
      <div className={s.donateFormat} >
        {type}
        <ul className={s.ulContBtn}>
        <li className={s.donateBtn}>
          <a href={urlFlow}>
            <button className={s.btnSubmit}>
              Flow.cl
            </button>
          </a>
        </li>
        <li className={s.donateBtn}>
          <button className={s.btnSubmit} onClick={() => (type==='subscription'? handleCheckout():( type==='donation'? handleCheckout2(): null))}>
              MercadoPago
          </button>
        </li>
        </ul>
      </div>
    </div>
  )
}
