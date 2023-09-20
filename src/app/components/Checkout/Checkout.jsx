import s from './Checkout.module.css';
import React from 'react';
import { BodyCss } from '../../../functions';
import { handleCheckout, handleCheckout2 } from '../Checkout/js/CheckoutFunction';
import { Link, useParams } from 'react-router-dom';

export const Checkout = () => {
  BodyCss()
  const {type} = useParams()
  const urlFlow = "https://www.flow.cl/btn.php?token=kljrekt"
  const typeCheck = (type === "donation"? "colaborar" : "browser")
  return (
    <div className={s.donateCont}>
        <div className='navFixed' ></div>
      <div className={s.donateFormat} >
        Plataforma de pago
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
        <li className={s.salirBtn}>
          <Link to={`/${typeCheck}`}>
            <button className={s.salirSubmit}>
                Volver
            </button>
          </Link>
        </li>
      </div>
    </div>
  )
}
