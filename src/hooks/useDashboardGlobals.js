import { create } from 'zustand';

const useDashboardGlobals = create((set) => ({
  isSidebarOpen: false,
  toggleOpenSideBar: (value) => {
    if (typeof value !== 'boolean') {
      set((st) => ({
        isSidebarOpen: !st.isSidebarOpen,
      }));
    } else {
      set((st) => ({
        isSidebarOpen: value,
      }));
    }
  },
}));

export default useDashboardGlobals;
