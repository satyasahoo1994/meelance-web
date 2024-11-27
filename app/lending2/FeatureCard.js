import Image from 'next/image';
import React from 'react';

// interface FeatureCardProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
//   isImageLeft: boolean;
// }

const FeatureCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  isImageLeft,
}) => {
  const imageContent = (
    <div className="flex flex-col px-4 min-w-[240px] w-[464px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col max-w-full rounded-3xl w-full">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-full rounded-3xl aspect-[1.61] max-md:max-w-full"
        />
      </div>
    </div>
  );

  const textContent = (
    <div
      data-layername="oldNeat"
      className="flex flex-col min-w-[240px] w-[444px] max-md:max-w-full"
    >
      <div className="flex flex-col w-full max-w-[444px] max-md:max-w-full">
        <h3
          data-layername="showcaseYourTalentAndGetNoticed"
          className="font-bricolage text-base font-semibold leading-[19.2px] tracking-[-0.05em] text-left decoration-skip-ink-none"
          style={{ color: 'var(--Foreground-Primary-Accent, #8F42AE)', textTransform: 'uppercase' }}
        >
          {title}
        </h3>
        <h4
          data-layername="gainGreaterExposureWithAPersonalizedShowcasePage"
          className="gap-2 self-stretch py-1 mt-1 w-full text-left text-4xl font-bold tracking-tighter text-black text max-md:max-w-full"
        >
          {subtitle}
        </h4>
      </div>
      <p
        data-layername="aProfileOnMeelanceOffersNumerousBenefitsForCreativeProfessionalsItAllowsYouToShowcaseYourWorkConnectWithIndustryPeersAndEnhanceYourOnlineVisibility"
        className="gap-2 px-2.5 py-2 mt-2 max-w-full text-base text-left leading-6 text-black rounded-lg w-[444px] max-md:max-w-full"
      >
        {description}
      </p>
      <div className="flex justify-center items-center self-start p-2 mt-2 text-xs leading-snug text-center rounded-xl">
        <p
          data-layername="learnMore"
          className="self-stretch my-auto underline bg-clip-text decoration-auto decoration-solid decoration-skip-ink-none text-sm"
          style={{
            background: 'linear-gradient(110.05deg, #FF9D3F 0.07%, #F46772 33.9%, #AF33E4 66.29%, #2F70E4 100.44%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
        >
          Learn more
        </p>
      </div>
    </div>
  );

  return (
    <div
      data-layername="card"
      className="flex flex-wrap gap-10 justify-between items-start py-5 mt-16 w-full rounded-xl max-md:mt-10 max-md:max-w-full"
    >
      {isImageLeft ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
};

export default FeatureCard;
