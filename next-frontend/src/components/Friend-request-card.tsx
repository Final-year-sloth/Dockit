'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, UserMinus, UserX } from 'lucide-react'

interface FriendRequestCardProps {
  name: string
  username: string
  avatarUrl: string
}

export default function FriendRequestCard({ name, username, avatarUrl }: FriendRequestCardProps) {
  const [status, setStatus] = useState<'pending' | 'accepted' | 'declined' | 'blocked'>('pending')

  const handleAccept = () => setStatus('accepted')
  const handleDecline = () => setStatus('declined')
  const handleBlock = () => setStatus('blocked')

  if (status !== 'pending') {
    return (
      <Card className="w-full max-w-sm mx-auto">
        <CardContent className="pt-6 text-center">
          <p className="text-lg font-semibold">
            Friend request {status}.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle>{name}</CardTitle>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {name} sent you a friend request.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={handleAccept}>
          <UserPlus className="mr-2 h-4 w-4" />
          Accept
        </Button>
        <Button variant="outline" size="sm" onClick={handleDecline}>
          <UserMinus className="mr-2 h-4 w-4" />
          Decline
        </Button>
        <Button variant="outline" size="sm" onClick={handleBlock}>
          <UserX className="mr-2 h-4 w-4" />
          Block
        </Button>
      </CardFooter>
    </Card>
  )
}

