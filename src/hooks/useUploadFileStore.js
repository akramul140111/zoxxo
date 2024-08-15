import { create } from 'zustand';

const defaultState = {
  files: [],
  isSeeMore: false,
  color: '',
  image: null,
};

const useUploadFileStore = create((set) => ({
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
  setColor: (via) => {
    return set((st) => ({
      color: via,
    }));
  },
  setImage: (img) => {
    return set((st) => ({
      image: img,
    }));
  },
  reset: () => {
    return set(() => defaultState);
  },
}));

export default useUploadFileStore;
