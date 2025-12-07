import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Routes from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
    <Toaster position="top-right" reverseOrder={false} />
  </StrictMode>
);
