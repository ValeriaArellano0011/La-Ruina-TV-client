import axios from "axios"
import { URL_API } from "../../config"
import { GET_MEDIA } from "../../misc"

export function getMedia() {
  return async function(dispatch) {
      try {
          const response = await axios.get(`${URL_API}/media`)
          dispatch({
              type: GET_MEDIA,
              payload: response
          })
      } catch(e) {
          console.log(e)
      }
  }
}