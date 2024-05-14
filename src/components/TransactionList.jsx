/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import TransactionRow from './TransactionRow';
import axios from 'axios';
import AddPayment from './AddPayment';

const TransactionList = ({ searchText, updateTransactionStats }) => {
  const [expandedRowId, setExpandedRowId] = useState(null);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleRowClick = (id) => {
    setExpandedRowId(id === expandedRowId ? null : id);
  };

  const { isLoading, error, data: transactions, refetch } = useQuery('transactions', () =>
    axios.get('https://6069981de1c2a10017544b18.mockapi.io/transactions')
  );

  useEffect(() => {
    if (transactions) {
      // Filter transactions based on the searchText
      const filtered = transactions.data.filter(transaction => {
        // Check if any property value contains the searchText
        return Object.values(transaction).some(value => {
          // Convert values to lowercase for case-insensitive search
          const lowerCaseValue = value.toString().toLowerCase();
          const lowerCaseSearchText = searchText.toLowerCase();
          return lowerCaseValue.includes(lowerCaseSearchText);
        });
      });
      setFilteredTransactions(filtered);
      // Calculate total amount of filtered transactions
      const totalAmount = filtered.reduce((acc, transaction) => acc + transaction.amount, 0);
      // Update totalAmount and records
      updateTransactionStats(totalAmount, filtered.length);
    }
  }, [transactions, searchText, updateTransactionStats]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Render only the filtered transactions if searchText is not empty
  const renderedTransactions = searchText ? filteredTransactions : transactions.data;

  return (
    <div className='w-full mt-4 h-max max-h-80 overflow-y-scroll'>
      {renderedTransactions.map(transaction => (
        <TransactionRow
          key={transaction.id}
          transaction={transaction}
          expanded={transaction.id === expandedRowId}
          onClick={handleRowClick} />
      ))}
      <AddPayment onSuccess={refetch} />
    </div>
  );
};

export default TransactionList;