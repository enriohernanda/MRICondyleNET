'use client';

import { useState } from 'react';
import { FaBell, FaChevronDown } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userProfile = null; // Ganti dengan URL foto profil user jika ada (contoh: "/user-photo.jpg")

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#578FCA] dark:bg-[#0B2F9F] shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo-MRICondyleNet.png" alt="Logo" className="h-8 md:h-10" />
        <span className="hidden md:block md:text-md lg:text-xl font-bold ml-2 text-white">MRICondyleNET</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notification Icon */}
        <FaBell className="text-white text-2xl cursor-pointer" />

        {/* Profile + Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center text-lg gap-2 text-white">
            {/* Profile Picture */}
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-[#D9D9D9]">
              {userProfile ? <img src={userProfile} alt="User Profile" className="w-full h-full object-cover" /> : <span className="text-gray-500"></span>}
            </div>

            {/* Dropdown Icon */}
            <FaChevronDown className={`cursor-pointer transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-[#578FCA] dark:bg-[#0B2F9F] rounded-lg shadow-lg overflow-hidden">
              <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#5774ca] dark:hover:bg-[#100b9f] cursor-pointer">Profile</button>
              <hr className="border-gray-200 dark:border-gray-600" />
              <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#5774ca] dark:hover:bg-[#100b9f] cursor-pointer">Log Out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
