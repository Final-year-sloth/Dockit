// JobSection.tsx
import React, { useState } from 'react';

const JobSection = () => {
  const [posts, setPosts] = useState<string[]>([]);

  const addPost = (newPost: string) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="p-4 flex gap-5 space-x-5  divide-x-2 flex-wrap ">
      <div>
      <h1 className="text-2xl font-bold mb-4">Job Section</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded shadow-sm">
            {post}
          </div>
        ))}
      </div>
      </div>
      <div className='text-2xl font-bold mb-4 pl-5  hidden md:block '>
        Recommendations
      </div>
      

    </div>
  );
};

export default JobSection;
