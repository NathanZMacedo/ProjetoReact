import errorPage from "./pages/ErrorPages/errorPage";
import HomePage from "./pages/HomePage/HomePage";
import AnimePage from "../src/pages/AnimePages/AnimePage"
import Layout from "./pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Favorito from "./components/Favoritos/Favorito";
import NotesPage from "./pages/NotesPage/NotesPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/anime",
                element: <AnimePage></AnimePage>
            },
            {
                path: "/Favorito",
                element: <Favorito></Favorito>,
                loader: async() => {
                    return fetch(`https://api.jikan.moe/v4/anime?q=pokemon`)
                }
            },
            {
                path: "/notes",
                element: <NotesPage></NotesPage>
            }

        ], errorElement: <errorPage></errorPage>
    }
])