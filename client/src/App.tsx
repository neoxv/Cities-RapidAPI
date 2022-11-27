import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import AuthPage from './features/auth/AuthPage';
import Home from './features/home/Home';
import Saved from './features/home/Saved';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/saved' element={<Saved />} />
        </Routes>
    </Router>
  );
}

export default App;
