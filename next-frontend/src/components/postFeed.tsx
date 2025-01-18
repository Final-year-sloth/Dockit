import Post from "./Post_HJ"

const posts:any = [
    {
      id: 1,
      author: {
        name: 'John Doe',
        avatar: '/placeholder.svg?height=40&width=40'
      },
      content: 'Just finished a great workout! 💪 #fitness #motivation',
      likes: 15,
      comments: 3,
      timestamp: '2h ago'
    },
    {
      id: 2,
      author: {
        name: 'Jane Smith',
        avatar: '/placeholder.svg?height=40&width=40'
      },
      content: 'Excited to announce my new project! Stay tuned for more details. 🚀 #newproject #comingsoon',
      likes: 32,
      comments: 7,
      timestamp: '4h ago'
    },
    {
      id: 3,
      author: {
        name: 'Bob Johnson',
        avatar: '/placeholder.svg?height=40&width=40'
      },
      content: 'Beautiful sunset at the beach tonight. Nature never fails to amaze me. 🌅 #sunset #beach #nature',
      likes: 24,
      comments: 5,
      timestamp: '6h ago'
    }
  ]
export default function PostFeed() {
    return (
      <div className="space-y-6">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    )
  }