import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="flex-1 flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter city name..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 
                   dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
      />
      <button
        onClick={onSearch}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                   transition-colors whitespace-nowrap"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;