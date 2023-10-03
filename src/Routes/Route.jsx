import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/home/Home";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Root></Root>,
     children: [
      {
         path: "/",
         element: <Home></Home>
      }
     ]
   },
 ]);
 

 export default router;