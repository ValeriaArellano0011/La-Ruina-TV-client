import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onChangeInput } from '../../handlers/auth';
import { logIn } from '../../middlewares/redux/actions';
import { authCss } from './css/authCss';
import s from './css/LogIn.module.css'
import GoogleLogIn from './GoogleLogIn';

const LogIn = () => {
    const dispatch = useDispatch();
    const inputStateInitial = {
      userName: '',
      contrasena: ''
    }
    const [input, setInput] = useState(inputStateInitial)
    // const [errors, setErrors] = useState({
    //     userName: '',
    //     contraseña: ''
    // })

  
    useEffect(() => {
      setInput(inputStateInitial)
    },[setInput, inputStateInitial]);

  return (
    <div className='LogInBody'>
        <button 
        className='tog'
        onClick={()=> authCss('togCreate')}
        >Crear cuenta
        </button>
        <div className='formCont'>
          <ul className={s.form_ul}>
                <h1>Iniciar Sesión</h1>
                <form className={s.form}>
                  <li className={s.form_li}>Nombre de usuario</li>
                  <input type="text" name='userName' value={input.userName} onChange={e => {return onChangeInput(e.target.name,e.target.value,input,setInput)}} placeholder='alias o e-mail' />
                  <li className={s.form_li}>Contraseña</li>
                  <input type="password" name='contrasena' value={input.contrasena} onChange={e => {return onChangeInput(e.target.name,e.target.value,input,setInput)}} placeholder='contraseña' />
                </form>
                <GoogleLogIn />
          </ul>
        </div>
        <ul className={s.btn_ul}>
                <li><button 
                className='button1'
                type='submit'
                value='onSubmit'
                onClick={e=> {
                  return(  
                  e.preventDefault(),
                  dispatch(logIn([input])))
                }}
                >Entrar</button></li>
                <li><button 
                className='button2'
                onClick={()=> authCss('cancelLogIn')}>
                Cancelar
                </button></li>
            </ul>
    </div>
  )
}

export default LogIn