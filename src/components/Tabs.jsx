import React from "react";

export default function Tab({ selected, onSelect }) {
  const tabs = [
    { status: "Pending", label: "Pending", icon: "/pendinh.png" },
    { status: "Accepted", label: "Accepted", icon: "/complete.png" },
    { status: "Rejected", label: "Rejected", icon: "/fail.png" },
  ];

  return (
    <div className="flex flex-row justify-around bg-[#81BAEE]  rounded">
      {tabs.map((tab) => (
        <div
          key={tab.status}
          onClick={() => onSelect(tab.status)}
          className={`flex items-center flex-1 justify-center cursor-pointer py-2 transition-all duration-200 ${
            selected === tab.status ? "bg-[#13467E] pt-3 shadow-md" : ""
          }`}
        >
          <img src={tab.icon} width="20px" className="mr-2" />
          <span className="text-white font-semibold">{tab.label}</span>
        </div>
      ))}
    </div>
  );
}
