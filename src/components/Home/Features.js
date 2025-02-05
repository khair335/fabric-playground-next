import React from 'react';
import IconCollection from '../IconCollection/IconCollection';
import SectionTitle from '../ui/SectionTitle';
import SectionSubTitle from '../ui/SectionSubTitle';


const Features = () => {
  const features = [
    {
      icon: 'community',
      title: "Responsive community",
    },
    {
      icon: 'fabric',
      title: "Detailed fabric study",
    },
    {
      icon: 'animation',
      title: "Beautiful animation",
    },
    {
      icon: 'tutorials',
      title: "200+ Excellent tutorials",
    },
    {
      icon: 'pattern',
      title: "Pattern designer",
    },
  ];

  return (
    <section className='bg-secondary-1 features ' id='features'>
      <div className="features px-4 lg:px-8 pb-10 lg:pb-16 pt-[170px] max-w-8xl mx-auto w-full">
        <div className='flex flex-col gap-4 pb-6 lg:pb-10'>
          <SectionTitle title='Features' className="!text-2.5xl lg:!text-3.5xl" />
          <SectionSubTitle subtitle='Unlock advanced tools, tutorials, and exclusive content' className="text-center" />
        </div>

        <div className="features-grid flex justify-center flex-wrap  mx-auto gap-y-6 md:gap-y-6 lg:gap-y-0 gap-x-8 md:gap-x-32 lg:gap-x-0">
          {features.map((feature, index) => (
            <div key={index} className='flex-1 flex justify-center'>
              <div key={index} className="max-w-[150px] w-full flex flex-col items-center gap-5">
              <IconCollection name={feature.icon} className="max-w-[88px] w-full h-[88px]" />
              <p className='text-base lg:text-lg leading-[18px] lg:leading-5 font-unbounded text-secondary-8 font-normal text-center'>{feature.title}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;