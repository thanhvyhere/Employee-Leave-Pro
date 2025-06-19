import React from "react";
import RequestDayoff from './(tabs)/RequestDayoff';
import ViewDayoffList from './(tabs)/ViewDayoffList';
import EmployeeInfo from "./(tabs)/EmployeeInfo";
import Header from '../components/header';
import { Outlet, Link } from 'react-router-dom';

export default function LeaveCard({ employee, totalDays, remainingDays, onRequest, onViewList }) {
  return (
      <div className="" >
        <Header />
        <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 w-full max-w-[800px] shadow-md mx-auto mt-[40px]">
            <Outlet />  
        </div>
    </div>
    );
}