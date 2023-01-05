import React from 'react'
import { Title } from 'react-admin'
import CardContent from '@mui/material/CardContent'
import { Card } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Card>
      <Title title='Home'/>
      <h1>Home</h1>
      <CardContent>This is the Home component</CardContent>
      <Link to={'/'}>Back to dashboard</Link>
    </Card>
  )
}

export default Home
