import React from 'react';

const Hero = () => {
  return (
    <section
      data-layername="body"
      className="flex flex-col w-full max-md:max-w-full"
    >
      <div
        data-layername="image"
        className="flex flex-wrap gap-2 items-start pt-2 pr-1 pl-2 w-full rounded-lg bg-white bg-opacity-20 h-[530px] max-md:max-w-full"
      >
        <div className="flex flex-col grow shrink min-w-[240px] w-[396px] max-md:max-w-full p-8">
          <div className="flex flex-col w-full max-w-[495px] max-md:max-w-full">
            <h1
              data-layername="aProfessionalNetworkForMediaAndEntertainmentIndustry"
              className="gap-2 w-full uppercase  max-md:max-w-full"
              style={{
                fontFamily: 'Briem Hand',
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: '56px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                color: '#000000'
              }}
            >
              A professional network for media And Entertainment Industry
            </h1>
            <div className="flex flex-col mt-10 max-w-full text-black w-[472px] text-justify">
              <h2
                data-layername="text2Re"
                className="gap-2 w-full max-md:max-w-full"
                style={{
                  fontFamily: 'Manrope',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '32.78px',
                  letterSpacing: '-0.04em',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                Tired of the same old networking game?{' '}
              </h2>
              <p
                data-layername="text2Re"
                className="gap-2 mt-2 w-full text-sm font-light tracking-wider leading-4 max-md:max-w-full"
              >
                <span className="font-semibold"style={{color: '#af34e5'}}>Signup on Meelance</span>
                —internet's largest platform brimming with creative talent in
                film, music, digital content, and more. In short, if it's media,
                events or entertainment, it's here.
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center self-start py-2 pr-1.5 pl-2 mt-12 text-xs leading-none text-center text-black rounded-lg max-md:mt-10">
            <p
              data-layername="newToMeelance"
              className="gap-2 self-stretch my-auto"
            >
              New to Meelance?
            </p>
            <button
              data-layername="button"
              className="flex gap-2.5 justify-center items-center self-stretch px-11 my-auto font-semibold leading-snug text-white bg-black rounded-2xl min-h-[51px] max-md:px-5"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51eb427b03631ddb97f52239ab993f507d4d5a18e92be70ccdc51444a97f3c55?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[17px]"
              />
              <span data-layername="joinNow" className="self-stretch my-auto">
                Join Now
              </span>
            </button>
            <p
              data-layername="inLessThan30Secs"
              className="self-stretch my-auto"
            >
              in less than 30 secs.
            </p>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/804ae07fe39081f6e6b90a6eb817fe6e81509f2f729a7a19e0389d828729ba81?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
          alt="Creative professionals collaborating"
          className="object-contain grow shrink aspect-[1.18] min-w-[200px] w-[300px] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-end mt-10 w-full max-md:max-w-full">
        <div className="flex gap-2 justify-center items-center px-20 mt-10 py-3.5 w-full rounded-3xl bg-fuchsia-700 bg-opacity-10 max-w-[1068px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-9 justify-center items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <p
              data-layername="makeYourTalentInSpotlightFor"
              className="gap-2 self-stretch py-2 my-auto text-xs leading-5 text-black"
              style={{textTransform: 'uppercase'}}
            >
              make your talent in spotlight for:
            </p>
            <div className="flex flex-wrap gap-10 justify-center items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17699528d21d111d18243fba53232d47f26bf5eda94268b94d6d57688670f4f2?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-[2.45] w-[49px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/185a5834772d3b1752022f211ce0896b4d8d4a8810aa4571346417cd15b3c8a9?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-[3.8] w-[76px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2075ffbb8e3ba69a729de99a8bd4f808e998d6847a0b86e4e93de60052b2f6a3?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-[3.03] w-[103px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bcc4fbb1b3685feb61b329bd689f7858f22452fd3217cfd3398dc8c2151b32b?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[1.04]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cd2f0a095b425c98dab3ac6f32bfec29b3d83283f91e1c16f1465c5fe10356f?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.35] w-[46px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/53002aabec8a4711b9612388a6a04831a6616f61b5a5e92f66eb19db9b7aafca?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto rounded aspect-square w-[34px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e359596685cc6b3e591f7e4dbaa7afde3d217f6dda23a9a0a8dc11d8c7e039ab?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c"
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto rounded aspect-square w-[34px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
