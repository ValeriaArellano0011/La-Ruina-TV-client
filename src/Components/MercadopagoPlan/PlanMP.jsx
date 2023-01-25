import axios from 'axios';
import React, { useEffect } from 'react';
import { URL_API } from '../../middlewares/misc/config';

const PlanMP = () => {
    useEffect(() => {
        axios.get(`${URL_API}/mercadopago/plan`)
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    }, [])
    return(
        <div>MPPPPPPPPPPPPPPPPPP</div>
    )
}

export default PlanMP