import React from 'react';

const InputDropDown = ({ label, register, name, options, disabled, onChange }) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>
      <select
        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
        {...register(name)}
        disabled={disabled}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputDropDown;