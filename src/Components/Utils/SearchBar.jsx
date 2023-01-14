import React from "react";
import s from './css/SearchBar.module.css';
import searchIcon from '../../design/search-icon.png';
import { useDispatch } from "react-redux";
import { searchBarFunction } from './js/SearchBar';
import { useState } from "react";
import { getMusicName } from "../../middlewares/redux/actions";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getMusicName(name));
        setName("")
    }

    return (
        <div className={s.barCont}>
        <form className={s.form_search_bar} onSubmit={(e) => handleSubmit(e)}>
          <input 
            className={s.liSearchBar}
            id="liSearchBar"
            type="text"
            placeholder="Buscar..."
            onChange={handleInputChange}
            onMouseEnter={()=>{return searchBarFunction('enter')}}
          />
            <button 
              className={s.liSearchBtn} 
              type="submit" 
              disabled={false}
              onMouseEnter={()=>{return searchBarFunction('enter')}}
                >
              <img className={s.mediaSearch} src={searchIcon} height='20' alt="search" />
            </button>
        </form>
      </div>
    )  
}
