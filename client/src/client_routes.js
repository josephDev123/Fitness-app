import { createBrowserRouter } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/Login';
import Register from './components/Register'
import Error from "./components/Error";
import IndexPage from  './components/pages/IndexPage'
import Dashboard from './components/Layouts/Dashboard'
import Training from  './components/pages/Training';
// import IndexChart from "./components/IndexChart";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<Error/>
    },

     {
        path:'admin',
        element:<Dashboard/>,
        errorElement:<Error/>,
        children:[{
            index:true,
            element:<IndexPage/>
        },  
        {
            path:'training',
            element:<Training/>,
            errorElement:<Error/>,
        },
    ]
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