import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaPodcast, FaBroadcastTower, FaUserFriends } from "react-icons/fa";
import { Toaster } from 'react-hot-toast'
import Header from '../components/header';
export default function ManagerLayout() {
  const tabClasses = ({ isActive }) =>
    `flex items-center gap-2 text-sm font-medium px-4 py-2 border-r border-gray-300 transition ${
      isActive
        ? "bg-yellow-100 text-black"
        : "bg-white text-gray-400 hover:text-gray-600"
    }`;

  return (
    
     <React.Fragment>
      <Header/>
    <Toaster position="top-right" />
    
    <div className="mx-[10%] my-8">
      <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>

      <div className="inline-flex shadow-sm rounded-md overflow-hidden border border-gray-300 mb-6">
        <NavLink to="list" className={tabClasses}>
          <FaUserFriends /> List Employee
        </NavLink>
        <NavLink to="request" className={tabClasses}>
          <FaPodcast /> List Request
        </NavLink>
        <NavLink to="live" className={tabClasses}>
          <FaBroadcastTower /> Live
        </NavLink>
      </div>

      <div className="border p-6 rounded shadow bg-white">
        <Outlet />
      </div>
    </div>
    </React.Fragment>
  );
  
}
