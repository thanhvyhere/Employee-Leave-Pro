import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './account/LoginForm'; 
import ManagerLayout from './manager/ManagerLayout';
import AddNewForm from './manager/(tabs)/AddNewForm';
import Unauthorized from './pages/Unauthorized';
import AuthManager from './middleware/authManager';
import ListEmployeeDashBoard from './manager/(tabs)/ListEmployee';
import Home from './Home';
import "./global.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<LoginForm />} />
         <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/manager" element={
          // <AuthManager>
            <ManagerLayout/> 
          // </AuthManager>
        }>
          <Route path="list" element={<ListEmployeeDashBoard />} />
          <Route path="addnew" element={<AddNewForm />} />
          {/* <Route path="list" element={<ListEmployee />} />
          <Route path="stats" element={<Statistics />} /> */}
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
