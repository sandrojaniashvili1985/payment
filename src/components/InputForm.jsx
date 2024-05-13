import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";
import UsePaymentMenu from "../hook/usePaymentMenu";
import { useState } from "react";


const InputForm = () => {
  const [loading, setLoading] = useState(false);
  const { onClose } = UsePaymentMenu();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      amount: 0,
      category: "",
      date: "",
      comment: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      data.amount = parseFloat(data.amount);
      await axios.post(
        'https://6069981de1c2a10017544b18.mockapi.io/transactions',
        data
      );
      toast.success('Data posted successfully');
      onClose();
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error, show error message, etc.
      toast.error('Error posting data');
    } finally {
      setLoading(false);
    }
  }
  return (<div className="relative p-6 flex-auto text-blue-400">
    <form action="">
      <div className=" grid grid-flow-col grid-cols-3">
        <div className=" mr-2 col-span-2">
          <label htmlFor="title"
            className={`${errors.title ? "text-rose-500" : "text-zinc-600"}`}
          >title</label>
          <input
            type="text"
            name="title"
            disabled={loading}
            id="title"
            {...register("title", { required: true })}
            className={`border border-gray-300 w-full p-2 rounded mt-1
                       ${errors.title ? "border-rose-500" : "border-neutral-300"}
                      ${errors.title ? "focus:border-rose-500" : "focus:border-black"}
                      `}
          />
          {errors.title && (
            <p className="text-sm text-red-500">Title is required.</p>
          )}
        </div>
        <div className=" grid-cols-1">
          <label htmlFor="amount"
            className={`${errors.title ? "text-rose-500" : "text-zinc-600"}`}
          >Amount</label>
          <input
            type="number"
            name="amount"
            disabled={loading}
            id="amount"
            {...register("amount", { required: true })}
            className={`border border-gray-300 w-full p-2 rounded mt-1
                      ${errors.amount ? "border-rose-500" : "border-neutral-300"}
                      ${errors.amount ? "focus:border-rose-500" : "focus:border-black"}
                      `}
          />
          {errors.amount && (
            <p className="text-sm text-red-500">Amount is required.</p>
          )}
        </div>
      </div>
      <div className=" py-2">
        <label htmlFor="category"
          className={`${errors.title ? "text-rose-500" : "text-zinc-600"}`}
        >category</label>
        <select
          name="category"
          disabled={loading}
          id="category"
          {...register("category", { required: true })}
          className={`border border-gray-300 w-full p-2 rounded mt-1
                     ${errors.category ? "border-rose-500" : "border-neutral-300"}
                      ${errors.category ? "focus:border-rose-500" : "focus:border-black"}
                    `}
        >
          <option value="Payment">Payment</option>
          <option value="service">service</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Food">Food</option>
          <option value="Charity">Charity</option>
          <option value="Transport">Transport</option>
        </select>
        {errors.category && (
          <p className="text-sm text-red-500">select category</p>
        )}
      </div>
      <div className=" py-3">
        <label htmlFor="date"
          className={`${errors.title ? "text-rose-500" : "text-zinc-600"}`}
        >Date</label>
        <input
          type="date"
          name="date"
          disabled={loading}
          id="date"
          {...register("date", { required: true })}
          className={`border border-gray-300 w-full p-2 rounded mt-1
                     ${errors.date ? "border-rose-500" : "border-neutral-300"}
                      ${errors.date ? "focus:border-rose-500" : "focus:border-black"}
                    `}
        />
        {errors.date && (
          <p className="text-sm text-red-500">Choose date</p>
        )}
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          name="comment"
          disabled={loading}
          id="comment"
          {...register("comment", { required: true })}
          className="border border-gray-300 w-full p-2 rounded mt-1"
        ></textarea>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          disabled={loading}
          className="bg-blue-400 text-white p-2 rounded px-4 hover:opacity-70 transition "
        >
          CREATE
        </button>
      </div>
    </form>
  </div>);
}

export default InputForm;