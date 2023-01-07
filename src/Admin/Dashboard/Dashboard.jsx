import { Card } from '@mui/material'
import React from 'react'
import { Title } from 'react-admin'
import CardContent from '@mui/material/CardContent'

const Dashboard = () => {
  return (
    <Card>
      <Title title="Dashboard"/>
      <h1>Welcome to the DashBoard</h1>
      <CardContent>This is the DashBoard</CardContent>
      </Card>
  )
}

export default Dashboard
