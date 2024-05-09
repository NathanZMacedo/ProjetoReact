import { createSlice } from "@reduxjs/toolkit";


const AnimesSlice = createSlice({
    name: "user",
    initialState: {
        animes: [],
        totalQuantity: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },
        addAnime(state, action) {
            const newAnime = action.payload;
            const existingItem = state.items.find((item) => item.id === newAnime.mal_id);
            if (!existingItem) {
                state.totalQuantity++;          //++ = somando 1             
                state.animes.push(newAnime);
            }
        },
        removeAnime(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem) {
                state.anime.filter((anime) => anime.mal_id !== id);
            }
        },
        setAnimeList(state,action) {
            const animeList = action.payload;
            state.animes = animeList;
        }
    }
})

export const animeActions = AnimesSlice.actions;
export default AnimesSlice;