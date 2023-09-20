import s from './Colaborar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BodyCss } from '../../../functions';
import laruinaLogo from '../../../assets/images/ruina-records-logo.png'

export const Colaborar = () => {
  BodyCss()
  return (
    <div className={s.donateCont}>
      <div className='navFixed' />
      <div className={s.donateFormat} >
        <img src={laruinaLogo} alt='laruinarecords.cl' width='300px' className={s.laruinaLogo} /> <br/>
        DONAR A ESTE PROYECTO
        <ul className={s.ulContBtn}>
          <li className={s.donateBtn}>
            <Link to='/checkout/donation'>
              <button className={s.btnSubmit}>
                Ir al Checkout
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
