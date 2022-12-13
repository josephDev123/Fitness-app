import { createBrowserRouter } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/Login';
import Register from './components/Register'
import Error from "./components/Error";
import WelcomePage from  './components/pages/Welcome'
import Dashboard from './components/Layouts/Dashboard'
import Trending from  './components/pages/Trending'


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<Error/>
    },

     {
        path:'admin/dashboard',
        element:<Dashboard/>,
        errorElement:<Error/>,
        children:[{
            index:true,
            element:<Trending/>
        }]
    },

    {
        path:'/login',
        element:<Login/>,
        errorElement:<Error/>
    },

    {
        path:'/register',
        element:<Register/>,
        errorElement:<Error/>
    }
])