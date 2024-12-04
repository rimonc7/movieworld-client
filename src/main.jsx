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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/register",
    element: <Register></Register>
  },
  {
    path:"/login",
    element:<Login></Login>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
