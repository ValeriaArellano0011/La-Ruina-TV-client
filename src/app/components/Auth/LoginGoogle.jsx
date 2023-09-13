import React from "react";
import s from "./LoginGoogle.module.css";
import googleIcon from "../../../assets/images/google-icon.png";
import { URL_API } from "../../../middlewares/config";

export default function LoginGoogle() {
  return (
    <div>
      <ul className={s.contGoogleAuth}>
          <a
            className={s.googleBtn}
            href={`${URL_API}/login-google`}>
              <img
                src={googleIcon}
                height="40px"
                className={s.googleImg}
                alt="Sign Up with Google"
              />

          </a>
      </ul>
    </div>
  );
}
