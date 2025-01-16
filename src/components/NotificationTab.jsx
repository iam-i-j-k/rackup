import React from 'react';

const NotificationTab = ({ notifications, onClose, onClear }) => {
  return (
    <div className="absolute top-full right-0 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <div className="flex space-x-2">
          <button 
            onClick={onClear} 
            className="text-sm text-blue-600 hover:text-blue-800"
            aria-label="Clear all notifications"
          >
            Clear all
          </button>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close notifications"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No notifications</div>
        ) : (
          notifications.map((notification) => (
            <div key={notification.id} className="p-4 border-b border-gray-200 last:border-b-0">
              <div className="font-semibold mb-1">{notification.title}</div>
              <div className="text-sm text-gray-600 mb-1">{notification.message}</div>
              <div className="text-xs text-gray-400">{notification.time}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationTab;

