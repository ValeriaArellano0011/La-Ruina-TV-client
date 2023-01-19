import React from 'react'
import s from './css/Checkout.module.css'
import checkedIcon from '../../design/checked-icon.png'
import RequestProfile from '../../Admin/Requests/RequestProfile'
import axios from 'axios'
import { URL_API } from '../../middlewares/misc/config'
import { handleCheckout, handleCheckout2 } from './js/CheckoutFunction'

export const Checkout = () => {
  return (
    <div>
      <div className='divProfile'>
        <div className={s.checkoutFormat} >
          <div className='navFixed' ></div>
        </div>
      </div>
    </div>
  )
}
