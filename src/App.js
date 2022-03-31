import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Customers from "./pages/CustomersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
