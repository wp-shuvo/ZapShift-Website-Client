import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import { FaTasks } from 'react-icons/fa';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { GiCrossMark } from 'react-icons/gi';
import toast from 'react-hot-toast';

const AssignedTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['parcels', user?.email, 'deliver-assigned'],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=deliver-assigned`
      );
      return res.data;
    },
  });
  // console.log(user.email);
  // console.log(parcels);

  const handleAcceptDelivery = parcel => {
    const statusInfo = {
      deliveryStatus: 'rider-ariving',
    };
    axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo).then(res => {
      refetch();
      if (res.data.modifiedCount) {
        toast.success('Parcel Accept Successfully');
      }
    });
  };

  const handleParcelPickup = parcel => {
    const statusInfo = {
      deliveryStatus: 'parcel-pickup',
    };
    axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo).then(res => {
      refetch();
      if (res.data.modifiedCount) {
        toast.success('Parcel Pickup Successfully');
      }
    });
  };

  const handleParcelDelivered = parcel => {
    const statusInfo = {
      deliveryStatus: 'parcel-delivered',
      riderId: parcel.riderId,
    };
    axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo).then(res => {
      refetch();
      if (res.data.modifiedCount) {
        toast.success('Parcel Delivered Successfully');
      }
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Parcels Panding Pickup
      </h2>

      {/* Total Pay Card */}
      <div className="mb-10">
        <div className="flex items-center p-4 w-full bg-gray-200 rounded-lg">
          <div className="p-3 bg-gray-300 rounded-full shadow mr-4">
            <FaTasks className="text-gray-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">
              Total Parcel Assigned
            </p>
            <p className="text-lg font-bold text-gray-800">{parcels.length}</p>
          </div>
        </div>
      </div>

      {/* Assign Rider Table */}

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th>#</th>
              <th>Parcel Name</th>
              <th>Parcel Weight</th>
              <th>Pikup Address</th>
              <th>Customer Email</th>
              <th>Contuct Number</th>
              <th>Confirm</th>
              <th>Other Action</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td>{index + 1}</td>

                <td className="font-medium">{parcel.parcelName}</td>

                <td className="font-semibold">{parcel.parcelWeight} KG</td>

                <td className="text-sm text-gray-600">
                  <div>
                    <div className="font-bold">
                      District:{' '}
                      <span className="font-normal">
                        {parcel.senderDistrict}
                      </span>
                    </div>
                    <div className="text-sm opacity-50">
                      {parcel.senderAddress}
                    </div>
                  </div>
                </td>
                <td className="text-sm text-gray-500">{parcel.senderEmail}</td>
                <td className="text-sm text-gray-500">{parcel.senderPhone}</td>
                <td className="text-sm flex gap-x-2.5 ">
                  {parcel.deliveryStatus === 'deliver-assigned' ? (
                    <>
                      <button
                        onClick={() => handleAcceptDelivery(parcel)}
                        className="btn btn-sm btn-success"
                      >
                        <IoCheckmarkOutline />
                      </button>
                      <button className="btn btn-sm btn-error">
                        <GiCrossMark />
                      </button>
                    </>
                  ) : (
                    <button className="btn btn-sm btn-success">
                      <IoCheckmarkOutline /> Accepted
                    </button>
                  )}
                </td>
                <td>
                  {parcel.deliveryStatus === 'rider-ariving' && (
                    <button
                      onClick={() => handleParcelPickup(parcel)}
                      className="btn btn-sm btn-primary text-black"
                    >
                      Pickup
                    </button>
                  )}
                  {parcel.deliveryStatus === 'parcel-pickup' && (
                    <button
                      onClick={() => handleParcelDelivered(parcel)}
                      className="btn btn-sm btn-primary text-black"
                    >
                      Delivered
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedTasks;
