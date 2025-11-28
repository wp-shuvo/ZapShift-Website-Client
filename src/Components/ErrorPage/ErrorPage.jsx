import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className=" font-bold flex flex-col justify-center text-center items-center w-screen h-screen ">
      <img src="" alt="" />

      <h1 className="text-5xl text-red-600">
        Oops! This AI model doesn’t exist.
      </h1>
      <p className="mt-5 text-2xl ">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-white font-semibold px-10 py-5 mt-5"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
