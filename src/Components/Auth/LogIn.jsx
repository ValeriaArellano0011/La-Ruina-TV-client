import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../middlewares/redux/actions';
import { authCss } from './css/authCss';
import s from './css/LogIn.module.css'
import GoogleSignUp from './GoogleSignUp'

const LogIn = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state=>state.currentUser)
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [errors, setErrors] = useState({
    //     userName: '',
    //     contraseña: ''
    // })
    useEffect(()=>{
      currentUser && history.push('/browser')
    })
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
                  <li className={s.form_li}><button 
                className='button1'
                type='submit'
                value='onSubmit'
                onClick={e=> {
                  return(
                  e.preventDefault(),
                  dispatch(login(email, password)))
  
                }}
                >Entrar</button></li>
                </form>
          </ul>
          <h3 style={{color: 'white', fontWeigth: 'thin'}} >o ingresa a través de</h3>
          <GoogleSignUp />
        </div>
        <ul className={s.btn_ul}>
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