import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import MainLayouts from '../Layouts/MainLayouts';
import Coverage from '../Pages/Coverage/Coverage';
import AboutUs from '../Pages/AboutUs/AboutUs';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Auth/Login/Login';
import Register from '../Pages/Auth/Register/Register';
import ForgetPassword from '../Pages/Auth/ForgetPassword/ForgetPassword';
import Rider from '../Pages/Rider/Rider';
import PrivateRoutes from './PrivateRoutes';
import SendParcel from '../Pages/SendParcel/SendParcel';
import DashboardLayout from '../Layouts/DashboardLayout';
import MyParcel from '../Pages/Dashboard/MyParcel/MyParcel';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentSuccess from '../Pages/Dashboard/Payment/PaymentSuccess';
import PaymentCancel from '../Pages/Dashboard/Payment/PaymentCancel';
import ContactUs from '../Pages/ContactUs/ContactUs';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: (
      <div className="w-full h-full flex justify-center mt-2.5">
        <span className="loading loading-dots content-center loading-xl"></span>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/coverage',
        element: <Coverage />,
        loader: () => fetch('./warehouses.json').then(res => res.json()),
      },
      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/ContactUs',
        element: <ContactUs />,
      },
      {
        path: '/be-a-rider',
        element: (
          <PrivateRoutes>
            <Rider />
          </PrivateRoutes>
        ),
      },
      {
        path: '/SendParcel',
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
        loader: () => fetch('./warehouses.json').then(res => res.json()),
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/forget-password',
        Component: ForgetPassword,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: 'my-parcels',
        element: <MyParcel />,
      },
      {
        path: 'payment/:parcelId',
        element: <Payment />,
      },
      {
        path: 'payment-success',
        element: <PaymentSuccess />,
      },
      {
        path: 'payment-cancelled',
        element: <PaymentCancel />,
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default Routes;
