import axios from "axios";
import { URL_API } from "../../config";
import { CREATE_MEDIA, DELETE_MEDIA, UPDATE_MEDIA } from "../../misc";

export const createMedia = (formData) => {
  return async function (dispatch) {
      const response = await axios.post(
        `${URL_API}/media/upload`,
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
          );

      return dispatch({
          type: CREATE_MEDIA,
          payload: response.data
        })
  }
};
        
export const updateMedia = (id) => {
  return async function (dispatch) {
      let res = await axios.get(`${URL_API}/media/edit/${id}`);
      return dispatch({
          type: UPDATE_MEDIA,
          payload: res.data
      })
  }
}

export const deleteMedia = (id) => {
  return async function (dispatch) {
      let res = await axios.get(`${URL_API}/media/delete/${id}`);
      return dispatch({
          type: DELETE_MEDIA,
          payload: res.data
      })
  }
}