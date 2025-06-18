import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './account/LoginForm'; 
import ManagerLayout from './manager/ManagerLayout';
import AddNewForm from './manager/AddNewForm';
import Unauthorized from './pages/Unauthorized';
import AuthManager from './middleware/authManager';
import ListEmployeeDashBoard from './manager/(tabs)/ListEmployee';
import RequestDayoff from './employee/(tabs)/RequestDayoff';
import ViewDayoffList from './employee/(tabs)/ViewDayoffList';
import EmployeePage from './employee/EmployeePage';
import EmployeeInfo from './employee/(tabs)/EmployeeInfo';
import Header from './components/header';
import Home from './Home'; // giả sử có trang chính
import "./global.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<LoginForm />} />
         <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/manager" element={
          <AuthManager>
            <ManagerLayout/> 
          </AuthManager>
        }>
          <Route path="list" element={<ListEmployeeDashBoard />} />
          {/* <Route path="list" element={<ListEmployee />} />
          <Route path="stats" element={<Statistics />} /> */}
        </Route>
         <Route path="/employee" element={<EmployeePage />}>
          {/* Index route: mặc định hiển thị EmployeeInfo */}
          <Route index element={<EmployeeInfo />} />

          {/* Các route con khi click Link */}
          <Route path="request" element={<RequestDayoff />} />
          <Route path="list" element={<ViewDayoffList />} />
        </Route>
<Route path="/manager/addnew" element={<AddNewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
