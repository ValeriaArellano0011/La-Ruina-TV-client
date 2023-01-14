import React, {  useState } from 'react';
import s from './css/CreateAccount.module.css';
import { signup } from '../../middlewares/redux/actions';
import { useDispatch } from 'react-redux';
import { authCss } from './js/authCss';
import GoogleSignUp from './GoogleSignUp'
import Toast from '../Utils/Toast';

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
  const [list, setList] = useState([]);
  let toastProperties = null;
  const showToast = (type, description) => {
    console.log('entrooo')
    switch(type) {
      case 'success':
        toastProperties = {
          id: list.length+1,
          title: 'Success',
          description: description,
          backgroundColor: '#5cb85c'
        }
        break;
      case 'danger':
        toastProperties = {
          id: list.length+1,
          title: 'Error',
          description: description,
          backgroundColor: '#d9534f'
        }
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  const onSubmitCreate = (e) => {
    e.preventDefault()
    dispatch(signup(alias, email, password))
    showToast('success', "Verifica tu correo electrónico!")
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
              <li className={s.form_li}>
              <button
                className='button1'
                type='submit'
                name='submit'
                onClick={e => onSubmitCreate(e)}>
                  Crear cuenta
                </button>
              </li>
            </form>
          </ul>
          <GoogleSignUp />
        </div>
            <ul className={s.btn_ul}>
                <button
                  className='tog'
                  onClick={() => authCss('togLogIn')}>
                    Iniciar sesión
                </button>
            </ul>
            <Toast toastlist={list} position="buttom-right" setList={setList} />
    </div>
  )
}

export default CreateAccount