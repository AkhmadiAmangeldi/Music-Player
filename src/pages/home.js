import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from './favorite';
import Pined from './pined';

export default function Home() {
  return (
    <Router>
        <Routes>
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/" element={<Home />} />
            <Route path="/pined" element={<Pined />} />
        </Routes>
    </Router>
  )
}
