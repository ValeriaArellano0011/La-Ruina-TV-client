import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import RequestProfile from '../../Admin/Requests/RequestProfile'
import { getAllLikes, resetOption } from '../../middlewares/redux/actions'
import s from './css/Favorites.module.css'

export const Favorites = () => {

  const auth = localStorage.getItem('auth');
  const userId = auth ? JSON.parse(auth).userId : null;
  const userLikes = useSelector(state => state.allUserLikes)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllLikes(userId))
  }, [dispatch, userId])
  
  return (
    <div>
      <div className='divProfile'>
        <div className='navFixed' ></div>
          <div className={s.divContLikes}>
            <div className={s.contTitle}>
            {userLikes.length>0? <h1>Tus favoritos</h1>: <><h1>Nada por aquí....</h1><br/><h3>¡Agrega contenido a tus favoritos!</h3></>}
            </div>
            <ul className={s.contLikes}>
              {
                userLikes?.map((e,index)=>{
                  return(
                    
                    <li className={s.liLikes} key={index}>
                      <Link to={`/view/v=${e.at(0).idLinkYT}=_type_=${e.at(0).mediaType}=_id_=${e.at(0).id}`}>
                        <img 
                        onClick={()=>{
                          return(
                                      dispatch(resetOption()),
                                      document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                                      document.querySelector(`.navCont`).style.transitionDuration='.2s',
                                      document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                                      document.querySelector(`.navCont`).style.width='100vw',
                                      document.querySelector(`.browserBody`).style.height='auto',
                                      document.querySelector(`.browserBody`).style.overflowY='scroll',
                                      document.querySelector(`.visor`).style.transform='translateX(0)',
                                      document.querySelector('#slideCanvasCont').style.overflowY="scroll"
                                  )
                              }
                          }   
                        className={s.likeImg}
                        src={e.at(0).linkimg} 
                        alt='img' 
                        height='100px' />
                      <div className={s.divH3}>
                        <h3 style={{marginTop: '0px', fontSize: '10px', marginBottom: '-4px'}}>
                            {e.at(0).artist}
                        </h3>
                        <h3 style={{marginTop: '0px', fontSize: '17px'}}>
                            {e.at(0).title}
                        </h3>
                      </div>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <RequestProfile />
      </div>
    </div>
  )
}
