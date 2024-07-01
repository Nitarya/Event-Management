import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import {routes} from "./routes/routes"


const router = createBrowserRouter(routes)
function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App