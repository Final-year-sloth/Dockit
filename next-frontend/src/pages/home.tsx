



"use client";
import Image from "next/image";
import { useRouter } from 'next/router';
import React, { useState } from 'react';



import Header from "@/components/Header/header";
import Sidebar from '@/components/Sidebar/sidebar';
import CreatePost from "@/components/CreatePost";
import NotificationBox from "@/components/NotificationBox";


/* The Home page component */
export default function Home() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    /* The container element for the Home page */
    <div className="container mx-auto p-4">

        {/* Render the Sidebar component */}
        <Sidebar router={router} isOpen={isSidebarOpen} />
        {/* Render the Header component */}
        <Header isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar}/>
      <CreatePost />
      <NotificationBox />
    </div>
  );
}
