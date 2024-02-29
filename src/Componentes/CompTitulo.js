import React from 'react'
import './CompTitulo.css'

function CompTitulo(props) { 
    return( 
        <h1 className={props.class}>{props.children}</h1>
    )
}

export default CompTitulo