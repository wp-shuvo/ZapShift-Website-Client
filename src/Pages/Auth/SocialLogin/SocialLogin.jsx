import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const SocialLogin = () => {
  const { singInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then(result => {
        console.log(result.user);
        toast.success('User Logged In Successfully');
        navigate(location.state || '/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Login with google
      </button>
    </div>
  );
};

export default SocialLogin;
