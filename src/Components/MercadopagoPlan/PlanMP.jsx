import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { URL_API } from '../../middlewares/misc/config';

const PlanMP = () => {

    const userId = JSON.parse(localStorage.getItem('auth')).userId

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const preapproval_id = params.get('preapproval_id');

    useEffect(() => {
        console.log('el preeeeeeeea', preapproval_id)
        axios.post(`${URL_API}/mercadopago/plan`, {userId, preapproval_id})
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    }, [])
    return(
        <div>MPPPPPPPPPPPPPPPPPP</div>
    )
}

export default PlanMP