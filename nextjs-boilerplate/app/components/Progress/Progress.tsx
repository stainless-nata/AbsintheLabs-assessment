'use client';

import { useRef, useState } from 'react';
import CustomCarousel from '../CustomCarousel';
import MetricItem from '../MetricItem';
import './style.css';

const Progress = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCounts = 5;

  return (
    <div className="mb-2 px-4">
      <div className="flex justify-between max-md:block">
        <div className="text-[14px]">
          <span className="text-white">How to Earn: </span>
          <span className="text-text-secondary">
            Complete the actions for the badge, no specific order needed.
          </span>
        </div>
        <div className="mr-1 flex max-md:mt-1 max-md:w-full max-md:justify-between">
          <div className="mr-[5px] flex h-[24px] w-[101px] items-center justify-center rounded-[32px] bg-dark-ele3 text-[12px] text-text-secondary max-md:grow">
            1/3 Completed
          </div>
          <div className="flex h-[24px] w-[138px] items-center justify-center rounded-[32px] bg-primary-dark text-[12px] text-primary-light max-md:grow">
            Total Earning: 3000
          </div>
        </div>
      </div>
      <div>
        <div className="slider-container mt-[10px]" ref={sliderRef}>
          <CustomCarousel>
            <MetricItem
              value="Provide at least $10 Liquidity to USDT/ETH"
              isCompleted={true}
            />
            <MetricItem
              value="Provide at least $20 Liquidity to USDT/ETH"
              isCompleted={false}
            />
            <MetricItem
              value="Provide at least $30 Liquidity to USDT/ETH"
              isCompleted={false}
            />
            <MetricItem
              value="Provide at least $40 Liquidity to USDT/ETH"
              isCompleted={false}
            />
            <MetricItem
              value="Provide at least $50 Liquidity to USDT/ETH"
              isCompleted={false}
            />
          </CustomCarousel>
        </div>
      </div>
    </div>
  );
};

export default Progress;
