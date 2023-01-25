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
                Listado de contenido
                <div>
                    <ul>
                        {
                            mediaList?.map((e, index)=>{
                                return(
                                    <li key={index}>
                                        {index} - {e.title} - {e.id}
                                        <button onClick={() => {
                                            dispatch(getEditMedia(e.connectionId))
                                            history.push(`/media/edit/${e.connectionId}`)
                                        }}> Edit </button>
                                        <button onClick={() => {
                                            dispatch(getDeleteMedia(e.connectionId))
                                        }}> Delete </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}