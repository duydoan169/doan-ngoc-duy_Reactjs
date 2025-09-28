/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import React from 'react';
import { useSelector } from 'react-redux';

interface Props {
  search: string;
  categoryFilter: string; // 'all' or specific category
  sortBy: 'title' | 'age';
  sortDir: 'asc' | 'desc';
  onSearchChange: (s: string) => void;
  onCategoryChange: (g: string) => void;
  onSortChange: (by: 'title' | 'age', dir: 'asc' | 'desc') => void;
  onClear: () => void;
}

const BookSearchSortFilter: React.FC<Props> = ({
  search,
  categoryFilter,
  sortBy,
  sortDir,

  onSearchChange,
  onCategoryChange,
  onSortChange,
  onClear,
}) => {
  const books = useSelector((state: any) => state.books.books);
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
      <TextField
        label="Tìm theo tên"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
        size="small"
      />
      <FormControl size="small" className="w-40">
        <InputLabel>Category</InputLabel>
        <Select
          value={categoryFilter}
          label="Category"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <MenuItem value="all">Tất cả</MenuItem>
            {books.map((item: any) => {return <MenuItem value={item.category}>{item.category}</MenuItem>})}
        </Select>
      </FormControl>

      <FormControl size="small" className="w-36">
        <InputLabel>Sắp xếp</InputLabel>
        <Select
          value={`${sortBy}_${sortDir}`}
          label="Sắp xếp"
          onChange={(e) => {
            const [by, dir] = (e.target.value as string).split('_');
            onSortChange(by as 'title' | 'age', dir as 'asc' | 'desc');
          }}
        >
          <MenuItem value="title_asc">Name A → Z</MenuItem>
          <MenuItem value="title_desc">Name Z → A</MenuItem>
          <MenuItem value="age_asc">Age ↑</MenuItem>
          <MenuItem value="age_desc">Age ↓</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={onClear} variant="outlined" className="ml-auto">
        Clear
      </Button>
    </div>
  );
};

export default BookSearchSortFilter;
