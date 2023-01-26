import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import s from './css/EditMediaList.module.css'  
import {
    getUsers,
    resetOption,
    getEditUsers,
    getDeleteUsers
  } from "../../middlewares/redux/actions";

export const EditUsersList = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const usersList = useSelector(state=>state.usersList)
    useEffect(() => {
        dispatch(getUsers());
        dispatch(resetOption());
      }, [dispatch]);
    return(
        <div className={s.editListCont}>
            <div className={s.editListFormat} >
                Listado de usuarios
                <div>
                    <ul>
                        {
                            usersList?.map((e, index)=>{
                                return(
                                    <li key={index}>
                                        {index} - {e.name} - {e.id}
                                        <button onClick={() => {
                                            dispatch(getEditUsers(e.connectionId))
                                            history.push(`/users/edit/${e.connectionId}`)
                                        }}> Edit </button>
                                        <button onClick={() => {
                                            dispatch(getDeleteUsers(e.connectionId))
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