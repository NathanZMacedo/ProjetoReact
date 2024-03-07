import { useEffect, useState } from 'react'
import axios from 'axios';

function useApiAnimeData(anime) {
    const [animeData, setAnimeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fecthData(){
            try{
                setLoading(true);
                const searchInput = anime.toLowerCase();
                const formattedSearch = searchInput.replace(/\s+/g,"-");
                const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${formattedSearch}`)

                if(response.status === 200){
                    setAnimeData(response.data.data);
                } else {
                    setError("error anime data");
                }
            }catch(err){
                setError(err.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fecthData();
    },[anime]);

  return {animeData,loading,error}
}

export default useApiAnimeData