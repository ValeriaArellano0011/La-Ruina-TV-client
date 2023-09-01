import s from './css/YtSubscribeButton.module.css'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { $d } from '../../../functions';

export const YtSubscribeButton = () => {
    const YTSub = useSelector(state=>state.YTSub)
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    return(
        <div className={s.canvasYtSubBtn} id='canvasYtSubBtn'>
            <ul className={s.ulCont} style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign: 'center'}}>
                <li><h1 style={{color:'white', fontSize:'25px'}}>¡Debes suscribirte a nuestro canal de youtube para ver este contenido!</h1></li><br/>
                <li><div className="g-ytsubscribe" data-channelid='UCD8dZZ0aM2yHj4t80abSZZA' data-theme="dark" data-layout="full" data-count="default"/></li><br/>
                <li><button 
                        className={s.btnX} 
                        onClick={()=>
                            {YTSub? 
                            $d('#canvasYtSubBtn').style.display='none' 
                            : 
                            // $d('#canvasYtSubBtn').style.display='flex'}
                            $d('#canvasYtSubBtn').style.display='none'}
                    }>CERRAR</button></li>
            </ul>
        </div>
    )
}