'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import CustomDot from '../Progress/CustomDot';
import './style.css';

type CustomCarouselType = {
  children: React.ReactNode[];
};

const CustomCarousel = ({ children }: CustomCarouselType) => {
  const [displayItems, setDisplayItems] = useState(3);
  const [currentItem, setCurrentItem] = useState(0);
  const [oldItem, setOldItem] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [movXY, setmoveXY] = useState(true);
  const [itemWidth, setItemWidth] = useState(0);
  const carouselRef = useRef(null);
  const childrenWidth = 384;
  const carouselHeight = 100;
  let space = 0;
  if (carouselRef.current) {
    space =
      (carouselRef.current.offsetWidth - childrenWidth * displayItems) /
      (displayItems - 1);
  }
  const realItemCount = !isAnimating
    ? displayItems
    : displayItems + Math.abs(currentItem - oldItem);

  useEffect(() => {
    function onResize() {
      if (carouselRef.current.offsetWidth <= childrenWidth * 2) {
        setDisplayItems(3);
        setmoveXY(false);
      } else if (carouselRef.current.offsetWidth <= childrenWidth * 3) {
        setDisplayItems(2);
        setmoveXY(true);
        setItemWidth(
          carouselRef.current.offsetWidth - childrenWidth * 2 + childrenWidth,
        );
      } else {
        setmoveXY(true);
        setDisplayItems(3);
        setItemWidth(
          (carouselRef.current.offsetWidth - 3 * childrenWidth) / 2 +
            childrenWidth,
        );
      }
    }
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      if (oldItem != currentItem) setIsAnimating(true);
    }
  }, [currentItem]);
  const moveItem = (item: number) => {
    setCurrentItem(item);
  };
  const dotClicked = (num: number) => {
    if (displayItems == 3) moveItem(num);
    else if (displayItems == 2) moveItem(num * 2);
    else moveItem(num);
  };
  const onAnimationCompleted = () => {
    setIsAnimating(false);
    setOldItem(currentItem);
  };

  const jsxMetricItems = new Array(realItemCount).fill(0).map((_, index) => (
    <div key={index} className="carousel-item">
      {
        children[
          (index + Math.min(currentItem, oldItem) + children.length) %
            children.length
        ]
      }
    </div>
  ));

  const jsxCurrentItems = (
    <div
      className={`carousel`}
      style={{
        marginLeft: `${currentItem < oldItem && movXY ? (currentItem - oldItem) * itemWidth : 0}px`,
        marginTop: `${currentItem < oldItem && !movXY ? (currentItem - oldItem) * 80 : 0}px`,
        width: `${movXY ? `${itemWidth * realItemCount - space}px` : '100%'}`,
      }}
    >
      {jsxMetricItems}
    </div>
  );
  return (
    <div className="custom-carousel">
      <div className="carousel-container" ref={carouselRef}>
        {!isAnimating ? (
          jsxCurrentItems
        ) : (
          <motion.div
            animate={{
              x: isAnimating && movXY ? (oldItem - currentItem) * itemWidth : 0,
              y: isAnimating && !movXY ? (oldItem - currentItem) * 80 : 0,
            }}
            layout
            initial={{ x: 0, y: 0 }}
            transition={{ type: 'linear', duration: 0.2 }}
            onAnimationComplete={onAnimationCompleted}
          >
            {jsxCurrentItems}
          </motion.div>
        )}
      </div>
      <div className="carousel-dot">
        {new Array(3).fill(0).map((_, index) => (
          <div className="carousel-dot-item">
            <CustomDot
              active={
                (displayItems == 3 && currentItem >= index) ||
                (displayItems == 2 && currentItem >= index * 2)
              }
              onClick={dotClicked}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
