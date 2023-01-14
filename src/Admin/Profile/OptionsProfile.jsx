import { Card } from '@mui/material'
import React from 'react'
import { Title } from 'react-admin'
import CardContent from '@mui/material/CardContent'
import RequestProfile from '../Requests/RequestProfile'
import { useDispatch, useSelector } from 'react-redux';




const OptionsProfile = () => {
    const currentUser = useSelector(state=>state.currentUser)
    return (
        <div className='dashControlCont'>
        <Card>
          <Title title="Dashboard"/>
          <h1>Bienvenido a tu perfil {currentUser}</h1>
          <CardContent></CardContent>
        </Card>
          <ul>
            <li>
              <RequestProfile />
            </li>
          </ul>
        </div>
      )
}

export default OptionsProfile
