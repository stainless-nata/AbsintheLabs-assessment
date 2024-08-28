'use client';

import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import LogoButton from '../LogoButton';
import ProfileButton from '../ProfileButton';
import TabButton from '../TabButton';

const HeaderNav = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const navRef = useRef(null);
  const ref = useRef(null);
  const showNav = () => {
    if (navRef.current.style.display === 'block') {
      navRef.current.style.display = 'none';
    } else {
      navRef.current.style.display = 'block';
    }
  };
  useEffect(function mount() {
    function onResize() {
      if (window.innerWidth < 1024) {
        navRef.current.style.width = ref.current.offsetWidth - 48 + 'px';
      } else {
        navRef.current.style = '';
      }
    }
    window.addEventListener('resize', onResize);
    return function unMount() {
      window.removeEventListener('resize', onResize);
    };
  });

  return (
    <div className="flex min-w-[488px] justify-center">
      <div
        ref={ref}
        className="z-10 flex w-full items-center justify-center justify-between bg-transparent-dark py-2 max-lg:bg-dark-ele1 max-lg:px-6 lg:w-[1020px] xl:w-[1250px]"
      >
        <div className="relative flex h-[72px] w-full items-center">
          <LogoButton />
          <nav
            className="bg-transparent-dark max-lg:absolute max-lg:inset-x-0 max-lg:top-[90px] max-lg:hidden max-lg:rounded-[12px] max-lg:bg-dark-ele1 max-lg:p-4"
            ref={navRef}
          >
            <ul className="flex max-lg:flex-wrap max-lg:justify-between">
              <TabButton
                title="Dashboard"
                link="/"
                isActive={selectedItem == 0}
              />
              <TabButton title="Tasks" link="/" isActive={selectedItem == 1} />
              <TabButton title="Badges" link="/" isActive={selectedItem == 2} />
              <TabButton
                title="Leaderboard"
                link="/"
                isActive={selectedItem == 3}
              />
              <TabButton
                title="Connections"
                link="/"
                isActive={selectedItem == 4}
              />
            </ul>
          </nav>
        </div>
        <div className="flex">
          <button className="mr-[10px] h-[40px] w-[112px] rounded-[32px] border-[2px] border-primary-light text-[14px] text-text-secondary max-sm:hidden">
            How It Works
          </button>
          <ProfileButton />
          <button
            className="hidden pl-[10px] max-lg:inline-block"
            onClick={() => showNav()}
          >
            <FaBars className="text-[24px] text-text-secondary" />
          </button>
        </div>
      </div>
      <div className="absolute top-[80px] z-0 h-[1px] w-full bg-dark-ele1"></div>
    </div>
  );
};

export default HeaderNav;
