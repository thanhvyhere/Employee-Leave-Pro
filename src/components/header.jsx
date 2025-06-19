import 'flowbite';
import React, { useEffect } from "react";
import { initDropdowns } from 'flowbite';

export default function Header() {
    useEffect(() => {
    // Khởi tạo tất cả các dropdown khi component được mount
    initDropdowns();

    // Nếu bạn có nhiều loại components Flowbite, bạn có thể gọi
    // initFlowbite(); // Đây là hàm tổng quát để khởi tạo tất cả
  }, []); 
  return (
      <div className=" " >
          
        <header className=" flex items-center justify-between h-[70px] bg-black px-6 py-2">
            <div className="flex items-center">
                <img src="/logo.gif" alt="Company Logo" width="40px" className="mr-3" />
                <span className="text-white font-semibold">BeCaBiGo</span>
            </div>
            <div className="flex items-center mt-3">
                <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" className=" inline-flex items-center px-3  mb-4 me-3 text-sm font-medium text-white bg-black rounded-lg focus:outline-none focus:ring-0 " type="button">
                    <img src="/useravatar.gif" alt="Avatar" width="40px" className="mr-3" />
                    LeHuong
                </button>
                <div id="dropdownSmall" className="  z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-48 mt-3  dark:bg-gray-700 dark:divide-gray-600">
                    <div className=" py-2 text-center">
                        <a href="#" className="block px-4 py-2 text-l text-gray-700  dark:text-gray-200 dark:hover:text-white">Sign out</a>
                      </div>
                </div>
            </div>
        </header>
    <div className="fixed top-0 left-0 w-full bg-black z-50 shadow">
      <header className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center">
          <img src="/logo.gif" alt="Company Logo" width="40px" className="mr-3" />
          <span className="text-white font-semibold">BeCaBiGo</span>
        </div>
        <div className="flex items-center">
          <img src="/useravatar.gif" alt="Avatar" width="40px" className="mr-3" />
          <span className="text-white font-medium">LeHuong</span>
        </div>
      </header>
    </div>
    </div>
  );
}
