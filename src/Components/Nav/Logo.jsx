import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ruinaLogo from '../../design/ruina-logo.png';

import navBack from './js/Nav';
import { resetOption } from '../../middlewares/redux/actions';

const Logo = () => {
    const dispatch = useDispatch()
    const [posNav, setPosNav] = useState()
    window.onscroll = function() {navBack(setPosNav, posNav)};

    return (
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
                    document.querySelector(`.browserBody`).style.height='auto',
                    document.querySelector(`.browserBody`).style.overflowY='scroll',
                    document.querySelector(`.visor`).style.transform='translateX(0)',
                    document.querySelector('.contCanvasMenu').style.display='none',
                    document.querySelector('#slideCanvasCont').style.overflowY="scroll"
                    )}}
            />
        </Link>
        {/* <GOD__MODE/> */}
    </div>
)}

export default Logo