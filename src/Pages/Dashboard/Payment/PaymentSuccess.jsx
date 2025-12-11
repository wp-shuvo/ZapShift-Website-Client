import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { FiCheckCircle } from 'react-icons/fi';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get('session_id');
  console.log(sessionId);

  const axiousSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiousSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then(res => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiousSecure]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <FiCheckCircle className="text-lime-500" size={80} />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h2>

        {/* TransationId */}
        <p className="text-gray-600">
          Your TransationId:{' '}
          <span className="font-bold text-red-400">
            {paymentInfo.transactionId}
          </span>
        </p>

        {/* trackingId */}
        <p className="text-gray-600 mb-6">
          Your TransationId:{' '}
          <span className="font-bold text-red-400">
            {paymentInfo.trackingId}
          </span>
        </p>

        <p className="text-gray-600 mb-6">
          Your parcel payment has been completed successfully. Thank you for
          using our service!
        </p>

        {/* Button */}
        <Link
          to="/dashboard"
          className="inline-block bg-lime-300 text-black font-semibold px-6 py-3 rounded-lg hover:bg-lime-400 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
