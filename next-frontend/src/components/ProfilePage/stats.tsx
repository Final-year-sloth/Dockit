interface StatsProps {
    followers: number
    following: number
  }
  
  export default function Stats({ followers, following }: StatsProps) {
    return (
      <div className="flex mt-4 space-x-4">
        <div>
          <span className="font-bold">{followers.toLocaleString()}</span> followers
        </div>
        <div>
          <span className="font-bold">{following.toLocaleString()}</span> following
        </div>
      </div>
    )
  }
  
  