import React from "react";
import s from "./LoginLaRuinaHub.module.css";
import laruinahubIcon from "../../../assets/images/ruina-records-icon.png";

export default function LoginLaRuinaHub() {
  return (
    <div className={s.container}>
      <a className={s.button} href="https://hub.laruinarecords.cl/#/oauth/chooseaccount/tv.laruinarecords.cl">
        <span className={s.spanIcon}>
          <img
            src={laruinahubIcon}
            height="20px"
            className={s.img}
            alt="Sign Up with Google"
          />
        </span>
        <span className={s.spanText}>
          La Ruina Hub
        </span>
      </a>
    </div>
  );
}
