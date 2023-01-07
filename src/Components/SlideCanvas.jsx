import React from 'react'
import { useSelector } from 'react-redux'
import LogIn from './Auth/LogIn'
import { BackButton } from './BackButton'
import s from './css/SlideCanvas.module.css'

export const SlideCanvas = () => {
    const option = useSelector(state=>state.option)
    return (
        <div className={s.slideCanvasCont} id='slideCanvasCont'>
            <ul>
                {
                    option?
                        (option === 'login')? <><LogIn/></> 
                        :
                        (option === 'logout')? <><BackButton/></> 
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
