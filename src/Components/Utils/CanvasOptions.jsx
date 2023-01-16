import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../../Admin/Dashboard/Dashboard'
import Enter from '../Auth/Enter'
import { Checkout } from '../Checkout/Checkout'
import { BackButton } from './BackButton'
import s from './css/SlideCanvas.module.css'
import Profile from '../../Admin/Profile/Profile'
import {Favorites} from '../UserProfile/Favorites'
import {PlayList} from '../UserProfile/PlayList'
import {Configurations} from '../UserProfile/Configurations'

export const CanvasOptions = () => {
    const option = useSelector(state=>state.option)
    return (
        <div className={s.slideCanvasCont} id='slideCanvasCont'>
            <ul>
                {   
                    (option?
                    (option === 'dashboard')? <><Dashboard/></> 
                    :
                    (option === 'subscription')? <><Checkout/></>
                    :
                    (option === 'favorites')? <><Favorites/></>
                    :
                    (option === 'playlist')? <><PlayList/></>
                    :
                    (option === 'config')? <><Configurations/></>
                    :
                    (option === 'login')? <><Enter/></> 
                    :
                    (option === 'profile')? <><Profile/></>
                    :
                    (option === 'configuration')? <><BackButton/></>
                    :null
                :null)
                }
            </ul>
        </div>
    )
}
