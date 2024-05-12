import { QueryClient, QueryClientProvider } from 'react-query';
import TransactionList from './components/TransactionList';
import { useTransactionStore } from './hook/useTransactionStore';
import NavBar from './components/NavBar';

const queryClient = new QueryClient();

function App() {
  const { totalAmount } = useTransactionStore((state) => state);
  const { records } = useTransactionStore((state) => state);

  return (
    <QueryClientProvider client={queryClient}>
      <div className=" bg-blue-100 flex flex-col justify-center items-center h-screen">
        <NavBar />
        <h2 className='text-xl w-1/2 m-3'>
          <span className='mr-2'>{records}</span>
          records found
        </h2>
        <TransactionList />
        <div className='w-1/2 bg-blue-400 pt-2 pr-1'>
          <p className=' text-right'>Total:</p>
          <p className=' text-right'>{totalAmount}</p>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
