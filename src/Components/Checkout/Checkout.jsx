import React from 'react'
import s from './css/Checkout.module.css'
import checkedIcon from '../../design/checked-icon.png'

export const Checkout = () => {
  return (
    <div className={s.checkoutCont}>
        <div className={s.checkoutFormat} >
          <div className={s.navFixed} ></div>
          <h1>Elegí tu plan, bobo</h1>
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
                          <img src={checkedIcon} width="40px" alt="check" /> Acceso a todo nuestro contenido mediante plataformas comerciales
                        </li>
                        <li>
                          <img src={checkedIcon} width="40px" alt="check" /> Debes suscribirte a nuestro canal de Youtube
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
                          <img src={checkedIcon} width="40px" alt="check" /> Acceso a todo nuestro contenido sin anuncios
                        </li>
                        <li>
                          <img src={checkedIcon} width="40px" alt="check" /> Reproduce tus canciones en cualquier lugar, incluso sin conexión
                        </li>
                      </h5>
                    </ul>
                  </div>
                  <button className={s.btnSubmit}>Comenzar</button>
                </div>
              </li>
              <li className={s.liCheck}>
                <div className={s.divCheckCont}>
                  <h2>Plan Colaborador</h2>
                  <div className={s.divPrice}>
                    $1.000 CLP mensual + aporte voluntario mínimo de $500 mensual
                  </div>
                  <div className={s.divDescription}>
                    <ul>
                      <h5>
                        <li>
                          <img src={checkedIcon} width="40px" alt="check" /> Acceso a todo nuestro contenido sin anuncios
                        </li>
                        <li>
                          <img src={checkedIcon} width="40px" alt="check" /> Reproduce tus canciones en cualquier lugar, incluso sin conexión
                        </li>
                        {/* <li>
                          <img src={checkedIcon} width="40px" alt="check" /> Adquiere nuestro reproductor integrado para desplazarte por cualquier lugar sin dejar de escuchar tu música favorita
                        </li> */}
                      </h5>
                    </ul>
                  </div>
                  <button className={s.btnSubmit}>Comenzar</button>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}
