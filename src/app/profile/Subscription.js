"use client"
import React from 'react';
import { PiCalendarDotsLight } from 'react-icons/pi';
import Button from '@/components/ui/Button';
import { SectionTitle } from './page';



const Subscription = () => {
  return (
    <div className=''>
          <SectionTitle title='Subscription' />
          <div className='bg-white p-4  mt-5'>
            <div className='flex flex-col gap-3 items-start mt-6 border-b border-bw-3 pb-4'>
              <div className='border border-primary-3 px-3 py-2 rounded w-fit
                  font-unbounded font-semibold text-lg leading-5 text-primary-10
          '>Individual - Pro Plan</div>
              <div className='font-unbounded font-normal text-lg leading-5 tracking-[0.5px] text-primary-10'>$10/month</div>
            </div>

            <div className='mt-6 flex flex-col gap-2'>
              <p className='font-inter font-bold text-sm leading-[21px] text-secondary-6'>Next payment:</p>
              <div className='flex items-center gap-1 '>
                <PiCalendarDotsLight className='text-black text-xl' />
                <p className='font-inter font-normal text-base leading-6 text-black'>September 19, 2024</p>
              </div>
            </div>
            <Button variant='Secondary' size='Small' className='mt-4'>Change Plan</Button>
          </div>
        </div>
  );
};

export default Subscription;