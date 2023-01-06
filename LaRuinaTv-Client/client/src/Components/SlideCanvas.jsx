import React from 'react'
import LogOut from '../Auth/LogOut'
import { BackButton } from './BackButton'
import s from './css/SlideCanvas.module.css'

export const SlideCanvas = (props) => {
    return (
        <div className={s.slideCanvasCont} id='slideCanvasCont'>
            <ul>
                {
                    (props && props.option)?
                        (props.option === 'logout')? <><LogOut/><BackButton/></> 
                        :                 
                        (props.option === 'profile')? <><LogOut/><BackButton/></>
                        :
                        (props.option === 'configuration')? <><LogOut/><BackButton/></>
                        :null
                    :null
                }
            </ul>
        </div>
    )
}
