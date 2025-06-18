import React from "react";

export default function ListEmployee() {
  const employees = [
    {
      id: 1,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      avatar: "/docs/images/people/profile-picture-1.jpg",
      position: "React Developer",
      status: "online",
    },
    {
      id: 2,
      name: "Bonnie Green",
      email: "bonnie@flowbite.com",
      avatar: "/docs/images/people/profile-picture-3.jpg",
      position: "Designer",
      status: "online",
    },
    {
      id: 3,
      name: "Jese Leos",
      email: "jese@flowbite.com",
      avatar: "/docs/images/people/profile-picture-2.jpg",
      position: "Vue JS Developer",
      status: "online",
    },
    {
      id: 4,
      name: "Thomas Lean",
      email: "thomes@flowbite.com",
      avatar: "/docs/images/people/profile-picture-5.jpg",
      position: "UI/UX Engineer",
      status: "online",
    },
    {
      id: 5,
      name: "Leslie Livingston",
      email: "leslie@flowbite.com",
      avatar: "/docs/images/people/profile-picture-4.jpg",
      position: "SEO Specialist",
      status: "offline",
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 px-4 pt-4">
        {/* Action button */}
        <div>
          <button
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
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600"
              />
            </th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Position</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600"
                />
              </td>
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
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
              <td className="px-6 py-4">{emp.position}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div
                    className={`h-2.5 w-2.5 rounded-full me-2 ${
                      emp.status === "online" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  {emp.status.charAt(0).toUpperCase() + emp.status.slice(1)}
                </div>
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
