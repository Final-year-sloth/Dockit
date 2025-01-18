import React,{useState} from 'react'
import Link from "next/link"
import CreatePost from './CreatePost';
import Image from "next/image";

const JobsSidebar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control the dialog
  const [isSideBarOpen, setIsSideBarOpen] = useState(false); // State to control the side bar
  const handleAddPost = (title:string, content:string, image:File | null) => { // Function to handle adding a post
    // Add your logic here to handle adding a post
    console.log('Adding post:', {title, content, image});// For demonstration purposes
    setIsDialogOpen(false); // Close the dialog after adding the post
    };
  return (
    <div>
      {/* Hamburger Menu */}
      <button
      className='block md:hidden p-2 focus:outline-none'
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <Image 
            src="/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"/>
          </button> {/* Toggle the side bar */}
    <div className='flex flex-col p-4 h-screen'>
    <section className={`${
          isSideBarOpen ? "block" : "hidden"
        } md:block fixed md:relative bg-gray-200 dark:bg-gray-800 h-screen w-64 p-4`}>
        <ul className='flex flex-col gap-6'>
        <div className='hover:bg-slate-400 dark:hover:bg-blue-200 dark:text-white p-4 rounded-lg'>
        <Link href="/my-jobs">My-Jobs</Link>
        </div>
        <div className='hover:bg-slate-400 p-4 rounded-lg'>
        <Link href="/preference">Preference</Link>
        </div>
        <div className='hover:bg-slate-400 p-4 rounded-lg'>
        <Link href="/skill-test">Skill Test</Link>
        </div>
        <div className='hover:bg-slate-400 p-4 rounded-lg'>
        <Link href="/settings">Settings</Link>
        </div>
        <div className='hover:bg-slate-400 p-4 rounded-lg'>
          <button
          type="button"
          
          onClick={() => setIsDialogOpen(true)} // Open the dialog on click
          >Create-Jobs</button>
          {isDialogOpen && (
             <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
             <div className="relative">
               <CreatePost onSubmit={handleAddPost} />
               <button
                 className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                 onClick={() => setIsDialogOpen(false)}
               >
                 ✕
               </button>
             </div>
           </div>
          )}
        </div>
        </ul>
    </section>
    </div>
    </div>
    
  )
}

export default JobsSidebar
