import React from 'react'
import { Title } from 'react-admin'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom'
import Home from './Home'

const Cards = () => {
  

    return (
    <Card>
      <Title title='Card'/>
      <h1>Card</h1>
      <Link to={'/home'}>Click Here</Link>
      <CardContent>This is the Card component</CardContent>

    </Card>
  )
}

export default Cards
