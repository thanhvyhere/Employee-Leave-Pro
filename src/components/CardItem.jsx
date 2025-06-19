import React from 'react';
import { format } from "date-fns";

const CardItem = ({ reason, leave_dates, approved_days, status, created_at, reject_reason }) => {

    const safeFormatDate = (dateStr) => {
      if (!dateStr) return "-";
      const d = new Date(dateStr);
      return isNaN(d) ? "-" : format(d, "yyyy-MM-dd HH:mm");
    };
  
  const statusColor = {
    pending: "text-yellow-500",
    approved: "text-green-500",
    rejected: "text-[#FF4A4D]",
  };

  const statusTitle = {
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
  };

  return (
    <div className="mb-2 p-4 rounded border">
      <h1 className="text-left font-medium mb-2"> Created at: {created_at}</h1>
      <h1 className={`text-right font-medium ${statusColor[status]} mb-2`}>
        {statusTitle[status]}
      </h1>
      <div className="flex items-center mb-2">
        <img src="/clockblue.png" width="30px" className="mr-3" />
        <span className="font-medium mr-2 text-[#13467E]">Requested Time:</span>

        <p className="font-medium text-[#13467E]">
          {Array.isArray(leave_dates)
            ? leave_dates.map((date, idx) => (
                <span key={idx}>
                  {safeFormatDate(date)}
                  {idx < leave_dates.length - 1 && <br />}
                </span>
              ))
            : leave_dates || ""}
        </p>
      </div>
      <h1 className="font-medium my-2">Reason for leave</h1>
      <textarea
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        rows="4"
        readOnly
        value={reason}
      />

      {status === "rejected" && (
        <>
          <h1 className="font-medium my-2">Reason for reject</h1>
          <textarea
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
            readOnly
            value={reject_reason}
          />

        </>
      )}
    </div>
  );
};

export default CardItem;
