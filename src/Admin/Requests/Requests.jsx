import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetOption } from '../../middlewares/redux/actions'
import s from '../css/Dashboard.module.css'

const Requests = () => {
  const dispatch = useDispatch()
  return (
    <div>
      {/* <Link to='/product/create'> 
        <button 
          className={s.crearProducto}
          onClick={()=>{
              return(
              dispatch(resetOption()),
              document.querySelector(`.bodyApp`).style.transform='translateX(0)',
              document.querySelector(`.navCont`).style.transitionDuration='.2s',
              document.querySelector(`.bodyApp`).style.transitionDuration='2s',
              document.querySelector(`.navCont`).style.width='100vw',
              document.querySelector(`.navMenu`).style.display='flex',
              document.querySelector(`.browserBody`).style.height='auto',
              document.querySelector(`.browserBody`).style.overflowY='scroll',
              document.querySelector(`.visor`).style.transform='translateX(0)',
              document.querySelector('#slideCanvasCont').style.overflowY="scroll"
              )}}>
        Crear Producto
        </button>
      </Link> */}
      <Link to='/media/create'>
        <button 
          className={s.crearPost}
          onClick={()=>{
            return(
            dispatch(resetOption()),
            document.querySelector(`.bodyApp`).style.transform='translateX(0)',
            document.querySelector(`.navCont`).style.transitionDuration='.2s',
            document.querySelector(`.bodyApp`).style.transitionDuration='2s',
            document.querySelector(`.navCont`).style.width='0vw',
            document.querySelector(`.navMenu`).style.display='flex',
            document.querySelector(`.navCont`).style.width='100vw',
            document.querySelector(`.browserBody`).style.height='auto',
            document.querySelector(`.browserBody`).style.overflowY='scroll',
            document.querySelector(`.visor`).style.transform='translateX(0)',
            document.querySelector('#slideCanvasCont').style.overflowY="scroll"
            )}}>
        Crear Media
        </button>
      </Link>
      <Link to='/media/edit'>
        <button 
          className={s.crearPost}
          onClick={()=>{
            return(
            dispatch(resetOption()),
            document.querySelector(`.bodyApp`).style.transform='translateX(0)',
            document.querySelector(`.navCont`).style.transitionDuration='.2s',
            document.querySelector(`.bodyApp`).style.transitionDuration='2s',
            document.querySelector(`.navCont`).style.width='0vw',
            document.querySelector(`.navMenu`).style.display='flex',
            document.querySelector(`.navCont`).style.width='100vw',
            document.querySelector(`.browserBody`).style.height='auto',
            document.querySelector(`.browserBody`).style.overflowY='scroll',
            document.querySelector(`.visor`).style.transform='translateX(0)',
            document.querySelector('#slideCanvasCont').style.overflowY="scroll"
            )}}>
        Modificar Media
        </button>
      </Link>
    </div>
  )
}

export default Requests