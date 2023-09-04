import s from './Verify.module.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import LogIn from './LogIn';
import CreateAccount from '../CreateAccount/CreateAccount';
import { $d } from '../../../functions';


function Verify() {
    const location = useLocation()
    const message = location.search.split('=')[1]
    
    if(message === "verified"){
        return (
            <div className={s.verify_container}>
                <h1 style={{color: 'white'}}>Tu correo fue verificado!</h1>
                <h3 style={{color: 'white', filter: 'drop-shadow(0px 0px 2px green)'}}>Ya puedes iniciar sesión</h3>
                <button
                    className='button1'
                    onClick={()=>
                        {
                            $d('.LogInBody').style.transitionDuration="1s"
                            $d('.LogInBody').style.transform="translate(0)"
                        }
                    }
                >Iniciar Sesión</button>
                <LogIn />
                <CreateAccount />
            </div>
        )
    }else{
        return (
            <div className={s.verify_container}>
                <h1 style={{color: 'white'}}>No pudimos verificar tu correo"</h1>
                <h2 style={{color: 'white', filter: 'drop-shadow(0px 0px 2px red)'}}>Vuelve a intentarlo</h2>
            </div>
        )
    }
    
}

export default Verify
