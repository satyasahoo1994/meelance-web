import React from 'react';

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
      className="flex overflow-hidden flex-wrap gap-5 justify-between py-2.5 mt-36 w-full bg-white border-t border-black border-opacity-10 max-md:mt-10 max-md:max-w-full"
      style={{paddingLeft: '7rem',paddingRight: '7rem'}}
    >
      <nav className="flex gap-4 items-start px-2.5 py-1.5 text-base text-black whitespace-nowrap max-md:max-w-full">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            data-layername={link.toLowerCase()}
            className="gap-2.5"
            style={{color: "#333"}}
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="flex gap-2.5 justify-center items-center py-1.5 pr-3.5 pl-8 max-md:pl-5">
        <div
          data-layername="layer1"
          className="flex overflow-hidden flex-col justify-center items-center self-stretch py-1 my-auto w-[89px]"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e014b2f88c2833f1c8839034cb2540ddd021282f907a6ed0f61208434d028f3d?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
            alt="Meelance logo"
            className="object-contain aspect-[5.56] w-[89px]"
          />
        </div>
        <p
          data-layername="2024MeelanceIncAllRightsReserved"
          className="gap-2.5 self-stretch my-auto text-sm font-medium leading-none text-black min-w-[240px]"
        >
          2024 Meelance,Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
