/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GETALL_BOOK } from "../../apis/apis";
import type { Book } from "../../utils/types";

interface BookPaginationState {
  books: Book[];
  totalPage: number;
}

const initialState: BookPaginationState = {
  books: [],
  totalPage: 0,
};

export const getAllBook = createAsyncThunk(
  "book/getAllBook",
  async ({ page, size, search }: { page: number; size: number; search?: string }) => {
    const response = await axios.get(
      `${API_GETALL_BOOK}?_page=${page}&_limit=${size}&title_like=${search ?? ""}`
    );
    return {
      books: response.data,
      totalPage: Math.ceil(+response.headers["x-total-count"] / size),
    };
  }
);

export const addBook = createAsyncThunk("book/addBook", async (new_book: Book) => {
  const response = await axios.post("http://localhost:8080/books", new_book);
  return response.data;
});

export const deleteBook = createAsyncThunk("book/deleteBook", async (id: number) => {
  await axios.delete(`http://localhost:8080/books/${id}`);
  return id;
});

export const updateBook = createAsyncThunk("book/updateBook", async (book: Book) => {
  const response = await axios.put(`http://localhost:8080/books/${book.id}`, book);
  return response.data;
});

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBook.fulfilled, (state, action) => {
        state.books = action.payload.books;
        state.totalPage = action.payload.totalPage;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((s: Book) => s.id !== action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex((s: Book) => s.id === action.payload.id);
        if (index !== -1) state.books[index] = action.payload;
      });
  },
});

export default bookSlice.reducer;
