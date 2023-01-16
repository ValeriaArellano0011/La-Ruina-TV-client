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
  const [display, setDisplay] = useState(true)

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
    setDisplay(false)
    showToast('success', "Verifica tu correo electrónico!")
  }

  return (
    <div className='CreateAccountBody'>
        <div className='formCont'>
        {
          display?
          <>
          <ul className={s.form_ul}>
            <h1>Crear Cuenta</h1>
              <form className={s.form}>
              <li className={s.form_li}>Nombre de usuario</li>
              <input type="text" name='alias' onChange={e => {return setAlias(e.target.value)}} placeholder='alias' required />
              <li className={s.form_li}>Correo electrónico</li>
              <input type="email" name='email' onChange={e => {return setEmail(e.target.value)}} placeholder='e-mail' required/>
              <li className={s.form_li}>Contraseña</li>

              <input type="password" name='password' onChange={e => {return setPassword(e.target.value)}} placeholder='contraseña' required/>
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
        <h3 style={{ color: "white", fontWeight: 'lighter', fontSize: "15px"}}>
          o puedes registrarte a través de
        </h3>
          <GoogleSignUp /></>
          : (<><div 
              style={{color: 'white'}}>
              <h1 
                style={{ position: 'relative', top: '100px', textShadow: '0px 0px 5px green'}}>
                  ¡Tu cuenta ha sido creada!</h1><br></br>
                  <h3 
                    style={{ position: 'relative', top: '100px', fontSize: '15px', fontWeight: 'lighter'}}> 
                    Te hemos enviado un correo electrónico a la dirección que nos brindaste. Revísalo para verificar tus datos</h3></div>
        <h3 style={{ position: 'relative', color: "white", fontWeight: 'lighter', fontSize: "15px", top: '200px'}}>
          también puedes registrarte a través de
          <GoogleSignUp />
        </h3>
          </>
          )}
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