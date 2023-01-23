import React from 'react'
import { useSelector } from 'react-redux'
import s from './css/SlideCanvas.module.css'
import Enter from '../Auth/Enter'
import Profile from '../../Admin/Profile/Profile'
import Dashboard from '../../Admin/Dashboard/Dashboard'
import { Subscription } from '../UserProfile/Subscription'
import { PlayList } from '../UserProfile/PlayList'
import { Favorites } from '../UserProfile/Favorites'
import { BackButton } from '../Nav/BackButton'
import { Notifications } from '../UserProfile/Notifications'
import { Configurations } from '../UserProfile/Configurations'

export const CanvasOptions = () => {
    const option = useSelector(state=>state.option)
    return (
        <div className={s.slideCanvasCont} id='slideCanvasCont'>
            <ul>
                {   
                    (option?
                    (option === 'dashboard')? <><Dashboard/></> 
                    :
                    (option === 'subscription')? <><Subscription/></>
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
                    (option === 'notifications')? <><Notifications/></>
                    :
                    (option === 'configuration')? <><BackButton/></>
                    :null
                :null)
                }
            </ul>
        </div>
    )
}
