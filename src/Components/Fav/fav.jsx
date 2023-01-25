import React from "react";
import { useDispatch } from "react-redux";
import { addLike } from "../../middlewares/redux/actions";
import s from "./css/Fav.module.css"

const Fav = ({ urlID }) => {
    const dispatch = useDispatch()
    const auth = localStorage.getItem('auth');
    const userId = auth ? JSON.parse(auth).userId : null;
    const urlId = urlID
    const handleClick = () => {
        dispatch(addLike(userId, urlId))
    }
    return (
        <button className={s.CardFav} onClick={handleClick}>
            <span role="img">❤</span>
        </button>
)}

export default Fav