import React, { useState } from 'react'
import useApiAnimeData from '../../hooks/getAPIDATA';

function AnimeComponent() {
    const [animeName, setAnimeName] = useState("one punch");
    const [animeDigitado, setAnimeDigitado] = useState("one punch");
    const {animeData, loading, error} = useApiAnimeData(animeName);
    
    const hadleInputChange=(e)=>{
        setAnimeDigitado(e.target.value);
    }

    function BuscarOAnimne(){
        setAnimeName(animeDigitado)
    }
  return (
    <div>
        <input type="text" 
        placeholder='Enter anime name' 
        value={animeDigitado}
        onChange={hadleInputChange}/>

        <button onClick={()=>BuscarOAnimne()}>Pesquisar</button>
        {loading && <div> Loading...</div> }
        {error && <div>Error:{error} </div> }

        {Array.isArray(animeData)?(
            <div>
                {animeData.map((a)=>(<h1 key={a.id}>{a.title} {a.image} </h1>))}
            </div>
        ) : (animeData && <div> Sem nenhum anime</div> )
        }

    </div>
  )
}

export default AnimeComponent