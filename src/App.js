import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fashion from "./pages/Fashion";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
