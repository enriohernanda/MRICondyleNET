import React from 'react';
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from 'react-icons/rx';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 p-10">
      {/* Bagian Atas - Sosial Media */}
      <div className="flex justify-between items-center border-b border-gray-800 pb-5">
        <div className="text-lg font-semibold text-gray-200">Follow us</div>
        <div className="flex space-x-4">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-200 transition-all duration-300 shadow-lg shadow-[#2A0E61]/50 hover:text-[#E4405F] hover:scale-110 hover:-translate-y-1">
            <RxInstagramLogo size={24} />
          </a>

          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-500 transition-colors duration-300 shadow-lg shadow-[#2A0E61]/50 hover:scale-110 hover:-translate-y-1">
            <RxLinkedinLogo size={24} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 transition-colors duration-300 shadow-lg shadow-[#2A0E61]/50 hover:scale-110 hover:-translate-y-1">
            <RxGithubLogo size={24} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-red-600 transition-colors duration-300 shadow-lg shadow-[#2A0E61]/50 hover:scale-110 hover:-translate-y-1">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Bagian Tengah - Informasi */}
      <div className="grid grid-cols-3 gap-10 py-10">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg text-gray-200">About</h3>
          <ul className="mt-6 space-y-2 text-gray-200 text-sm">
            <li>
              <a className="hover:text-gray-400" href="">
                MRICONDYLENET
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                PRIMA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                SENUSA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                ASHOKA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                DENTALEDU
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                VEUME
              </a>
            </li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="font-bold text-lg text-gray-200">Product</h3>
          <ul className="mt-6 space-y-2 text-gray-200 text-sm">
            <li>
              <a className="hover:text-gray-400" href="">
                MRICONDYLENET
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                PRIMA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                SENUSA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                ASHOKA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                DENTALEDU
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="">
                VEUME
              </a>
            </li>
          </ul>
        </div>

        {/* Form Subscribe */}
        <div className="gap-4">
          <h3 className="font-bold text-lg text-gray-200">Sign up for updates on our latest innovations</h3>
          <div className="mt-4">
            <input type="email" placeholder="Email address" className="w-full p-2 bg-white border border-b-cyan-500 rounded-md text-black" />
            <p className="text-sm text-gray-200 mt-4">I accept Google&apos;s Terms and Conditions and acknowledge that my information will be used in accordance with Google&apos;s Privacy Policy.</p>
            <button className="w-full mt-6 p-2 text-gray-200 bg-[#161B22] border border-white hover:border-[#12FFFB] hover:text-[#12FFFB] transition py-2 rounded-xl uppercase cursor-pointer">Sign up</button>
          </div>
        </div>
      </div>

      {/* Bagian Bawah - Copyright */}
      <div className="border-t border-gray-800 pt-5 text-center">
        <p className="text-sm text-gray-600 space-x-4">&copy; MRICondyleNet Dev 2025 Inc. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
