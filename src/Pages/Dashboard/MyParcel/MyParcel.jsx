import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FiPackage } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcel = () => {
  const { user } = useAuth();
  const axiousSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['myParcels', user?.email],
    queryFn: async () => {
      const res = await axiousSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  console.log(parcels);

  const handleParcelDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiousSecure.delete(`/parcels/${id}`).then(res => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // reload the data form the ui
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your parcel request has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          All Of My Parcels
        </h2>
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center p-4 bg-gray-200 rounded-lg flex-1 min-w-[120px]">
            <div className="p-3 bg-gray-300 rounded-full shadow mr-4">
              <FiPackage className="text-gray-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Parcel</p>
              <p className="text-lg font-bold text-gray-800">
                {parcels.length}
              </p>
            </div>
          </div>
        </div>
        {/* Parcel Data table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th>#</th>
                <th>Parcel Name</th>
                <th>Parcel Type</th>
                <th>Tracking Id</th>
                <th>Delivery Status</th>
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  <td>{parcel.parcelName}</td>
                  <td>{parcel.parcelType}</td>
                  <td>{parcel.trackingId}</td>
                  <td>{parcel.deliveryStatus}</td>
                  <td>৳ {parcel.cost}</td>
                  <td>
                    {parcel.paymentStatus === 'paid' ? (
                      <span className="btn btn-soft btn-success">Paid</span>
                    ) : (
                      <Link to={`/dashboard/payment/${parcel._id}`}>
                        <span className="btn btn-soft btn-warning">Pay</span>
                      </Link>
                    )}
                  </td>
                  <td className="flex gap-x-3">
                    <button className="btn btn-outline btn-success">
                      Edit
                    </button>
                    <button
                      onClick={() => handleParcelDelete(parcel._id)}
                      className="btn btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyParcel;
