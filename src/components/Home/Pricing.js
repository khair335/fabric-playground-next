"use client"
import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionSubTitle from '../ui/SectionSubTitle';
import Button from '../ui/Button';
import usePricing from '@/lib/store/hooks/usePricing';


const Pricing = () => {
  const { activeTab, setActiveTab, tabs, plansData } = usePricing();

  return (
    <section className=" max-w-8xl mx-auto w-full pb-10 lg:pb-20 pt-[170px] px-4 lg:px-12.5 border-b border-bw-3 pricing" id='pricing'>
      <div className='flex flex-col items-center gap-4 pb-10'>
        <SectionTitle className='!text-3.5xl' title="Pricing" />
        <SectionSubTitle subtitle="Unlock exclusive features with our tailored plans" />
      </div>

      <div className=" flex justify-center gap-4 mx-auto bg-secondary-1 w-max p-1 rounded-[15px] mb-3 lg:mb-[74px]">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab px-3 lg:px-5 py-3 lg:py-2.5 cursor-pointer font-inter font-normal text-xs leading-[18px]  rounded-lg.5

             ${activeTab === tab ? 'active bg-primary-10 text-white rounded-lg' : 'bg-secondary-1 text-black'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-[30px] justify-center flex-col lg:flex-row">
        {plansData[activeTab].map((plan, index) => (
          <div
            key={index}
            className={`max-w-full lg:max-w-[480px] w-full min-h-[401px] lg:min-h-[580px] gap-4 p-4 lg:p-6 rounded-2xl lg:rounded-lg.5 border border-gray-200 flex flex-col transition-all duration-300 ${plan.title.toLowerCase()} ${plan.title.toLowerCase() == 'pro' ? 'border-[3px] border-primary-5 transform scale-y-105' : ''}`}
          >
            <h3 className='text-center text-2xl md:text-2.5xl text-secondary-8 font-unbounded font-semibold leading-7 md:leading-8  mb-8 relative
            after:content-[""] after:absolute after:-bottom-[10px] after:left-0 after:right-0 after:mx-auto after:w-[60px] after:h-px after:bg-gray-200'>{plan.title}</h3>
            <div className="pricing-features flex-1 text-left">
              <h4 className='font-unbounded font-normal text-base lg:text-lg leading-[18px] lg:leading-5 text-secondary-8 text-center mb-3'>Features:</h4>
              <ul className='m-0 p-0 flex flex-col gap-[6px] lg:gap-2'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex gap-2 items-center list-none font-inter font-normal text-base leading-6 text-secondary-5'>
                    <span className="bg-primary-5 min-w-[5px] min-h-[5px] max-w-[5px] max-h-[5px] rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col items-center gap-5 justify-center'>
              <div className="font-unbounded  font-semibold text-base md:text-lg  leading-5 text-primary-10 tracking-[-0.5px]">{plan.price}</div>

            <Button
              variant={plan.title.toLowerCase() == 'pro' ? 'Primary' : 'Secondary'}
                size="Medium"
                className="w-full md:!w-fit"
              iconPosition="right" >
              GET PLAN
            </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;