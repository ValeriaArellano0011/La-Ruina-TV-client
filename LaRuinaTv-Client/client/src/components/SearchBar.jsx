import React from "react";
import {useDispatch} from 'react-redux';
import { useState } from "react";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(/*ACA VA LA LLAMADA (actions)*/(name));
        setName("")
    }

    return (
        <div>
            <input
            type = 'text'
            placeholder="buscar..."
            onChange= {(e) => handleInputChange(e)}
            />

            <button type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )
}
