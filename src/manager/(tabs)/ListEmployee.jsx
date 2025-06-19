import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, getListEmployee } from "../../axios/account";
import { toast } from "react-hot-toast";
import { FaUserPlus, FaRegTrashAlt } from "react-icons/fa";

export default function ListEmployee() {
  const navigator = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await getListEmployee();
      if (res.success) {
        setEmployees(res.data);
      } else {
        toast.error("Failed to load employees.");
      }
    };
    fetchEmployees();
  }, []);

  const handleAddUser = () => {
    navigator("/manager/addnew");
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selected.length === employees.length) {
      setSelected([]);
    } else {
      setSelected(employees.map((emp) => emp.id));
    }
  };

  const handleDeleteSelected = async () => {
    if (selected.length === 0) {
      toast.error("Please select at least one employee.");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete selected employee(s)?");
    if (!confirmDelete) return;

    try {
      await Promise.all(selected.map((id) => deleteEmployee(id)));
      setEmployees((prev) => prev.filter((emp) => !selected.includes(emp.id)));
      setSelected([]);
      toast.success("Deleted selected employees successfully.");
    } catch (err) {
      toast.error("Failed to delete one or more employees.");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-2xl font-bold mb-3">Employee Dashboard</h1> 
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap space-y-4 md:space-y-0 pb-4 bg-white px-4 pt-4">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            type="button"
            className="inline-flex items-center text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-1.5"
          >
            Action
            <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-44 bg-white rounded-lg shadow">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <button
                    onClick={handleAddUser}
                    className="flex items-center gap-2 w-full px-3 py-1.5 text-sm hover:bg-gray-100 text-left rounded-md"
                  >
                    <FaUserPlus className="text-base" /> Add user
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleDeleteSelected}
                    className="flex items-center gap-2 w-full px-3 py-1.5 text-sm hover:bg-gray-100 text-left rounded-md"
                  >
                    <FaRegTrashAlt className="text-base" /> Delete selected
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            disabled
          />
        </div>
      </div>

      <table className="w-full text-sm text-gray-500  text-center">
        <thead className="text-xs uppercase bg-gray-50  ">
          <tr>
            <th className="p-4">
              <input
                type="checkbox"
                checked={selected.length === employees.length && employees.length > 0}
                onChange={handleSelectAll}
              />
            </th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Leave Days</th>
            <th className="px-6 py-3">Remaining Days</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-6 py-8 text-gray-500  text-center">
                No employees found.
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.user_id} className="bg-white border-b hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(emp.user_id)}
                    onChange={() => handleSelect(emp.user_id)}
                  />
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap  text-left">
                  <img className="w-10 h-10 rounded-full" src={emp.avatar || "https://i.pravatar.cc/150?img=1"} alt={emp.name} />
                  <div className="ps-3 text-left">
                    <div className="text-base font-semibold">{emp.name}</div>
                    <div className="font-normal text-gray-500">{emp.email}</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <button
                    className={`px-3 py-1 text-xs font-medium rounded-full flex items-center justify-center mx-auto gap-2 ${
                      emp.status === "online" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${emp.status === "online" ? "bg-green-500" : "bg-red-500"}`}
                    ></span>
                    {emp.status === "online" ? "Active" : "Blocked"}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-pre-line">
                  {emp.leaveDays && emp.leaveDays.length > 0 ? emp.leaveDays.join("\n") : "—"}
                </td>
                <td className="px-6 py-4">{emp.leaveDays?.length || 0}</td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 hover:underline">
                    Edit user
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
