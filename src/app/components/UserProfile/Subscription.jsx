import s from './css/Subscription.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import checkedIcon from '../../../design/checked-icon.png';
import RequestProfile from '../../../admin/Requests/RequestProfile';

import { URL_API } from '../../../middlewares/config';
import { $d, BodyCss } from '../../../functions';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { useHistory } from "react-router-dom";

export const Subscription = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = localStorage.getItem('auth');
  const userId = auth ? JSON.parse(auth).userId : null;
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    axios.post(`${URL_API}/mercadopago/getplan`, {userId})
    .then(res => {
      console.log(res.data)
      if(res.data === 'Plan Subscriptor'){
        setDisabled(true);        
      }else{
        setDisabled(false)
      }
    })
    .catch(err => console.log(err))
  }, [userId])

  return (
    <div className={s.subCont}>
      <div className='divProfile'>
          <div className='navFixed' ></div>
        <div className={s.checkoutFormat} >
            <h1 className={s.title}>Elegí tu plan</h1>
              <ul className={s.ulCheck}>
                <li className={s.liCheck}>
                  <div className={s.divCheckCont}>
                    <h2>Plan Freemium</h2>
                    <div className={s.divPrice}>
                      Gratuito
                    </div>
                    <div className={s.divDescription}>
                      <ul>
                        <h5>
                          <li>
                            <img src={checkedIcon} width="12px" alt="check" /> Acceso a todo nuestro contenido mediante plataformas comerciales
                          </li>
                          <li>
                            <img src={checkedIcon} width="12px" alt="check" /> Debes suscribirte a nuestro canal de Youtube
                          </li>
                        </h5>
                      </ul>                  
                    </div>
                    <div className={s.btnSubmitFree} >Activo</div>
                  </div>
                </li>
                <li className={s.liCheck}>
                  <div className={s.divCheckCont}>
                    <h2>Plan Suscriptor</h2>
                    <div className={s.divPrice}>
                      $1.000 CLP mensual
                    </div>
                    <div className={s.divDescription}>
                      <ul>
                        <h5>
                          <li>
                            <img src={checkedIcon} width="12px" alt="check" /> Acceso a todo nuestro contenido sin anuncios
                          </li>
                          <li>
                            <img src={checkedIcon} width="12px" alt="check" /> Reproduce tus canciones en cualquier lugar, incluso sin conexión
                          </li>
                          <li>
                            <img src={checkedIcon} width="12px" alt="check" /> Adquiere nuestro reproductor integrado para desplazarte por cualquier lugar sin dejar de escuchar tu música favorita
                          </li>
                        </h5>
                      </ul>
                    </div>
                    <button 
                      className={!disabled? s.btnSubmitEnabled : s.btnSubmitDisabled }
                      disabled={disabled}
                      onClick={()=>{
                        return(
                            dispatch(resetOption()),
                            BodyCss(),
                            history.push('/checkout/subscription'),
                            $d(`.bodyApp`).style.transform='translateX(0)',
                            $d(`.navCont`).style.transitionDuration='.2s',
                            $d(`.bodyApp`).style.transitionDuration='2s',
                            $d(`.navCont`).style.width='100vw',
                            $d(`.browserBody`).style.height='auto',
                            $d(`.browserBody`).style.overflowY='scroll',
                            $d(`.visor`).style.transform='translateX(0)',
                            $d('#slideCanvasCont').style.overflowY="scroll"
                        )
                      }
                    }>
                      {!disabled? 'Comenzar' : 'Activo' }</button>
                  </div>
                </li>
                {/* <li className={s.liCheck}>
                  <div className={s.divCheckCont}>
                    <h2>Plan Colaborador</h2>
                    <div className={s.divPrice}>
                      $1.000 CLP mensual + aporte voluntario mínimo de $500 mensual
                    </div>
                    <div className={s.divDescription}>
                      <ul>
                        <h5>
                          <li>
                            <img src={checkedIcon} width="20px" alt="check" /> Acceso a todo nuestro contenido sin anuncios
                          </li>
                          <li>
                            <img src={checkedIcon} width="20px" alt="check" /> Reproduce tus canciones en cualquier lugar, incluso sin conexión
                          </li>
                          <li>
                            <img src={checkedIcon} width="40px" alt="check" /> Adquiere nuestro reproductor integrado para desplazarte por cualquier lugar sin dejar de escuchar tu música favorita
                          </li>
                        </h5>
                      </ul>
                    </div>
                    <button className={s.btnSubmit}>Comenzar</button>
                  </div>
                </li> */}
              </ul>
              {/* <button className={s.btnSubmit} onClick={() => handleCheckout2()}>prueba</button> */}
              <RequestProfile />
              {/* <button className={s.btnSubmit} onClick={() => handleCheckout2()}>prueba</button> */}
          </div>
      </div>
    </div>
  )
}
