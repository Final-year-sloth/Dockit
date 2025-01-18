import Image from "next/image";
import React from "react";
import { MdDarkMode } from "react-icons/md";

const JobsHeader = () => {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-nowrap  items-center justify-between min-w-screen">
      <div className="jobs-title">
        <Image
          src="/avatar.svg"
          alt="User Avatar"
          className=" rounded-full border-"
          width={60}
          height={60}
        />
      </div>
      <div className="relative  p-4 items-center justify-center hidden md:block ">
        <input
          type="text"
          placeholder="Search for jobs"
          className="w-full px-4 py-3 rounded-full border border-gray-300 shadow-sm"
        />
      </div>
      <div className="ml-2">
        <MdDarkMode className="cursor-pointer" />
      </div>
    </header>
  );
};

export default JobsHeader;
