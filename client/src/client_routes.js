import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Error from "./components/Error";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<Error/>

    }
])