interface BioProps {
    name: string
    username: string
    bio: string
  }
  
  export default function Bio({ name, username, bio }: BioProps) {
    return (
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-gray-600">{username}</p>
        <p className="mt-2">{bio}</p>
      </div>
    )
  }
  
  