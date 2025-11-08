import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Manga from './pages/Manga.jsx'
import Videojuego from './pages/Videojuego.jsx'
import Anime from './pages/Anime.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Manga />
      },
      {
        path: "Videojuego",
        element: <Videojuego />
      },
      {
        path:"Anime",
        element: <Anime/>
      },
      
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)

