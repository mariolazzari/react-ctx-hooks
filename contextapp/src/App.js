import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemContextProvider>
        <Navbar />
        <BookList />
      </ThemContextProvider>
    </div>
  );
}

export default App;
