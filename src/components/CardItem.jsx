import React from 'react';

const CardItem = ({ reason, leave_dates, approved_days, status, created_at }) => {
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
        <p className="font-medium text-[#13467E]">{leave_dates}</p>
      </div>
      <h1 className="font-medium my-2">Reason for leave</h1>
      <textarea
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        rows="4"
        readOnly
        value={reason}
      />
      {status === "Rejected" && (
        <>
          <div className="flex items-center mt-4">
            <img src="/clockred.png" width="20px" className="mr-3" />
            <span className="font-medium mr-2 text-[#FF4A4D]">Rejected Time:</span>
            <p className="font-medium text-[#FF4A4D]">{approved_days}</p>
          </div>
          <h1 className="font-medium my-2">Reason for leave</h1>
          <textarea
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
            readOnly
            value={reason}
          />
        </>
      )}
    </div>
  );
};

export default CardItem;
