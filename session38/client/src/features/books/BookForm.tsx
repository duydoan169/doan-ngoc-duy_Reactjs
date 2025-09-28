/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import type { Book } from "../../utils/types";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/slices/bookSlice";

interface Props {
  open: boolean;
  initial?: Partial<Book>;
  onClose: () => void;
  onSubmit: (data: {
    id?: number;
    title: string;
    year: number;
    category: string;
    author: string
  }) => void;
}
const BookForm: React.FC<Props> = ({
  open,
  initial = {},
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState(initial.title ?? "");
  const [year, setYear] = useState(initial.year ?? 2025);
  const [category, setCategory] = useState(initial.category ?? "");
  const [author, setAuthor] = useState(initial.author ?? "");
  const dispatch: any = useDispatch();
  useEffect(() => {
    setTitle(initial.title ?? "");
    setYear(initial.year ?? 2025);
    setCategory(initial.category ?? "");
    setAuthor(initial.author ?? "");
  }, [initial, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newBook = {
      title: title.trim(),
      year: Number(year),
      category: category.trim(),
    };
 
    
    dispatch(addBook(newBook));

  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? "Edit Book" : "Add Book"}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            autoFocus
          />
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
            required
            autoFocus
          />
          <TextField
            label="Year"
            type="text"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            fullWidth
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            placeholder="e.g. action, sci-fi..."
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initial.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookForm;
