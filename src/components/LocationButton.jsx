import React from 'react';
import { MdMyLocation } from 'react-icons/md';

const LocationButton = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 
                 transition-colors flex items-center justify-center min-w-[44px] min-h-[42px]"
      title="Use current location"
    >
      <MdMyLocation className={`text-xl ${loading ? 'animate-spin' : ''}`} />
    </button>
  );
};

export default LocationButton;