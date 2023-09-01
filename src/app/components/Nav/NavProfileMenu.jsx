import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './css/Nav.module.css'

import navBack from './js/Nav';
import { EnterBtn } from './EnterBtn';
import { BackButton } from './BackButton';
import { ProfileMenu } from './ProfileMenu';


const NavProfileMenu = () => {
    const [posNav, setPosNav] = useState()
    const option = useSelector(state=>state.option)
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    window.onscroll = function() {navBack(setPosNav, posNav)};

    return (
        <ul className={s.profileMenuBtn}>
            {!user? 
            (option==='login'? <li><BackButton /></li> : <li><EnterBtn /></li>)
            : (option === '' || option==='login' )? <li><ProfileMenu/></li> : <li><BackButton /></li> }
        </ul>
    )
}

export default NavProfileMenu