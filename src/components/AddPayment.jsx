/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
import UsePaymentMenu from "../hook/usePaymentMenu";
import InputForm from "./InputForm";

const AddPayment = () => {


  const { isOpen, onClose } = UsePaymentMenu();
  const handleOnClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <>
      {/*main container, the whole model is here*/}
      <div
        className="justify-center pt-6 flex overflow-x-hidden overflow-y-auto
        fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 "
      >
        <div
          className="relative  max-w-80  md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-max
          "
        >
          {/*content*/}
          <div
            className=" translate h-full lg:h-auto md:h-auto border-0  shadow-lg 
            relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            {/*header*/}
            <div className=" p-4  rounded-t"
            >
              <button
                onClick={handleOnClose}
                className=" p-1 border-0 hover:opacity-70 transition absolute right-9"
              >
                <IoMdClose size={18} />
              </button>
              <p className=" text-sm">ADD NEW PAYMENT</p>
            </div>
            <InputForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPayment;