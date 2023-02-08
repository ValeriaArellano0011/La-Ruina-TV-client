import React, { useState } from 'react';
import navBack from './js/Nav';
import NavMenu from './NavMenu'
import Logo from './Logo';
import NavSearchBar from './NavSearchBar';
import { NavBurgerMenuTablet } from './NavBurgerMenuTablet';


const Nav = () => {
    const [posNav, setPosNav] = useState()
    window.onscroll = function() {navBack(setPosNav, posNav)};

    return (
        <div className='navCont'>
            <Logo/>
            <NavMenu/>
            <NavBurgerMenuTablet/>
            <NavSearchBar/>
        </div>
    )
}

export default Nav