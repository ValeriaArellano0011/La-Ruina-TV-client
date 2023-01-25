import React from "react";
import s from './css/SearchBar.module.css';
import searchIcon from '../../design/search-icon.png';
import { useDispatch } from "react-redux";
import { searchBarFunction } from './js/SearchBar';
import { useState } from "react";
import { getMusicName, resetOption, getMedia } from "../../middlewares/redux/actions";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function SearchBar(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    useEffect(() => {
      dispatch(getMusicName(name))
    },[dispatch, name])

    function handleSubmit(e){
        e.preventDefault();
        if (name.length>0){
        return (
          dispatch(getMusicName(name)),
          dispatch(resetOption()),
          history.push(`/search`)),
          document.querySelector(`.bodyApp`).style.transform='translateX(0)',
          document.querySelector(`.navCont`).style.transitionDuration='.2s',
          document.querySelector(`.bodyApp`).style.transitionDuration='2s',
          document.querySelector(`.navCont`).style.width='100vw',
          document.querySelector(`.navMenu`).style.display='flex',
          document.querySelector(`.browserBody`).style.height='auto',
          document.querySelector(`.browserBody`).style.overflowY='scroll',
          document.querySelector(`.visor`).style.transform='translateX(0)',
          document.querySelector('#slideCanvasCont').style.overflowY="scroll"
      }
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
              onMouseEnter={()=>{return searchBarFunction('enter')}}>
              <img className={s.mediaSearch} src={searchIcon} height='20' alt="search" />
            </button>
        </form>
      </div>
    )  
}
