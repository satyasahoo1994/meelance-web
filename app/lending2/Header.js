'use client';

import React from 'react';
import logo from '../images/logo.png';
import mail from '../images/mail.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  return (
    <header
      data-layername="header"
      className="flex overflow-hidden flex-col justify-center items-center px-6 py-12 w-full bg-white bg-opacity-20 max-md:px-4 max-md:max-w-full"
    >
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1000px] mx-auto max-md:max-w-full">
        <div className="flex flex-col items-center">
          <Image
            loading="lazy"
            src={logo}
            alt="Meelance logo"
            className="object-contain max-w-full aspect-[3.32] w-[133px]"
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <nav className="flex gap-4 items-center text-sm leading-none mt-4 md:mt-0 max-w-[600px] pl-5">
          <button
            data-layername="login"
            className="gap-2.5 self-stretch px-6 py-3 text-white whitespace-nowrap bg-black rounded-2xl shadow-sm bg-blend-normal max-md:px-5"
          >
            Login
          </button>
          <div className="flex gap-2 items-center px-4 py-2 font-medium text-black bg-white rounded-2xl shadow-sm">
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
    </header>
  );
};

export default Header;
