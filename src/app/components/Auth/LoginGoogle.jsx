import React from "react";
import s from "./LoginGoogle.module.css";
import googleIcon from "../../../assets/images/google-icon.png";
import { URL_API } from "../../../middlewares/config";

export default function LoginGoogle() {
  return (
    <div className={s.googleLoginContainer}>
      <a className={s.googleBtn} href={`${URL_API}/login-google`}>
        <ul className={s.contGoogleAuth}>
          <img
            src={googleIcon}
            height="40px"
            className={s.googleImg}
            alt="Sign Up with Google"
          />
          Google
        </ul>
      </a>
    </div>
  );
}
