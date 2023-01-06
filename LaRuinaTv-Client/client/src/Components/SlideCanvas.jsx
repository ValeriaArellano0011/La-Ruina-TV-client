import React from 'react'
import { BackButton } from './BackButton'
import s from './css/SlideCanvas.module.css'

export const SlideCanvas = (props) => {
    return (
        <div className={s.slideCanvasCont} id='slideCanvasCont'>
            <ul>
                {
                    (props && props.option)?
                        (props.option === 'logout')? <><BackButton/></> 
                        :                 
                        (props.option === 'profile')? <><BackButton/></>
                        :
                        (props.option === 'configuration')? <><BackButton/></>
                        :null
                    :null
                }
            </ul>
        </div>
    )
}
