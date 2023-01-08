import React, { useEffect, useState } from 'react';
import s from './css/CreateAccount.module.css';
import { onChangeInput, OnSubmitCreate } from '../../handlers/auth';
import { createAccount } from '../../middlewares/redux/actions';
import { useDispatch } from 'react-redux';
import { authCss } from './css/authCss';
import GoogleSignUp from './GoogleSignUp';

const CreateAccount = () => {
  const dispatch = useDispatch()
  
  const inputStateInitial = {
    alias: '',
    email: '',
    contraseña: ''
  }
  const [input, setInput] = useState(inputStateInitial)
  // const [errors, setErrors] = useState({
  //   alias: '',
  //   email: '',
  //   contraseña: ''
  // })

  useEffect(() => {
    setInput(inputStateInitial)
  },[setInput]);

  return (
    <div className='CreateAccountBody'>
      <button 
        className='tog'
        onClick={() => authCss('togLogIn')}
        >Iniciar sesión
        </button>
        <div className='formCont'>
          <ul className={s.form_ul}>
                <h1>Crear Cuenta</h1>
                <form className={s.form}>
                  <li className={s.form_li}>Nombre de usuario</li>
                  <input type="text" name='alias' value={input.alias} onChange={e => {return onChangeInput(e.target.name,e.target.value,input,setInput)}} placeholder='alias' />
                  <li className={s.form_li}>Correo electrónico</li>
                  <input type="email" name='email' value={input.email} onChange={e => {return onChangeInput(e.target.name,e.target.value,input,setInput)}} placeholder='e-mail' />
                  <li className={s.form_li}>Contraseña</li>
                  <input type="password" name='contraseña' value={input.contraseña} onChange={e => {return onChangeInput(e.target.name,e.target.value,input,setInput)}} placeholder='contraseña' />
                </form>
                <GoogleSignUp />
          </ul>      
        </div>
            <ul className={s.btn_ul}>
                <li><button 
                className='button1'
                type='submit'
                name='submit'
                onClick={e => OnSubmitCreate(e,input,createAccount, dispatch)}

                >Crear cuenta</button></li>
                <li><button 
                className='button2'
                onClick={()=> authCss('cancelCreate')}
                >Cancelar</button></li>
            </ul>
      
    </div>
  )
}

export default CreateAccount