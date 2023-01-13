import s from "./css/GoogleAuth.module.css";
import googleIcon from "../../design/google-icon.png";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../middlewares/redux/actions";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function GoogleSignUp() {
  const dispatch = useDispatch();
  const history = useHistory;

  const handleOnClick = async () => {
    const response = await axios.get(
      `https://la-ruina-api.fly.dev/auth/google`
    );
    console.log(response);
    // const token = response.data;
    // localStorage.setItem('token', token);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/browser");
    }
  }, []);

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
