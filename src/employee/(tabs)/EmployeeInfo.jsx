import React from "react";
import { Outlet, Link } from 'react-router-dom';

export default function EmployeeInfo({ employee, totalDays, remainingDays, onRequest, onViewList }) {
  return (
      <div className=" " >
            <div className="bg-blue-100 text-center py-3 rounded mb-6">
                <h1 className="text-[#13467E] font-semibold text-lg">
                    Employee Leave Management System
                </h1>
            </div>
              {/* Thông tin nhân viên */}
            <div className="flex items-start w-ful">
                <div className="flex-1">
                    <ul className="space-y-4 mb-6 ml-3">
                        <li className="flex justify-between items-center ">
                            {/* Cột trái: icon + nhãn */}
                            <div className="flex items-center space-x-2 ">
                            {/* SVG icon */}
                            <img src="/user.png" alt="Company Logo" id="companyLogo" width="20px" className="mr-3" />
                            <span className="font-medium">Employee</span>
                            </div>
                            {/* Cột phải: giá trị */}
                        </li>

                        {/* Hai dòng còn lại tương tự */}
                        <li className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="/calendar.png" alt="Company Logo" id="companyLogo" width="20px" className="mr-3" />
                                <span className="font-medium">Number total day(s)-off</span>
                            </div>
                        </li>

                        <li className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="/calendar.png" alt="Company Logo" id="companyLogo" width="20px" className="mr-3" />
                                <span className="font-medium">Number left day(s)-off</span>
                            </div>
                        </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-4 mb-6 ml-3">
                        <li className="flex justify-between items-center ">
                            <span className="text-black-600 font-semibold">Lê Thị Thu Hương</span>
                        </li>
                        {/* Hai dòng còn lại tương tự */}
                        <li className="flex justify-between items-center">
                            <span className="text-green-600 font-semibold">12</span>
                        </li>

                        <li className="flex justify-between items-center">
                            <span className="text-red-600 font-semibold">3</span>
                        </li>
                    </ul>

                  </div>
            </div>
            {/* Nút hành động */}
            <div className="flex gap-4 ">
                    <Link
                        to="request"
                        className="flex-1 bg-[#2F8AC3] text-white font-medium py-3 rounded hover:bg-blue-500 text-center"
                    >
                        Request Dayoff
                    </Link>
                    <Link
                        to="list"
                        className="flex-1 border-2 border-[#2F8AC3] text-[#2F8AC3] font-medium py-3 rounded hover:bg-blue-50 text-center"
                    >
                        View Dayoff List
                    </Link>
            </div>
    </div>
    );
}