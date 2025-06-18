import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './account/LoginForm'; 
import ManagerLayout from './manager/ManagerLayout';
<<<<<<< HEAD
import AddNewForm from './manager/(tabs)/AddNewForm';
import RequestDayoff from './employee/(tabs)/RequestDayoff';
import ViewDayoffList from './employee/(tabs)/ViewDayoffList';
import EmployeePage from './employee/EmployeePage';
import EmployeeInfo from './employee/(tabs)/EmployeeInfo';
import Header from './components/header';
import Home from './Home'; // giả sử có trang chính
=======
import AddNewForm from './manager/AddNewForm';
import Home from './Home';
>>>>>>> 4c497a4e8c7eeb6503b856b7c033ba305f654319
import "./global.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/manager" element={<ManagerLayout />}>
          <Route path="addnew" element={<AddNewForm />} />
          {/* <Route path="list" element={<ListEmployee />} />
          <Route path="stats" element={<Statistics />} /> */}
        </Route>
<<<<<<< HEAD
         <Route path="/employee" element={<EmployeePage />}>
          {/* Index route: mặc định hiển thị EmployeeInfo */}
          <Route index element={<EmployeeInfo />} />

          {/* Các route con khi click Link */}
          <Route path="request" element={<RequestDayoff />} />
          <Route path="list" element={<ViewDayoffList />} />
        </Route>

=======
        
>>>>>>> 4c497a4e8c7eeb6503b856b7c033ba305f654319
      </Routes>
    </Router>
  );
}

export default App;
