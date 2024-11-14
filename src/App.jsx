import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeesForm from './Pages/EmployeesForm'; 
import EmployeesList from './Pages/EmployeesList'; // Import the list component (you need to create this)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeesForm />} />
        <Route path="/employees-list" element={<EmployeesList />} /> {/* List page route */}
      </Routes>
    </Router>
  );
}

export default App;
