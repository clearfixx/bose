import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IMenuProps {
  isOpened: boolean;
}

const initialState: IMenuProps = {
  isOpened: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuOpened: (state, action: PayloadAction<{ isOpened: boolean }>) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export default menuSlice.reducer;
export const { setMenuOpened } = menuSlice.actions;
