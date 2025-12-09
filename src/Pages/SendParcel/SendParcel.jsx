import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const SendParcel = () => {
  const { register, handleSubmit, control } = useForm();
  const [parcelType, setParcelType] = useState('Document');
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const serviceCenters = useLoaderData();

  const regionsDupli = serviceCenters.map(center => center.region);
  const regions = [...new Set(regionsDupli)];
  const senderRegion = useWatch({
    control,
    name: 'senderRegion',
  });

  const receiverRegion = useWatch({
    control,
    name: 'receiverRegion',
  });

  const districtByRegion = region => {
    const regionDistrict = serviceCenters.filter(
      center => center.region === region
    );
    const districts = regionDistrict.map(center => center.district);
    return districts;
  };

  const handleSendParcel = data => {
    console.log(data);
    const isDocument = parcelType === 'Document';
    const isSmaeDistrict = data.senderDistrict === data.receiverDistrict;

    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;

    if (isDocument) {
      cost = isSmaeDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSmaeDistrict ? 110 : 150;
      } else {
        const minCharge = isSmaeDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;

        const extraCharge = isSmaeDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }
    console.log('The total shipping cost is', cost);
    // toast.success(`The total shipping cost is $${cost}`);
    data.cost = cost;
    Swal.fire({
      title: 'Please Confirm The Cost?',
      text: `The total shipping cost is ${cost} TK`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'I agree',
    }).then(result => {
      if (result.isConfirmed) {
        //save the data to the server
        axiosSecure.post('/parcels', data).then(res => {
          console.log('after saving parcel', res.data);
          if (res.data.insertedId) {
            navigate('/dashboard/my-parcels');
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Parcel Has Created. Please Pay',
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });

        // Swal.fire({
        //   title: 'Confirmed!',
        //   text: 'Your parcel booking has been confirmed.',
        //   icon: 'success',
        // });
      }
    });
  };

  return (
    <div className="bg-white p-10 md:p-16">
      <h1 className="text-3xl font-bold mb-2">Send A Parcel</h1>
      <p className="text-gray-600 mb-6 font-bold">Enter your parcel details</p>

      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* Parcel Type */}
        <div className="flex items-center gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer font-bold">
            <input
              type="radio"
              name="parcelType"
              required
              {...register('parcelType')}
              value="Document"
              checked={parcelType === 'Document'}
              onChange={() => setParcelType('Document')}
              className="form-radio text-lime-400 "
            />
            Document
          </label>
          <label className="flex items-center gap-2 cursor-pointer font-bold">
            <input
              type="radio"
              name="parcelType"
              {...register('parcelType')}
              value="Not-Document"
              checked={parcelType === 'Not-Document'}
              onChange={() => setParcelType('Not-Document')}
              className="form-radio text-lime-400 "
            />
            Not-Document
          </label>
        </div>

        {/* Parcel Name & Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-gray-700 font-bold">Parcel Name</label>
            <input
              type="text"
              required
              {...register('parcelName')}
              placeholder="Parcel Name"
              className="input input-bordered w-full bg-white"
            />
          </div>
          <div>
            <label className="text-gray-700 font-bold">
              Parcel Weight (KG)
            </label>
            <input
              type="number"
              required
              {...register('parcelWeight')}
              placeholder="Parcel Weight (KG)"
              className="input input-bordered w-full bg-white"
            />
          </div>
        </div>

        {/* Sender & Receiver Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Sender */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800">Sender Details</h2>
            <div>
              <label className="text-gray-700 font-bold">Sender Name</label>
              <input
                type="text"
                required
                defaultValue={user?.displayName}
                {...register('senderName')}
                placeholder="Sender Name"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">Sender Email</label>
              <input
                type="email"
                required
                defaultValue={user?.email}
                {...register('senderEmail')}
                placeholder="Sender Email"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">Address</label>
              <input
                type="text"
                required
                {...register('senderAddress')}
                placeholder="Address"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">Sender Phone No</label>
              <input
                type="text"
                required
                {...register('senderPhone')}
                placeholder="Sender Phone No"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">Region</label>
              <select
                required
                className="select select-bordered w-full bg-white"
                {...register('senderRegion')}
              >
                <option>Select your Region</option>
                {regions.map((region, idx) => (
                  <option key={idx} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Sender Districts
              </label>
              <select
                required
                className="select select-bordered w-full bg-white"
                {...register('senderDistrict')}
              >
                <option>Select your Districts</option>
                {districtByRegion(senderRegion).map((region, idx) => (
                  <option key={idx} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Pickup Instruction
              </label>
              <textarea
                {...register('pickupInstruction')}
                placeholder="Pickup Instruction"
                className="textarea textarea-bordered w-full bg-white"
              />
            </div>
          </div>

          {/* Receiver */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800">
              Receiver Details
            </h2>
            <div>
              <label className="text-gray-700 font-bold">Receiver Name</label>
              <input
                type="text"
                required
                {...register('receiverName')}
                placeholder="Receiver Name"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">Receiver Email</label>
              <input
                type="email"
                required
                {...register('receiverEmail')}
                placeholder="Receiver Email"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">Address</label>
              <input
                type="text"
                required
                {...register('receiverAddress')}
                placeholder="Address"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Receiver Contact No
              </label>
              <input
                type="text"
                required
                {...register('receiverPhone')}
                placeholder="Receiver Contact No"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">Receiver Region</label>
              <select
                required
                className="select select-bordered w-full bg-white"
                {...register('receiverRegion')}
              >
                <option>Select your Region</option>
                {regions.map((region, idx) => (
                  <option key={idx}>{region}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Receiver Districts
              </label>
              <select
                required
                className="select select-bordered w-full bg-white"
                {...register('receiverDistrict')}
              >
                <option>Select your Districts</option>
                {districtByRegion(receiverRegion).map((region, idx) => (
                  <option key={idx} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Delivery Instruction
              </label>
              <textarea
                {...register('deliveryInstruction')}
                placeholder="Delivery Instruction"
                className="textarea textarea-bordered w-full bg-white"
              />
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm font-bold text-red-300 mb-4">
          * PickUp Time 4pm-7pm Approx.
        </p>

        {/* Submit */}
        <button
          className="btn bg-lime-300 font-extrabold text-black w-full rounded-md border-none hover:bg-lime-400"
          type="submit"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
