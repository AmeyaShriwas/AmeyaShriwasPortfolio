import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PortfolioContainer from './Component/PortfolioContainer/PortfolioContainer';
import Dashboard from './Screens/Dashboard/Dashboard';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioContainer />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </Router>
   
  );
};

export default App;
