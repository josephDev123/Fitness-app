
import { RouterProvider } from 'react-router-dom';
import {routes} from './client_routes';

function App() {
  const Rootroutes = routes
  return (
    <>
      <RouterProvider router={Rootroutes}/>
    </>
  );
}

export default App;
