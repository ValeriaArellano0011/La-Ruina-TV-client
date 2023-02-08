import React, { useState } from 'react';
import navBack from './js/Nav';
import SearchBar from './SearchBar';
import NavProfileMenu from './NavProfileMenu';


const NavSearchBar = () => {
    const [posNav, setPosNav] = useState()
    window.onscroll = function() {navBack(setPosNav, posNav)};

    return (
        <ul className='navSearchBar'>
            <li>
                <div className='divSearchBarResponsive'>
                    <SearchBar/>
                </div>
            </li>
            <NavProfileMenu/>
        </ul>
    )
}

export default NavSearchBar