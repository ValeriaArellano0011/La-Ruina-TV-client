import s from "./LogIn.module.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginInner } from "../../../middlewares/redux/actions/auth";

const LogIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <div className="formCont">
        <ul className={s.form_ul}>
          <form className={s.form}>
            <li className={s.form_li}>Nombre de usuario</li>
            <input
              type="text"
              name="userName"
              required
              onChange={(e) => {
                return setEmail(e.target.value);
              }}
              placeholder="alias o e-mail"
            />
            <li className={s.form_li}>Contraseña</li>
            <input
              type="password"
              name="password"
              required
              onChange={(e) => {
                return setPassword(e.target.value);
              }}
              placeholder="contraseña"
            />
            <li className={s.form_li}>
              <button
                className="button1"
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

export default LogIn;
