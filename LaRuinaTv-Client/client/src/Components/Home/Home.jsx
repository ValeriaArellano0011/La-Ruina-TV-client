import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>
        <h1>Crea y comparte contenido multimedia</h1>
      </div>
      <div>
      <Link to={'/browser'}><button>Iniciar sesion</button></Link>
      <Link to={'/browser'}><button>Crear cuenta</button></Link>
        
      </div>

    </div>
  )
}

export default Home
