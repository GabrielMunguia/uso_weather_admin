import React, { CSSProperties, useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface IProps {
  width?: string;
  delay?: number;
  onClose: (state: boolean) => void;
  isOpen: boolean;
  direction?: 'left' | 'right';
  style?: CSSProperties;
  className?: string;
  showBackdrop?: boolean;
  children: React.ReactNode;
}

const Canvas = ({
  children,
  isOpen,
  onClose,
  direction = 'left',
  className = '',
  style = {},
  showBackdrop = true,
}: IProps) => {
  const [showCanvas, setSetshowCanvas] = useState(isOpen);
  const hanleShowCanvas = () => {
    onClose(!showCanvas);
  };
  useEffect(() => {
    setSetshowCanvas(isOpen);
  }, [isOpen]);

  const containerClasses = `
  
  ${className} 
  ${className.includes('bg-') ? '' : 'bg-white'}
  z-[500] dark:bg-zinc-900
    absolute  top-0 p-3 h-screen  border-r dark:border-r-rose-gray-300 transition-transform duration-300 w-64
    ${
      showCanvas
        ? 'translate-x-0'
        : direction === 'left'
          ? '-translate-x-full'
          : 'translate-x-full'
    }
    ${direction === 'left' ? 'left-0' : 'right-0'}
  
  `;
  return (
    <>
      <div className={containerClasses} style={style}>
        <div className='flex justify-end'>
          <button
            className='text-xl dark:text-gray-300 '
            onClick={hanleShowCanvas}
          >
            <IoCloseOutline />
          </button>
        </div>
        {children}
      </div>
      <div
        className={`absolute left-0 top-0  z-50 h-screen w-full ${
          !showCanvas && ' hidden'
        }    ${showBackdrop && 'bg-black bg-opacity-50'}`}
        onClick={hanleShowCanvas}
      ></div>
    </>
  );
};

export default Canvas;
