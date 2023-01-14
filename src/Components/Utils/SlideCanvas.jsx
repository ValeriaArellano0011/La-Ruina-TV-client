import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../../Admin/Dashboard/Dashboard'
import Profile from '../../Admin/Profile/Profile'
import Enter from '../Enter/Enter'
import { BackButton } from './BackButton'
import s from './css/SlideCanvas.module.css'

export const SlideCanvas = () => {
    const option = useSelector(state=>state.option)
    return (
        <div className={s.slideCanvasCont} id='slideCanvasCont'>
            <ul>
                {
                        option?
                        (option === 'dashboard')? <><Dashboard/></> 
                        :
                        (option === 'login')? <><Enter/></> 
                        :
                        (option === 'logout')? <><BackButton/></> 
                        :                 
                        (option === 'profile')? <><Profile/></>
                        :
                        (option === 'configuration')? <><BackButton/></>
                        :null
                    :null
                }
            </ul>
        </div>
    )
}
