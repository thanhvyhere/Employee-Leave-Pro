import React from 'react';
// KHÔNG CẦN import FontAwesomeIcon nữa nếu bạn chỉ dùng ảnh
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardItem = ({ reason, requestedDate, rejectedDate, status }) => {
  const statusColor = {
    Pending: "text-yellow-500",
    Accepted: "text-green-500",
    Rejected: "text-[#FF4A4D]",
  };

  const statusTitle = {
    Pending: "Pending",
    Accepted: "Accepted",
    Rejected: "Rejected",
  };

  return (
    <div className="mb-4 p-4 rounded bg-blue-100">
      <h1 className={`text-right font-medium ${statusColor[status]} mb-2`}>
        {statusTitle[status]}
      </h1>
      <div className="flex items-center mb-2">
        <img src="/clockblue.png" width="30px" className="mr-3" />
        <span className="font-medium mr-2 text-[#13467E]">Requested Time:</span>
        <span className="font-medium text-[#13467E]">{requestedDate}</span>
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
            <span className="font-medium text-[#FF4A4D]">{rejectedDate}</span>
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