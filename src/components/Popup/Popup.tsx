import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { PopupProps } from '../../types/types';

const Popup: React.FC<PopupProps> = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div
          onClick={handleOrderPopup}
          className="h-screen w-screen fixed
        top-0 left-0 z-20 backdrop-blur-sm bg-black/50"
        >
          <div
            className="fixed top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          bg-white dark:bg-gray-900 dark:text-white
          duration-200 p-4 rounded-md shadow-md w-[300px]"
          >
            {/* header */}
            <div
              className="flex items-center
            justify-between"
            >
              <h1>Order Your Book</h1>
              <div className="">
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => handleOrderPopup()}
                />
              </div>
            </div>
            {/* Form body */}
            <div className="mt-4">
              <input
                className="w-full rounded-md 
                border border-gray-300 
                dark:border-gray-500 dark:bg-gray-800
                px-2 py-1 mb-4"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full rounded-md 
                border border-gray-300 
                dark:border-gray-500 dark:bg-gray-800
                px-2 py-1 mb-4"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full rounded-md 
                border border-gray-300 
                dark:border-gray-500 dark:bg-gray-800
                px-2 py-1 mb-4"
                type="text"
                placeholder="Address"
              />
              <div className="flex justify-center">
                <button
                  className="bg-primary
              text-white px-8 py-2 rounded-md"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
