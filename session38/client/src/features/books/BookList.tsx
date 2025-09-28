import React from 'react';
import type { Book } from '../../utils/types';
import BookItem from './BookItem';

interface Props {
  books: Book[];
  onEdit: (s: Book) => void;
  onDelete: (id: number) => void;
}

const BookList: React.FC<Props> = ({ books, onEdit, onDelete }) => {
  if (books.length === 0) {
    return <div className="text-center text-gray-500 py-8">Không có sách nào</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((s) => (
        <BookItem key={s.id} book={s} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;
