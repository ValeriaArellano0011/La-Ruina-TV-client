import React from "react";
import { useDispatch } from "react-redux";
import { addLike, getAllLikes } from "../../middlewares/redux/actions";
import s from "./css/Fav.module.css"

const Fav = ({ urlID }) => {
    const dispatch = useDispatch()
    const auth = localStorage.getItem('auth');
    const user = JSON.parse(auth)
    const urlId = urlID
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addLike(user.userId, urlId))
        dispatch(getAllLikes(user.userId))
    }
    return (
        <button className={s.CardFav} onClick={(e)=>{return handleClick(e)}}>
            <span role="img">❤</span>
        </button>
)}

export default Fav