// import React from 'react';
import { useQuery } from 'react-query';
import TransactionRow from './TransactionRow';
import axios from 'axios';
import { useTransactionStore } from '../hook/useTransactionStore';
import { useEffect } from 'react';

const TransactionList = () => {
  const { isLoading, error, data: transactions } = useQuery('transactions', () =>
    axios.get('https://6069981de1c2a10017544b18.mockapi.io/transactions')
  );

  const setTotalAmount = useTransactionStore((state) => state.setTotalAmount);
  const setRecords = useTransactionStore((state) => state.setRecords);

  const totalAmount = transactions?.data.reduce((acc, transaction) => acc + transaction.amount, 0);
  useEffect(() => {
    setTotalAmount(totalAmount);
    setRecords(transactions?.data.length);

  }, [transactions, setTotalAmount, totalAmount, setRecords]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div className='w-1/2 mt-4 h-80 overflow-y-scroll'>
      {transactions.data.map(transaction => (
        <TransactionRow key={transaction.id} transaction={transaction} />
      ))}

    </div>
  );
};

export default TransactionList;
