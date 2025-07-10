import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import "./styles/App.css";

function App() {
  const currentPath = window.location.pathname;

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Header />
          {/* Simple routing logic for demonstration */}
          {currentPath === "/chat" ? (
            <Chat />
          ) : currentPath === "/about" ? (
            <About />
          ) : (
            <Home />
          )}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
