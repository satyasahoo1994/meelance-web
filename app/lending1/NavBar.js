'use client';

import React from 'react';
import logoWhite from '../images/logo_white.png';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1023px] max-md:max-w-full" style={{ marginTop: "2rem" }}>
      <div className="flex flex-col items-center">
        <Image
          loading="lazy"
          src={logoWhite}
          alt="Meelance logo"
          className="object-contain max-w-full aspect-[3.32] w-[133px]"
        />
      </div>
      <nav className="flex gap-4 items-start text-sm leading-none">
        <button
          className="gap-2.5 self-stretch px-6 py-3 text-white whitespace-nowrap bg-black rounded-2xl shadow-sm max-md:px-5"
          style={{ background: `rgba(187, 123, 255, 1)` }}
          onClick={() => router.push('/lending2')}
        >
          Get Started
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
