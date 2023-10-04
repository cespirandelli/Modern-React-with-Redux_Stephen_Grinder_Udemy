import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useContext(BooksContext);
  // It's much easier to just pass the book object to the BookShow component and let it handle the rendering of the book. This way, we don't have to access context to handle each BookShow component.
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
