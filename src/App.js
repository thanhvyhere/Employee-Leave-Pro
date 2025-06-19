import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './account/LoginForm'; 
import ManagerLayout from './manager/ManagerLayout';
import AddNewForm from './manager/(tabs)/AddNewForm';
import Unauthorized from './pages/Unauthorized';
import {AuthRoute} from './middleware/auth';
import ListEmployeeDashBoard from './manager/(tabs)/ListEmployee';
import ListRequest from './manager/(tabs)/ListRequest';
import RequestDayoff from './employee/(tabs)/RequestDayoff';
import ViewDayoffList from './employee/(tabs)/ViewDayoffList';
import EmployeePage from './employee/EmployeePage';
import EmployeeInfo from './employee/(tabs)/EmployeeInfo';
import Home from './Home'; // giả sử có trang chính
import "./global.css"
function App() {
  const token = localStorage.getItem("token");
  console.log(token)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<LoginForm />} />

         <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/manager" element={
          <AuthRoute requiredRole="manager">
            <ManagerLayout/> 
          </AuthRoute>
        }>
          <Route index element={<ListEmployeeDashBoard />} />
          <Route path="list" element={<ListEmployeeDashBoard />} />
          <Route path="addnew" element={<AddNewForm />} />
          <Route path="request" element={<ListRequest />} />
          {/* <Route path="stats" element={<Statistics />} /> */}
        
        </Route>
         <Route path="/employee" element={
          <AuthRoute requiredRole="employee">
            <EmployeePage />
          </AuthRoute>
          }>
          <Route index element={<EmployeeInfo />} />
          <Route path="request" element={<RequestDayoff />} />
          <Route path="list" element={<ViewDayoffList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
