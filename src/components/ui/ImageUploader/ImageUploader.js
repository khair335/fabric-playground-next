import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineFileUpload } from 'react-icons/md';
import { LiaCheckCircle } from "react-icons/lia";
import Button from '../Button';
import Image from 'next/image';


const ImageUploader = ({ label, defaultImage, onImageChange }) => {
  const [image, setImage] = useState(defaultImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
        onImageChange(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='max-w-[294px] w-full flex items-center gap-4'>
      <div className='relative max-w-[160px] w-full '>
        <p className='text-xs block font-bold text-black uppercase leading-[150%] pb-1'>{label}</p>
        <input
          type='file'
          accept='image/*'
          className='hidden'
          id='imageInput'
          onChange={handleImageChange}
        />
        <label htmlFor='imageInput'>
          <Image width={160} height={160} src={image} alt='Profile' className='w-[160px] h-[160px] rounded-full cursor-pointer' />
        </label>
        {image !== defaultImage && (
          <div className='absolute -bottom-1 -right-1 max-w-10 w-full h-10 rounded-full bg-white flex items-center justify-center shadow-md'>
            <RiDeleteBin6Line
              className='text-black text-xl cursor-pointer'
              onClick={() => setImage(defaultImage)}
            />
          </div>
        )}
      </div>
      <div className='flex flex-col gap-4'>
        <Button
          variant='Secondary'
          size='Small'
          iconPosition='left'
          icon={<MdOutlineFileUpload className='text-primary-10 text-xl' />}
          className='!gap-[3px] w-full'
        >
          Upload
        </Button>
        <Button
          variant='Secondary'
          size='Small'
          iconPosition='left'
          icon={<LiaCheckCircle className='text-primary-10 text-xl' />}
          className='!gap-[3px] w-full'
          onClick={() => document.getElementById('imageInput').click()}
        >
          Select
        </Button>
      </div>
    </div>
  );
};

export default ImageUploader;