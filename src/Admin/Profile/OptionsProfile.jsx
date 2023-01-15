import React from 'react'
import RequestProfile from '../Requests/RequestProfile'
import { useSelector } from 'react-redux';
import s from './css/Profile.module.css'

const OptionsProfile = () => {
    const currentUser = useSelector(state=>state.currentUser)
    const rolUser = useSelector(state=>state.rolUser)
    const userAlias = localStorage.getItem('auth')

    return (
      <div className='dashControlCont'>
        <div className={s.divProfile}>
        <div className={s.navFixed} ></div>
          <div className={s.profileCont}>
            <ul className={s.ulListProfile}>
              <li className={s.liProfile1}>Perfil de</li>
              <li className={s.liProfile2}><h1>{userAlias ? userAlias : currentUser}</h1></li>
              <li className={s.liProfile3}>{rolUser}</li>
            </ul>
          </div>
          <ul>
            <li>
              <RequestProfile />
            </li>
          </ul>
        </div>
      </div>
      )
}

export default OptionsProfile
