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
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await getListEmployee();
    if (res.success) {
      setEmployees(res.data);
    } else {
      toast.error("Failed to load employees.");
    }
  };

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

      // Fetch lại danh sách mới sau khi xóa
      await fetchEmployees();
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
        <div className="flex flex-row gap-5">
          <button
            onClick={handleAddUser}
            className="flex items-center justify-center gap-1 flex-1 px-2 py-1.5 text-sm hover:bg-yellow-300 text-gray-700 border border-gray-300 rounded-md"
          >
            <FaUserPlus className="text-base" />
            Add
          </button>
          <button
            onClick={handleDeleteSelected}
            className="flex items-center justify-center gap-1 flex-1 px-2 py-1.5 text-sm hover:bg-red-300 text-gray-700 border border-gray-300 rounded-md"
          >
            <FaRegTrashAlt className="text-base" />
            Delete
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            disabled
          />
        </div>
      </div>

      <table className="w-full text-sm text-gray-500 text-center">
        <thead className="text-xs uppercase bg-gray-50">
          <tr>
            <th className="p-4">
              <input
                type="checkbox"
                checked={selected.length === employees.length && employees.length > 0}
                onChange={handleSelectAll}
              />
            </th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3">Remaining Days</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-6 py-8 text-gray-500 text-center">
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
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap text-left">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={emp.avatar || "https://i.pravatar.cc/150?img=1"}
                    alt={emp.name}
                  />
                  <div className="ps-3 text-left">
                    <div className="text-base font-semibold">{emp.name}</div>
                    <div className="font-normal text-gray-500">{emp.email}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{emp.remandingdays || 0}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
