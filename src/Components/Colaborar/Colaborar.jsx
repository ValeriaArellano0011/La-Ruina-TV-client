import React from 'react'
import { BodyCss } from '../../functions'
import s from './css/Colaborar.module.css'
import { handleCheckout2 } from "../Checkout/js/CheckoutFunction"

export const Colaborar = () => {
  BodyCss()
  const urlFlow = "https://www.flow.cl/btn.php?token=kljrekt"
  return (
    <div className={s.donateCont}>
        <div className='navFixed' ></div>
      <div className={s.donateFormat} >
        DONAR
        <ul className={s.ulContBtn}>
        <li className={s.donateBtn}>
          <a href={urlFlow}>
            <button className={s.btnSubmit}>
              Flow.cl
            </button>
          </a>
        </li>
        <li className={s.donateBtn}>
          <button className={s.btnSubmit} onClick={() => handleCheckout2()}>
              MercadoPago
          </button>
        </li>
        </ul>
      </div>
    </div>
  )
}
