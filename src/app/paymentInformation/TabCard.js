"use client"
import React from 'react';
import Button from '@/components/ui/Button';

const TabCard = ({ item }) => {
  return (
    <div className="min-h-[513px] py-7 px-6 max-w-[370px] w-full border border-secondary-3 rounded-2xl flex flex-col">
      <h3 className="font-unbounded font-normal text-lg leading-5 text-secondary-8 text-center pb-8 relative after:content-[''] after:absolute after:w-[60px] after:h-[1px] after:bg-secondary-3 after:bottom-4 after:left-0 after:right-0 after:mx-auto">{item.title}</h3>

      <div className='flex flex-col gap-2'>
        {
          item.features.map((feature, index) => (
            <div key={index} className='flex items-center gap-2'>
              <div className='min-w-[5px] min-h-[5px] max-h-[5px] max-w-[5px] rounded-full bg-primary-5 block'></div>
              <p className='font-inter font-normal text-base leading-6 text-secondary-6'>{feature}</p>
            </div>
          ))
        }
      </div>

      <div className='flex-1 flex flex-col justify-end'>
        <div className='flex flex-col items-center'>
          <div className="font-unbounded font-semibold text-lg leading-5 text-primary-10 tracking-[0.5px] text-center pb-5">$9.99/month</div>
          <Button disabled={!item.buy} variant='Secondary' size='Medium' className='max-w-[280px] w-full'>GET PLAN</Button>

        </div>
      </div>
    </div>
  );
};

export default TabCard;