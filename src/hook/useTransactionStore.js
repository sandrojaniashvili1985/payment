import { create } from 'zustand';

export const useTransactionStore = create((set) => ({
  totalAmount: 0,
  records: 0,
  setTotalAmount: (amount) => set({ totalAmount: amount }),
  setRecords: (records) => set({ records }),
}));

