import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getOption } from '../../middlewares/redux/actions'
import s from './css/RequestProfile.module.css'
import likeIcon from '../../design/like-icon.png'
import listIcon from '../../design/lista-icon.png'
import logoutIcon from '../../design/logout-icon.png'
import adminIcon from '../../design/admin-icon.png'
import subscriptionIcon from '../../design/subscription-icon.png'
import userIcon from '../../design/user-icon.png'
import configIcon from '../../design/config-icon.png'
import notificationIcon from '../../design/ruinatv-icon-play-b.png'

const RequestProfile = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const rolUser = useSelector(state=>state.rolUser)
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    const [ userPicGoogle, setUserPicGoogle ] = useState('')
    useEffect(() => {
        if (user) {
          if(user.googlePic){
            setUserPicGoogle(user.googlePic)
            console.log(user.googlePic)
          }
        }
    }, [user]);
    return (
        <div className={s.divProfileMenu}>
            <ul
                className={s.ulProfileMenu}>
                <ul className={s.ulRequestProfile}>
                    <li>
                        <img referrerPolicy="no-referrer" src={userPicGoogle ? userPicGoogle : userIcon} className={s.userIcon} onClick={()=>{return dispatch(getOption('profile'))}} alt="perfil" />
                    </li>
                    {/* <li>
                        <img src={notificationIcon} className={s.notificationIcon} alt="notificaciones" onClick={()=>{return dispatch(getOption('notifications'))}} />
                    </li> */}
                    <li>
                        <img src={likeIcon} className={s.likeIcon} alt="favoritos" onClick={()=>{return dispatch(getOption('favorites'))}} />
                    </li>
                    <li>
                        <img src={listIcon} className={s.listIcon} alt="lista" onClick={()=>{return dispatch(getOption('playlist'))}} />
                    </li>
                    {   
                        rolUser === 'admin' ?
                        <li>
                            <img src={adminIcon} className={s.adminIcon} onClick={()=>{return dispatch(getOption('dashboard'))}} alt="lista" />
                        </li> 
                        :
                        <li>
                          <img src={subscriptionIcon} className={s.subscriptionIcon} onClick={()=>{return dispatch(getOption('subscription'))}} alt="lista" />
                        </li>                     
                    }
                    <li>
                        <img src={configIcon} className={s.configIcon} onClick={()=>{return dispatch(getOption('config'))}} alt="configuraciones" />
                    </li>
                    <li>
                        <img 
                            src={logoutIcon} 
                            className={s.logoutIcon} 
                            alt="salir" 
                            onClick={()=>{
                                return (
                                localStorage.removeItem('auth'), 
                                // history.push('/browser'),
                                window.location.reload()
                                )
                            }}/>
                    </li>
                </ul>
            </ul>


        </div>
    )
}

export default RequestProfile