import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetOption } from '../../middlewares/redux/actions'
import s from '../css/OptionsProfile.module.css'



const RequestProfile = () => {
    const dispatch = useDispatch()
    return (
        <div>

            <button
                className={s.crearProducto}
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
                <ul className={s.ulRequestPorfile}>
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
                <Link to='/browser'>Home</Link></li>

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
                <Link to=''>Favorites</Link></li>
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
                <Link to=''>Create list</Link></li>
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
                <Link to=''>Likes</Link></li>
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
                <Link to=''>Sign of</Link></li>

                    
                </ul>
            </button>


        </div>
    )
}

export default RequestProfile