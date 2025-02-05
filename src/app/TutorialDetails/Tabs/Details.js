import React from 'react';
import Title from './Title';
import Descriptions from './Descriptions';

const Details = () => {
  return (
    <div className='flex gap-10'>
      <div className='w-[calc(50%-20px)] flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <Title title='Categories' />
          <Descriptions description='Sewing' />
        </div>
        <div className='flex flex-col gap-1'>
          <Title title='Steps' />
          <div className='flex flex-col gap-1'>
            <div className='flex flex-row items-center gap-1'>
              <div className='font-inter text-xs font-normal leading-[150%] text-primary-10 uppercase'>Step 1:</div>
              <p className='font-inter text-sm font-normal leading-[150%] text-black'>Preparing the Fabric (00:00 - 03:00)</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
              <div className='font-inter text-xs font-normal leading-[150%] text-primary-10 uppercase'>Step 2:</div>
              <p className='font-inter text-sm font-normal leading-[150%] text-black'>Pinning the Zipper (03:01 - 06:30)</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
              <div className='font-inter text-xs font-normal leading-[150%] text-primary-10 uppercase'>Step 3:</div>
              <p className='font-inter text-sm font-normal leading-[150%] text-black'>Sewing the Zipper (06:31 - 12:00)</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
              <div className='font-inter text-xs font-normal leading-[150%] text-primary-10 uppercase'>Step 4:</div>
              <p className='font-inter text-sm font-normal leading-[150%] text-black'>Finishing the Edges (12:01 - 15:30)</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <Title title='Thread' />
          <Descriptions description='Cotton, Polyester' />
        </div>
        <div className='flex flex-col gap-1'>
          <Title title='Fabrics' />
          <Descriptions description='Cotton, Polyester' />
        </div>
      </div>
      <div className='w-[calc(50%-20px)] flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <Title title='Gender' />
          <Descriptions description='Female' />
        </div>
        <div className='flex flex-col gap-1'>
          <Title title='Thread' />
          <ul className='list-disc pl-7'>
            <li className=''><Descriptions description='Sewing Machine' /></li>
            <li className=''><Descriptions description='Seam Ripper' /></li>
            <li className=''><Descriptions description='Thread' /></li>
            <li className=''><Descriptions description='Needle' /></li>
          </ul>
        </div>
        <div className='flex flex-col gap-1'>
          <Title title='Needle' />
          <Descriptions description='Regular' />
        </div>
      </div>
    </div>
  );
};

export default Details;