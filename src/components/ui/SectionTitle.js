import React from 'react';

const SectionTitle = ({ title, className }) => {
  return (
    <h2 className={`font-unbounded text-3.5xl text-center leading-7 lg:leading-9 tracking-[0.5px]  font-medium lg:font-semibold text-black ${className}`}>{title}</h2>
  );
};

export default SectionTitle;