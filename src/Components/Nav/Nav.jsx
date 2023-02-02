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
import NavMenu from './NavMenu'


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
        <NavMenu/>
        </div>
    )
}

export default Nav