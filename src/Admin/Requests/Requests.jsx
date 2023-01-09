import React from 'react'
import { Link } from 'react-router-dom'
import s from '../css/Dashboard.module.css'

const Requests = () => {
  return (
    <div>
      <Link to='/product/create'> <button className={s.crearProducto}>
        Crear Producto
      </button></Link>
      <Link to='/post/create'><button className={s.crearPost}>
        Crear Post
      </button></Link>
    </div>
  )
}

export default Requests