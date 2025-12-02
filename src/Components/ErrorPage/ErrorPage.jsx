import React from 'react';
import { Link } from 'react-router';
import ErrorImage from '../../assets/img/ERRORIMAGE.png';

const ErrorPage = () => {
  return (
    <div className=" font-bold flex flex-col justify-center text-center items-center w-screen h-screen ">
      <img src={ErrorImage} alt="Error Image" />
      <h1 className="text-5xl text-red-600">
        Oops! 404 Error - Page Not Found
      </h1>
      <p className="mt-5 text-2xl ">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="btn bg-primary text-text-secondary font-bold px-10 py-5 mt-5"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
