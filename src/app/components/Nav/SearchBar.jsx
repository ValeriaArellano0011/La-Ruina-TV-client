import React from "react";
import s from './css/SearchBar.module.css';
import searchIcon from '../../../design/search-icon.png';
import { useDispatch } from "react-redux";
import { searchBarFunction } from './js/SearchBar';
import { useState } from "react";
import { getMusicName, resetOption } from "../../../middlewares/redux/actions";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { $d } from "../../../functions";

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
          $d(`.bodyApp`).style.transform='translateX(0)',
          $d(`.navCont`).style.transitionDuration='.2s',
          $d(`.bodyApp`).style.transitionDuration='2s',
          $d(`.navCont`).style.width='100vw',
          $d(`.browserBody`).style.height='auto',
          $d(`.browserBody`).style.overflowY='scroll',
          $d(`.visor`).style.transform='translateX(0)',
          $d('#slideCanvasCont').style.overflowY="scroll",
          history.push(`/search`))
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
