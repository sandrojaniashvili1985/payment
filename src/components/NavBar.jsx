/* eslint-disable react/prop-types */
import { IoAddCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import UsePaymentMenu from "../hook/usePaymentMenu";
const NavBar = ({ setSearchText }) => {
  const { onOpen } = UsePaymentMenu();

  const handleFilter = () => {
    setSearchText(document.getElementById('searchInput').value);
  };

  return (
    <div className='w-1/2 bg-white p-2 flex justify-between'>
      <div className=" py-2 px-2 border-r-gray-300 border-r-[1px]">
        <button
          onClick={() => onOpen()}
          className=" text-blue-400">
          <IoAddCircleOutline
            color="blue-400"
            size="1.5em"
            className="inline-block mr-2"
          />
          Add payment
        </button>
      </div>
      <div className="flex items-center">
        <span className="border-gray-300 border-x-[1px] h-full flex items-center pr-2">
          <CiSearch
            size="1.5em"
            className="inline-block m-2"
          />
          <input id="searchInput" type="text" placeholder="filter by any property"
            className=" focus:outline-none" />
        </span>
        <button onClick={handleFilter} className=" mx-2 px-4 text-white bg-blue-400 rounded-full">Filter</button>
      </div>
    </div>);
}

export default NavBar;