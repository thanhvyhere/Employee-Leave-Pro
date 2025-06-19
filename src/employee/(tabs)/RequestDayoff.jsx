import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { createLeaveRequest } from "../../axios/employee";

// Popup thông báo
const NotificationPopup = ({ type, message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => onClose(), 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const isSuccess = type === 'success';
  const icon = isSuccess ? (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-semibold ${isSuccess ? 'text-green-800' : 'text-red-800'}`}>
              {isSuccess ? 'Success!' : 'Error!'}
            </h3>
            <p className={`text-sm mt-1 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          </div>
        </div>
        <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className={`h-full ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`} style={{ animation: 'shrink 5s linear forwards' }}></div>
        </div>
      </div>
    </div>
  );
};

export default function RequestDayoff({ onViewList }) {
  const [selectedDates, setSelectedDates] = useState([]);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '', isVisible: false });

  const toggleDate = (date) => {
    const isSelected = selectedDates.some(d => d.toDateString() === date.toDateString());
    if (isSelected) {
      setSelectedDates(selectedDates.filter(d => d.toDateString() !== date.toDateString()));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const isFutureDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date > today;
  };

  const showNotification = (type, message) => {
    setNotification({ type, message, isVisible: true });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedDates.length === 0) {
      showNotification('error', 'Please select at least one day off.');
      return;
    }

    if (!reason.trim()) {
      showNotification('error', 'Please enter a reason.');
      return;
    }

    const invalidDate = selectedDates.find(date => !isFutureDate(date));
    if (invalidDate) {
      showNotification('error', 'All selected days off must be in the future.');
      return;
    }

    setLoading(true);
    try {
      const leave_dates = selectedDates.sort((a, b) => a - b).map(date => format(date, "yyyy-MM-dd"));
      const res = await createLeaveRequest({ leave_dates, reason });

      if (res.success) {
        showNotification('success', 'Your leave request has been submitted successfully!');
        setSelectedDates([]);
        setReason("");
      } else {
        showNotification('error', res.message || 'Failed to submit request.');
      }
    } catch (err) {
      showNotification('error', 'Error submitting request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-blue-100 text-center py-3 rounded mb-6">
          <h1 className="text-[#13467E] font-semibold text-lg">Request Day(s)-Off Form</h1>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-8 mb-[130px]">
          {/* Calendar - Left */}
          <div className="w-1/2 ml-[70px]">
            <div className="inline-block scale-[1.5] origin-top">
              <DatePicker
                selected={null}
                onChange={toggleDate}
                inline
                highlightDates={selectedDates}
                filterDate={(date) => {
                  const day = date.getDay();
                  return day !== 0 && day !== 6;
                }}
                dayClassName={(date) => {
                  const isSelected = selectedDates.find(d => d.toDateString() === date.toDateString());
                  const day = date.getDay();
                  const isWeekend = day === 0 || day === 6;
                  return `${isSelected ? "bg-blue-300 rounded-full" : ""} ${isWeekend ? "text-gray-400" : ""}`;
                }}
              />
            </div>
          </div>

          {/* Form - Right */}
          <div className="w-1/2 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <img src="/calendar.png" alt="Calendar" width="24px" className="mr-3" />
                <h1 className="text-[#13467E] font-semibold text-lg">Selected day(s)-off</h1>
              </div>

              <div className="text-sm text-gray-700 mb-4">
                {selectedDates.length > 0 ? (
                  <ul className="list-inside text-lg">
                    {selectedDates.sort((a, b) => a - b).map((date, index) => (
                      <li className="mb-2" key={index}>{format(date, "EEEE dd/MM/yyyy")}</li>
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
            </div>

          </div>
        </div>
        <div className="flex w-full gap-4 mt-auto">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex-1 border-2 border-[#2F8AC3] text-[#2F8AC3] font-medium py-3 rounded hover:bg-blue-50 transition"
            disabled={loading}
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 bg-[#2F8AC3] text-white font-medium py-3 rounded hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </div>
            ) : "Submit"}
          </button>
        </div>
      </form>

      <NotificationPopup
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}
