import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdOutlinePayments } from 'react-icons/md';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch payment history
  const { data: payments = [] } = useQuery({
    queryKey: ['payment', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  console.log(payments);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Payment History
      </h2>

      {/* Total Pay Card */}
      <div className="mb-10">
        <div className="flex items-center p-4 w-full bg-gray-200 rounded-lg">
          <div className="p-3 bg-gray-300 rounded-full shadow mr-4">
            <MdOutlinePayments className="text-gray-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Payments</p>
            <p className="text-lg font-bold text-gray-800">{payments.length}</p>
          </div>
        </div>
      </div>

      {/* Payment History Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th>#</th>
              <th>Parcel Name</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Transaction ID</th>
              <th>Paid At</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((pay, index) => (
              <tr key={pay._id}>
                <td>{index + 1}</td>

                <td className="font-medium">{pay.parcelName}</td>

                <td className="font-semibold">৳ {pay.amount}</td>

                <td>
                  {pay.paymentStatus === 'paid' ? (
                    <span className="btn btn-xs font-bold bg-primary">
                      Paid
                    </span>
                  ) : (
                    <span className="btn btn-xs btn-warning">Unpaid</span>
                  )}
                </td>

                <td className="text-sm text-gray-600">{pay.transactionId}</td>

                <td className="text-sm text-gray-500">
                  {new Date(pay.paidAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
