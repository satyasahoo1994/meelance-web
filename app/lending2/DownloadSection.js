import Image from 'next/image';
import React from 'react';
import group from '../images/group.png';
import Playstore from '../images/Playstore.png';
import path90 from '../images/path90.png';
import Apple from '../images/Apple.png';

const DownloadSection = () => {
  return (
    <section className="flex flex-col mt-12 w-full text-black max-md:mt-6 px-4 max-md:px-2">
      <h2 className="flex flex-row text-center justify-center items-center w-full text-5xl font-bold tracking-tighter max-md:flex-wrap max-md:text-4xl">
        <span
          data-layername="join"
          className="my-auto"
        >
          Join{' '}
        </span>

        <Image
          loading="lazy"
          src={group}
          alt="Meelance logo"
          className="object-contain my-auto w-[130px]"
        />

        <span
          data-layername="millionsOfCreatorsAndEntertainers"
          className="my-auto"
        >
          {' '}& Millions of creators and entertainers
        </span>
      </h2>

      <div className="flex flex-col items-center self-center mt-12 max-md:mt-6 max-md:max-w-full">
        <h3
          data-layername="downloadForIOsAndroid"
          className="text-3xl font-semibold leading-tight max-md:text-2xl text-center"
        >
          Download for iOS/Android
        </h3>
        <div className="flex gap-8 items-start mt-6 max-md:gap-4 max-md:flex-row md:w-[100px]">
          <a
            href="#"
            data-layername="storeDownloadButton"
            className="flex overflow-hidden gap-2.5 px-6 py-3 text-sm uppercase bg-white rounded-lg border border-black border-solid w-[160px] md:w-[100px] max-md:px-4 max-md:py-2"
          >
            <Image
              loading="lazy"
              src={Playstore}
              alt="Google Play logo"
              className="object-contain shrink-0 my-auto aspect-[0.87] w-[27px]"
            />
            <div data-layername="content" className="flex flex-col">
              <span data-layername="getItOn">GET IT ON</span>
              <Image
                loading="lazy"
                src={path90}
                alt="Google Play"
                className="object-contain mt-1 w-24 aspect-[4.81]"
              />
            </div>
          </a>
          <a
            href="#"
            data-layername="storeDownloadButton"
            className="flex overflow-hidden gap-2.5 py-3 text-sm font-medium leading-none bg-white rounded-lg border border-black border-solid w-[160px] md:w-[200px] max-md:px-2 max-md:py-2"
          >
            <Image
              loading="lazy"
              src={Apple}
              alt="Apple logo"
              className="object-contain shrink-0 aspect-[0.87] w-[26px]"
            />
            <div data-layername="content" className="flex flex-col my-auto w-[350px]">
              <span data-layername="downloadOnThe" className="text-md">
                Download on the
              </span>
              <span
                data-layername="appStore"
                className="text-lg tracking-tighter"
              >
                App Store
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

  );
};

export default DownloadSection;
