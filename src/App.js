import "./App.css";
import React from "react";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import Navigation from './components/Navigation'

import { Contact } from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
