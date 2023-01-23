import s from "./css/GoogleAuth.module.css";
import googleIcon from "../../design/google-icon.png";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { URL_API } from "../../middlewares/misc/config";

export default function GoogleSignUp() {

  return (
    <div>
      <ul className={s.contGoogleAuth}>
          <a
            className={s.googleBtn}
           href="https://la-ruina-api.fly.dev/auth"
          >
              <img
                src={googleIcon}
                height="40px"
                className={s.googleImg}
                alt="sign up with google"
              />

          </a>
      </ul>
    </div>
  );
}
