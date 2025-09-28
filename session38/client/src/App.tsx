/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button, Pagination } from "@mui/material";
import type { Book } from "./utils/types";
import BookForm from "./features/books/BookForm";
import BookList from "./features/books/BookList";
import BookSearchSortFilter from "./features/books/BookSearchSortFilter";
import { useDispatch, useSelector } from "react-redux";
import { getAllBook, addBook, updateBook, deleteBook } from "./store/slices/bookSlice";

const App: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Book> | undefined>(undefined);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"title" | "age">("title");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const [page, setPage] = useState(1);
  const size = 4;

  const { books, totalPage } = useSelector((state: any) => state.books);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getAllBook({ page, size, search }));
  }, [dispatch, page, size, search]);

  const handleAddClick = () => {
    setEditing(undefined);
    setOpenForm(true);
  };

  const handleSubmit = (data: Book) => {
    if (data.id) {
      dispatch(updateBook(data));
    } else {
      dispatch(addBook(data));
    }
    setOpenForm(false);
  };

  const handleEdit = (s: Book) => {
    setEditing(s);
    setOpenForm(true);
  };

  const handleDelete = (id: number) => {
    if (!confirm("Xác nhận xóa sách?")) return;
    dispatch(deleteBook(id));
  };

  const handleClearFilters = () => {
    setSearch("");
    setCategoryFilter("all");
    setSortBy("title");
    setSortDir("asc");
    setPage(1);
  };

  const filteredSorted = React.useMemo(() => {
    let out = books.slice();

    if (categoryFilter !== "all") {
      out = out.filter((s: Book) => s.category === categoryFilter);
    }

    out.sort((a: Book, b: Book) => {
      if (sortBy === "title") {
        const r = a.title!.localeCompare(b.title!);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.year! - b.year!;
        return sortDir === "asc" ? r : -r;
      }
    });

    return out;
  }, [books, categoryFilter, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🎓 Book Manager</h1>

      <div className="flex gap-4 mb-4">
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Book
        </Button>
      </div>

      <BookSearchSortFilter
        search={search}
        categoryFilter={categoryFilter}
        sortBy={sortBy}
        sortDir={sortDir}
        onSearchChange={(val) => {
          setSearch(val);
          setPage(1);
        }}
        onCategoryChange={setCategoryFilter}
        onSortChange={(by, dir) => {
          setSortBy(by);
          setSortDir(dir);
        }}
        onClear={handleClearFilters}
      />

      <div className="mt-6">
        <BookList books={filteredSorted} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      <div className="flex justify-center mt-6">
        <Pagination
          count={totalPage}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
        />
      </div>

      <BookForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
