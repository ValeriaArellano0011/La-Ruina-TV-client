import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './css/Nav.module.css'
import ruinaLogo from '../../design/ruina-logo.png';

import navBack from './js/Nav';
import { resetOption } from '../../middlewares/redux/actions';

import SearchBar from './SearchBar';
import { EnterBtn } from './EnterBtn';
import { BackButton } from './BackButton';
import { ProfileMenu } from './ProfileMenu';
import { GOD__MODE } from '../../Admin/Requests/GOD__MODE';


const Nav = () => {
    const dispatch = useDispatch()
    const [posNav, setPosNav] = useState()
    const option = useSelector(state=>state.option)
    const currentUser = useSelector(state=>state.currentUser)
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    window.onscroll = function() {navBack(setPosNav, posNav)};

    return (

    <div className='navCont'>
        <div className='ruinaLogoCont'>
            <Link to='/browser'>
                <img 
                    className='ruinaLogo' 
                    src={ruinaLogo} 
                    alt="La Ruina TV"
                    width='120' 
                    onClick={()=>{
                        window.scrollTo(0, 0)
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
                />
            </Link>
        <GOD__MODE/>
        </div>
        <ul className='navMenu'>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
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
                <Link to='/browser'>Inicio</Link></li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
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
                    <Link to='/novedades'>Novedades</Link></li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
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
                <Link to='/lanzamientos'>Back&Amp</Link></li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
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
                <Link to='/colaborar'>Colaborar</Link></li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
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
                    document.querySelector('#slideCanvasCont').style.overflowY="scroll")}}>
                {/* <Link to='/tienda'> Tienda </Link> */}
            </li>
            <ul className='navSearchBar'>
                <li><SearchBar/></li>
                <ul className={s.profileMenuBtn}>
                    {!(user || currentUser)? 
                    (option==='login'? <li><BackButton /></li> : <li><EnterBtn /></li>)
                    : (option === '' || option==='login' )? <li><ProfileMenu/></li> : <li><BackButton /></li> }
                </ul>
            </ul>
        </ul>

        </div>
    )
}

export default Nav