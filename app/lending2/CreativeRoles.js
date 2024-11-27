import React from 'react';
import frame4 from '../images/frame4.png';
import Image from 'next/image';

const CreativeRoles = () => {
  return (
    <section className="flex flex-col mt-12 w-full max-md:mt-6 px-4 max-md:px-2">
      <h2
        data-layername="forAllCreativeAndCrewRoles"
        className="flex-1 shrink gap-2.5 self-stretch px-2.5 w-full text-6xl font-bold tracking-tighter text-black max-md:text-4xl"
      >
        For all creative and crew roles
      </h2>
      <div className="flex flex-wrap gap-4 justify-center items-center px-2.5 mt-6 w-full max-md:max-w-full">
        {/* Map through items if needed */}
        <div
          className="flex grow shrink self-stretch my-4 w-32 rounded-xl h-[216px] max-md:w-24 max-md:h-[180px]"
        >
          <Image
            src={frame4}
            alt="Creative role frame"
            className="object-contain grow shrink aspect-[1.18] min-w-[200px] w-full max-md:max-w-full"
          />
        </div>
        {/* Repeat as needed */}
      </div>
    </section>
  );
};

export default CreativeRoles;
