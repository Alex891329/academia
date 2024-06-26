import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import Login from './componentes/Login';
import Dashboard from './componentes/Dashboard';
import AdminRegistro from './componentes/AdminRegistro'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/adminregistro" element={<AdminRegistro />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


