import React from 'react'
import Requests from '../Requests/Requests'
import CardContent from '@mui/material/CardContent'
import RequestProfile from '../RequestProfile/RequestProfile'
import { Card } from '@mui/material'
import { Title } from 'react-admin'

const Dashboard = () => {
  return (
    <div>
      <div className='navFixed'/>
      <div className='divProfile'>
        <div className='dashControlCont'>
          <Card>
            <Title title="Dashboard"/>
            <h1>Bienvenido a tu dashboard</h1>
            <CardContent>¿Qué quieres hacer?</CardContent>
          </Card>
          <ul>
            <li>
              <Requests/>
              <RequestProfile/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
