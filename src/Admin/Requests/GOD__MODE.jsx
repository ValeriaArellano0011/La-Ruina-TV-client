import React from 'react'
import { useDispatch } from 'react-redux'
import { _GOD_MODE_ } from '../../middlewares/redux/actions'
import s from '../css/GODE_MODE.module.css'

export const GOD__MODE = () => {
  const auth = localStorage.getItem('auth');
  const user = auth ? JSON.parse(auth) : null;
  const dispatch = useDispatch()
  const userMode = user.role.userMode
  function handlerClick(){
    const free = JSON.stringify({userId: user.userId, userAlias: user.userAlias,googlePic: user.googlePic, email:user.email, role:{ role: "admin",userMode:"free"}})
    const subscriber = JSON.stringify({userId: user.userId, userAlias: user.userAlias,googlePic: user.googlePic, email:user.email, role:{ role: "admin",userMode:"subscriber"}})
    const admin = JSON.stringify({userId: user.userId, userAlias: user.userAlias,googlePic: user.googlePic, email:user.email, role:{ role: "admin",userMode:"admin"}})
    if(userMode === 'admin') return dispatch(_GOD_MODE_(free))
    if(userMode === 'free') return dispatch(_GOD_MODE_(subscriber))
    if(userMode === 'subscriber') return dispatch(_GOD_MODE_(admin))
  }

  return (
    <div className={s.GOD_MODE}>
      <button className={s.GOD_MODE} onClick={()=>handlerClick()}> 
      {
        user?.role.userMode === 'admin' ? 'FREE_MODE' 
        :
        user?.role.userMode === 'free' ? 'SUBSCRIBER_MODE'
        :
        'GOD_MODE'
      }
      </button>
    </div>
  )
}
