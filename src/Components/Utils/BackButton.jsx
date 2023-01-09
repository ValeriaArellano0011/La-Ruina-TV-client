import React from 'react'
import { useDispatch } from 'react-redux'
import { resetOption } from '../../middlewares/redux/actions'
import s from './css/BackBtn.module.css'
import backIcon from '../../design/ruinatv-icon-play-b.png'

export const BackButton = () => {
    const dispatch = useDispatch()
    return (
        <div className={s.BackButton}>      
            <button
                    className={s.BackButton} 
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
                        )}}
        >
        <img className={s.backIcon} src={backIcon} alt='backIcon' width='15px' />
            Volver
        </button>
    </div>
  )
}
