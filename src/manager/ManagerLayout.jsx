import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaPodcast, FaBroadcastTower, FaUserFriends } from "react-icons/fa";
import { Toaster } from 'react-hot-toast';
import Header from '../components/header';

export default function ManagerLayout() {
  const tabClasses = ({ isActive }) =>
    `flex items-center gap-2 text-sm font-medium px-4 py-2 transition ${
      isActive
        ? "bg-yellow-100 text-black"
        : "bg-white text-gray-400 hover:text-gray-600"
    }`;

  return (
    <>
      <Header />
      <Toaster position="top-right" />

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-white shadow-md rounded-md border border-gray-300 inline-flex">
        <NavLink to="list" className={tabClasses}>
          <FaUserFriends /> List Employee
        </NavLink>
        <NavLink to="request" className={tabClasses}>
          <FaPodcast /> List Request
        </NavLink>
      </div>


      {/* Nội dung chính, đẩy xuống dưới header + nav */}
      <div className="pb-[100px] mx-[15%]">
        {/* <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1> */}
        <div className="bg-white w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
