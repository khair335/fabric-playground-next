"use client"
import React from 'react';
import Button from '@/components/ui/Button';
import { IoChatbox } from 'react-icons/io5';
import { FiCheck } from 'react-icons/fi';
import { PiCalendarDotsLight } from 'react-icons/pi';
import Subscription from './Subscription';
const Label = ({ label }) => {
  return (
    <div className='font-inter text-xs font-bold leading-[18px] text-secondary-8 tracking-[0.5px]'>
      {label}
    </div>
  )
}
const Value = ({ value }) => {
  return (
    <div className='font-inter text-base font-normal leading-[24px] text-black tracking-[0.5px]'>
      {value}
    </div>
  )
}

export const SectionTitle = ({ title }) => {
  return (
    <h6 className='text-lg font-normal leading-[20px] text-secondary-8 tracking-[0.5px] font-unbounded mt-5'>
      {title}
    </h6>
  )
}
const Profile = ({ onEdit }) => {

  const generalInfo = [
    { label: 'First name', value: 'Bruce' },
    { label: 'Last name', value: 'Wayne' },
    { label: 'Gender', value: 'Male' },
    { label: 'Birthdate', value: 'May 18, 1998' },
    { label: 'Language', value: 'English' },
  ]

  const contactInfo = [
    { label: 'Email', value: 'brucewayne@mail.com' },
    { label: 'Phone Number', value: '+1234567890' },
    { label: 'Location', value: 'Los Angeles, USA' },
  ]

  const newsletterPreferences = [
    { label: 'New content releases (Weekly)', value: true },
    { label: 'Updates on top topics and resources', value: true },
    { label: 'Upcoming live events - monthly', value: false },
    { label: 'Product news', value: false },
  ]
  return (
    <div className='max-w-8xl mx-auto w-full px-[50px] py-12'>
      <div className='flex flex-row justify-between items-center mb-8'>
        <div className='font-unbounded text-6.5xl font-normal leading-[68px] text-black tracking-[0.5px]'>Profile details</div>
        <Button variant='Primary' size='Medium' onClick={onEdit}>Edit</Button>
      </div>

      <div className='flex flex-row'>
        <div className='flex-1'>
          <div className='flex flex-col items-start mb-8'>
            <img src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Profile'
              className='w-full max-w-[100px] h-[100px] rounded-[100px] ' />
            <SectionTitle title='General info' />
            <div className='flex flex-row gap-4 flex-wrap w-full my-5'>
              {generalInfo.map((item, index) => (
                <div key={index} className='flex flex-col gap-1 items-start w-[calc(100%/3-16px)]'>
                  <Label label={item.label} />
                  <Value value={item.value} />
                </div>
              ))}
            </div>
            <SectionTitle title='Contact info' />
            <div className='flex flex-row gap-4 flex-wrap w-full my-5'>
              {contactInfo.map((item, index) => (
                <div key={index} className='flex flex-col gap-1 items-start w-[calc(100%/3-16px)]'>
                  <Label label={item.label} />
                  <Value value={item.value} />
                </div>
              ))}
            </div>

          </div>

          <div>
            <SectionTitle title='Newsletter preferences' />
            <div className='flex flex-row gap-4 flex-wrap w-full my-5'>
              {newsletterPreferences.map((item, index) => (
                <div key={index} className='flex flex-row gap-2.5 items-center  w-[calc(100%/3-16px)] '>
                  <div className='max-w-5 w-full h-5  rounded border border-bw-3 bg-bw-2 flex items-center justify-center'>
                    {
                      item.value && <FiCheck className='text-bw-4' />
                    }
                  </div>
                  <div className='text-base font-normal leading-[24px] text-black tracking-[0.5px]'>{item.label}</div>

                </div>
              ))}
            </div>
          </div>

        </div>
        <div className='max-w-[340px] pl-8 w-full border-l-[1px] border-gray-200'>
          <Subscription />
        </div>

      </div>
    </div>
  );
};

export default Profile;