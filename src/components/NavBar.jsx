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
    <div className=' bg-white  md:p-2 flex justify-between items-center'>
      <div className="md:mr-4 py-2 px-2 border-r border-gray-300">
        <button onClick={() => onOpen()} className="text-blue-400 flex items-center">
          <IoAddCircleOutline size="1.5em" className="mr-2" />
          Add Payment
        </button>
      </div>
      <div className="flex items-center">
        <div className=" flex items-center mr-2 border-r border-gray-300 py-3 md:py-0">
          <CiSearch size="1.5em" className="m-2" />
          <input id="searchInput" type="text" placeholder="Filter by any property" className="focus:outline-none py-1 px-2 text-xs " />
        </div>
        <button onClick={handleFilter} className="px-4 text-white bg-blue-400 rounded-full ">Filter</button>
      </div>
    </div>
  );
}


export default NavBar;


