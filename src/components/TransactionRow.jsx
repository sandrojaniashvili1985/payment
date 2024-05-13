/* eslint-disable react/prop-types */
const TransactionRow = ({ transaction, expanded, onClick }) => {

  const handleClick = () => {
    onClick(transaction.id);
  };

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return `on ${date.toLocaleDateString('en-US', options)}`;
  };

  return (
    <div onClick={handleClick} className={`${expanded ? " bg-gray-100" : "bg-white"} border-b flex justify-between pt-2 pr-2 pl-4 pb-2 `} >
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
