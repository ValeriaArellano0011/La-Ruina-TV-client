import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import s from './css/EditMediaList.module.css'  
import {
    getMedia,
    resetIdYT,
    resetMedia,
    resetOption,
    getEditMedia,
    getDeleteMedia
  } from "../../middlewares/redux/actions";

export const EditMediaList = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const mediaList = useSelector(state=>state.mediaList)
    useEffect(() => {
        dispatch(getMedia());
        dispatch(resetMedia());
        dispatch(resetOption());
        dispatch(resetIdYT());
      }, [dispatch]);
    return(
        <div className={s.editListCont}>
            <div className={s.editListFormat} >
                <h1>Listado de contenido</h1>
                <div className={s.divList}>
                    <div className={s.ulList1}>
                        <ul className={s.ulList0}>
                            <li>Índice</li> - <li>Título</li> - <li>id</li> - <li>Editar</li> - <li>Eliminar</li>
                        </ul>
                        {
                            mediaList?.map((e, index)=>{
                                return(
                                    <li key={index}>
                                        <ul className={s.ulList2}><li>{index}</li> - <li>{e.title}</li> - <li>{e.id}</li> - 
                                        <li><button className={s.btnEdit} onClick={() => {
                                            dispatch(getEditMedia(e.connectionId))
                                            history.push(`/media/edit/${e.connectionId}`)
                                        }}>  </button></li> - 
                                        <li><button className={s.btnDelete} onClick={() => {
                                            dispatch(getDeleteMedia(e.connectionId))
                                        }}>  </button></li></ul>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}