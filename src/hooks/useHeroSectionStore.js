import { create } from 'zustand';

const defaultState = {
  files: [],
  isSeeMore: false,
  shareVia: 'email',
};

const useHeroSectionStore = create((set) => ({
  ...defaultState,
  addFiles: (files) => {
    return set((st) => ({ files: [...st.files, ...files] }));
  },
  removeFile: (filename) => {
    return set((st) => ({
      files: st.files.filter((f) => f.name !== filename),
    }));
  },
  toggleSeeMore: (value) => {
    if (typeof value !== 'boolean') {
      set((st) => ({
        isSeeMore: !st.isSeeMore,
      }));
    } else {
      set((st) => ({
        isSeeMore: value,
      }));
    }
  },
  setShareVia: (via) => {
    return set((st) => ({
      shareVia: via,
    }));
  },
  reset: () => set(() => ({ ...defaultState })),
}));

export default useHeroSectionStore;
