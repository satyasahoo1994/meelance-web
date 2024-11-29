'use client';

import React, { useState } from 'react';
import logo from '../images/logo.png';
import mail from '../images/mail.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-light-800 px-6">
      <div className="max-w-[1080px] mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <a href="/" className="text-white text-lg font-semibold">
              Logo
            </a> */}
            <Image
              loading="lazy"
              src={logo}
              alt="Meelance logo"
              className="object-contain max-w-full aspect-[3.32] w-[133px]"
              onClick={() => router.push('/')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <nav className="flex gap-4 items-right text-sm leading-none mt-4 md:mt-0">
              <button
                data-layername="login"
                className="gap-2.5 self-stretch px-6 py-3 text-white whitespace-nowrap bg-black rounded-2xl shadow-sm bg-blend-normal max-md:px-5"
              >
                Login
              </button>
              <div className="flex gap-2 items-center py-2 font-medium text-black bg-white rounded-2xl shadow-sm px-4">
                <Image
                  loading="lazy"
                  src={mail}
                  alt="Mail Icon"
                  className="object-contain shrink-0 w-8 aspect-square"
                />
                <p
                  data-layername="signinButton"
                  className="self-stretch py-2 rounded-2xl text-black"
                >
                  Request Access
                </p>
              </div>
            </nav>
          </div>
          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 space-y-4">
          <a
            href="#"
            className="block px-4 py-2 text-sm hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm hover:bg-gray-700"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
