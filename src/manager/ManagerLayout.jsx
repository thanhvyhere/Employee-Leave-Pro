import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaPodcast, FaBroadcastTower, FaUserFriends } from "react-icons/fa";
import { Toaster } from 'react-hot-toast';
import Header from '../components/header';

export default function ManagerLayout() {
  const tabClasses = ({ isActive }) =>
    `flex items-center gap-2 text-sm font-medium px-4 py-2 transition border border-black ml-1 shadow-lg rounded-lg 
      hover:bg-green-100 ${
      isActive
        ? "bg-yellow-100 text-black"
        : "bg-white text-gray-400 hover:text-gray-600"
    }`;

  return (
    <>
      <Header />
      <Toaster position="top-right" />

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 bg-white inline-flex">
        <NavLink to="list" className={tabClasses}>
          <FaUserFriends /> List Employee
        </NavLink>
        <NavLink to="request" className={tabClasses}>
          <FaPodcast /> List Request
        </NavLink>
      </div>


      {/* Nội dung chính, đẩy xuống dưới header + nav */}
      <div className="pb-[10%] mx-[10%] overflow-auto no-scrollbar h-screen">
        <div className="bg-white ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
