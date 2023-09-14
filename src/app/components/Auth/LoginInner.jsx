import s from "./LoginInner.module.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginInner } from "../../../middlewares/redux/actions/auth";

const LoginInner = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <div className={s.formCont}>
        <ul className={s.form_ul}>
          <form className={s.form}>
            <li className={s.form_li}>
              Nombre de usuario
              <input
                type="text"
                name="userName"
                required
                onChange={(e) => {
                  return setEmail(e.target.value);
                }}
                placeholder="alias o e-mail"
              />
            </li>
            <li className={s.form_li}>
              Contraseña
              <input
                type="password"
                name="password"
                required
                onChange={(e) => {
                  return setPassword(e.target.value);
                }}
                placeholder="contraseña"
              />
            </li>
            <li className={s.form_li}>
              <button
                className={`${s.innerLoginButton} button1`}
                type="submit"
                value="onSubmit"
                onClick={(e) => {
                 return (
                  e.preventDefault(),
                  dispatch(loginInner(email, password, history))
                  )
                }}
              >
                Entrar
              </button>
            </li>
          </form>
        </ul>
      </div>
  );
};

export default LoginInner;
