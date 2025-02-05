import React from 'react';

const SectionSubTitle = ({ subtitle, className }) => {
  return (
    <p className={`font-inter font-normal text-lg leading-5 lg:leading-6 text-secondary-5 text-center ${className}`}>{subtitle}</p>
  );
};

export default SectionSubTitle;