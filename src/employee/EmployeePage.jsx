import React from "react";
import RequestDayoff from './(tabs)/RequestDayoff';
import ViewDayoffList from './(tabs)/ViewDayoffList';
import employeePage from './employeePage.css';
import EmployeeInfo from "./(tabs)/EmployeeInfo";
import Header from '../components/header';
import { Outlet, Link } from 'react-router-dom';

export default function LeaveCard({ employee, totalDays, remainingDays, onRequest, onViewList }) {
  return (
      <div className=" " >
        <Header />
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-[950px] max-w-lg mx-auto mt-5">
            <Outlet />  
        </div>
    </div>
    );
}