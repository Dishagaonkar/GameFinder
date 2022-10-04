import styles from "./App.module.css";
import Chip from "./components/Chip";
import Header from "./components/Header/header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Testpage from "./Testpage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/testpage">testpage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testpage" element={<Testpage />} />
      </Routes>
    </div>
  );
};

export default App;
