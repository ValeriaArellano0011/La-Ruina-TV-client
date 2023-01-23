import React from "react";
import s from "./css/Fav.module.css"


export default function Fav({ id }) {
    const handleClick = () => {
        alert(id)
    }

    return <button className={s.CardFav} onClick={handleClick}>
        <span role="img">❤</span>
    </button>
}