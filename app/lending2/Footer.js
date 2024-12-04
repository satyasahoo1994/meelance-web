'use client';

import Image from 'next/image';
import React from 'react';
import meelance_gradient from '../images/meelance_gradient.png'
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const footerLinks = [
    {
      title: 'Feedback',
      id: 1,
      url: 'https://app.meelance.com/submit-feedback',
    },
    {
      title: 'Help',
      id: 2,
      url: 'https://app.meelance.com/help-and-support',
    },
    {
      title: 'Privacy',
      id: 3,
      url: 'https://app.meelance.com/privacy-policies',
    },
    {
      title: 'Terms',
      id: 4,
      url: 'https://app.meelance.com/terms-and-conditions',
    },
    {
      title: 'Guidelines',
      id: 5,
      url: 'https://app.meelance.com/community-guidelines',
    },
  ];


  return (
    <footer
      data-layername="footer"
      className="flex flex-col lg:flex-row gap-5 justify-between py-6 mt-12 bg-white border-t border-black border-opacity-10 max-md:mt-6 w-full lg:px-[300px]"
    >
      <div className="flex gap-4 items-start px-2.5 py-1.5 text-base text-black whitespace-nowrap max-md:flex-wrap max-md:justify-center max-md:text-sm max-md:gap-3">
        {footerLinks.map((link, index) => (
          <a
            key={link?.id}
            href={link.url}
            target="_blank"
            data-layername={link?.title.toLowerCase()}
            className="gap-2.5"
            style={{ color: "#333" }}
          >
            {link?.title}
          </a>
        ))}
      </div>
      <div className="flex py-1.5 max-md:flex-col lg:max-w-full">
        <div
          data-layername="layer1"
          className="flex overflow-hidden text-center item-center justify-center py-1 my-auto"
          onClick={() => router.push("/")}
        >
          <Image
            loading="lazy"
            src={meelance_gradient}
            alt="Meelance logo"
            className="object-contain aspect-[4.56] w-[100px]"
          />
        </div>
        <div className="flex items-center py-1 my-auto lg:ml-auto w-full">
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
