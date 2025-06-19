import React from "react";
import RequestDayoff from './(tabs)/RequestDayoff';
import ViewDayoffList from './(tabs)/ViewDayoffList';
import EmployeeInfo from "./(tabs)/EmployeeInfo";
import Header from '../components/header';
import { Outlet, Link } from 'react-router-dom';

export default function LeaveCard({ employee, totalDays, remainingDays, onRequest, onViewList }) {

    const username = localStorage.getItem('username');
  return (
      <div className="" >
          <Header
          />
      {/* Nội dung chính, đẩy xuống dưới header + nav */}
      <div className="  mt-[40px] overflow-auto no-scrollbar h-screen">
        <div className="mx-auto bg-white shadow-lg border border-gray-200 rounded-lg p-8 w-full max-w-[800px] shadow-md ">
          <Outlet />
        </div>
      </div>
    </div>
    );
}