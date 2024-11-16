import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigachka from './components/Navigachka';
import AboutMe from './components/AboutMe';
import Categories from './components/Categories';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigachka />
        <Routes>
          <Route path="/about-me" element={<AboutMe/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/categories" element={<Categories/>}>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;