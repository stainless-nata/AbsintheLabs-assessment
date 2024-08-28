'use client';

import { reduceString } from '@/app/utils/reduceString';
import { ActivityItem } from '@/app/utils/types';
import cx from 'classnames';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  FaArrowRightArrowLeft,
  FaArrowUpRightFromSquare,
  FaLink,
} from 'react-icons/fa6';
import RoundBadge from '../RoundBadge';

type LastActivityItemProps = {
  activity: ActivityItem;
  lastItem: boolean;
};

const LastActivityItem = (props: LastActivityItemProps) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5 seconds
  };
  return (
    <tr
      className={cx(
        'h-[64px] odd:bg-dark-ele1 even:bg-dark-ele2',
        props.lastItem ? 'rounded-b-[12px]' : 'border-b',
      )}
    >
      <td
        className={cx(
          'px-6 py-4 text-[14px] text-text-primary',
          props.lastItem ? 'rounded-bl-[12px]' : '',
        )}
      >
        <div className="flex items-center">
          {props.activity.activity === 'Transaction' ? (
            <FaArrowRightArrowLeft className="mr-2 inline-block w-[-100%]" />
          ) : (
            <FaLink className="mr-2 inline-block" />
          )}
          {props.activity.activity}
        </div>
      </td>
      <td className="px-6 py-4">
        <RoundBadge>{props.activity.point}</RoundBadge>
      </td>
      <td className="px-6 py-4 text-[14px] text-text-secondary">
        {props.activity.date.getDate()}.{props.activity.date.getMonth() + 1}.
        {props.activity.date.getFullYear()}
        <div className="mx-[5px] inline-flex h-[24px] w-[65px] items-center justify-center rounded-[32px] bg-dark-ele3 text-[12px]">
          {props.activity.date.getHours()}:{props.activity.date.getMinutes()}:
          {props.activity.date.getSeconds()}
        </div>
      </td>
      <td
        className={cx(
          'px-6 py-4 text-text-secondary',
          props.lastItem ? 'rounded-br-[12px]' : '',
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex w-[150px] items-center justify-between">
            {reduceString(props.activity.txid)}
            <CopyToClipboard text={props.activity.txid} onCopy={handleCopy}>
              <button className="ml-4 flex h-[24px] w-[47px] items-center justify-center rounded-[32px] bg-dark-ele3 font-[12px]">
                {copied ? 'Copied' : 'Copy'}
              </button>
            </CopyToClipboard>
          </div>
          <a href={props.activity.extra}>
            <FaArrowUpRightFromSquare className="mr-2 inline-block" />
          </a>
        </div>
      </td>
    </tr>
  );
};

export default LastActivityItem;
