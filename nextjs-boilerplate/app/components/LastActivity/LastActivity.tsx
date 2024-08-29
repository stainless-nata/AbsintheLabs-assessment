'use client';

import { TransactionContext } from '@/app/utils/contexts';
import { useContext } from 'react';
import { ActivityItem } from '../../utils/types';
import LastActivityItem from './LastActivityItem';

// type LastActivityProps = {
//   activities: ActivityItem[];
// }

const LastActivity = () => {
  let activities: ActivityItem[] = [];
  const transactions = useContext(TransactionContext);
  if (Array.isArray(transactions)) {
    activities = transactions.map(
      (transaction: any): ActivityItem => ({
        activity: 'Transaction',
        point: '100',
        date: new Date(transaction.block_timestamp),
        txid: transaction.transaction_hash,
        extra: 'https://example.com',
      }),
    );
  }
  return (
    <div className="clear mt-[40px] w-full max-lg:left-6">
      <div className="text-text-secondary">Last Activities</div>
      <div className="overflow-auto">
        <table className="mt-[16px] w-full min-w-[1025px] rounded-[12px] text-sm rtl:text-right">
          <thead className="rounded-t-[12px] border-b border-black bg-dark-ele2 text-left text-text-secondary">
            <tr>
              <th className="h-[44px] w-1/4 rounded-tl-[12px] px-6 py-3">
                Activities
              </th>
              <th className="h-[44px] w-1/4 px-6 py-3">Points</th>
              <th className="h-[44px] w-1/4 px-6 py-3">Date</th>
              <th className="h-[44px] w-1/4 rounded-tr-[12px] px-6 py-3">
                TXID
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity: ActivityItem, index) => {
              const d = {
                activity,
                lastItem: index === activities.length - 1,
              };
              return <LastActivityItem {...d} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default LastActivity;
