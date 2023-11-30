import React from 'react'
import {Link} from "react-router-dom";

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenido al Blog con React</h1>
      <p>Blog desarrollado con el MERN stack</p>
      <Link to="/articulos" className='button'>ver los articulos</Link>
    </div>
  )
}
