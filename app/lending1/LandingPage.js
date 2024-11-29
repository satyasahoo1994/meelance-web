import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';


const LandingPage = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-950 lg:h-[100vh]" style={{
      backgroundImage: `url('/images/bgImage.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* <div className="flex absolute bottom-3.5 top-2 left-2/4 z-0 justify-between items-start max-w-full -translate-x-2/4 min-h-[825px] translate-y-[0%] w-[1280px]" /> */}
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
};

export default LandingPage;