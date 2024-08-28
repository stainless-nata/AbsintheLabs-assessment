'use client';
import cx from 'classnames';
import { useState } from 'react';

const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cx(
        'relative h-[40px] w-[120px] items-center bg-dark-ele3 text-[14px]',
        isOpen ? 'rounded-t-[12px]' : 'rounded-[12px]',
      )}
    >
      <div className="flex h-full items-center justify-center">
        <button
          className={cx(
            'flex h-[32px] w-[112px] items-center justify-center rounded-[12px] text-white',
            isOpen ? 'bg-dark' : 'bg-dark-ele3',
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="/Icons/8.png"
            className="mr-[8px] h-[18px] w-[18px] rounded-[32px]"
          />
          bongo.eth
        </button>
      </div>
      <div
        className={cx(
          'absolute right-0 w-full rounded-b-[12px] bg-dark-ele3',
          !isOpen ? 'hidden' : '',
        )}
      >
        <ul className="dark:text-gray-200 py-2 text-sm text-white">
          <li>
            <a
              className="align-center w-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="w-full text-center">Sign Out</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileButton;
