import { Card } from '@mui/material'
import React from 'react'
import { Title } from 'react-admin'
import CardContent from '@mui/material/CardContent'
import Requests from '../Requests/Requests'

const Dashboard = () => {
  return (
    <div className='dashControlCont'>
    <Card>
      <Title title="Dashboard"/>
      <h1>Bienvenido a tu dashboard</h1>
      <CardContent>¿Qué quieres hacer?</CardContent>
    </Card>
      <ul>
        <li>
          <Requests />
        </li>
      </ul>
    </div>
  )
}

export default Dashboard
