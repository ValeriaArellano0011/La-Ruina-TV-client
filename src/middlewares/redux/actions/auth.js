import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_USER } from "../../misc";

const options = (token) => {
  return { 'headers': { Authorization: token } }
}

export function auth(authToken, history) {
  return async function (dispatch) {
    await axios.get(`${URL_API}/auth`, options(authToken))
      .then(res => {
        dispatch({
          type: CURRENT_USER,
          payload: res.data.userData
        })
        localStorage.setItem('userData', JSON.stringify(res.data.userData));
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
        res.data.logged && history.push(`/auth?token=${res.data.token}`)
      })
      .catch((e) => {
        console.error(e);
      })
  }
};

export function loginGoogle(history) {
  return async function () {
    await axios.get(`${URL_API}/login-google`)
      .then(res => {
        res.data.logged && history.push(`/auth?token=${res.data.token}`)
      })
      .catch((e) => {
        console.error(e);
      })
  }
};

export function signupInner(email, password, history) {
  return async function () {
    await axios.post(`${URL_API}/signup-inner`, { email, password })
      .then(res => {
        res.data.logged && history.push(`/auth?token=${res.data.token}`)
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

