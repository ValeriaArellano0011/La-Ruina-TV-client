import React from "react";
import s from "./css/LogIn.module.css";

import { login } from "../../middlewares/redux/actions";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LogIn = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('auth', JSON.stringify(currentUser))
      history.push('/browser')
      window.location.reload()
    }
  }, [currentUser, history]);
  
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
                  dispatch(login(email, password))
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
