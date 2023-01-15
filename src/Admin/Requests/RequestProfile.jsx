import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getOption } from '../../middlewares/redux/actions'
import s from './css/OptionsProfile.module.css'
import likeIcon from '../../design/like-icon.png'
import listIcon from '../../design/lista-icon.png'
import logoutIcon from '../../design/logout-icon.png'
import adminIcon from '../../design/admin-icon.png'

const RequestProfile = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const rolUser = useSelector(state=>state.rolUser)
    return (
        <div className={s.divProfileMenu}>
            <ul
                className={s.ulProfileMenu}>
                <ul className={s.ulRequestProfile}>
                    <li>
                        <img src={likeIcon} className={s.likeIcon} alt="favoritos" />
                    </li>
                    <li>
                        <img src={listIcon} className={s.listIcon} alt="lista" />
                    </li>
                    {   
                        rolUser === 'admin' ?
                        <li>
                            <img src={adminIcon} className={s.adminIcon} onClick={()=>{return dispatch(getOption('dashboard'))}} alt="lista" />
                        </li> : null 
                    }
                    <li>
                        <img 
                            src={logoutIcon} 
                            className={s.logoutIcon} 
                            alt="salir" 
                            onClick={()=>{
                                return (
                                localStorage.removeItem('auth'), 
                                history.push('/browser'),
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