import React from 'react'
import { useSelector } from 'react-redux'
import s from './css/Search.module.css'
import { SearchedMedia } from './SearchedMedia'

export const Search = () => {
  const searchedMedia = useSelector(state=>state.searchedMedia)
  return (
    <div className={s.searchCont}>
        <div className={s.searchFormat} >
            <div className={s.navFixed} ></div>
            <ul className={s.ulSearchedItem}>
              {searchedMedia?.map((e, index)=>{
                return (
                  <li key={index}>
                  <SearchedMedia id={e.id} title={e.title} />
                  </li>
                  )
                })}
            </ul>
        </div>
    </div>
  )
}
