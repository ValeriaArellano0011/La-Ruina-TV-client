import React, { useEffect } from 'react';
import s from "./css/Slider.module.css";
import Visor from './Visor';
import Footer from '../Utils/Footer';
import Slider from './Slider';
import { BodyCss } from '../../functions/BodyCss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategorias, getPosts, resetIdYT, resetMedia, resetOption } from '../../middlewares/redux/actions';

const Browser = () => {
    BodyCss()
    const dispatch = useDispatch()
    const visorList = useSelector(state=>state.postList)
    const categoryList = useSelector(state=>state.categoryList)
    const sliderCategoria = (categories) => visorList.filter(e=>e.categories.find(el=>el===categories))
    useEffect(()=>{
        dispatch(resetOption())
        dispatch(resetMedia())
        dispatch(resetIdYT())
        dispatch(getPosts())
    },[dispatch])
    useEffect(()=>{
        dispatch(getCategorias(visorList))
    },[visorList, dispatch])
 
    let id = 0
    return (
        <div className='browserBody'>

{/* ---------------------VISOR--------------------- */} 
        <Visor/>

{/* --------------------SLIDERS-------------------- */}
    {   
        visorList?
            ([...new Set(categoryList)].map(e=>
            {
                if(id === 0){ id++; return <Slider titulo={'Contenido'} category={visorList} style={s} id={`s`}key={`s`}/>}
                else{id = e.id; return <Slider titulo={e} category={sliderCategoria(e)} style={s} id={`s${e.id}`} key={`s${e}`}/>}
            }
        )) : dispatch(getPosts())
    }

{/* ---------------------FOOTER--------------------- */}

        {visorList.length>1? <Footer/> : null}

        </div>
    )
}

export default Browser
