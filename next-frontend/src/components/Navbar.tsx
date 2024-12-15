import React, { useState, useEffect, useRef } from "react";
import NotificationBox from "./NotificationBox";

const Navbar: React.FC = () => {
  const [isNotificationBoxVisible, setIsNotificationBoxVisible] =
    useState(false);
  const [notifications, setNotifications] = useState([
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
  const notificationBoxRef = useRef<HTMLDivElement | null>(null); // Ref for notification box
  const notificationButtonRef = useRef<HTMLDivElement | null>(null); // Ref for notification button

  const toggleNotificationBox = () => {
    setIsNotificationBoxVisible((prev) => !prev);
  };

  //  the notification box closes if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationBoxRef.current &&
        !notificationBoxRef.current.contains(event.target as Node) &&
        notificationButtonRef.current &&
        !notificationButtonRef.current.contains(event.target as Node)
      ) {
        setIsNotificationBoxVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Clear notifications
  const clearNotifications = () => {
    setNotifications([]);
    setIsNotificationBoxVisible(false);
  };

  return (
    <header className=" px-8 py-3 flex items-center justify-between shadow-md fixed top-0 left-64 w-[calc(100%-16rem)] z-50">
      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Find friends..."
          className="w-full pl-4 pr-10 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:placeholder-transparent"
        />
        <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
          <img
            src="/HomePage_Images/search.png"
            alt="Search"
            className="w-6 h-6"
          />
        </span>
      </div>

      {/* Profile and Notification Icons */}
      <div className="flex items-center space-x-8">
        {/* Profile Icon with Text "Me" */}
        <div className="flex flex-col items-center">
          <div
            className="w-10 h-10   rounded-full bg-white hover:bg-red-100 flex items-center justify-center cursor-pointer"
            title="Profile"
          >
            <img
              src="/HomePage_Images/user.png"
              alt="User"
              className="w-7 h-7"
            />
          </div>
          <span className="text-sm font-semibold text-black">Me</span>
        </div>

        {/* Notification Bell Icon with Text "Notification" */}
        <div
          className="relative flex flex-col items-center"
          ref={notificationButtonRef}
        >
          <button
            className="w-11 h-11 rounded-full bg-white hover:bg-red-100 flex items-center justify-center cursor-pointer relative focus:outline-none"
            onClick={toggleNotificationBox}
            onKeyDown={(e) => {
              if (e.key === "Enter") toggleNotificationBox();
            }}
            aria-label="Toggle Notifications"
          >
            <img
              src="/HomePage_Images/notification.png"
              alt="Notification"
              className="w-7 h-7"
            />
            {/* Notification Count Badge */}
            {notifications.length > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full"
                title={`${notifications.length} new notifications`}
              >
                {notifications.length}
              </span>
            )}
          </button>
          <span className="text-sm font-semibold text-black">Notification</span>

          {/* Notification Box */}
          {isNotificationBoxVisible && (
            <div
              className="absolute top-full mt-2 w-72 bg-white shadow-lg rounded-md border z-50"
              ref={notificationBoxRef}
              style={{
                right: "0%",
                transform: "translateX(-20%)",
              }}
            >
              <NotificationBox
                notifications={notifications}
                clearNotifications={clearNotifications}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
