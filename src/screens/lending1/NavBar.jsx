import React from 'react';
import logoWhite from '../../assets/logo_white.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1023px] max-md:max-w-full">
        <div className="flex flex-col items-center">
          <img
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
            onClick={() => navigate('/page1')}
          >
            Get Started
          </button>
        </nav>
      </div>
  );
};

export default NavBar;
