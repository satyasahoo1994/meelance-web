import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex z-0 flex-col justify-center w-full text-white max-md:max-w-full">
      <div className="flex flex-col justify-center px-20 py-24 w-full rounded-xl min-h-[729px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <div className="flex flex-col w-full text-center max-md:max-w-full">
            <h1 className="text-7xl font-semibold tracking-tighter leading-[82px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]" style={{textTransform: 'uppercase'}}>
              <span>Not a </span>
              <span className="text-purple-400">SOCIAL MEDIA</span>
              <br />
              <span>Not a </span>
              <span className="text-purple-400 uppercase">Generic Job Board</span>
            </h1>
            <p className="mt-4 text-3xl leading-10 uppercase max-md:max-w-full">
              <span>Imagine a professional networking app better than </span>
              <span className="text-purple-400">LINKED!n</span>
              <span>, but meant for </span>
              <span>entertainment and creative professionals</span>
            </p>
          </div>
          <button 
            className="self-center px-4 py-3 mt-10 text-base font-bold leading-snug rounded-[200px]"
            style={{background: `linear-gradient(253.5deg, #BB7BFF -21.84%, #7226C2 121.49%)`}}
            onClick={() => navigate('/page1')}
          >
            interested to know more?
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;