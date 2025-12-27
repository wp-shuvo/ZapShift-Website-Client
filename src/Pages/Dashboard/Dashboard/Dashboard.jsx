import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-6"
      >
        <div>
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <p className="text-gray-500 text-sm">
            You can view your parcel and shipment information from anywhere.
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-black bg-[#B8E34F]">
          <FiPlus /> Create Shipment
        </button>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { title: 'New Packages', value: '234' },
          { title: 'Ready for Shipping', value: '129' },
          { title: 'Completed', value: '1,325' },
          { title: 'New Clients', value: '50' },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl p-5 shadow-sm"
          >
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h3 className="text-2xl font-bold">{item.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Shipment Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl p-6 shadow-sm mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Shipment Statistics</h3>
          <span className="px-3 py-1 text-sm rounded-full bg-[#E9F7C9] text-green-700">
            Income
          </span>
        </div>

        {/* Fake Chart */}
        <div className="h-40 bg-gradient-to-r from-[#E9F7C9] to-[#B8E34F] rounded-lg opacity-80"></div>
      </motion.div>

      {/* Shipping Reports */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-sm mb-8"
      >
        <h3 className="font-semibold text-lg mb-4">Shipping Reports</h3>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Sender</th>
                <th>Date</th>
                <th>Weight</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['#ZP2345', 'Rasel Ahmed', 'Jan 6, 2025', '10kg', 'Delivered'],
                ['#ZP2346', 'Rubel Hossain', 'Jan 7, 2025', '15kg', 'Transit'],
                ['#ZP2347', 'Abir Sarker', 'Jan 8, 2025', '7kg', 'Pending'],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, idx) => (
                    <td key={idx}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Late Invoices */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h3 className="font-semibold mb-4">Late Invoices</h3>
          <ul className="space-y-3">
            {['৳4,500', '৳9,800', '৳2,300'].map((price, i) => (
              <li key={i} className="flex justify-between text-sm">
                <span>Invoice #{i + 1}</span>
                <span className="font-medium">{price}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Shipment Alerts */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h3 className="font-semibold mb-4">Shipment Alerts</h3>
          <ul className="space-y-3 text-sm">
            <li className="text-red-500">⚠ Damaged shipment reported</li>
            <li className="text-yellow-500">⏱ Weather delay expected</li>
            <li className="text-green-600">
              ✔ Shipment delivered successfully
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
