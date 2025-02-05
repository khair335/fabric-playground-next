import React from 'react';

const InputText = ({ label, register, name, placeholder, disabled, onChange }) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>
      <input
        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
        placeholder={placeholder}
        {...(register && register(name))}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;