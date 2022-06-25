import React from "react";
import "./App.css";

// In updated version react-router-dom changed it's implementation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import HomeDiv from "./containers";
import SelectionSort from "./containers/selectionsort";
import BubbleSort from "./containers/bubblesort";
import InsertionSort from "./containers/insertionsort";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeDiv />} />
          <Route path="/selection-sort" element={<SelectionSort />} />
          <Route path="/insertion-sort" element={<InsertionSort />} />
          <Route path="/bubble-sort" element={<BubbleSort />} />
          <Route path="/bfs" element={<SelectionSort />} />
          <Route path="/dfs" element={<InsertionSort />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
