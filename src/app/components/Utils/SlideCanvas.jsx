import s from './SlideCanvas.module.css';
import React from 'react';
import { useSelector } from 'react-redux';

import Enter from '../Auth/Enter';
import Profile from '../../pages/Profile/Profile';
import Dashboard from '../../admin/Dashboard/Dashboard';

import { PlayList } from '../PlayList/PlayList';
import { Favorites } from '../Favorites/Favorites';
import { BackButton } from '../Nav/BackButton';
import { Subscription } from '../Subscription/Subscription';
import { Notifications } from '../Notifications/Notifications';
import { Configurations } from '../Configurations/Configurations';

export const OptionsCanvas = () => {
    const option = useSelector(state=>state.option)
    return (
        <div className={s.slideCanvasCont} id='slideCanvasCont'>
            <ul>
                {   
                    (option?
                    (option === 'login')?           <><Enter/></> 
                    :
                    (option === 'config')?          <><Configurations/></>
                    :
                    (option === 'profile')?         <><Profile/></>
                    :
                    (option === 'playlist')?        <><PlayList/></>
                    :
                    (option === 'favorites')?       <><Favorites/></>
                    :
                    (option === 'dashboard')?       <><Dashboard/></> 
                    :
                    (option === 'subscription')?    <><Subscription/></>
                    :
                    (option === 'notifications')?   <><Notifications/></>
                    :
                    (option === 'configuration')?   <><BackButton/></>
                    :null
                :null)
                }
            </ul>
        </div>
    )
}
