import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike, getAllLikes } from "../../middlewares/redux/actions";
import s from "./css/Fav.module.css"

const Fav = ({ urlID, color }) => {
    const dispatch = useDispatch()
    const auth = localStorage.getItem('auth');
    const user = JSON.parse(auth)
    const urlId = urlID


    return (

        <button
            className={s.CardFav}
            id="CardFav"
        >
            <span role="img" style={{color: color}}>❤</span>
        </button>


    )
}

export default Fav