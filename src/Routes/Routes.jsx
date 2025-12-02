import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import MainLayouts from '../Layouts/MainLayouts';
import Coverage from '../Pages/Coverage/Coverage';

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
    ],
  },
]);

export default Routes;
