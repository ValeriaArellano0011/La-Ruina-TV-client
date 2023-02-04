import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActiveFav } from "../../functions";
import { addLike, getAllLikes } from "../../middlewares/redux/actions";
import s from "./css/Fav.module.css"

const Fav = ({ urlID }) => {
    const dispatch = useDispatch()
    const auth = localStorage.getItem('auth');
    const user = JSON.parse(auth)
    const urlId = urlID
    const favs = useSelector(state=>state.allUserLikes)
    const [color, setColor] = useState('black')
    useEffect(()=>{
        setColor(ActiveFav(urlId, favs)? 'red':'black')
        dispatch(getAllLikes(user?.userId))
    },[urlId, favs, user, dispatch])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addLike(user.userId, urlId))
        dispatch(getAllLikes(user.userId))
    }
    return (
        <button 
            className={s.CardFav} 
            id="CardFav"
            onClick={(e)=>{return handleClick(e)}} 
            style={{color: color}}>
            <span role="img">❤</span>
        </button>
)}

export default Fav