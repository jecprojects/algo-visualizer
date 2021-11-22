import React from "react";
import "./App.css";

// In updated version react-router-dom changed it's implementation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import HomeDiv from "./containers";
import SelectionSort from "./containers/selectionSort";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeDiv />} />
          <Route path="/selection-sort" element={<SelectionSort />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
