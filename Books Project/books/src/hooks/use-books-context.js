import { useContext } from "react";
import BooksContext from "../context/books";

// Below is the CUSTOM HOOK that we will use to access the books array from the BooksContext.
function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
