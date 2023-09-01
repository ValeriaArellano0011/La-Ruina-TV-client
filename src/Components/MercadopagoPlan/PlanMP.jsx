import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { URL_API } from '../../middlewares/config';

const PlanMP = () => {

    const userId = JSON.parse(localStorage.getItem('auth')).userId
    const history = useHistory()
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const preapproval_id = params.get('preapproval_id');

    useEffect(() => {
        async function fetchData() {
            if(preapproval_id){
            await axios.post(`${URL_API}/mercadopago/plan`, {userId, preapproval_id})
            .then(res=> {
                console.log(res)
                history.push('/browser')
          })
          .catch(err => console.log(err))
        }
    }
    fetchData();
    }, [history, preapproval_id, userId])
    return(
        <div>MP</div>
    )
}

export default PlanMP