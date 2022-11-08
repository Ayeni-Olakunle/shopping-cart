import React from "react";
import Navigate from "./components/navigation/navigate";
import AppStyle from "./App.module.scss"
import Categories from "./components/content/categories";
import Cartlist from "./components/content/cartlist";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <section className={AppStyle.app}>
      <Navigate />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/cartlist" element={<Cartlist />} />
      </Routes>
    </section>
  );
}

export default App;
