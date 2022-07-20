import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />

      </Routes>
    </Router>
  );
}

export default App;
