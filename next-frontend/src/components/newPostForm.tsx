'use client'
import { useState } from 'react'
import { Avatar,AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'




export default function NewPostForm() {
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the post to your backend
    console.log('New post:', content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src="/avatar.svg?height=40&width=40" alt="User" />
            <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mb-2"
          />
          <Button type="submit" disabled={!content.trim()}>Post</Button>
        </div>
      </div>
    </form>
  )
}

