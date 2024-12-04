



"use client";
import Image from "next/image";
import { useRouter } from 'next/router';


import Header from "@/components/Header/header";
import Sidebar from '@/components/Sidebar/sidebar';
import CreatePost from "@/components/CreatePost";
import NotificationBox from "@/components/NotificationBox";

/* The Home page component */
export default function Home() {
  const router = useRouter();

  return (
    /* The container element for the Home page */
    <div className="container mx-auto p-4">
      <Header/>
      {/* Render the Sidebar component */}
      <Sidebar router={router} />
      <CreatePost />
      <NotificationBox />
    </div>
  );
}
