import s from './EditMediaList.module.css'  
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {
    resetIdYT,
    resetMedia,
    resetOption,
  } from "../../../middlewares/redux/actions";
import { getMedia } from '../../../middlewares/redux/actions/media';
import { deleteMedia } from '../../../middlewares/redux/actions/admin';
import { RenderDriveImage } from '../../../functions/RenderDriveImage';

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
                            <li>Visor</li> - <li>Slider</li> - <li>Título</li> - <li>Artista</li> - <li>Editar</li> - <li>Eliminar</li>
                        </ul>
                        {
                            mediaList?.map((e, index)=>{
                                return(
                                    <li key={index}>
                                        <ul className={s.ulList2}>
                                            <li><img src={RenderDriveImage(e.imageVisor)} height={80} alt="" /></li> - 
                                            <li><img src={RenderDriveImage(e.imageSlider)} height={80} alt="" /></li> - 
                                            <li>{e.title}</li> - 
                                            <li>{e.artist}</li> -
                                            <li>
                                                <button className={s.btnEdit} onClick={() => { history.push(`/media/edit/${e.id}`) }}/>
                                            </li> - 
                                        <li><button className={s.btnDelete} onClick={() => {
                                            dispatch(deleteMedia(e.id))
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