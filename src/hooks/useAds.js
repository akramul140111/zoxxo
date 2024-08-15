import { create } from 'zustand';



const useAds = create((set) => ({
  allCampaigns: [],
  setAllCampaigns: (val) => set(() => ({ allCampaigns: val })),
  setCampaign: (index, val) =>
    set((st) => ({
      allCampaigns: [
        ...st.allCampaigns.slice(0, index),
        {
          ...st.allCampaigns[index],
          ...val,
        },
        ...st.allCampaigns.slice(index + 1),
      ],
    })),
  updateCampaignById: (_id, val) =>
    set((st) => {
      const index = st.allCampaigns.findIndex((c) => c._id === _id);
      return {
        allCampaigns: [
          ...st.allCampaigns.slice(0, index),
          {
            ...st.allCampaigns[index],
            ...val,
          },
          ...st.allCampaigns.slice(index + 1),
        ],
      };
    }),
}));

export default useAds;
