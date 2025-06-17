import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './account/LoginForm'; 
import ManagerLayout from './manager/ManagerLayout';
import AddNewForm from './manager/(tabs)/AddNewForm';
import Home from './Home';
import "./global.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/manager" element={<ManagerLayout />}>
          <Route path="addnew" element={<AddNewForm />} />
          {/* <Route path="list" element={<ListEmployee />} />
          <Route path="stats" element={<Statistics />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
