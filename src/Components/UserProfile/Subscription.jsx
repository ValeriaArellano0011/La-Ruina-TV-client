import React, { useEffect } from 'react'
import s from './css/Subscription.module.css'
import checkedIcon from '../../design/checked-icon.png'
import RequestProfile from '../../Admin/Requests/RequestProfile'
import axios from 'axios'
import { URL_API } from '../../middlewares/misc/config'
import { handleCheckout } from '../Checkout/js/CheckoutFunction'
import { BodyCss } from '../../functions'
import { useDispatch } from 'react-redux'
import { resetOption } from '../../middlewares/redux/actions'
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
  }, [])


  return (
    <div>
      <div className='divProfile'>
        <div className={s.checkoutFormat} >
          <div className='navFixed' ></div>
            <h1>Elegí tu plan</h1>
              <ul className={s.ulCheck}>
                <li className={s.liCheck}>
                  <div className={s.divCheckCont}>
                    <h2>Plan Freemium</h2>
                    <div className={s.divPrice}>
                      gratuito
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
                    <div className={s.btnSubmitFree} >Por defecto</div>
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
                      className={s.btnSubmit} 
                      onClick={()=>{
                        return(
                            dispatch(resetOption()),
                            BodyCss(),
                            history.push('/checkout/subscription'),
                            document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                            document.querySelector(`.navCont`).style.transitionDuration='.2s',
                            document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                            document.querySelector(`.navCont`).style.width='100vw',
                            document.querySelector(`.navMenu`).style.display='flex',
                            document.querySelector(`.browserBody`).style.height='auto',
                            document.querySelector(`.browserBody`).style.overflowY='scroll',
                            document.querySelector(`.visor`).style.transform='translateX(0)',
                            document.querySelector('#slideCanvasCont').style.overflowY="scroll"
                        )
                      }
                    }>
                      Comenzar</button>
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
