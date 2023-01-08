import React from 'react'
import { Link } from 'react-router-dom'
import CreateAccount from '../Auth/CreateAccount'
import LogIn from '../Auth/LogIn'
import style from './css/Enter.module.css'
import { EnterCss } from './css/EnterCss'

const Enter = () => {
  EnterCss()
  return (
    <div className={style.enterBody}>
        <div>
            <CreateAccount/>
        </div>
        <div>
            <LogIn/>
        </div>

      <div className={style.visor}>
      <div className={style.visorCanvas}></div>
      <div className={style.welcomeCont} id='welcomeCont'>
        <h1>CREÁ, COMPARTÍ Y DISFRUTÁ DE TODO NUESTRO CONTENIDO MULTIMEDIA</h1>
        <ul className={style.welcomeUl}>

        <Link to='/browser'><li>
          <button 
            className={style.button1}
            onClick={()=>
              {
                  document.querySelector('#welcomeCont').style.opacity="0"
                  document.querySelector('.LogInBody').style.transitionDuration="1s"
                  document.querySelector('.LogInBody').style.transform="translate(0)"
              }   
            }
            >Iniciar sesión</button>
            </li></Link>

                    <li><button 
                    className={style.button2}
                    onClick={()=>
                      {
                          document.querySelector('#welcomeCont').style.opacity="0"
                          document.querySelector('.CreateAccountBody').style.transitionDuration="1s"
                          document.querySelector('.CreateAccountBody').style.transform="translate(0)"
                      }   
                    }       
                    
                    >Crear cuenta</button></li>
                </ul>
      </div>
      

      
     </div>
    </div>
  )
}

export default Enter
