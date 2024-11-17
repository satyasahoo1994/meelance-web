import React from 'react';

const Footer = () => {
  return (
    <footer className="flex z-0 flex-col justify-center px-20 w-full border-t border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-20 py-3 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-start w-full max-md:max-w-full">
          <div className="flex gap-2.5 justify-center items-center px-8 py-1.5 min-w-[240px] max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center items-center self-stretch py-1 my-auto w-[89px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/60565e9397257e8ab8110c4c7860197e4bb90282c629bae2b6b4b807bdd9c7ab?placeholderIfAbsent=true&apiKey=f2b1329c6c1940c9a729f8b79bd9e33c" className="object-contain aspect-[5.62] w-[89px]" alt="Meelance logo" />
            </div>
            <p className="gap-2.5 self-stretch my-auto text-sm font-medium leading-none text-white min-w-[240px]">
              2024 Meelance,Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;