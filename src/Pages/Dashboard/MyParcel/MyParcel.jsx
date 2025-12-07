import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyParcel = () => {
  const { user } = useAuth();
  const axiousSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ['myParcels', user?.email],
    queryFn: async () => {
      const res = await axiousSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  console.log(parcels);

  return (
    <div>
      <h2 className="text-3xl  font-bold">
        All of my parcels: {parcels.length}{' '}
      </h2>
    </div>
  );
};

export default MyParcel;
