import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SusanInterface from "./components/SusanInterface";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/susan" element={<SusanInterface />} />
      </Routes>
    </Router>
  );
};

export default App;
