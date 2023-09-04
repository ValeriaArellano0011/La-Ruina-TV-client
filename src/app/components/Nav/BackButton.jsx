import s from './BackButton.module.css';
import React from 'react';
import backIcon from '../../../assets/images/ruinatv-icon-play-b.png';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { $d, BodyCss } from '../../../functions';

export const BackButton = () => {
    const dispatch = useDispatch()
    return (
        <div className={s.BackButton}>      
            <button
                className={s.BackButton} 
                onClick={()=>{
                    return(
                        dispatch(resetOption()),
                        BodyCss(),
                        $d(`.bodyApp`).style.transform='translateX(0)',
                        $d(`.navCont`).style.transitionDuration='.2s',
                        $d(`.bodyApp`).style.transitionDuration='2s',
                        $d(`.navCont`).style.width='100vw',
                        $d(`.browserBody`).style.height='auto',
                        $d(`.browserBody`).style.overflowY='scroll',
                        $d(`.visor`).style.transform='translateX(0)',
                        $d('#slideCanvasCont').style.overflowY="scroll"
                    )
                }
            }><img className={s.backIcon} src={backIcon} alt='backIcon' width='15px' />Volver
        </button>
    </div>
  )
}
