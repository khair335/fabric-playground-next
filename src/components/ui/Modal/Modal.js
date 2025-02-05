import React, { useState, useEffect } from 'react';
import './Modal.css';
import { IoClose } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';

const Modal = ({ title, children, showCancelButton = true, showSaveButton = true, onSave, onCancel, isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    isVisible && (
      <div className={`fixed inset-0 z-20 flex items-center justify-center bg-white bg-opacity-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`bg-white p-6 shadow-4 rounded-2xl w-[1200px] max-w-[70vw]  transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'} modal-transition`}>
          <div className="flex justify-between items-center">
            <h2 className="font-unbounded text-xl font-semibold leading-6 tracking-[0.5px] text-primary-9">{title}</h2>
            <button className="text-gray-500 hover:text-gray-700" onClick={onCancel}>
              <MdClose className='text-[40px] text-primary-9'/>
            </button>
          </div>
          <div className="max-h-[50vh] overflow-y-auto my-4">
            {children}
          </div>
          {
            (showCancelButton ||  showSaveButton ) && <div className="flex justify-end p-4 border-t">
            {showCancelButton && <button className="mr-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={onCancel}>Cancel</button>}
            {showSaveButton && <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onSave}>Save</button>}
          </div>
          }

        </div>
      </div>
    )
  );
};

export default Modal;