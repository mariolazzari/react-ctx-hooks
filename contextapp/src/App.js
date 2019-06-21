import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemContextProvider>
    </div>
  );
}

export default App;
