import React from 'react';
import riderImg from '../../assets/img/agent-pending.png';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();

  const regionsDupli = serviceCenters.map(center => center.region);
  const regions = [...new Set(regionsDupli)];

  const riderRegion = useWatch({
    control,
    name: 'riderRegion',
  });

  const districtByRegion = region => {
    const regionDistrict = serviceCenters.filter(
      center => center.region === region
    );
    const districts = regionDistrict.map(center => center.district);
    return districts;
  };

  const handleRiderSubmit = data => {
    console.log(data);
    axiosSecure.post('/riders', data).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success(
          'Your Rider Request Added Successfully.We will contact you soon.'
        );
      }
    });
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="bg-white flex flex-col-reverse md:flex-row items-center justify-evenly px-10 py-16">
        {/* LEFT --- Form Section */}
        <div className="w-full flex-1 md:w-1/2">
          <h1 className="text-4xl font-bold mb-2">Be a Rider</h1>
          <p className="text-gray-500 mb-8">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.{' '}
          </p>

          <form onSubmit={handleSubmit(handleRiderSubmit)}>
            <h3 className=" text-2xl font-bold mb-8">Tell us about yourself</h3>
            {/* Your Name */}
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              {...register('name', { required: true })}
              placeholder="Your Name"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Driving License Number */}
            <label className="block mb-2 font-medium">
              Driving License Number
            </label>
            <input
              type="text"
              {...register('license', { required: true })}
              placeholder="Driving License Number"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Email */}
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              {...register('email', { required: true })}
              placeholder="Your Email"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Region */}
            <label className="block mb-2 font-medium">Your Region</label>
            <select
              required
              className="select select-bordered w-full mb-4 bg-white"
              {...register('riderRegion')}
            >
              <option>Select your Region</option>
              {regions.map((region, idx) => (
                <option key={idx} value={region}>
                  {region}
                </option>
              ))}
            </select>

            {/* District */}
            <label className="block mb-2 font-medium">Your District</label>
            <select
              required
              className="select select-bordered w-full mb-4 bg-white"
              {...register('riderDistrict')}
            >
              <option>Select your Districts</option>
              {districtByRegion(riderRegion).map((region, idx) => (
                <option key={idx} value={region}>
                  {region}
                </option>
              ))}
            </select>

            {/* NID */}
            <label className="block mb-2 font-medium">NID No</label>
            <input
              type="text"
              {...register('nid')}
              placeholder="NID"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Phone */}
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="text"
              {...register('phone')}
              placeholder="Phone Number"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Bike Model */}
            <label className="block mb-2 font-medium">
              Bike Brand Model and Year
            </label>
            <input
              type="text"
              {...register('bikeModel')}
              placeholder="Bike Brand Model and Year"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Bike Registration */}
            <label className="block mb-2 font-medium">
              Bike Registration Number
            </label>
            <input
              type="text"
              {...register('regNumber')}
              placeholder="Bike Registration Number"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* About Yourself */}
            <label className="block mb-2 font-medium">
              Tell Us About Yourself
            </label>
            <input
              type="text"
              {...register('about')}
              placeholder="Tell Us About Yourself"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Submit */}
            <button className="btn bg-lime-300 text-black w-full rounded-md border-none hover:bg-lime-400">
              Join As Rider
            </button>
          </form>
        </div>

        {/* RIGHT --- Image Section */}
        <div className="w-full flex-1 md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={riderImg} alt="Rider" className="w-[350px] md:w-[420px]" />
        </div>
      </div>
    </div>
  );
};

export default Rider;
