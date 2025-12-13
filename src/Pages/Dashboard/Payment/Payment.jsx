import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center mt-10">
        <span className="loading loading-dots content-center loading-xl"></span>
      </div>
    );
  }

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  console.log(parcel.parcelName);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Parcel Payment</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Parcel Details
        </h3>
        <ul className="text-gray-600 space-y-1">
          <li>
            <span className="font-semibold">Name:</span> {parcel.parcelName}
          </li>
          <li>
            <span className="font-semibold">Type:</span> {parcel.parcelType}
          </li>
          <li>
            <span className="font-semibold">Weight:</span> {parcel.parcelWeight}{' '}
            kg
          </li>
          <li>
            <span className="font-semibold">Cost:</span> ${parcel.cost}
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Sender Info
        </h3>
        <ul className="text-gray-600 space-y-1">
          <li>
            <span className="font-semibold">Name:</span> {parcel.senderName}
          </li>
          <li>
            <span className="font-semibold">Email:</span> {parcel.senderEmail}
          </li>
          <li>
            <span className="font-semibold">Phone:</span> {parcel.senderPhone}
          </li>
          <li>
            <span className="font-semibold">Address:</span>{' '}
            {parcel.senderAddress}, {parcel.senderDistrict},{' '}
            {parcel.senderRegion}
          </li>
          {parcel.pickupInstruction && (
            <li>
              <span className="font-semibold">Pickup Instruction:</span>{' '}
              {parcel.pickupInstruction}
            </li>
          )}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Receiver Info
        </h3>
        <ul className="text-gray-600 space-y-1">
          <li>
            <span className="font-semibold">Name:</span> {parcel.receiverName}
          </li>
          <li>
            <span className="font-semibold">Email:</span> {parcel.receiverEmail}
          </li>
          <li>
            <span className="font-semibold">Phone:</span> {parcel.receiverPhone}
          </li>
          <li>
            <span className="font-semibold">Address:</span>{' '}
            {parcel.receiverAddress}, {parcel.receiverDistrict},{' '}
            {parcel.receiverRegion}
          </li>
          {parcel.deliveryInstruction && (
            <li>
              <span className="font-semibold">Delivery Instruction:</span>{' '}
              {parcel.deliveryInstruction}
            </li>
          )}
        </ul>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handlePayment}
          className="bg-lime-300 text-black font-semibold px-6 py-3 rounded hover:bg-lime-400 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
