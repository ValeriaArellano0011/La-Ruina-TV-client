import React, { useEffect } from 'react';
import s from "./css/Slider.module.css";
import Visor from './Visor';
import Footer from '../Utils/Footer';
import Slider from './Slider';
import Sort from '../Utils/Sort';
import { BodyCss } from '../../functions/BodyCss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPosts, resetIdYT, resetMedia, resetOption } from '../../middlewares/redux/actions';

const Browser = () => {
    BodyCss()
    const dispatch = useDispatch()
    const cardList = useSelector(state=>state.postList)
    const categoryList = useSelector(state=>state.categoryList)
    //const sliderCategoria = (categories) => cardList.filter(e=> {return e.categories.find(el=>el===categoryList)})
    useEffect(()=>{
        dispatch(resetOption())
        dispatch(resetMedia())
        dispatch(resetIdYT())
        dispatch(getPosts())
    },[dispatch])
    useEffect(()=>{
        //dispatch(getCategorias(visorList))
    },[cardList, dispatch])
 
    return (
        <div className='browserBody'>

{/* ---------------------VISOR--------------------- */} 
        <Visor/>

{/* ----------------------SORT--------------------- */}
        <Sort/>

{/* --------------------SLIDERS-------------------- */} 
        cardList && <Slider title={'Contenido'} cardList={cardList} style={s} id={`s`} key={`s${0}`}/>)
        {
            categoryList.map((category, i)=>{
                cardList.map(card => {
                    console.log('card cate: ', card.categories)
                    console.log('cate: ', category)
                    if(card.categories === category){
                        return (<>
                            <Slider title={category} cardList={cardList.filter(e => e.categories.split(',') === category)} style={s} id={`s${category.id}`} key={`s${i}`}/>
                        </>  )  
                    }
                })
                
            })
        }
        
    


{/* ---------------------FOOTER--------------------- */}

        {cardList.length>1 && <Footer/>}

        </div>
    )
}

export default Browser
