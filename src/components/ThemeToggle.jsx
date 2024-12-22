import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 
                 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 
                 transition-colors"
    >
      {darkMode ? <MdLightMode className="text-xl" /> : <MdDarkMode className="text-xl" />}
    </button>
  );
};

export default ThemeToggle;