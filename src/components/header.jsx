import 'flowbite';
import React, { useEffect, useState } from "react";
import ConfirmModal from './ConfirmModal';
import { initDropdowns } from 'flowbite';

export default function Header() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleConfirmClick = () => {
    setShowConfirmModal(true);
  };
const username = localStorage.getItem('username');

const handleLogout = () => {
  // 1. Xoá JWT token khỏi localStorage
  localStorage.removeItem("token"); // hoặc tên key bạn dùng để lưu JWT

  // 2. In log để kiểm tra
  console.log("Logging out...");

  // 3. Đóng modal xác nhận
  setShowConfirmModal(false);

  // 4. Chuyển hướng về trang login
  window.location.href = "/login";
};

  useEffect(() => {
    initDropdowns();
  }, []);

  return (
    <div>
      <header className="flex items-center justify-between h-[70px] bg-black px-6 py-2">
        <div className="flex items-center">
          <img src="/logo.gif" alt="Company Logo" width="40px" className="mr-3" />
          <span className="text-white font-semibold">BeCaBiGo</span>
        </div>
        <div className="flex items-center mt-3">
          <button
            id="dropdownSmallButton"
            data-dropdown-toggle="dropdownSmall"
            onClick={handleConfirmClick}
            className="inline-flex items-center px-3 mb-4 me-3 text-sm font-medium text-white bg-black rounded-lg focus:outline-none"
            type="button"
          >
            <img src="/useravatar.gif" alt="Avatar" width="40px" className="mr-3" />
            {username}
          </button>
        </div>
      </header>

      {/* Confirm Modal */}
      <ConfirmModal
        show={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleLogout} 
        title="Log out"
        message="Are you sure that you want to log out?"
        button="Log out"
      />
    </div>
  );
}
