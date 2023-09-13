import s from './SearchBar.module.css';
import React, { useState } from "react";
import searchIcon from '../../../assets/images/search-icon.png';
import { resetOption } from "../../../middlewares/redux/actions";
import { searchBarFunction } from './js/SearchBar';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { $d } from "../../../functions";

export default function SearchBar(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if (name.length>0){
        return (
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
