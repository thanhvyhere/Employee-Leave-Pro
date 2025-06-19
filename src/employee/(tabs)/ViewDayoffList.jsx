import React, { useState, useEffect } from "react";
import Tab from "../../components/Tabs.jsx";
import CardItem from "../../components/CardItem";
import { getLeaveRequests } from "../../axios/employee";

export default function ViewDayoffList() {
  const [selectedStatus, setSelectedStatus] = useState("pending");
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      const data = await getLeaveRequests(selectedStatus);
      setRequests(data);
      setLoading(false);
    };
    fetchRequests();
  }, [selectedStatus]);

  const filteredRequests = requests.filter(req => req.status === selectedStatus);
  console.log(filteredRequests);

  return (
    <div>
      <div className="bg-blue-100 text-center py-3 rounded mb-6">
        <h1 className="text-[#13467E] font-semibold text-lg">View Leave Request History</h1>
      </div>

      <Tab selected={selectedStatus} onSelect={setSelectedStatus} />

      <div className="content bg-[#FBFBFB] p-4">
        {loading ? (
          <p className="text-gray-500 text-center">Loading...</p>
        ) : filteredRequests.length > 0 ? (
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
      <div className="text-center">
        <button
          type="button"
           onClick={() => window.history.back()}
          className=" border-2 w-[450px] border-[#2F8AC3] text-[#2F8AC3] font-medium py-3 rounded hover:bg-blue-50 text-center">
          Back
        </button>

      </div>
    </div>
  );
}
