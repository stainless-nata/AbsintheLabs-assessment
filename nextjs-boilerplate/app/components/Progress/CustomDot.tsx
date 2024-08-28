import { useRef } from 'react';

type CustomDotProps = {
  active: boolean;
  onClick: (i: number) => void;
  index: number;
};

const CustomDot = ({ active, onClick, index }: CustomDotProps) => {
  const dotRef = useRef(null);

  // const dotStyles = `w-[392px] h-[5px] rounded-[32px] bg-primary cursor-pointer transition-all duration-300`;
  const dotStyles = `h-[5px] rounded-[32px] bg-${active ? 'primary' : 'dark-ele3'} cursor-pointer transition-all duration-300`;

  return (
    <div
      ref={dotRef}
      className={dotStyles}
      onClick={() => onClick(index)}
    ></div>
  );
};

export default CustomDot;
