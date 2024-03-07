import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import FunctionSimples from './Exemplos/FunctionSimples';
import FunctionDupla from './Exemplos/FunctionDupla';
import botao from './button/botao';
import CompTitulo from './Componentes/CompTitulo';

function AppExemplo() {

  // variaveis
  // const [variavel, functionParaMudarValorDaVariavel] = useState("valor inicial");
  const [useEffectCounter,SetUseEffectCounter] = useState(0);
  const [logado,setlogado] = useState(false);

  useEffect(()=>{
    console.log("useEffect chamado")
    SetUseEffectCounter(useEffectCounter + 1)
  }, [logado])

  const Logar = () => {
    setlogado(true);
  }

  const Deslogar = () => {
    setlogado(false);
  }

  return (
    <div className="App">
      <CompTitulo class="CompTitulo blue">Titulo</CompTitulo>

      <h1> Use Effect foi chamado {useEffectCounter} vezes </h1>
      {logado ? <p> Logado </p> : <p> Deslogado </p>}
      <botao tarefa={Logar} class="botao red">Logar</botao>
      <botao tarefa={Deslogar} class="botao purple">Deslogar</botao>
    </div>
  );
}

export default AppExemplo;
