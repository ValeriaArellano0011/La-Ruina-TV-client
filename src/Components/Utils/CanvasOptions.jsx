import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../../Admin/Dashboard/Dashboard'
import Enter from '../Auth/Enter'
import { Checkout } from '../Checkout/Checkout'
import { BackButton } from './BackButton'
import s from './css/SlideCanvas.module.css'

export const CanvasOptions = () => {
    const option = useSelector(state=>state.option)
    return (
        <div className={s.slideCanvasCont} id='slideCanvasCont'>
            <ul>
                {
                    option?
                    (option === 'dashboard')? <><Dashboard/></> 
                    :
                    (option === 'subscription')? <><Checkout/></> 
                    :
                    (option === 'login')? <><Enter/></> 
                    :
                    (option === 'profile')? <><BackButton/></>
                    :
                    (option === 'configuration')? <><BackButton/></>
                    :null
                :null
                }
            </ul>
        </div>
    )
}
