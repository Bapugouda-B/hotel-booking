import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotels from './pages/hotels/Hotels';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotel/:id" element={<Hotels />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
