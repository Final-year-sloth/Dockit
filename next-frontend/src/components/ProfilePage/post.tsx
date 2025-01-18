import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { BiHeart, BiMessageRounded} from "react-icons/bi"


interface Post {
  id: number
  content: string
  likes: number
  comments: number
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <p>{post.content}</p>
              <div className="flex items-center mt-4 text-gray-600">
                <BiHeart className="w-5 h-5 mr-1" />
                <span className="mr-4">{post.likes}</span>
                <BiMessageRounded className="w-5 h-5 mr-1" />
                <span>{post.comments}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

