import { Navigate } from "react-router-dom"
import { Contatos } from "../pages/Contatos"
import { Home } from "../pages/Home"
import { Post } from "../pages/Post"
import { Sobre } from "../pages/Sobre"


   export const routes = [
        {
            path: "/post",
            element: <Post />
        },
        {
            path: "/contatos",
            element: <Contatos />
        },
        {
            path: "/sobre",
            element: <Sobre />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: '/', 
            element: <Navigate to="/home" />
        }
    ]
