import Image from 'next/image';
import React from 'react';
import meelance_gradient from '../images/meelance_gradient.png'

const Footer = () => {
  const footerLinks = [
    'About',
    'Feedback',
    'Help',
    'Privacy',
    'Terms',
    'Guidelines',
  ];

  return (
    <footer
      data-layername="footer"
      className="flex flex-col gap-5 justify-between py-6 mt-12 bg-white border-t border-black border-opacity-10 max-md:mt-6 w-full px-5"
    >
      <nav className="flex gap-4 items-start px-2.5 py-1.5 text-base text-black whitespace-nowrap max-md:flex-wrap max-md:justify-center max-md:text-sm max-md:gap-3">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            data-layername={link.toLowerCase()}
            className="gap-2.5"
            style={{ color: "#333" }}
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="flex gap-4 justify-center items-center py-1.5 max-md:flex-col md:max-w-full lg:max-w-full">
        <div
          data-layername="layer1"
          className="flex overflow-hidden text-center item-center justify-center py-1 my-auto w-full"
        >
          <Image
            loading="lazy"
            src={meelance_gradient}
            alt="Meelance logo"
            className="object-contain aspect-[4.56] w-[100px]"
          />
        </div>
        <div className="justify-center items-center py-1 my-auto lg:ml-auto w-full">
          <p
            data-layername="2024MeelanceIncAllRightsReserved"
            className="my-auto text-sm font-medium leading-none text-black max-md:text-center w-full"
          >
            2024 Meelance, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
