import React from 'react';
import styles from './css/Verify.module.scss'
import { useLocation } from 'react-router-dom';
import LogIn from './LogIn';
import CreateAccount from './CreateAccount';


function Verify() {
    const location = useLocation()
    const message = location.search.split('=')[1]
    
    if(message === "verified"){
        return (
            <div className={styles.verify_container}>
                <h1 style={{color: 'white'}}>Tu correo fue verificado!</h1>
                <h3 style={{color: 'white', filter: 'drop-shadow(0px 0px 2px green)'}}>Ya puedes iniciar sesión</h3>
                <button
                    className='button1'
                    onClick={()=>
                        {
                            document.querySelector('.LogInBody').style.transitionDuration="1s"
                            document.querySelector('.LogInBody').style.transform="translate(0)"
                        }
                    }
                >Iniciar Sesión</button>
                <LogIn />
                <CreateAccount />
            </div>
        )
    }else{
        return (
            <div className={styles.verify_container}>
                <h1 style={{color: 'white'}}>No pudimos verificar tu correo"</h1>
                <h2 style={{color: 'white', filter: 'drop-shadow(0px 0px 2px red)'}}>Vuelve a intentarlo</h2>
            </div>
        )
    }
    
}

export default Verify
