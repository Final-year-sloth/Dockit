"use client";
import Image from "next/image";

import Sidebar from "@/components/sidebar";
import Navbar from "@/components/Navbar";
/* The Home page component */
export default function Home() {
  return (
    /* The container element for the Home page */
    <div className="container mx-auto p-4">
      {/* Render the Sidebar component */}
      {/* <Sidebar />*/}
      <Navbar />
    </div>
  );
}
