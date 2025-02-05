import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { MdOutlineFileUpload } from 'react-icons/md';
import userImg from '@/assets/userImg.png';
import { FiX } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Image from 'next/image';
import Subscription from './Subscription';

const Input = ({ placeholder, register, name, label }) => {
  return (
    <div className='max-w-[337px] w-full'>
      <div className='text-xs font-bold leading-[150%] text-black uppercase pb-1'>{label}</div>
      <input
        className='max-w-[337px] outline-none w-full h-10 bg-white border border-bw-3 rounded-lg px-2 py-[6px] font-inter text-sm font-normal leading-[150%]'
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};
const ProfileEdit = ({ onCancel }) => {

  const [profileImage, setProfileImage] = useState(null);
  useEffect(() => {
    setProfileImage(userImg);
    // setProfileImage('https://s3-alpha-sig.figma.com/img/701e/d97f/be82358888322c19aeba2b96c83fdaa8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jzj-pfyRAz~fhIIl2wnSGbSeVHha7nOPTjlHAmck900K0PtoaQb5mDYU5KfgImElI6B5~e3KBP2HGAyjkJffdDHFbxuX2LumQ6cJWSEr0t1AZluQi7NPp56Mii57UsePSGwzB924NbFHAMU13p3ERbc2hhv7r3gysmXu5Lfisx-i2VSCImg2C0q8SgcqemXFw-TKx1elqlaaEYJInZkYwV-xWZl1I8oBGfImKrnoGOHI6mojhh~W9IvXMDd9tdZffXwO7v8aFZgJ-9jAHtiO3taj3-mj~-6riOaWiTjBe7DNNH4CPy8BU-drIfzGEYUwYRbHn84iY5wrFM4Z-N3nAw__');
  }, []);

  const generalInfoInput = [
    {
      label: 'First Name',
      type: 'text',
      inputType: 'input',
      placeholder: 'First Name',
    },
    {
      label: 'Last Name',
      type: 'text',
      inputType: 'input',
      placeholder: 'Last Name',
    },
    {

    },
    {
      label: 'Gender',
      type: 'text',
      inputType: 'select',
      options: ['Male', 'Female'],
      placeholder: 'Gender',
    },
    {
      label: 'Birthdate',
      type: 'date',
      inputType: 'input',
      placeholder: 'Birthdate',
    },
    {
      label: 'Language',
      type: 'text',
      inputType: 'select',
      options: ['English', 'Spanish'],
      placeholder: 'Language',
    }
  ]
  return (
    <div className='max-w-8xl mx-auto w-full px-[50px] py-12'>
      <div className='flex flex-row justify-between items-center mb-8'>
        <div className='font-unbounded text-6.5xl font-normal leading-[68px] text-black tracking-[0.5px]'>Profile details</div>
      </div>

      <div className='flex flex-row'>
        <div className='max-w-[213px] w-full pr-[46px] border-r-[1px] border-gray-200'>
          <div className='flex items-center mb-8 flex-col'>
            <div className='relative mb-6'>
              <input
                type='file'
                accept='image/*'
                className='hidden'
                id='profileImageInput'
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setProfileImage(event.target.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <label htmlFor='profileImageInput'>
                <Image width={96} height={96} src={profileImage} alt='Profile' className='w-24 h-24 rounded-full cursor-pointer' />
              </label>
              {profileImage !== userImg && (
                <div className='absolute -bottom-1 -right-1 max-w-10 w-full h-10 rounded-full bg-white flex items-center justify-center shadow-md'>
                  <RiDeleteBin6Line
                    className='text-black text-xl cursor-pointer'
                    onClick={() => setProfileImage(userImg)}
                  />
                </div>
              )}
            </div>
            <Button
              variant='Secondary'
              size='Small'
              iconPosition='left'
              icon={<MdOutlineFileUpload className='text-primary-10 text-xl' />}
              className='!gap-[3px]'
              onClick={() => document.getElementById('profileImageInput').click()}
            >
              Upload Image
            </Button>
          </div>

        </div>
        <div className='flex-1 px-10'>

          <div className='mb-8'>
            <div className='text-xl font-bold'>General info</div>
            <div className='flex flex-wrap mt-4'>
              <div className='w-1/2 mb-4 pr-2'>
                <label className='text-sm text-gray-500'>First Name</label>
                <input type='text' className='w-full border border-gray-300 rounded p-2' defaultValue='Bruce' />
              </div>
              <div className='w-1/2 mb-4 pl-2'>
                <label className='text-sm text-gray-500'>Last Name</label>
                <input type='text' className='w-full border border-gray-300 rounded p-2' defaultValue='Wayne' />
              </div>
              <div className='w-1/2 mb-4 pr-2'>
                <label className='text-sm text-gray-500'>Gender</label>
                <input type='text' className='w-full border border-gray-300 rounded p-2' defaultValue='Male' />
              </div>
              <div className='w-1/2 mb-4 pl-2'>
                <label className='text-sm text-gray-500'>Birthdate</label>
                <input type='date' className='w-full border border-gray-300 rounded p-2' defaultValue='1998-05-18' />
              </div>
              <div className='w-1/2 mb-4 pr-2'>
                <label className='text-sm text-gray-500'>Language</label>
                <select className='w-full border border-gray-300 rounded p-2'>
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mb-8'>
            <div className='text-xl font-bold'>Contact info</div>
            <div className='flex flex-wrap mt-4'>
              <div className='w-1/2 mb-4 pr-2'>
                <label className='text-sm text-gray-500'>Email</label>
                <input type='email' className='w-full border border-gray-300 rounded p-2' defaultValue='brucewayne@mail.com' />
              </div>
              <div className='w-1/2 mb-4 pl-2'>
                <label className='text-sm text-gray-500'>Phone Number</label>
                <input type='tel' className='w-full border border-gray-300 rounded p-2' defaultValue='+1234567890' />
              </div>
              <div className='w-full mb-4'>
                <label className='text-sm text-gray-500'>Location</label>
                <input type='text' className='w-full border border-gray-300 rounded p-2' defaultValue='Los Angeles, USA' />
              </div>
            </div>
          </div>

          <div>
            <div className='text-xl font-bold'>Newsletter preferences</div>
            <div className='flex flex-wrap mt-4'>
              <div className='w-full mb-4'>
                <input type='checkbox' className='mr-2' />
                <label>Unsubscribe from all letters</label>
              </div>
              <div className='w-1/2 mb-4'>
                <input type='checkbox' checked className='mr-2' />
                <label>New content releases (Weekly)</label>
              </div>
              <div className='w-1/2 mb-4'>
                <input type='checkbox' className='mr-2' />
                <label>Upcoming live events - monthly</label>
              </div>
              <div className='w-1/2 mb-4'>
                <input type='checkbox' className='mr-2' />
                <label>Product news</label>
              </div>
              <div className='w-1/2 mb-4'>
                <input type='checkbox' checked className='mr-2' />
                <label>Updates on top topics and resources</label>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[340px] pl-8 w-full border-l-[1px] border-gray-200'>
          <Subscription />
        </div>
      </div>

      <div className='flex justify-end mt-8'>
        <Button variant='Secondary' size='Medium' className='mr-4' onClick={onCancel}>Cancel</Button>
        <Button variant='Primary' size='Medium'>Save Changes</Button>
      </div>
    </div>
  );
};

export default ProfileEdit;