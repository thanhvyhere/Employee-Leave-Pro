import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ListEmployee() {
    const navigator = useNavigate();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      avatar: "/docs/images/people/profile-picture-1.jpg",
      gender: "Male",
      status: "online",
      leaveDays: ["2025-06-10", "2025-06-15"],
    },
    {
      id: 2,
      name: "Bonnie Green",
      email: "bonnie@flowbite.com",
      avatar: "/docs/images/people/profile-picture-3.jpg",
      gender: "Female",
      status: "online",
      leaveDays: ["2025-06-05"],
    },
    {
      id: 3,
      name: "Jese Leos",
      email: "jese@flowbite.com",
      avatar: "/docs/images/people/profile-picture-2.jpg",
      gender: "Male",
      status: "online",
      leaveDays: [],
    },
    {
      id: 4,
      name: "Thomas Lean",
      email: "thomes@flowbite.com",
      avatar: "/docs/images/people/profile-picture-5.jpg",
      gender: "Male",
      status: "online",
      leaveDays: ["2025-06-01", "2025-06-12", "2025-06-18"],
    },
    {
      id: 5,
      name: "Leslie Livingston",
      email: "leslie@flowbite.com",
      avatar: "/docs/images/people/profile-picture-4.jpg",
      gender: "Female",
      status: "offline",
      leaveDays: ["2025-06-07"],
    },
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAddUser = () => {
    navigator('/manager/addnew')
  };

  const handleDeleteSelected = () => {
    alert("Delete selected clicked");
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 px-4 pt-4">
        {/* Dropdown Action */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            type="button"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Action
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-44 bg-white rounded-lg shadow dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onClick={handleAddUser}
                    className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left"
                  >
                    ➕ Add user
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleDeleteSelected}
                    className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left"
                  >
                    🗑️ Delete selected
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-4">No.</th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3">Gender</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Leave Days</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr
              key={emp.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">{index + 1}</td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white text-left"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={emp.avatar}
                  alt={emp.name}
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">{emp.name}</div>
                  <div className="font-normal text-gray-500">{emp.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">{emp.gender}</td>
              <td className="px-6 py-4">
                <button
                  className={`px-3 py-1 text-xs font-medium rounded-full flex items-center justify-center mx-auto gap-2 ${
                    emp.status === "online"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      emp.status === "online" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {emp.status === "online" ? "Active" : "Blocked"}
                </button>
              </td>
              <td className="px-6 py-4 whitespace-pre-line">
                {emp.leaveDays.length > 0 ? emp.leaveDays.join("\n") : "—"}
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
