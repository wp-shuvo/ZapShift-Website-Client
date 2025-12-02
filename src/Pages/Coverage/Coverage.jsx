import React, { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLoaderData } from 'react-router';
import 'leaflet/dist/leaflet.css';

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  // console.log(serviceCenter);
  const mapRef = useRef(null);

  const handleSearch = event => {
    event.preventDefault();
    const location = event.target.location.value;
    const district = serviceCenter.find(c =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log('Found district:', district.district, coord);
      mapRef.current.flyTo(coord);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 mb-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold ">
        We are available in 64 districts
      </h1>

      {/* Search Bar */}
      <div>
        <form onSubmit={handleSearch} className="mt-6 flex items-center">
          <div className="flex items-center w-full border-2 border-gray-400 rounded-4xl bg-gray-100 px-4 py-3 shadow-sm">
            <FiSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              name="location"
              placeholder="Search here"
              className="ml-3 flex-1 bg-transparent outline-none text-text-secondary placeholder-gray-500"
            />
          </div>

          <button className="ml-4 bg-lime-400 font-bold px-6 py-3 rounded-full hover:bg-lime-500 transition">
            Search
          </button>
        </form>
      </div>

      {/* Subheading */}
      <div className="mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-teal-900">
          We deliver almost all over Bangladesh
        </h2>
      </div>
      {/* mapcontainer */}
      <div>
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[500px] w-full mt-6"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenter.map(center => (
            <Marker
              position={[center.latitude, center.longitude]}
              key={center.id}
            >
              <Popup>
                {center.district} <br /> Service Area:{' '}
                {center.covered_area.join()}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
