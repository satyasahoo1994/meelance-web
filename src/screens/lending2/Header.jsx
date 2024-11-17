import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header
      data-layername="header"
      className="flex overflow-hidden flex-col justify-center items-center px-16 py-12 w-full bg-white bg-opacity-20 max-md:px-5 max-md:max-w-full"
    >
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1023px] max-md:max-w-full">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src={logo}
            alt="Meelance logo"
            className="object-contain max-w-full aspect-[3.32] w-[133px]"
          />
        </div>
        <nav className="flex gap-4 items-start text-sm leading-none">
        <button
            data-layername="login"
            className="gap-2.5 self-stretch px-6 py-3 text-white whitespace-nowrap bg-black rounded-2xl shadow-sm bg-blend-normal max-md:px-5"
          >
            Login
          </button>
          <div className="flex gap-2 items-start px-2 py-1 font-medium text-black bg-white rounded-2xl shadow-sm">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d016d59daec442b0ebe099a7ccda6e76e85da153aea8e31d0429f76571cb73a7?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
              alt=""
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
