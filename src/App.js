
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Emplisting from './Emplisting';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';
function App() {
  return (
    <div className='App'>
    <h1>Employee data Managment</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Emplisting />}>
        </Route>
        <Route path="/employee/details/:empid" element={<EmpDetails />}>
        </Route>
        <Route path="/employee/edit/:empid" element={<EmpEdit />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
