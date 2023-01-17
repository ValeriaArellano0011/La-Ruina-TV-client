import React from 'react'
import { BodyCss } from '../../functions'
import s from './css/Colaborar.module.css'

export const Colaborar = () => {
  BodyCss()
  return (
    <div className={s.donateCont}>
        <div className='navFixed' ></div>
      <div className={s.donateFormat} >
        <div className='donateBtn'>
          <a href="https://www.flow.cl/btn.php?token=kljrekt">DONAR</a>
        </div>
      </div>
    </div>
  )
}
