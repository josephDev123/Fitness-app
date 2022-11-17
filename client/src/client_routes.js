import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'
import Error from "./components/Error";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<Error/>

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