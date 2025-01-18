"use client";
import NewPostForm from "@/components/newPostForm";
import PostFeed from "@/components/postFeed";
import RootLayout from "@/layouts/RootLayout";
import React, { useState } from 'react';






/* The Home page component */
export default function Home() {
  
  
  return (
   <RootLayout>
    <div>
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <NewPostForm />
      <PostFeed />
    </div>
    </div>
   </RootLayout>
    
  );
}
