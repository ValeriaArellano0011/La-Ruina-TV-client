import axios from 'axios'
import { URL_API } from '../../../../middlewares/config'

export const handleCheckout = async (userId) => { 
  try {
    await axios.post(`${URL_API}/mercadopago/create-checkout`, {userId})
    .then(data => {
      window.location.href = data.data
    })
  } catch (error) {
      console.error(error);
      alert("Hubo un error, intenta de nuevo más tarde.");
  }
}

export const handleCheckout2 = async () => {
    try {
      await axios.post(`${URL_API}/mercadopago/create-payment`)
      .then(data => 
        window.location.href = data.data
      )
  } catch (error) {
      console.error(error);
      alert("Hubo un error, intenta de nuevo más tarde.");
  }
  }