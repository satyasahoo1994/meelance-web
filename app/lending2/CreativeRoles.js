import React from 'react';
import frame4 from '../images/frame4.png';
import Image from 'next/image';
import hero1 from '../images/role1.png';
import hero2 from '../images/role2.png';
import hero3 from '../images/role3.png';
import hero4 from '../images/role4.png';
import hero5 from '../images/role5.png';

const HeroRole = [
  {
    id: 1,
    name: 'Role 1',
    image: hero1,
    style: {},
    className: 'object-contain shrink min-w-[100px] max-md:max-w-[200px]'
  },
  {
    id: 2,
    name: 'Role 2',
    image: hero2,
    style: { marginTop: "-2.3rem" },
    className: 'object-contain shrink min-w-[80px] max-md:max-w-[200px]'
  },
  {
    id: 3,
    name: 'Role 3',
    image: hero3,
    style: { marginTop: "-1.4rem" },
    className: 'object-contain shrink min-w-[100px] max-md:max-w-[200px]'
  },
  {
    id: 4,
    name: 'Role 4',
    image: hero4,
    style: { marginTop: "-0.6rem" },
    className: 'object-contain shrink min-w-[100px] max-md:max-w-[200px]'
  },
  {
    id: 5,
    name: 'Role 5',
    image: hero5,
    style: { marginTop: "-0.7rem" },
    className: 'object-contain shrink min-w-[100px] max-md:max-w-[200px]'
  }
]

const CreativeRoles = () => {
  return (
    <section className="flex flex-col mt-12 w-full max-md:mt-6 px-4 max-md:px-2">
      <h2
        data-layername="forAllCreativeAndCrewRoles"
        className="flex-1 shrink gap-2.5 self-stretch text-center px-2.5 w-full text-6xl font-bold tracking-tighter text-black max-md:text-4xl"
      >
        For all creative and crew roles
      </h2>
      <div className="flex flex-wrap gap-4 justify-center items-center px-2.5 mt-6 w-full max-md:max-w-full">
        {/* Map through items if needed */}
        <div
          className="flex grow flex-col md:flex-row md:text-center md-contents shrink self-stretch my-4 rounded-xl  w-32 h-[416px] max-md:h-auto"
        >
          {HeroRole.map((role) => (
            <div className="flex items-center justify-center my-5" key={role.id}>
              <Image
                key={role.id}
                src={role.image}
                style={role.style}
                alt="Creative role frame"
                className={role.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeRoles;
