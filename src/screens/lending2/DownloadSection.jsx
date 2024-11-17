import React from 'react';

const DownloadSection = () => {
  return (
    <section className="flex flex-col mt-36 w-full text-black max-md:mt-10 max-md:max-w-full">
      <h2 className="flex flex-row justify-center items-center w-full text-5xl font-bold tracking-tighter max-md:flex-wrap max-md:text-4xl">
        <span
          data-layername="join"
          className="my-auto"
        >
          Join{' '}
        </span>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/74ab9da9b57a9838c068caee9eb4f133406f5d48e672b7a9f73f2178c393f2f1?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
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

      <div className="flex flex-col items-center self-center mt-24 max-md:mt-10">
        <h3
          data-layername="downloadForIOsAndroid"
          className="text-3xl font-semibold leading-tight"
        >
          Download for iOS/Android
        </h3>
        <div className="flex gap-20 items-start mt-4">
          <a
            href="#"
            data-layername="storeDownloadButton"
            className="flex overflow-hidden gap-2.5 px-3 py-2 text-sm uppercase bg-white rounded-lg border border-black border-solid w-[156px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb117a5947a219b3b5742320a18d4587489d6237eab0d5e244e5e4e45f1e18ae?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
              alt="Google Play logo"
              className="object-contain shrink-0 my-auto aspect-[0.87] w-[27px]"
            />
            <div data-layername="content" className="flex flex-col">
              <span data-layername="getItOn">GET IT ON</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab1a13ad827b2c5b4e4c80d3b6ee0e924a89612108010a0dc8e5d19bab70f288?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
                alt="Google Play"
                className="object-contain mt-1 w-24 aspect-[4.81]"
              />
            </div>
          </a>
          <a
            href="#"
            data-layername="storeDownloadButton"
            className="flex overflow-hidden gap-2.5 px-1 py-1.5 font-medium leading-none bg-white rounded-lg border border-black border-solid w-[156px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c87f91256933a2f781ae840b9156c39b06ea55e70e013a89f673fa50af1c1a2?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
              alt="Apple logo"
              className="object-contain shrink-0 aspect-[0.87] w-[26px]"
            />
            <div data-layername="content" className="flex flex-col my-auto">
              <span data-layername="downloadOnThe" className="text-xs">
                Download on the
              </span>
              <span
                data-layername="appStore"
                className="text-2xl tracking-tighter"
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
