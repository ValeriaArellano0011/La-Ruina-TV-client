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
          <h1>Estos son los resultados de tu búsqueda</h1>
            <ul className={s.ulSearchedItem}>
               {searchedMedia.length? searchedMedia.map((e, index)=>{
                return (
                  <li key={index}>
                  <SearchedMedia 
                    id={e.id} 
                    title={e.title} 
                    img={e.linkimg} 
                    categories={e.categories} 
                    artist={e.artist} 
                    idLinkYT={e.idLinkYT}
                    mediaType={e.mediaType}/>
                  </li>
                  )
                })
              :               
                <div className={s.notFound} ><h2>No se han encontrado resultados que coincidan con tu búsqueda</h2></div>
              }


            </ul>
        </div>
    </div>
  )
}
