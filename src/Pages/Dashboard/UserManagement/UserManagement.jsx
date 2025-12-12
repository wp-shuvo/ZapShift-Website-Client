import React, { useState } from 'react';
import { FaEdit, FaRegTrashAlt, FaUserFriends } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserShield } from 'react-icons/fa6';
import { FiSearch, FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState('');

  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users', searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
    const roleInfo = { role: 'admin' };

    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want To Make Admin',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Make Admin',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}`, roleInfo).then(res => {
          // console.log(res.data);
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: 'Confirmed!',
              text: `${user.displayName} has been made admin successfully`,
              icon: 'success',
            });
          }
        });
      }
    });
  };
  const handleRemoveAdmin = user => {
    const roleInfo = { role: 'user' };
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want To Remove Admin',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Remove Admin',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then(res => {
          console.log(res.data);
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: 'Removed!',
              text: `${user.displayName} has been removed admin successfully`,
              icon: 'success',
            });
          }
        });
      }
    });
  };

  const handleDeleteUser = user => {
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
        axiosSecure.delete(`/users/${user._id}/role`).then(res => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: `${user.displayName} has been deleted successfully`,
              icon: 'success',
            });
          }
        });
      }
    });
  };

  // const handleEditUser = user => {};

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        User Management
      </h2>
      {/* Search Bar */}
      <div
        className="flex items-center w-full border-2 mb-5
       border-gray-400 rounded-4xl bg-gray-100 px-4 py-3 shadow-sm"
      >
        <FiSearch className="text-gray-500 text-xl" />
        <input
          onChange={e => setSearchText(e.target.value)}
          type="text"
          name="location"
          placeholder="Search User here"
          className="ml-3 flex-1 bg-transparent outline-none text-text-secondary placeholder-gray-500"
        />
      </div>

      {/* Total Pay Card */}
      <div className="mb-10">
        <div className="flex items-center p-4 w-full bg-gray-200 rounded-lg">
          <div className="p-3 bg-gray-300 rounded-full shadow mr-4">
            <FaUserFriends className="text-gray-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total User</p>
            <p className="text-lg font-bold text-gray-800">{users.length}</p>
          </div>
        </div>
      </div>
      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === 'admin' ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn btn-sm bg-red-400 text-black mr-2"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm btn-primary text-black mr-2"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-sm btn-primary text-black mr-2">
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-sm btn-outline btn-error text-black"
                  >
                    <FaRegTrashAlt /> Delete
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

export default UserManagement;
