import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cocktail from "./pages/Cocktail";
import Home from "./pages/Home";

export const StoreContext = createContext(null);

function App() {
  const [cocktail, setCocktail] = useState({});
  const store = {
    getSetCocktail: [cocktail, setCocktail],
  };

  return (
    <StoreContext.Provider value={store}>
      <Router>
        <div className="App">
          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/cocktail/:cocktail" element={<Cocktail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </StoreContext.Provider>
  );
}

export default App;
