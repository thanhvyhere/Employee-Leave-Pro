import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaUserEdit, FaPodcast, FaBroadcastTower } from "react-icons/fa";

export default function ManagerLayout() {
  const [activeTab, setActiveTab] = useState("list");

  const tabClasses = (tab) =>
    `flex items-center gap-2 text-sm font-medium px-4 py-2 border-r border-gray-300 transition ${
      activeTab === tab
        ? "bg-yellow-100 text-black"
        : "bg-white text-gray-400 hover:text-gray-600"
    }`;

  return (
    <div className="mx-[10%] my-8">
      <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>

      <div className="inline-flex shadow-sm rounded-md overflow-hidden border border-gray-300 mb-6">
        <button onClick={() => setActiveTab("list")} className={tabClasses("list")}>
          <FaUserEdit /> List Employee
        </button>
        <button onClick={() => setActiveTab("podcasts")} className={tabClasses("podcasts")}>
          <FaPodcast /> Podcasts
        </button>
        <button onClick={() => setActiveTab("live")} className={tabClasses("live")}>
          <FaBroadcastTower /> Live
        </button>
      </div>

      <div className="border p-6 rounded shadow bg-white">
        <Outlet />
      </div>
    </div>
  );
}
