import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaMotorcycle, FaTrashCan, FaUserCheck } from 'react-icons/fa6';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import toast from 'react-hot-toast';

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ['riders', 'pending'],
    queryFn: async () => {
      const res = await axiosSecure.get('/riders');
      return res.data;
    },
  });

  const handleApproval = rider => {
    const updateInfo = { status: 'approved', email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        toast.success('Rider Approved Successfully');
      }
    });
  };
  const handleRejection = rider => {
    const updateInfo = { status: 'rejected', email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        toast.success('Rider has been Rejected');
      }
    });
  };
  const handleDelete = id => {
    axiosSecure.delete(`/riders/${id}`).then(res => {
      console.log(res.data);
      if (res.data.deletedCount) {
        refetch();
        toast.success('Rider has been Deleted Successfully');
      }
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Pending Riders
      </h2>

      {/* Total Pay Card */}
      <div className="mb-10">
        <div className="flex items-center p-4 w-full bg-gray-200 rounded-lg">
          <div className="p-3 bg-gray-300 rounded-full shadow mr-4">
            <FaMotorcycle className="text-gray-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">
              Total Pending Riders
            </p>
            <p className="text-lg font-bold text-gray-800">{riders.length}</p>
          </div>
        </div>
      </div>

      {/* riders need to be approved Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th>#</th>
              <th>Name</th>
              <th>License</th>
              <th>Email</th>
              <th>Region</th>
              <th>District</th>
              <th>NID</th>
              <th>Phone</th>
              <th>Bike Model</th>
              <th>Work Status</th>
              <th>Application Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <td>{index + 1}</td>

                <td className="font-medium">{rider.name}</td>

                <td className="text-sm">{rider.license}</td>

                <td className="text-sm">{rider.email}</td>

                <td>{rider.riderRegion}</td>

                <td>{rider.riderDistrict}</td>

                <td className="text-sm text-gray-700">{rider.nid}</td>

                <td className="text-sm text-gray-700">{rider.phone}</td>

                <td className="font-medium">{rider.bikeModel}</td>

                <td className="font-medium">
                  {rider.workStatus === 'available' && (
                    <span className="btn btn-xs bg-green-600 text-white">
                      Available
                    </span>
                  )}
                  {rider.status === 'pending' && (
                    <span className="btn btn-xs bg-gray-300 text-black">
                      N/A
                    </span>
                  )}
                </td>

                <td>
                  {rider.status === 'pending' && (
                    <span className="btn btn-xs bg-yellow-500 text-white">
                      Pending
                    </span>
                  )}
                  {rider.status === 'approved' && (
                    <span className="btn btn-xs bg-green-600 text-white">
                      Approved
                    </span>
                  )}
                  {rider.status === 'rejected' && (
                    <span className="btn btn-xs bg-red-600 text-white">
                      Rejected
                    </span>
                  )}
                </td>
                <td className="text-sm text-gray-500 flex gap-x-2">
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-sm hover:bg-primary"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn btn-sm hover:bg-red-300"
                  >
                    <IoPersonRemoveSharp />
                  </button>
                  <button
                    onClick={() => handleDelete(rider._id)}
                    className="btn btn-sm hover:bg-red-600"
                  >
                    <FaTrashCan />
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

export default ApproveRiders;
