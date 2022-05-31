import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cocktail from "./pages/Cocktail";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/cocktail/:id" element={<Cocktail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
