import { create } from "zustand"



const UsePaymentMenu = create((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set({ isOpen: false }),
}))

export default UsePaymentMenu;