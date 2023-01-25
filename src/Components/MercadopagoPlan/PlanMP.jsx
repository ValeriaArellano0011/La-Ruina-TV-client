import axios from 'axios';
import React, { useEffect } from 'react';
import { URL_API } from '../../middlewares/misc/config';

const PlanMP = () => {

    const userId = JSON.parse(localStorage.getItem('auth')).userId

    useEffect(() => {
        axios.post(`${URL_API}/mercadopago/plan`, {userId})
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    }, [])
    return(
        <div>MPPPPPPPPPPPPPPPPPP</div>
    )
}

export default PlanMP