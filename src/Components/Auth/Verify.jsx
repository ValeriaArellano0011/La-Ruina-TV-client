import React from 'react';
import styles from './css/Verify.module.scss'
import { useLocation } from 'react-router-dom';

function Verify() {
    const location = useLocation()
    const message = location.search.split('=')[1]
    
    if(message === "verified"){
        return (
            <div className={styles.verify_container}>
                <h1 style={{color: 'white'}}>Tu correo fue verificado!</h1>
                <h2 style={{color: 'white'}}>Ya puedes ver el contenido</h2>
            </div>
        )
    }else{
        return (
            <div className={styles.verify_container}>
                <h1 style={{color: 'white'}}>No pudimos verificar tu correo"</h1>
                <h2 style={{color: 'white'}}>Vuelve a intentarlo</h2>
            </div>
        )
    }
    
}

export default Verify
