import Avatar from "@/components/ProfilePage/avatar"
import Bio from "@/components/ProfilePage/bio"
import Stats from "@/components/ProfilePage/stats"
import Posts from "@/components/ProfilePage/post"


const profileData = {
  name: "Jane Doe",
  username: "@janedoe",
  avatarUrl: "/placeholder.svg?height=150&width=150",
  bio: "Frontend developer | Coffee enthusiast | Dog lover",
  followers: 1234,
  following: 567,
  posts: [
    { id: 1, content: "Just launched my new website! Check it out!", likes: 42, comments: 7 },
    { id: 2, content: "Learning React has been an amazing journey. What's your favorite framework?", likes: 38, comments: 15 },
    { id: 3, content: "Beautiful day for a hike! 🏞️", likes: 56, comments: 3 },
  ]
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex flex-col md:flex-row">
            <Avatar url={profileData.avatarUrl} name={profileData.name} />
            <div className="mt-6 md:mt-0 md:ml-6 flex-grow">
              <Bio name={profileData.name} username={profileData.username} bio={profileData.bio} />
              <Stats followers={profileData.followers} following={profileData.following} />
            </div>
          </div>
          <Posts posts={profileData.posts} />
        </div>
      </div>
    </div>
  )
}

