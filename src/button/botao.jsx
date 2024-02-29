import React from 'react'
import './botao.css'

function botao(props) { 
    return( 
        <button onClick={props.tarefa} className={props.class}>{props.children}</button>
    )
}

export default botao