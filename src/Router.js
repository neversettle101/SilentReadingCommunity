import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityPage from "./components/Reads/CityPage.js"

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/city/:cityName" element={<CityPage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
