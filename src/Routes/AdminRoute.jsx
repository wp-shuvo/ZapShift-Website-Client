import React from 'react';
import useRole from '../Hooks/useRole';
import useAuth from '../Hooks/useAuth';
import Forbidden from '../Components/Forbidden/Forbidden';

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoding } = useRole();

  if (loading || roleLoding) {
    return (
      <div className=" w-full h-full flex justify-center mt-2.5 ">
        <span className="loading loading-dots content-center loading-xl"></span>
      </div>
    );
  }
  if (role !== 'admin') {
    return <Forbidden></Forbidden>;
  }
  return children;
};

export default AdminRoute;
