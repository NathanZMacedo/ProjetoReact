import { animeActions } from "../redux/Slice/AnimesSlice";

export const saveAnimesToDate = (animeFavoriteList) => {
    return async (dispatch) => {
        localStorage.setItems("animeList", animeFavoriteList)
        dispatch(animeActions.setAnimeList(animeFavoriteList))
    }
}