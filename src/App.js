import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

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
      <h1> Use Effect foi chamado {useEffectCounter} vezes </h1>
      {logado ? <p> Logado </p> : <p>Deslogado</p>}
      <button onClick={Logar}>Logar</button>
      <button onClick={Deslogar}> Deslogar </button>
    </div>
  );
}

export default App;
