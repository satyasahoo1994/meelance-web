import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeatureCard from './FeatureCard';
import CreativeRoles from './CreativeRoles';
import DownloadSection from './DownloadSection';
import Footer from './Footer';

import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';


const LandingPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-3 bg-white" style={{width: '80rem'}}>
      <Header />
      <main className="flex flex-col justify-center self-center mt-6 w-full max-w-[1100px] max-md:max-w-full">
        <Hero />
        <section className="flex flex-col mt-36 w-full max-md:mt-10 max-md:max-w-full">
          <FeatureCard
            title="Showcase Your Talent and Get Noticed"
            subtitle="Gain Greater Exposure with a Personalized Showcase Page"
            description="A profile on Meelance offers numerous benefits for creative professionals. It allows you to showcase your work, connect with industry peers, and enhance your online visibility."
            imageSrc={frame1}
            imageAlt="Showcase talent feature illustration"
            isImageLeft={true}
          />
          <FeatureCard
            title="find jobs or talents"
            subtitle="Creative Projects and Freelance Gigs from the Industry's Best"
            description="For job seekers, Meelance offers access to diverse opportunities, verified clients, flexible project choice. For employers, Meelance provides access to a wide pool of skilled entertainment professional or aspiring artists."
            imageSrc={frame2}
            imageAlt="Job search and talent finding illustration"
            isImageLeft={false}
          />
          <FeatureCard
            title="Inside intel"
            subtitle="Get advice, news and Insider's access"
            description="Meelance has the dedicated section specifically for talent agents representing artists/talents/clients."
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

export default LandingPage;
