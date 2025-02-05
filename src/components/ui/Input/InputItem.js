import React from 'react';
import styles from './InputItem.module.scss'; // Assuming you have a CSS module for styles

const InputItem = ({ label, required }) => {
  // Default styles for the label
  const defaultLabelStyles = {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.85)',
  };

  // Styles for the required asterisk
  const requiredStyles = {
    color: 'red',
    marginRight: '4px',
    display: 'inline',
  };

  return (
    <div className='text-xs font-bold leading-[150%] text-black uppercase pb-1'>
      <span style={defaultLabelStyles}>
        {required && <span style={requiredStyles}>*</span>}
        {label}
      </span>
    </div>
  );
};

export default InputItem;