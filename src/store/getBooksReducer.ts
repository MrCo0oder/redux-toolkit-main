import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "./booksActions";

export interface BooksState {
  booksList: [];
}

const initialState: BooksState = {
  booksList: [],
};

export const booksSlice = createSlice({
  name: "getBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.booksList = action.payload;
    });
  },
});

export default booksSlice.reducer;
