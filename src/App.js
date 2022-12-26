import React from "react";
import BookList from "./components/BookList";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/" index element={<BookList />} />
        <Route path="/favourites" element={<Favourites/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
