import React from 'react'
import { useDispatch } from 'react-redux'
import { _GOD_MODE_ } from '../../middlewares/redux/actions'
import s from '../css/GODE_MODE.module.css'
import { useSelector } from 'react-redux'

export const GOD__MODE = () => {
    const rolUser = useSelector(state=>state.rolUser)
    const dispatch = useDispatch()
    function handlerClick(){
        dispatch(_GOD_MODE_())
    }
    
  return (
    <div className={s.GOD_MODE}>
        <button className={s.GOD_MODE} onClick={()=>handlerClick()}> {rolUser === 'admin'? 'ADMIN_MODE' : 'USER_MODE'}</button>
    </div>
  )
}
