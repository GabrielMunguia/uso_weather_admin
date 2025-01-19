'use client';
import React, { useState, useEffect } from 'react';

interface IProps {
  initialState: boolean;
  onStateChange?: (state: boolean) => void;
  children?: React.ReactNode | React.ReactNode[];
}
const MegaCanvas = ({ initialState, onStateChange, children }: IProps) => {
  const [showModal, setShowModal] = useState(initialState);
  const handleModal = () => {
    setShowModal(!showModal);
    onStateChange && onStateChange(!showModal);
  };
  useEffect(() => {
    setShowModal(initialState);
  }, [initialState]);

  return (
    <>
      <div
        className={`absolute left-0 top-0  hidden lg:flex ${!showModal && ' h-0'}`}
      >
        {children}
      </div>
      {showModal && (
        <div
          className='absolute left-0 top-0  z-50 hidden h-screen w-full bg-black  bg-opacity-50 lg:block'
          onClick={handleModal}
        ></div>
      )}
    </>
  );
};

export default MegaCanvas;
