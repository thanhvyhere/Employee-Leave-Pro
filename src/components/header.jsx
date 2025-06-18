import React from "react";
export default function Header() {
  return (
      <div className=" " >
        <header className=" flex items-center justify-between px-6 py-2">
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
    );
}