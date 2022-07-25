import React from 'react';
import './App.css';
import Navbar from './components/navbar';
/*import Sidebar  from './components/sidebar';*/
import Home from './pages';
import Discover from './pages/discover';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
      
      <Routes>
        <Route path='/Discover' exact element={<Discover/>} /></Routes>
    </Router>
    
    
  );
}

export default App;
