import React from "react";
import { useDispatch } from "react-redux";
import { addLike } from "../../middlewares/redux/actions";
import s from "./css/Fav.module.css"

const Fav = ({ urlID }) => {
    const dispatch = useDispatch()
    const auth = localStorage.getItem('auth');
    const userId = auth ? JSON.parse(auth).userId : null;

    const handleClick = () => {
        dispatch(addLike(userId, urlID))
    }
    return (
        <button className={s.CardFav} onClick={handleClick}>
            <span role="img">❤</span>
        </button>
)}

export default Fav