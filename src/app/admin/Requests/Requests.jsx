import s from './Requests.module.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetOption } from '../../../middlewares/redux/actions'
import { $d } from '../../../functions'

const Requests = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Link to='/media/create'>
        <button 
          className={s.crearPost}
          onClick={()=>{
            return(
            dispatch(resetOption()),
            $d(`.bodyApp`).style.transform='translateX(0)',
            $d(`.navCont`).style.transitionDuration='.2s',
            $d(`.bodyApp`).style.transitionDuration='2s',
            $d(`.navCont`).style.width='0vw',
            $d(`.navCont`).style.width='100vw',
            $d(`.browserBody`).style.height='auto',
            $d(`.browserBody`).style.overflowY='scroll',
            $d(`.visor`).style.transform='translateX(0)',
            $d('#slideCanvasCont').style.overflowY="scroll"
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
            $d(`.bodyApp`).style.transform='translateX(0)',
            $d(`.navCont`).style.transitionDuration='.2s',
            $d(`.bodyApp`).style.transitionDuration='2s',
            $d(`.navCont`).style.width='0vw',
            $d(`.navCont`).style.width='100vw',
            $d(`.browserBody`).style.height='auto',
            $d(`.browserBody`).style.overflowY='scroll',
            $d(`.visor`).style.transform='translateX(0)',
            $d('#slideCanvasCont').style.overflowY="scroll"
            )}}>
        Modificar Contenido
        </button>
      </Link>
      <Link to='/users/edit'>
        <button 
          className={s.editUsers}
          onClick={()=>{
            return(
            dispatch(resetOption()),
            $d(`.bodyApp`).style.transform='translateX(0)',
            $d(`.navCont`).style.transitionDuration='.2s',
            $d(`.bodyApp`).style.transitionDuration='2s',
            $d(`.navCont`).style.width='0vw',
            $d(`.navCont`).style.width='100vw',
            $d(`.browserBody`).style.height='auto',
            $d(`.browserBody`).style.overflowY='scroll',
            $d(`.visor`).style.transform='translateX(0)',
            $d('#slideCanvasCont').style.overflowY="scroll"
            )}}>
        Administrar Usuarios
        </button>
      </Link>
    </div>
  )
}

export default Requests