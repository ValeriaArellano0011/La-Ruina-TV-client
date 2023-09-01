import React from "react";
import s from "./css/GoogleAuth.module.css";
import googleIcon from "../../../design/google-icon.png";
import { URL_API } from "../../../middlewares/config";

export default function GoogleSignUp() {
  return (
    <div>
      <ul className={s.contGoogleAuth}>
          <a
            className={s.googleBtn}
            href={`${URL_API}/auth`}>
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
