import React from 'react';
import riderImg from '../../assets/img/agent-pending.png';
import { useForm } from 'react-hook-form';

const Rider = () => {
  const { register, handleSubmit } = useForm();

  const handleRiderSubmit = data => {
    console.log(data);
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
              {...register('email', { required: true })}
              placeholder="Your Email"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Region */}
            <label className="block mb-2 font-medium">Your Region</label>
            <select
              {...register('region')}
              className="select select-bordered w-full mb-4 bg-white"
            >
              <option>Select your Region</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
            </select>

            {/* District */}
            <label className="block mb-2 font-medium">Your District</label>
            <select
              {...register('district')}
              className="select select-bordered w-full mb-4 bg-white"
            >
              <option>Select your District</option>
              <option>Mirpur</option>
              <option>Banani</option>
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
              Submit
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
