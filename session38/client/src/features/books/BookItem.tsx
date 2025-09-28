import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import React from 'react';
import type { Book } from '../../utils/types';

interface Props {
  book: Book;
  onEdit: (s: Book) => void;
  onDelete: (id: number) => void;
}

const BookItem: React.FC<Props> = ({ book, onEdit, onDelete }) => {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardContent className="flex items-center justify-between">
        <div>
          <Typography variant="h6" className="font-medium">
            {book.title}
          </Typography>
          <Typography variant="body2" className="text-sm text-gray-500">
            {book.author} • Year: {book.year} • Category: {book.category}
          </Typography>
        </div>

        <div className="flex items-center gap-2">
          <IconButton size="small" onClick={() => onEdit(book)} aria-label="edit">
            <Edit fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => onDelete(+(book.id)!)}
            aria-label="delete"
          >
            <Delete fontSize="small" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookItem;
