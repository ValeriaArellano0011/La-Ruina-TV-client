import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ruinaLogo from '../../design/ruina-logo.png';
import { GOD__MODE } from '../../Admin/Requests/GOD__MODE.jsx';
import navBack from './js/Nav';
import { resetOption } from '../../middlewares/redux/actions';
import { $d } from '../../functions';

const Logo = () => {
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
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
                    $d(`.bodyApp`).style.transform='translateX(0)',
                    $d(`.navCont`).style.transitionDuration='.2s',
                    $d(`.bodyApp`).style.transitionDuration='2s',
                    $d(`.navCont`).style.width='100vw',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('.contCanvasMenu').style.display='none',
                    $d('#slideCanvasCont').style.overflowY="scroll"
                    )}}
                />
            </Link>
            { user?.role.role==='admin'? <GOD__MODE/> : null }
        </div>
    )
}

export default Logo