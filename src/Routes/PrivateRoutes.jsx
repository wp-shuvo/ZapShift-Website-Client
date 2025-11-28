import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className=" w-full h-full flex justify-center mt-2.5 ">
        <span className="loading loading-dots content-center loading-xl"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
