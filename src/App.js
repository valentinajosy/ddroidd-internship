import React from "react";
import "./App.css";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import Form from "./Form";
import Home from "./Home";
import Thanks from "./Thanks";
import { Routes, Route, Link } from "react-router-dom";

import FirstPage from "./components/UI/firstPage/FirstPage";
import AddUser from "./components/Users/AddUser";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
