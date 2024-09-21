import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PortfolioContainer from './Component/PortfolioContainer/PortfolioContainer';
import Dashboard from './Screens/Dashboard/Dashboard';


const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioContainer />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
   
  );
};

export default App;
