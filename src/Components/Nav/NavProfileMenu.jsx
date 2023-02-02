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
import Logo from './Logo';


const NavProfileMenu = () => {
    const dispatch = useDispatch()
    const [posNav, setPosNav] = useState()
    const option = useSelector(state=>state.option)
    const currentUser = useSelector(state=>state.currentUser)
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    window.onscroll = function() {navBack(setPosNav, posNav)};

    return (
        <ul className={s.profileMenuBtn}>
            {!(user || currentUser)? 
            (option==='login'? <li><BackButton /></li> : <li><EnterBtn /></li>)
            : (option === '' || option==='login' )? <li><ProfileMenu/></li> : <li><BackButton /></li> }
        </ul>
    )
}

export default NavProfileMenu