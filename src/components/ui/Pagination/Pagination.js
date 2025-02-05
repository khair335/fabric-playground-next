import React from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePageNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage === 1) {
      return [1, 2, 3];
    }

    if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const pageNumbers = getVisiblePageNumbers();

  return (
    <div className="flex justify-end items-center mt-4">


      <button
        className="px-4 py-2  rounded disabled:opacity-50 disabled:cursor-not-allowed text-2xl text-primary-10"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />

      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 text-primary-10 font-inter text-base font-semibold leading-5 relative
           ${number === currentPage ? 'text-secondary-4' : ''
            }`}
          disabled={typeof number === 'string'}
        >
          {number}
        </button>
      ))}

      <button
        className="px-4 py-2  disabled:opacity-50 disabled:cursor-not-allowed text-2xl text-primary-10"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />

      </button>
    </div>
  );
};

export default Pagination;