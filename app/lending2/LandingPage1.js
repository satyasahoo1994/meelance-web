import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeatureCard from './FeatureCard';
import CreativeRoles from './CreativeRoles';
import DownloadSection from './DownloadSection';
import Footer from './Footer';

import frame1 from '../images/frame1.png';
import frame2 from '../images/frame2.png';
import frame3 from '../images/frame3.png';


const LandingPage1 = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white pb-3" style={{ width: '100%' }}>
      <Header />
      <main className="flex flex-col justify-center w-full max-w-[1200px] px-4 md:px-6 mx-auto mt-6">
        <Hero />
        <section className="flex flex-col w-full mt-5 space-y-16 md:space-y-24 max-md:mt-10">
          <FeatureCard
            title="Showcase Your Talent and Get Noticed"
            subtitle="Gain Greater Exposure with a Personalized Showcase Page"
            description="A profile on Meelance offers numerous benefits for creative professionals. It allows you to showcase your work, connect with industry peers, and enhance your online visibility."
            imageSrc={frame1}
            imageAlt="Showcase talent feature illustration"
            isImageLeft={true}
          />
          <FeatureCard
            title="Find Jobs or Talents"
            subtitle="Creative Projects and Freelance Gigs from the Industry's Best"
            description="For job seekers, Meelance offers access to diverse opportunities, verified clients, flexible project choices. For employers, Meelance provides access to a wide pool of skilled entertainment professionals or aspiring artists."
            imageSrc={frame2}
            imageAlt="Job search and talent finding illustration"
            isImageLeft={false}
          />
          <FeatureCard
            title="Inside Intel"
            subtitle="Get advice, news, and Insider's access"
            description="Meelance has a dedicated section specifically for talent agents representing artists/talents/clients."
            imageSrc={frame3}
            imageAlt="Insider access feature illustration"
            isImageLeft={true}
          />
        </section>
        <CreativeRoles />
        <DownloadSection />
      </main>
      <Footer />
    </div>

  );
};

export default LandingPage1;
