import { animeActions } from "../redux/Slice/AnimesSlice";

export const getAnimesFromStorage = () => {
    return async (dispatch) => {
        const animes = localStorage.getItems("animelist");
        dispatch(animeActions.setAnimeList(animes))
    }
}