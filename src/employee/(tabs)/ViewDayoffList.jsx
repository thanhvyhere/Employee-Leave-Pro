import React, { useState } from "react";
import Tab from "../../components/Tabs.jsx";
import CardItem from "../../components/CardItem";

// Giả lập dữ liệu leave request (bạn có thể thay thế bằng API hoặc props)
const sampleRequests = [
  { id: 1, reason: "Sick leave", status: "Pending", requestedDate: "2025-06-18" },
  { id: 2, reason: "Family event", status: "Accepted", requestedDate: "2025-06-17" },
  { id: 3, reason: "Medical checkup", status: "Rejected", requestedDate: "2025-06-16", rejectedDate: "2025-06-17" },
];

export default function ViewDayoffList() {
  const [selectedStatus, setSelectedStatus] = useState("Pending");

  const filteredRequests = sampleRequests.filter(req => req.status === selectedStatus);

  return (
    <div>
      <div className="bg-blue-100 text-center py-3 rounded mb-6">
        <h1 className="text-[#13467E] font-semibold text-lg">View Leave Request History</h1>
      </div>

      <Tab selected={selectedStatus} onSelect={setSelectedStatus} />

      <div className="content bg-[#FBFBFB] p-4">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((item) => (
            <CardItem
              key={item.id}
              reason={item.reason}
              requestedDate={item.requestedDate}
              rejectedDate={item.rejectedDate}
              status={item.status}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">No requests found for "{selectedStatus}"</p>
        )}
      </div>
    </div>
  );
}
