import { QueryClient, QueryClientProvider } from 'react-query';
import TransactionList from './components/TransactionList';
import NavBar from './components/NavBar';
import ToasterProvider from './provider/ToasterProvider';
import { useState } from 'react';


const queryClient = new QueryClient();

function App() {
  const [searchText, setSearchText] = useState('');
  const [totalAmount, setTotalAmount] = useState(0); // State to hold total amount
  const [records, setRecords] = useState(0); // State to hold number of records found

  // Function to update totalAmount and records
  const updateTransactionStats = (totalAmount, records) => {
    setTotalAmount(totalAmount);
    setRecords(records);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-blue-100 flex flex-col justify-center items-center h-screen">
        <ToasterProvider />
        <NavBar setSearchText={setSearchText} />
        <h2 className='text-xl w-1/2 m-3'>
          <span className='mr-2'>{records}</span>
          records found
        </h2>
        <TransactionList
          searchText={searchText}
          updateTransactionStats={updateTransactionStats} // Pass the callback function
        />
        <div className='w-1/2 bg-blue-400 pt-2 pr-1'>
          <p className='text-right'>Total:</p>
          <p className='text-right'>{totalAmount}</p>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
