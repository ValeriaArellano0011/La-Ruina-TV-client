import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../middlewares/redux/actions';
import { authCss } from './css/authCss';
import s from './css/LogIn.module.css'

const LogIn = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state=>state.currentUser)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [errors, setErrors] = useState({
    //     userName: '',
    //     contraseña: ''
    // })
  return (
    <div className='LogInBody'>
        <div className='formCont'>
          <ul className={s.form_ul}>
                <h1>Iniciar Sesión</h1>
                <form className={s.form}>
                  <li className={s.form_li}>Nombre de usuario</li>
                  <input type="text" name='userName' onChange={e => {return setEmail(e.target.value)}} placeholder='alias o e-mail' />
                  <li className={s.form_li}>Contraseña</li>
                  <input type="password" name='contrasena' onChange={e => {return setPassword(e.target.value)}} placeholder='contraseña' />
                </form>
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
                  dispatch(login(email, password)))
                }}
                >Entrar</button></li>
                <li><button 
                className='button2'
                onClick={()=> authCss('cancelLogIn')}>
                Cancelar
                </button></li>
                <button 
                className='tog'
                onClick={() => authCss('togCreate')}
                >Crear cuenta
                </button>
            </ul>

    </div>
  )
}

export default LogIn