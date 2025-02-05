import React from 'react';
// import './WhyUs.css';
import clothImg from '../../assets/landing/cloth.png';
import sewingMachineImg from '../../assets/landing/machine.png';
import clothCutImg from '../../assets/landing/tshirt 2.png';
import Button from '../ui/Button';

import { IoIosArrowForward } from 'react-icons/io';
import SectionTitle from '../ui/SectionTitle';
import Image from 'next/image';

const WhyUs = () => {
  const Title = ({ value }) => {
    return (
      <h3 className='text-left font-unbounded text-lg leading-5 tracking-[0.5px] text-secondary-8  font-normal pb-3'>{value}</h3>
    );
  };

  const Description = ({ value }) => {
    return (
      <p className='text-left font-inter font-normal text-sm leading-[21px] text-secondary-6 '>{value}</p>
    );
  };
  const CardHeader = ({ children, className }) => {
    return (
      <div className={`max-w-full lg:max-w-[281px] w-full ${className}`}>
        {children}
      </div>
    );
  };
  return (
    <section className="max-w-8xl mx-auto w-full pb-10 lg:pb-20 pt-[170px] px-4 lg:px-12.5 border-b border-bw-3 why-us" id='why-us'>

      <SectionTitle title='Why Us' className="!text-2.5xl lg:!text-3.5xl !pb-4 lg:!pb-10" />
      <div className="flex flex-wrap lg:flex-nowrap  gap-5">
        <div className=" bg-secondary-1 rounded-lg.5 pl-4 lg:pl-5 xl:pl-12 pt-4 lg:pt-12 flex flex-col max-w-full md:max-w-[calc(50%-20px)] lg:max-w-[740px] w-full h-[260px] lg:h-[580px] overflow-hidden">
          <CardHeader>
            <Title value="Extensive collection of fabrics for your very special experiments" />
            <Description value="More than 3000 possible materials and an infinity of options for combining them with patterns" />
          </CardHeader>
          <div className="flex-1 flex justify-end">
            <Image width={1200} height={410} src={clothImg} className='max-w-[276px] lg:max-w-[655px] w-full h-[168px] lg:h-[410px] -mt-4 lg:mt-0' alt="Stacked colorful fabrics" />
          </div>
        </div>

        <div className="max-w-full md:max-w-[calc(50%-20px)] lg:max-w-[360px] w-full bg-green-1 rounded-2xl flex flex-col h-[260px] lg:h-[580px] pt-4 lg:pt-10 overflow-hidden">
          <CardHeader className="mx-auto px-0 lg:px-2 xl:px-0">
            <Title value="Unique cuts of clothes and accessories" />
            <Description value="Automatic selection of measurements depending on the type of cut and size" />
          </CardHeader>
          <div className="flex justify-end items-end h-full flex-1">
            <Image width={1200} height={406} src={clothCutImg} alt="Green fabric cut" className='max-w-[245px] lg:max-w-[539px] w-full h-[290px] lg:h-[406px]' />
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col gap-5 lg:gap-10 max-w-full lg:max-w-[360px] w-full">
          <div className="bg-white rounded-2xl border border-secondary-3 pt-4 lg:pt-10 max-w-full md:max-w-[calc(50%-20px)] lg:max-w-[360px] w-full flex flex-col gap-6 flex-1">
            <CardHeader className="mx-auto px-2 xl:px-0">
              <Title value="A collection of useful guides" />
              <Description value="Detailed instructions are adapted for use on modern and popular equipment" />
            </CardHeader>
            <div className="flex justify-end items-end flex-1">
              <Image width={1200} height={406} src={sewingMachineImg} alt="Modern sewing machine" />
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-primary-1 rounded-2xl py-4 lg:py-10 px-4 lg:px-5 xl:px-10 flex-1 items-center w-full md:w-1/2 lg:w-auto">
            <CardHeader className="mx-auto px-0 lg:px-2 xl:px-0">
              <Title value="Start your 30-day trial period now" />
              <Description value="After it ends, access will be restricted unless you choose a plan that suits you" />
            </CardHeader>
            <Button
              variant="Secondary"
              className='!w-full lg:!w-fit'
              size="Big"
              icon={<IoIosArrowForward className="w-7 h-7 " />}
              iconPosition="right" >
              TRY NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;