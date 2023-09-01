import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import navBack from './js/Nav';
import { resetOption } from '../../../middlewares/redux/actions';
import { $d } from '../../../functions';

const NavMenu = () => {
    const dispatch = useDispatch()
    const [posNav, setPosNav] = useState()
    window.onscroll = function() {navBack(setPosNav, posNav)};

    return (
        <ul className='navMenu'>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    $d(`.bodyApp`).style.transform='translateX(0)',
                    $d(`.navCont`).style.transitionDuration='.2s',
                    $d(`.bodyApp`).style.transitionDuration='2s',
                    $d(`.navCont`).style.width='100vw',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                <Link to='/browser'>Inicio</Link></li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    $d(`.bodyApp`).style.transform='translateX(0)',
                    $d(`.navCont`).style.transitionDuration='.2s',
                    $d(`.bodyApp`).style.transitionDuration='2s',
                    $d(`.navCont`).style.width='100vw',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                <Link to='/novedades'>Novedades</Link></li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    $d(`.bodyApp`).style.transform='translateX(0)',
                    $d(`.navCont`).style.transitionDuration='.2s',
                    $d(`.bodyApp`).style.transitionDuration='2s',
                    $d(`.navCont`).style.width='100vw',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                <a href='https://laruinarecords.cl/back&amp' target=' _blank' > Back&Amp </a>
            </li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    $d(`.bodyApp`).style.transform='translateX(0)',
                    $d(`.navCont`).style.transitionDuration='.2s',
                    $d(`.bodyApp`).style.transitionDuration='2s',
                    $d(`.navCont`).style.width='100vw',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                <Link to='/colaborar'>Colaborar</Link></li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    $d(`.bodyApp`).style.transform='translateX(0)',
                    $d(`.navCont`).style.transitionDuration='.2s',
                    $d(`.bodyApp`).style.transitionDuration='2s',
                    $d(`.navCont`).style.width='100vw',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('#slideCanvasCont').style.overflowY="scroll")}}>
                <a href='https://merch.laruinarecords.cl' target=' _blank' > Merch </a>
            </li>
        </ul>
    )
}

export default NavMenu