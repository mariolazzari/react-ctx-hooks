import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book one" },
    { id: 2, title: "Book two" },
    { id: 3, title: "Book three" },
    { id: 4, title: "Book four" }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
