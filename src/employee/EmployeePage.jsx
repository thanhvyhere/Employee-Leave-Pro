import React from "react";
import RequestDayoff from './RequestDayoff';
import ViewDayoffList from './ViewDayoffList';
import employeePage from './employeePage.css';
export default function LeaveCard({ employee, totalDays, remainingDays, onRequest, onViewList }) {
  return (
      <div className=" " >
        <header className=" flex items-center justify-between px-6 py-2">
            <div className="flex items-center">
                <img src="/logo192.png" alt="Company Logo" id="companyLogo" width="40px" className="mr-3" />
                <span className="text-white font-semibold">BeCaBiGo</span>
            </div>
            <div className="flex items-center">
                <img src="logo192.png" alt="Avatar" id="companyLogo" width="40px" className="mr-3" />
                <span className="text-white font-medium">LeHuong</span>
            </div>
        </header>
          
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-[850px] max-w-lg mx-auto mt-5">
            {/* Tiêu đề */}
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
                            <span className="font-medium">Number total day‑off</span>
                            </div>
                        </li>

                        <li className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                            <img src="/calendar.png" alt="Company Logo" id="companyLogo" width="20px" className="mr-3" />
                            <span className="font-medium">Number left day‑off</span>
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
            <button
                onClick={onRequest}
                className="flex-1 bg-[#2F8AC3] text-white font-medium py-3 rounded hover:bg-blue-500 focus:outline-none"
            >
                Request Dayoff
            </button>
            <button
                onClick={onViewList}
                className="flex-1 border-2 border-[#2F8AC3] text-[#2F8AC3] font-medium py-3 rounded hover:bg-blue-50 focus:outline-none"
            >
                View Dayoff List
            </button>
            </div>
        </div>
    </div>
    );
}