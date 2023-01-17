import { Card } from '@mui/material'
import React from 'react'
import { Title } from 'react-admin'
import CardContent from '@mui/material/CardContent'
import Requests from '../Requests/Requests'
import RequestProfile from '../Requests/RequestProfile'

const Dashboard = () => {
  return (
    <div>
      <div className='navFixed' ></div>
      <div className='divProfile'>
        <div className='dashControlCont'>
          <Card>
            <Title title="Dashboard"/>
            <h1>Bienvenido a tu dashboard</h1>
            <CardContent>¿Qué quieres hacer?</CardContent>
          </Card>
            <ul>
              <li>
                <Requests />
                <RequestProfile />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Dashboard
