import React from 'react';

interface IProps {
  show: boolean;
  delay?: number;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
}

const MegaCanvasLevel = ({
  show,
  delay = 100,
  children,
  className,
  style,
}: IProps) => {
  return (
    <div
      style={{ ...style }}
      className={`relative overflow-y-auto transition-all ease-in-out delay-${delay} left-0 top-0 z-[500] h-screen w-[20em] border border-r-black bg-white p-3 ${
        show ? 'translate-x-0 opacity-100' : '-translate-x-[100em]  opacity-0'
      } duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default MegaCanvasLevel;
