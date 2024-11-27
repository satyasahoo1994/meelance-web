import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';


const LandingPage = () => {
  return (
    <main className="flex overflow-hidden relative flex-col bg-zinc-950" style={{
      backgroundImage: `url('/images/bgImage.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* <div className="flex absolute bottom-3.5 top-2 left-2/4 z-0 justify-between items-start max-w-full -translate-x-2/4 min-h-[825px] translate-y-[0%] w-[1280px]" /> */}
      <NavBar />
      <Header />
      <Footer />
    </main>
  );
};

export default LandingPage;