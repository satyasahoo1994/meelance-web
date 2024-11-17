import React from 'react';
import frame4 from '../../assets/frame4.png';

const CreativeRoles = () => {
  return (
    <section className="flex flex-col mt-36 w-full max-md:mt-10 max-md:max-w-full">
      <h2
        data-layername="forAllCreativeAndCrewRoles"
        className="flex-1 shrink gap-2.5 self-stretch px-2.5 w-full text-6xl font-bold tracking-tighter text-black max-md:max-w-full max-md:text-4xl"
      >
        For all creative and crew roles
      </h2>
      <div className="flex flex-wrap gap-2.5 justify-center items-center px-2.5 mt-6 w-full max-md:max-w-full">
        {/* {[...Array(6)].map((_, index) => ( */}
          <div
            // key={index}  
            className="flex grow shrink self-stretch my-auto w-32 rounded-xl h-[216px]"
          >
            <img
              src={frame4}
              alt="Creative role frame"
              className="object-contain grow shrink aspect-[1.18] min-w-[200px] w-[300px] max-md:max-w-full"
            />
          </div>
         {/* ))} */}
      </div>
    </section>
  );
};

export default CreativeRoles;
