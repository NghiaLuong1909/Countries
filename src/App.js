import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries/countries";
import Header from "./components/Header/header";
import Filter from "./components/Filter/filter";
import Country from "./components/Countries/Country/country";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={[<Header />, <Filter />, <Countries />]}
          ></Route>
          <Route path="/:name" element={<Country />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
