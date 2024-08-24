import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

export const counterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    handleOpenModal: (state) => {
      state.isModalOpen = true;
    },

    handleCloseModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { handleOpenModal, handleCloseModal } = counterSlice.actions;

export default counterSlice.reducer;
