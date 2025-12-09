import React from 'react';
import { Link } from 'react-router';
import { FiXCircle } from 'react-icons/fi';

const PaymentCancel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
        {/* Cancel Icon */}
        <div className="flex justify-center mb-4">
          <FiXCircle className="text-red-500" size={80} />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Cancelled
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          Your payment has been cancelled. You can try again or return to the
          dashboard.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            to="/dashboard/my-parcels"
            className="w-full bg-lime-300 text-black font-semibold px-6 py-3 rounded-lg hover:bg-lime-400 transition"
          >
            Try Again
          </Link>

          <Link
            to="/dashboard"
            className="w-full bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
