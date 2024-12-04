import Image from 'next/image';
import React from 'react';
import logo from '../images/meelance_logo_gradient.svg';

const Footer = () => {
  return (
    <footer className="flex z-0 flex-col justify-center px-20 w-full border-t border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-20 py-3 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-start w-full max-md:max-w-full">
          <div className="flex flex-col lg:flex-row gap-2.5 justify-center items-center px-8 py-1.5 min-w-[240px] max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center items-center self-stretch py-1 my-auto w-[89px] max-md:w-full">
              <Image loading="lazy" src={logo} className="object-contain aspect-[5.62] w-[89px]" alt="Meelance logo" />
            </div>
            <p className="gap-2.5 self-stretch my-auto text-sm font-medium leading-none text-white min-w-[240px] max-md:w-full">
              2024 Meelance,Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;