import React, { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLoaderData } from 'react-router';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Coverage = () => {
  const position = [23.685, 90.3563]; // Bangladesh center
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = e => {
    e.preventDefault();
    const location = e.target.location.value.trim();

    if (!location) return;

    const district = serviceCenter.find(c =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district && mapRef.current) {
      mapRef.current.flyTo([district.latitude, district.longitude], 10, {
        duration: 1.5,
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 mb-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold">
        We are available in 64 districts
      </h1>

      {/* Search */}
      <form onSubmit={handleSearch} className="mt-6 flex items-center">
        <div className="flex items-center w-full border-2 border-gray-400 rounded-full bg-gray-100 px-4 py-3 shadow-sm">
          <FiSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            name="location"
            placeholder="Search district (e.g. Dhaka)"
            className="ml-3 flex-1 bg-transparent outline-none placeholder-gray-500"
          />
        </div>

        <button
          type="submit"
          className="ml-4 bg-lime-400 font-bold px-6 py-3 rounded-full hover:bg-lime-500 transition"
        >
          Search
        </button>
      </form>

      {/* Subheading */}
      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-teal-900">
        We deliver almost all over Bangladesh
      </h2>

      {/* Map */}
      <div className="mt-6">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          whenCreated={map => (mapRef.current = map)}
          className="h-[500px] w-full rounded-xl shadow-lg"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter
            .filter(center => center.status === 'active')
            .map((center, index) => (
              <Marker
                key={`${center.district}-${index}`}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br />
                  City: {center.city} <br />
                  Region: {center.region} <br />
                  <span className="font-semibold">Covered Areas:</span>{' '}
                  {center.covered_area.join(', ')}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
