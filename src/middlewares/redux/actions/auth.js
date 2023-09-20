import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_USER } from "../../misc";
import { options } from "../../helpers";
import { $d } from "../../../functions";

export function auth(history) {
  return async function (dispatch) {
    await axios.get(`${URL_API}/auth`, options())
      .then(res => {
        dispatch({
          type: CURRENT_USER,
          payload: res.data.userData
        })
        res.data.logged && history.push(`/browser`);
      })
      .catch((e) => {
        console.error(e);
      })
  }
};

export function loginInner(email, password, history) {
  return async function () {
    await axios.post(`${URL_API}/login-inner`, { email, password })
      .then(res => {
        localStorage.setItem('userToken', res.data.token);
        res.data.logged && history.push(`/auth?token=${res.data.token}`);
        $d(`.bodyApp`).style.transform='translateX(0)';
        $d(`.navCont`).style.transitionDuration='.2s';
        $d(`.bodyApp`).style.transitionDuration='.2s';
        $d(`.navCont`).style.width='100vw';
        $d(`.browserBody`).style.height='auto';
        $d(`.browserBody`).style.overflowY='scroll';
        $d(`.visor`).style.transform='translateX(0)';
        $d('#slideCanvasCont').style.overflowY="scroll";
      })
      .catch((e) => {
        console.error(e);
      })
  }
};

export function loginGoogle() {
  return async function () {
    await axios.get(`${URL_API}/login-google`)
      .catch((e) => { console.error(e) });
  }
};

export function signupInner(email, password, history) {
  return async function () {
    await axios.post(`${URL_API}/signup-inner`, { email, password })
      .then(res => {
        res.data.logged && history.push(`/auth?token=${res.data.token}`);
      })
      .catch((e) => {
        console.error(e);
      })
  }
};

export function signupGoogle(history) {
  return async function () {
    await axios.get(`${URL_API}/signup-google`)
      .then(res => {
        res.data.logged && history.push(`/auth?token=${res.data.token}`)
      })
      .catch((e) => {
        console.error(e);
      })
  }
};

