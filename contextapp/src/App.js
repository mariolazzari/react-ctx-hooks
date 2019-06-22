import React from "react";

// context
import AuthContextProvider from "./contexts/AuthContext";
import ThemContextProvider from "./contexts/ThemeContext";

// components
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="App">
      <ThemContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemContextProvider>
    </div>
  );
};

export default App;
