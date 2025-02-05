import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputCalender = ({ label, name, selectedDate, onChange, disabled }) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>
      <div className='relative mt-1'>
        <DatePicker
          selected={selectedDate}
          onChange={onChange}
          disabled={disabled}
          className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 appearance-none focus:border-primary-500 sm:text-sm'
        />
        <FaRegCalendarAlt className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
      </div>
    </div>
  );
};

export default InputCalender;