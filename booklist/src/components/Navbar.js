import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export default function Navbar() {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Ninja reading list</h1>
      <p>Currently you have {books.length} books.</p>
    </div>
  );
}
