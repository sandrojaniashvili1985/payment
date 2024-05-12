/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState } from 'react';

const TransactionRow = ({ transaction }) => {
  const [expanded, setExpanded] = useState(false);

  const handleRowClick = () => {
    setExpanded(!expanded);
  };

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return `on ${date.toLocaleDateString('en-US', options)}`;
  };

  return (
    <div onClick={handleRowClick} className={`${expanded ? " bg-gray-200" : "bg-white"} border-b flex justify-between pt-2 pr-2 pl-4 pb-2`} >
      <div>
        <div>{transaction.title}</div>
        <div className=' text-xs border-blue-300 border-[1px] rounded-full text-blue-400 px-2 py-1 mt-2'>{transaction.category}</div>
        {expanded && <div className=''>Comment: <p>{transaction.comment}</p></div>}
      </div>
      <div>
        <div className=' text-xs'>{formatDate(transaction.createdAt)}</div>
        <div className='text-right text-red-400' >-{transaction.amount} <p>GEL</p></div>
      </div>
    </div>
  );
};

export default TransactionRow;
