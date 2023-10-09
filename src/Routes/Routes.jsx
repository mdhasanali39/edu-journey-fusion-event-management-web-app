import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Speakers from "../pages/Speakers/Speakers";
import SpecialTicket from "../pages/SpecialTicket/SpecialTicket";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service/:name',
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
                loader: () => fetch('/services_data.json')
            },
            {
                path: '/speakers',
                element: <PrivateRoute>
                    <Speakers></Speakers>
                </PrivateRoute>,
                loader: ()=> fetch('/speakers_data.json'),
            },
            {
                path: '/specialTicket',
                element: <PrivateRoute>
                    <SpecialTicket></SpecialTicket>
                </PrivateRoute>
            }
        ]
    }
])
export default router;