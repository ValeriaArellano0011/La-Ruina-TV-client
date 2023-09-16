import React from "react";
import s from "./LoginLaRuinaHub.module.css";
import laruinahubIcon from "../../../assets/images/ruina-records-icon.png";

export default function LoginLaRuinaHub() {
  return (
    <div className={s.container}>
      <button className={s.button}>
          <img
            src={laruinahubIcon}
            height="20px"
            className={s.img}
            alt="Sign Up with Google"
          />
          La Ruina Hub
      </button>
    </div>
  );
}
