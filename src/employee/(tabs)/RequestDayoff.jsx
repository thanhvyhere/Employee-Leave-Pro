import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { createLeaveRequest } from "../../axios/employee";

export default function RequestDayoff({ onViewList }) {
  const [selectedDates, setSelectedDates] = useState([]);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleDate = (date) => {
    const isSelected = selectedDates.some(d => d.toDateString() === date.toDateString());
    if (isSelected) {
      setSelectedDates(selectedDates.filter(d => d.toDateString() !== date.toDateString()));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };
  

  // Hàm xử lý submit
 const isFutureDate = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // reset về 00:00:00
  return date > today;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  if (selectedDates.length === 0) {
    setError("Please select at least one day off.");
    return;
  }
  if (!reason.trim()) {
    setError("Please enter a reason.");
    return;
  }
  // Validate: tất cả ngày phải là ngày trong tương lai
  const invalidDate = selectedDates.find(date => !isFutureDate(date));
  if (invalidDate) {
    setError("All selected days off must be in the future.");
    return;
  }

  setLoading(true);
  try {
    const leave_dates = selectedDates
      .sort((a, b) => a - b)
      .map(date => format(date, "yyyy-MM-dd"));

    const res = await createLeaveRequest({ leave_dates, reason });
    if (res.success) {
      setSuccess("Request submitted successfully!");
      setSelectedDates([]);
      setReason("");
    } else {
      setError(res.message || "Failed to submit request.");
    }
  } catch (err) {
    setError("Error submitting request.");
  } finally {
    setLoading(false);
  }
};
  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header */}
      <div className="bg-blue-100 text-center py-3 rounded mb-6">
        <h1 className="text-[#13467E] font-semibold text-lg">Request Day Off Form</h1>
      </div>

      {/* Calendar */}
      <div className="flex justify-center relative z-10 mb-[200px]" style={{ minHeight: "420px" }}>
        <div className="inline-block scale-[1.7] origin-top">
                  <DatePicker
            selected={null}
            onChange={toggleDate}
            inline
            highlightDates={selectedDates}
            minDate={new Date()} // chỉ cho chọn từ hôm nay trở đi
            dayClassName={date =>
              selectedDates.find(d => d.toDateString() === date.toDateString())
                ? "bg-blue-300 rounded-full"
                : undefined
            }
          />
        </div>
      </div>
      {/* Selected Dates + Reason */}
      <div className="mb-6">
        <h1 className="text-[#13467E] font-semibold text-lg mb-1">Selected day-off</h1>
        <div className="selected-dayoff text-sm text-gray-700 mb-4">
          {selectedDates.length > 0 ? (
            <ul className=" list-inside text-lg">
              {selectedDates
                .sort((a, b) => a - b)
                .map((date, index) => (
                  <li key={index}>{format(date, "dd/MM/yyyy")}</li>
                ))}
            </ul>
          ) : (
            <p className="text-lg">No days selected.</p>
          )}
        </div>

        <h1 className="text-[#13467E] font-semibold text-lg mb-1">Reason</h1>
        <textarea
          id="reason"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter your reason for the day(s) off"
        />
        {error && <div className="text-red-600 mb-2">{error}</div>}
        {success && <div className="text-green-600 mb-2">{success}</div>}
      </div>

      {/* Buttons */}
      <div className="flex w-full gap-4">
        <button
          type="button"
          className="flex-1 border-2 border-[#2F8AC3] text-[#2F8AC3] font-medium py-3 rounded hover:bg-blue-50 text-center"
          onClick={onViewList}
          disabled={loading}
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-[#2F8AC3] text-white font-medium py-3 rounded hover:bg-blue-500 text-center"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}