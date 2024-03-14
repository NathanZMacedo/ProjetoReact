import React, { useState } from 'react'
import useApiAnimeData from '../../hooks/getAPIDATA';
import AnimeCard from '../AnimeCard/AnimeCard'

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
            <div className='anime-cards'>
                {animeData.map((a)=>(
                    <AnimeCard key={a.mal_id}{...a} ></AnimeCard>
                ))}
            </div>
        ) : (animeData && <div> Sem nenhum anime</div> )
        }

    </div>
  )
}

export default AnimeComponent