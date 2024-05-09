import React from 'react'
import { Link } from 'react-router-dom'

function errorPage() {
  return (
    <div>
        <h1> Página não foi encontrada </h1>
        <h4> <Link to='/'> Voltar para página inicial </Link> </h4>
    </div>
  )
}

export default errorPage