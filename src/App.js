import React from "react";

import { Route, Routes } from "react-router-dom";

// Components
import HomeDiv from "./containers";

function App() {
  return (
    <div className="App">
      <HomeDiv />
      <Routes>
        <Route exact path="/he" component={HomeDiv} />
      </Routes>
    </div>
  );
}

export default App;
