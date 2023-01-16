import s from "./css/GoogleAuth.module.css";
import googleIcon from "../../design/google-icon.png";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function GoogleSignUp() {
 // const history = useHistory;

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     history.push("/browser");
  //   }
  // }, [history]);

  return (
    <div>
      <ul className={s.contGoogleAuth}>
        <a
          className={s.googleBtn}
          href="https://la-ruina-api.fly.dev/auth/google"
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
