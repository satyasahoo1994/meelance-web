import Image from 'next/image';
import React from 'react';
import meteocons_star from '../images/meteocons_star.png';
import disnep from '../images/disnep.png';
import dHero1 from '../images/3dHero1.png';
import netflix from '../images/netflix.png';
import primevideo from '../images/primevideo.png';
import govinda from '../images/govinda.png';
import esg from '../images/esg.png';
import tvf from '../images/tvf.png';
import redfm from '../images/redfm.png';

const Hero = () => {
  return (
    <div
    // className="flex flex-col w-full px-6 max-md:px-4 max-md:max-w-full"
    >
      <div
        className="flex flex-wrap gap-4 items-start pt-4 pr-4 pl-6 w-full rounded-lg bg-white bg-opacity-20 max-md:max-w-full max-md:pl-4 max-md:max-h-auto"
      >
        <div className="flex flex-col">
          <div className="flex flex-col w-full max-w-[495px] max-md:max-w-full">
            <h1 className="gap-2 w-full uppercase text-left text-black text-4xl font-bold leading-[39px] decoration-none underline-offset-[from-font] font-[BriemHand]">
              A professional network for media And Entertainment Industry
            </h1>
            <div className="flex flex-col mt-10 max-w-full text-black w-full text-justify">
              <h2 className="gap-2 w-full text-left text-xl font-normal leading-[32.78px] tracking-[-0.04em] decoration-none underline-offset-[from-font] max-md:max-w-full font-manrope">
                Tired of the same old networking game?
              </h2>
              <p
                data-layername="text2Re"
                className="gap-2 mt-2 w-full text-sm font-light tracking-wider leading-4 max-md:max-w-full"
              >
                <span className="font-semibold" style={{ color: '#af34e5' }}>Signup on Meelance</span>
                —internet's largest platform brimming with creative talent in
                film, music, digital content, and more. In short, if it's media,
                events or entertainment, it's here.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center self-start py-2 pr-2 mt-12 text-xs leading-none text-center text-black rounded-lg max-md:mt-10">
            <p
              data-layername="newToMeelance"
              className="gap-2 self-stretch my-auto"
            >
              New to Meelance?
            </p>
            <button
              data-layername="button"
              className="flex gap-2.5 justify-center items-center self-stretch px-11 my-auto font-semibold leading-snug text-white bg-black rounded-2xl min-h-[51px] max-md:px-5 w-[170px]"
            >
              <Image
                loading="lazy"
                src={meteocons_star}
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
        <Image
          loading="lazy"
          src={dHero1}
          alt="Creative professionals collaborating"
          className="object-contain grow shrink aspect-[1.18] min-w-[200px] w-[300px] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-end mt-10 w-full max-md:max-w-full">
        <div className="flex gap-4 justify-center items-center px-6 mt-10 py-3.5 w-full rounded-3xl bg-fuchsia-700 bg-opacity-10 max-w-[1215px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-6 justify-center items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <p
              data-layername="makeYourTalentInSpotlightFor"
              className="gap-2 self-stretch py-2 my-auto text-xs leading-5 text-black"
              style={{ textTransform: 'uppercase' }}
            >
              make your talent in spotlight for:
            </p>
            <div className="flex flex-wrap gap-8 justify-center items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
              <Image
                loading="lazy"
                src={disnep}
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-[2.45] w-[49px]"
              />
              <Image
                loading="lazy"
                src={netflix}
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-[3.8] w-[76px]"
              />
              <Image
                loading="lazy"
                src={primevideo}
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-[3.03] w-[103px]"
              />
              <Image
                loading="lazy"
                src={govinda}
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[1.04]"
              />
              <Image
                loading="lazy"
                src={esg}
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.35] w-[46px]"
              />
              <Image
                loading="lazy"
                src={tvf}
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto rounded aspect-square w-[34px]"
              />
              <Image
                loading="lazy"
                src={redfm}
                alt="Talent category icon"
                className="object-contain shrink-0 self-stretch my-auto rounded aspect-square w-[34px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;
