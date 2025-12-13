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
import ApproveRiders from '../Pages/Dashboard/ApproveRider/ApproveRiders';
import UserManagement from '../Pages/Dashboard/UserManagement/UserManagement';
import AdminRoute from './AdminRoute';
import AssignRider from '../Pages/Dashboard/AssignRider/AssignRider';
import AskFAQ from '../Pages/Home/FAQ/AskFAQ';
import AssignedTasks from '../Pages/Dashboard/AssignedTasks/AssignedTasks';
import RiderRoute from './RiderRoute';
import CompletedTasks from '../Pages/Dashboard/CompletedTasks/CompletedTasks';
import Blog from '../Pages/Blog/Blog';

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
        path: 'coverage',
        element: <Coverage />,
        loader: () => fetch('/warehouses.json').then(res => res.json()),
      },
      {
        path: 'aboutUs',
        element: <AboutUs />,
      },
      {
        path: 'askFAQ',
        element: <AskFAQ />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'ContactUs',
        element: <ContactUs />,
      },
      {
        path: 'be-a-rider',
        element: (
          <PrivateRoutes>
            <Rider />
          </PrivateRoutes>
        ),
        loader: () => fetch('/warehouses.json').then(res => res.json()),
      },
      {
        path: 'SendParcel',
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
        loader: () => fetch('/warehouses.json').then(res => res.json()),
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'forget-password',
        element: <ForgetPassword />,
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
      // rider related routes
      {
        path: 'assignedTasks',
        element: (
          <RiderRoute>
            <AssignedTasks />
          </RiderRoute>
        ),
      },
      {
        path: 'completedTasks',
        element: (
          <RiderRoute>
            <CompletedTasks />
          </RiderRoute>
        ),
      },
      // admin related routes
      {
        path: 'assignRider',
        element: (
          <AdminRoute>
            <AssignRider />
          </AdminRoute>
        ),
      },
      {
        path: 'approve-rider',
        element: (
          <AdminRoute>
            <ApproveRiders />
          </AdminRoute>
        ),
      },
      {
        path: 'user-management',
        element: (
          <AdminRoute>
            <UserManagement />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Routes;
