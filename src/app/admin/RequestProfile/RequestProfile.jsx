import s from './RequestProfile.module.css';
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOption } from '../../../middlewares/redux/actions';
import userIcon from '../../../assets/images/user-icon.png';
import likeIcon from '../../../assets/images/like-icon.png';
import listIcon from '../../../assets/images/lista-icon.png';
import adminIcon from '../../../assets/images/admin-icon.png';
import logoutIcon from '../../../assets/images/logout-icon.png';
import subscriptionIcon from '../../../assets/images/subscription-icon.png';
import { OptionProfile } from '../../../functions';

const RequestProfile = () => {
    const dispatch = useDispatch()
    const option = useSelector(state=>state.option)
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    const [ userPicGoogle, setUserPicGoogle ] = useState('')
    useEffect(() => {
        if (user) {
          if(user.googlePic){
            setUserPicGoogle(user.googlePic)
          }
        }
        OptionProfile(option)
    }, [user, option]);
    return (
        <div className={s.divProfileMenu}>
            <ul
                className={s.ulProfileMenu}>
                <ul className={s.ulRequestProfile}>
                    <li>
                        <img referrerPolicy="no-referrer" src={userPicGoogle ? userPicGoogle : userIcon} className={s.userIcon} id='profileIcon' onClick={()=>{return dispatch(getOption('profile'))}} alt="perfil" />
                        <span id='spanProfile' className={s.spanProfile}>Perfil</span>
                    </li>
                    {/* <li>
                        <img src={notificationIcon} className={s.notificationIcon} alt="notificaciones" onClick={()=>{return dispatch(getOption('notifications'))}} />
                    </li> */}
                    <li>
                        <img src={likeIcon} className={s.likeIcon} id='favoritesIcon' alt="favoritos" onClick={()=>{return dispatch(getOption('favorites'))}} />
                        <span id='spanFavs' className={s.spanFavs}>Favs</span>
                    </li>
                    <li>
                        <img src={listIcon} className={s.listIcon} id='playlistIcon' alt="lista" onClick={()=>{return dispatch(getOption('playlist'))}} />
                        <span id='spanList' className={s.spanLists}>Listas</span>                    
                    </li>
                    {   
                        user?.role.userMode === 'admin' ?
                        <li>
                            <img src={adminIcon} className={s.adminIcon} id='dashboardIcon' onClick={()=>{return dispatch(getOption('dashboard'))}} alt="lista" />
                            <span id='spanAdmin' className={s.spanOpt}>Dash</span>                    
                        
                        </li> 
                        :
                        <li>
                          <img src={subscriptionIcon} className={s.subscriptionIcon} id='subscriptionIcon' onClick={()=>{return dispatch(getOption('subscription'))}} alt="lista" />
                          <span id='spaSubs' className={s.spanOpt}>Subs</span>                    
                        </li>                     
                    }
                    {/* <li>
                        <img src={configIcon} className={s.configIcon} onClick={()=>{return dispatch(getOption('config'))}} alt="configuraciones" />
                    </li> */}
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