import React from "react";
import Image from "next/image";

type Notification = {
  id: number;
  message: string;
  sender: string;
  timestamp: string;
  userIcon: string;
};

interface NotificationBoxProps {
  notifications: Notification[];
  clearNotifications: () => void;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({
  notifications,
  clearNotifications,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Toggle expanded view
  const toggleView = () => {
    setIsExpanded((prev) => !prev);
  };

  const visibleNotifications = isExpanded
    ? notifications
    : notifications.slice(0, 3); // Show only 3 when collapsed

  return (
    <div className="relative flex flex-col items-center w-[350px] mx-auto">
      {/* Arrow on Top */}
      <style jsx>{`
        .notification-box::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 85%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #d1d5db;
        }
      `}</style>

      {/* Notification Box */}
      <div className="notification-box bg-gray-200 rounded-lg shadow-lg p-3 w-full">
        {/* Header */}
        <div className="flex justify-between items-center text-black mb-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button
            onClick={clearNotifications}
            className="text-sm text-red-500 hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Notification List */}
        <div
          className={`bg-white rounded-lg shadow-md p-4 transition-all duration-300 ${
            isExpanded ? "max-h-[300px] overflow-y-auto" : "max-h-[240px]"
          }`}
        >
          {notifications.length === 0 ? (
            <p className="text-center text-gray-500">No new notifications.</p>
          ) : (
            visibleNotifications.map((notification) => (
              <div
                key={notification.id}
                className="p-2 mb-1 bg-gray-50 border rounded-md hover:bg-gray-100 flex items-center"
              >
                {/* User Icon */}
                <div className="flex-shrink-0">
                  <Image
                    src={notification.userIcon}
                    alt={`${notification.sender}'s profile`}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </div>

                {/* Notification Content */}
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <p className="font-semibold text-gray-800">
                      {notification.sender}
                    </p>
                    <p className="text-xs text-gray-400">
                      {notification.timestamp}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {notification.message}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Show All Notifications Button */}
        {notifications.length > 3 && (
          <button
            onClick={toggleView}
            className="mt-2 text-sm font-medium text-black hover:underline"
          >
            {isExpanded ? "Show Less Notifications" : "Show All Notifications"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NotificationBox;
