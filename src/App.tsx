import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const AppRouter = (
  <Router>
    <Menu></Menu>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </Router>
  );

  return (
    <div>
      {AppRouter}
    </div>
  );
}

export default App;
