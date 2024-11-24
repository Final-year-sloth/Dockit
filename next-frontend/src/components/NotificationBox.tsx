import React, { useState } from "react";
import Image from "next/image";

type Notification = {
  id: number;
  message: string;
  sender: string;
  timestamp: string;
  userIcon: string;
};

const NotificationBox: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      message: "Your article received a like.",
      sender: "Dr. Rebecca Smith",
      timestamp: "10 minutes ago",
      userIcon: "/NotificationBox_Images/user2.png",
    },
    {
      id: 2,
      message: "You have a new message about your post.",
      sender: "Dr. John Doe",
      timestamp: "5 minutes ago",
      userIcon: "/NotificationBox_Images/user1.png",
    },

    {
      id: 3,
      message: "Your post has been shared.",
      sender: "Dr. Alice Brown",
      timestamp: "15 minutes ago",
      userIcon: "/NotificationBox_Images/user2.png",
    },
    {
      id: 4,
      message: "You have a new follower.",
      sender: "Dr. David Miller",
      timestamp: "20 minutes ago",
      userIcon: "/NotificationBox_Images/user1.png",
    },
    {
      id: 5,
      message: "A new job has been posted.",
      sender: "Dr. Mike Williams",
      timestamp: "25 minutes ago",
      userIcon: "/NotificationBox_Images/user1.png",
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded((prev) => !prev);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const visibleNotifications = isExpanded
    ? notifications
    : notifications.slice(0, 3);

  return (
    <div className="relative flex flex-col items-center w-[400px] mx-auto mt-10">
      {/* Arrow on Top */}
      <style jsx>{`
        .notification-box::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 20px;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid rgb(185 28 28);
        }
      `}</style>

      {/* Notification Box */}
      <div className="notification-box bg-red-700 rounded-lg shadow-lg p-4 w-full">
        {/* Header */}
        <div className="flex justify-between items-center text-white mb-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button
            onClick={clearNotifications}
            className="text-sm hover:underline"
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
                className="p-2 mb-2 bg-gray-50 border rounded-md hover:bg-gray-100 flex items-center"
              >
                {/* User Icon */}
                <div className="flex-shrink-0">
                  <Image
                    src={notification.userIcon} // Dynamic user icon
                    alt={`${notification.sender}'s profile`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>

                {/* Notification Content */}
                <div className="ml-4 flex-1">
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
            className="mt-2 text-sm font-medium text-white hover:underline"
          >
            {isExpanded ? "Show Less Notifications" : "Show All Notifications"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NotificationBox;
