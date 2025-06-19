import React, { useState, useEffect } from "react";
import Tab from "../../components/Tabs.jsx";
import CardItem from "../../components/CardItem";
import { getLeaveRequests } from "../../axios/employee";
import { format } from "date-fns";

export default function ViewDayoffList() {
  const [selectedStatus, setSelectedStatus] = useState("pending");
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      const data = await getLeaveRequests(selectedStatus);
      setRequests(data || []);
      setLoading(false);
    };
    fetchRequests();
  }, [selectedStatus]);

  const safeFormatDate = (dateStr) => {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return isNaN(d) ? "-" : format(d, "yyyy-MM-dd HH:mm");
  };

  const filteredRequests = requests.filter((req) => req.status === selectedStatus);

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
              leave_dates={item.leave_dates}
              approved_days={safeFormatDate(item.approved_days)}
              created_at={safeFormatDate(item.created_at)}
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
          className="border-2 w-[735px] border-[#2F8AC3] text-[#2F8AC3] font-medium py-3 rounded hover:bg-blue-50 text-center"
        >
          Back
        </button>
      </div>
    </div>
  );
}
