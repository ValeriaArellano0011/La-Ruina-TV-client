import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetOption } from '../../middlewares/redux/actions'
import s from './css/OptionsProfile.module.css'
import likeIcon from '../../design/like-icon.png'
import listIcon from '../../design/lista-icon.png'
import logoutIcon from '../../design/logout-icon.png'

const RequestProfile = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div className={s.divProfileMenu}>
            <ul
                className={s.ulProfileMenu}
                onClick={() => {
                    return (
                    dispatch(resetOption()),
                    document.querySelector(`.bodyApp`).style.transform = 'translateX(0)',
                    document.querySelector(`.navCont`).style.transitionDuration = '.2s',
                    document.querySelector(`.bodyApp`).style.transitionDuration = '2s',
                    document.querySelector(`.navCont`).style.width = '100vw',
                    document.querySelector(`.navMenu`).style.display = 'flex',
                    document.querySelector(`.browserBody`).style.height = 'auto',
                    document.querySelector(`.browserBody`).style.overflowY = 'scroll',
                    document.querySelector(`.visor`).style.transform = 'translateX(0)',
                    document.querySelector('#slideCanvasCont').style.overflowY = "scroll"
                    )
                }}>
                <ul className={s.ulRequestProfile}>
                <li
                onClick={()=>{
                    return(
                    dispatch(resetOption()),
                    document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                    document.querySelector(`.navCont`).style.transitionDuration='.2s',
                    document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                    document.querySelector(`.navCont`).style.width='100vw',
                    document.querySelector(`.navMenu`).style.display='flex',
                    document.querySelector(`.browserBody`).style.height='auto',
                    document.querySelector(`.browserBody`).style.overflowY='scroll',
                    document.querySelector(`.visor`).style.transform='translateX(0)',
                    document.querySelector('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                <img src={likeIcon} className={s.likeIcon} alt="favoritos" /></li>
                <li
                onClick={()=>{
                    return(
                    dispatch(resetOption()),
                    document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                    document.querySelector(`.navCont`).style.transitionDuration='.2s',
                    document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                    document.querySelector(`.navCont`).style.width='100vw',
                    document.querySelector(`.navMenu`).style.display='flex',
                    document.querySelector(`.browserBody`).style.height='auto',
                    document.querySelector(`.browserBody`).style.overflowY='scroll',
                    document.querySelector(`.visor`).style.transform='translateX(0)',
                    document.querySelector('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                <img src={listIcon} className={s.listIcon} alt="lista" /></li>
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
                    }}/></li>

                    
                </ul>
            </ul>


        </div>
    )
}

export default RequestProfile