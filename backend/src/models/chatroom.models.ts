import mongoose, { Schema } from "mongoose";

const ChatRoomSchema: Schema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      participants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    { timestamps: true } // createdAt, updatedAt
  );
  
  export default mongoose.model('ChatRoom', ChatRoomSchema);
  