import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import { RiEBike2Fill, RiEBikeLine } from 'react-icons/ri';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { CloudHail } from 'lucide-react';
import toast from 'react-hot-toast';

const AssignRider = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);
  const axiosSecure = useAxiosSecure();
  const riderMordalRef = useRef();

  const { data: parcels = [], refetch: parcelRefetch } = useQuery({
    queryKey: ['parcels', 'pending-pickup'],
    queryFn: async () => {
      const res = await axiosSecure.get(
        '/parcels?deliveryStatus=pending-pickup'
      );
      return res.data;
    },
  });

  const { data: riders = [] } = useQuery({
    queryKey: ['riders', selectedParcel?.senderDistrict, 'available'],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=approved&riderDistrict=${selectedParcel?.senderDistrict}&workStatus=available`
      );
      return res.data;
    },
  });
  // console.log(riders);

  const openAssignRiderMordal = parcel => {
    setSelectedParcel(parcel);
    console.log(parcel.senderDistrict);
    riderMordalRef.current.showModal();
  };

  const handleAssignRider = rider => {
    const riderAssignInfo = {
      riderId: rider._id,
      riderName: rider.name,
      riderEmail: rider.email,
      parcelId: selectedParcel._id,
    };
    axiosSecure
      .patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
      .then(res => {
        console.log(res.data);
        parcelRefetch();
        riderMordalRef.current.close();
        if (res.data.modifiedCount) {
          toast.success('Parcel has been assigned to the rider successfully.');
        }
      });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Assign Rider</h2>

      {/* Total Pay Card */}
      <div className="mb-10">
        <div className="flex items-center p-4 w-full bg-gray-200 rounded-lg">
          <div className="p-3 bg-gray-300 rounded-full shadow mr-4">
            <RiEBike2Fill className="text-gray-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Parcels</p>
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
              <th>Amount</th>
              <th>Delivery Address</th>
              <th>Tracking Id</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td>{index + 1}</td>

                <td className="font-medium">{parcel.parcelName}</td>

                <td className="font-semibold">{parcel.parcelWeight} KG</td>

                <td>৳ {parcel.cost}</td>

                <td className="text-sm text-gray-600">
                  <div>
                    <div class="font-bold">
                      District:{' '}
                      <span className="font-normal">
                        {parcel.senderDistrict}
                      </span>
                    </div>
                    <div class="text-sm opacity-50">{parcel.senderAddress}</div>
                  </div>
                </td>

                <td className="text-sm text-gray-500">
                  {parcel.trackingId ? parcel.trackingId : 'N/A'}
                </td>
                <td className="text-sm text-gray-500">
                  {new Date(parcel.createdAt).toLocaleString()}
                </td>
                <td className="text-sm ">
                  <button
                    onClick={() => openAssignRiderMordal(parcel)}
                    className="btn btn-sm btn-primary text-black"
                  >
                    Find Rider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog
        ref={riderMordalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <div>
            <div className="flex items-center p-4 w-full mb-3.5 bg-gray-200 rounded-lg">
              <div className="p-3 bg-gray-300 rounded-full shadow mr-4">
                <RiEBikeLine className="text-gray-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Active Riders
                </p>
                <p className="text-lg font-bold text-gray-800">
                  {riders.length}
                </p>
              </div>
            </div>
            {/* Active Rider Table */}
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th>#</th>
                    <th>Name</th>
                    <th>Emain</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {riders.map((rider, index) => (
                    <tr key={rider._id}>
                      <td>{index + 1}</td>

                      <td className="font-medium text-sm">{rider.name}</td>

                      <td className="font-semibold text-sm">{rider.email}</td>
                      <td>
                        <button
                          onClick={() => handleAssignRider(rider)}
                          className="btn btn-sm btn-primary text-black"
                        >
                          Assign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRider;
