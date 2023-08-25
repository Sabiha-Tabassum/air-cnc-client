import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUP";
import Home from "../Pages/Home/Home";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import AddRoom from "../Components/Dashboard/AddRoom";
import { getRoom } from "../api/room";
import MyBookings from "../Components/Dashboard/MyBookings";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },

        {
          path: 'login',
          element: <Login></Login>
        },

        {
          path: 'signup',
          element: <SignUp></SignUp>
        },

        {
          path: '/room/:id',
          element: <RoomDetails></RoomDetails>,
          loader: ({params})=>getRoom(params.id)
        }
      ]
    },
    {
          path: 'dashboard',
          element: <DashboardLayout></DashboardLayout>,
          children: [
            {
              path: 'dashboard/add-room',
              element: <AddRoom></AddRoom>
            },

            {
              path: 'dashboard/my-bookings',
              element: <MyBookings></MyBookings>
            }
          ]
    }
  ]);