"use client";
import Image from "next/image";

import Sidebar from "@/components/sidebar";
import CreatePost from "@/components/CreatePost";
import NotificationBox from "@/components/NotificationBox";

/* The Home page component */
export default function Home() {
  return (
    /* The container element for the Home page */
    <div className="container mx-auto p-4">
      {/* Render the Sidebar component */}
      {/*<Sidebar />*/}
      <CreatePost />
      <NotificationBox />
    </div>
  );
}
