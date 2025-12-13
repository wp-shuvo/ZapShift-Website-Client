import React from 'react';
import { MdOutlineTaskAlt } from 'react-icons/md';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const CompletedTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: parcels = [] } = useQuery({
    queryKey: ['parcels', user?.email, 'deliver-assigned'],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=parcel-delivered`
      );
      return res.data;
    },
  });
  // console.log(parcels);

  const calculatePayout = parcel => {
    if (parcel.senderDistrict === parcel.receiverDistrict) {
      return parcel.cost * 0.8;
    } else {
      return parcel.cost * 0.4;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Completed Tasks
      </h2>

      {/* Total Pay Card */}
      <div className="mb-10">
        <div className="flex items-center p-4 w-full bg-gray-200 rounded-lg">
          <div className="p-3 bg-gray-300 rounded-full shadow mr-4">
            <MdOutlineTaskAlt className="text-gray-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">
              Total Tasks Completed
            </p>
            <p className="text-lg font-bold text-gray-800">{parcels.length}</p>
          </div>
        </div>
      </div>

      {/*Tasks Completed Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th>#</th>
              <th>Parcel Name</th>
              <th>Parcel Weight</th>
              <th>Pikup Address</th>
              <th>Customer Email</th>
              <th>Parcel Cost</th>
              <th>Payout</th>
              <th>Action</th>
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
                <td className="font-semibold">৳ {parcel.cost}</td>
                <td className="font-semibold">৳ {calculatePayout(parcel)}</td>
                <td className="text-sm text-gray-500">
                  <button className="btn btn-primary btn-xs font-extrabold text-black">
                    Cash Out
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedTasks;
