import React from 'react';
import { useForm } from 'react-hook-form';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Button from '../../../components/Button';
import { FiDownload, FiSave } from 'react-icons/fi';

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

const Measurements = () => {
  const { register, handleSubmit } = useForm();
  const [measurements, setMeasurements] = React.useState('M');
  const [units, setUnits] = React.useState('CM');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex gap-6'>
      <div className='flex flex-col gap-4 max-w-[340px] w-full'>
        <div className='flex flex-row gap-2 bg-secondary-1 rounded-xl py-1 px-2 '>
          {
            ['XS', 'S', 'M', 'L', 'XL'].map((item, index) => (
              <div key={index} className=' flex items-center justify-center'>
                <p className={`px-5 py-[10px] w-fit text-center rounded-[10px] font-inter text-sm font-bold leading-[150%] ${item === measurements ? 'bg-primary-10 text-white' : ''}`}>{item}</p>
              </div>
            ))
          }
        </div>
        <div className='flex flex-row gap-2 bg-secondary-1 rounded-xl py-1 px-2 w-fit'>
          {
            ['CM', 'INCH'].map((item, index) => (
              <div key={index} className=' flex items-center justify-center'>
                <p className={`px-5 py-[10px] w-fit text-center rounded-[10px] font-inter text-sm font-bold leading-[150%] ${item === units ? 'bg-primary-10 text-white' : ''}`}>{item}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className='flex flex-col gap-4 flex-1'>
        <div className='flex flex-row gap-2 items-center'>
          <Input placeholder='Enter height' register={register} name='height' label='Height' />
          <IoIosArrowRoundForward className='text-bw-6 text-4xl mt-5' />
          <Input placeholder='' register={register} name='heightCalculatedValue' label='Calculated value' />
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <Input placeholder='Enter Width' register={register} name='width' label='Width' />
          <IoIosArrowRoundForward className='text-bw-6 text-4xl mt-5' />
          <Input placeholder='' register={register} name='widthCalculatedValue' label='Calculated value' />
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <Input placeholder='shoulder size' register={register} name='height' label='shoulder size' />
          <IoIosArrowRoundForward className='text-bw-6 text-4xl mt-5' />
          <Input placeholder='' register={register} name='heightCalculatedValue' label='Calculated value' />
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <Input placeholder='Enter height' register={register} name='height' label='Waist' />
          <IoIosArrowRoundForward className='text-bw-6 text-4xl mt-5' />
          <Input placeholder='' register={register} name='heightCalculatedValue' label='Calculated value' />
        </div>

        <div className='flex justify-end'>
          <Button
            variant="Secondary"
            size="Medium"
            icon={<FiDownload className='text-xl' />}
            iconPosition='left'
          >Download PDF</Button>
        </div>
      </div>
    </form>
  );
};

export default Measurements;