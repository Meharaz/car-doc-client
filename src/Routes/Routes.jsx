import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: 'book/:id',
        element: <PrivateRoute><BookService/></PrivateRoute>,
        loader: ({params}) => fetch(`https://car-doctor-server-2-nu.vercel.app/services/${params.id}`)
      },
      {
        path: 'bookings',
        element: <PrivateRoute><Bookings/></PrivateRoute>,
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'services',
        element: <Services/>,
      },
      
    ]
  },
]);


export default router;