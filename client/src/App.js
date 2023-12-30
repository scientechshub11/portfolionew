import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./components/Dashboard";
import PortfolioDetails from "./components/PortfolioDetails";
import Innerpage from "./components/Innerpage";
function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/portfoliodetails/:id" element={<PortfolioDetails   />} />
              <Route path="/innerpage" element={<Innerpage />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
