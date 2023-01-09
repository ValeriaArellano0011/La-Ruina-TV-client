import React, {  useState } from 'react';
import s from './css/CreateAccount.module.css';
import { signup } from '../../middlewares/redux/actions';
import { useDispatch } from 'react-redux';
import { authCss } from './css/authCss';
import GoogleSignUp from './GoogleSignUp';

const CreateAccount = () => {
  const dispatch = useDispatch()
  
  const [email, setEmail] = useState('')
  const [alias, setAlias] = useState('')
  const [password, setPassword] = useState('')

  // const [errors, setErrors] = useState({
  //   alias: '',
  //   email: '',
  //   password: ''
  // })

  const onSubmitCreate = (e) => {
    e.preventDefault()
    dispatch(signup(alias, email, password))
  }

  return (
    <div className='CreateAccountBody'>
        <div className='formCont'>
          <ul className={s.form_ul}>
                <h1>Crear Cuenta</h1>
                <form className={s.form}>
                  <li className={s.form_li}>Nombre de usuario</li>
                  <input type="text" name='alias' onChange={e => {return setAlias(e.target.value)}} placeholder='alias' />
                  <li className={s.form_li}>Correo electrónico</li>
                  <input type="email" name='email' onChange={e => {return setEmail(e.target.value)}} placeholder='e-mail' />
                  <li className={s.form_li}>Contraseña</li>

                  <input type="password" name='password' onChange={e => {return setPassword(e.target.value)}} placeholder='contraseña' />

                </form>
                <GoogleSignUp />
          </ul>      
        </div>
            <ul className={s.btn_ul}>
                <li><button 
                className='button1'
                type='submit'
                name='submit'
                onClick={e => onSubmitCreate(e)}

                >Crear cuenta</button></li>
                <li><button 
                className='button2'
                onClick={()=> authCss('cancelCreate')}
                >Cancelar</button></li>
                <button 
                className='tog'
                onClick={() => authCss('togLogIn')}
                >Iniciar sesión
                </button>

            </ul>
      
    </div>
  )
}

export default CreateAccount