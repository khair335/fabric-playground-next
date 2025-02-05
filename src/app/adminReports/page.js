"use client"
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { MdDownload } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import SectionMiniTitle from '@/components/ui/SectionMiniTitle';
import InputCalender from '@/components/ui/Input/InputCalender';
import Button from '@/components/ui/Button';

const data = [
  { name: 'Users', value: 227, color: '#7D3C98' },
  { name: 'Students', value: 200, color: '#5DADE2' },
  { name: 'Teachers', value: 18, color: '#F4D03F' },
  { name: 'Other', value: 9, color: '#F5B041' },
  { name: 'Active', value: 50, color: '#58D68D' },
  { name: 'Locked', value: 10, color: '#EC7063' },
];

const AdminReports = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className='max-w-8xl mx-auto w-full px-[50px] py-12'>
      <div className='font-unbounded text-6.5xl font-normal leading-[68px] text-black tracking-[0.5px]'>Admin console</div>
      <div className='flex justify-between pt-10'>
        <div className='w-1/3 border-r-[1px] border-bw-2 pr-9'>
          <SectionMiniTitle title='Admin Reports and Usage' />
          <div className='flex items-center gap-5 py-4 border-b-[1px] border-bw-2'>
            <div className='flex flex-col items-start flex-1'>
              <h6 className='text-2xl font-semibold leading-7 text-primary-10 tracking-[0.5px] font-unbounded'>227</h6>
              <p className='text-xs font-bold leading-[150%] text-secondary-6 tracking-[0.5px] font-inter uppercase'>Total users</p>
            </div>
            <div className='w-[1px] h-[50px] bg-bw-2'></div>
            <div className='flex flex-col items-start flex-1'>
              <h6 className='text-2xl font-semibold leading-7 text-primary-10 tracking-[0.5px] font-unbounded'>200</h6>
              <p className='text-xs font-bold leading-[150%] text-secondary-6 tracking-[0.5px] font-inter uppercase'>Total Students</p>
            </div>
          </div>
          <div className='flex items-center gap-5 py-4 '>
            <div className='flex flex-col items-start flex-1'>
              <h6 className='text-2xl font-semibold leading-7 text-primary-10 tracking-[0.5px] font-unbounded'>18</h6>
              <p className='text-xs font-bold leading-[150%] text-secondary-6 tracking-[0.5px] font-inter uppercase'>Total Teachers</p>
            </div>
            <div className='w-[1px] h-[50px] bg-bw-2'></div>
            <div className='flex flex-col items-start flex-1'>
              <h6 className='text-2xl font-semibold leading-7 text-primary-10 tracking-[0.5px] font-unbounded'>9</h6>
              <p className='text-xs font-bold leading-[150%] text-secondary-6 tracking-[0.5px] font-inter uppercase'>Other</p>
            </div>
          </div>

        </div>
        <div className='w-1/3 px-9 border-r-[1px] border-bw-2'>
          <SectionMiniTitle title='Usage Report' />
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={60}
              outerRadius={80}
              fill='#8884d8'
              paddingAngle={5}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className='w-1/3 pl-9'>
          <SectionMiniTitle title='Download Report' />
          <div className='flex gap-5 pt-10 pb-5'>
            <div className='flex-1'>
              <InputCalender
                label="Start Date"
                name="date"
                selectedDate={startDate}
                placeholder="Select a date"
                disabled={false}
                onChange={handleStartDateChange}
              />
            </div>
            <div className='flex-1'>
              <InputCalender
                label="End Date"
                name="date"
                selectedDate={endDate}
                placeholder="Select a date"
                disabled={false}
                onChange={handleEndDateChange}
              />
            </div>
          </div>

          <div className='flex gap-5'>
            <Button iconPosition='left' icon={<FiDownload  />} className='!gap-1 !px-4' variant='Primary' size='Small'>Download CSV</Button>
            <Button iconPosition='left' icon={<FiDownload  />} className='!gap-1 !px-4' variant='Primary' size='Small'>Download XLS</Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminReports;