import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './LayOut/HomeLayOut/Home';
import AuthProvider from './Provider/AuthProvider';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import AuthLayOut from './LayOut/AuthLayOut/AuthLayOut';
import AddMovie from './Components/Pages/AddMovie';
import MyFavorites from './Components/Pages/MyFavorites';
import PrivateRoutes from './PrivateRoutes';
import Root from './LayOut/HomeLayOut/Root';
import NotFound from './Components/Pages/NotFound';
import MovieDetails from './Components/Pages/MovieDetails';
import AllMovies from './Components/Pages/AllMovies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayOut></AuthLayOut>,
    children: [
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "login",
        element: <Login></Login>
      }
    ]
  },
  {
    path: "/addMovie",
    element: <PrivateRoutes><AddMovie></AddMovie></PrivateRoutes>
  },
  {
    path: "/myFavorites",
    element: <PrivateRoutes><MyFavorites></MyFavorites></PrivateRoutes>
  },
  {
    path: "/movies/:id",
    element: <PrivateRoutes><MovieDetails></MovieDetails></PrivateRoutes>,
    loader:({params})=>fetch(`http://localhost:5000/movies/${params.id}`)
  },
  {
    path:"/allMovies",
    element:<AllMovies></AllMovies>,
    loader:()=>fetch("http://localhost:5000/movies/")
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
