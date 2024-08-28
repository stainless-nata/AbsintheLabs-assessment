'use client';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import cx from 'classnames';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import BadgeLayout from './components/BadgeLayout';
import Footer from './components/Footer';
import HeaderNav from './components/HeaderNav';
import LastActivity from './components/LastActivity';
import Preview from './components/Preview';
import { TransactionContext } from './utils/contexts';
import { GET_TRANSACTIONS } from './utils/queries';

const inter = Inter({ subsets: ['latin'] });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8080/v1/graphql',
  }),
});

const fetchData = async () => {
  const response = await fetch('http://localhost:8080/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': 'zxNnubCXe5ndyz8wco7okbeVlRCr91sYQaL4E6rNdKQ=',
    },
    body: JSON.stringify({
      query: GET_TRANSACTIONS,
    }),
  });
  if (!response.ok) {
  }
  const data = await response.json();
  return data.data;
};

export default function Home() {
  const [transactions, setTransactions] = useState(0);
  useEffect(() => {
    fetchData().then((data) => {
      setTransactions(data.logs);
    });
  }, []);
  return (
    <TransactionContext.Provider value={transactions}>
      <div className={cx('bg-dark', inter.className)}>
        <HeaderNav></HeaderNav>
        <div className="flex min-w-[488px] justify-center">
          <div className="flex w-full flex-col items-center justify-center max-lg:px-6 lg:w-[1020px] xl:w-[1250px]">
            <LastActivity></LastActivity>
            <Preview></Preview>
            <BadgeLayout></BadgeLayout>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </TransactionContext.Provider>
  );
}
