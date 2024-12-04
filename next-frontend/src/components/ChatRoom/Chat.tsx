// Chat.tsx
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Sidebar from '../Sidebar/sidebar';
import { useRouter } from 'next/router';
import styles from './Chat.module.css';
import { Message } from './types';
import UsersList from './UsersList';
import { User } from './types';

const users: User[] = [
  { id: 'user1', name: 'Dr. Anthony Fauci', avatarUrl: '/sidebar_local_images/Profile_Default.png', lastMessage: 'Even if you feel bettter ', lastMessageTimestamp: 10 },
  { id: 'user1', name: 'Prof. Martin Landray', avatarUrl: '/sidebar_local_images/Profile_Default.png', lastMessage: 'Chronic Conditions may lead to', lastMessageTimestamp: 10 },
  { id: 'user1', name: 'Dr. Devi Shetty', avatarUrl: '/sidebar_local_images/Profile_Default.png', lastMessage: 'Report any side effects', lastMessageTimestamp: 10 },
  { id: 'user1', name: 'Dr. James Till', avatarUrl: '/sidebar_local_images/Profile_Default.png', lastMessage: 'Can you please review these medicines', lastMessageTimestamp: 10 },
  { id: 'user1', name: 'Prof. Ian Frazer', avatarUrl: '/sidebar_local_images/Profile_Default.png', lastMessage: 'Hi', lastMessageTimestamp: 10 },
  { id: 'user1', name: 'Rounak Singh', avatarUrl: '/sidebar_local_images/Profile_Default.png', lastMessage: 'Available Appointments', lastMessageTimestamp: 10 },
  { id: 'user1', name: 'Dr. Miguel Nicolelis', avatarUrl: '/sidebar_local_images/Profile_Default.png', lastMessage: 'Talk to your doctor', lastMessageTimestamp: 10 },
  
  // ... more users
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(''); // Initialize selectedUserId
  const handleUserSelect = (userId: string) => {
    setSelectedUserId(userId);
    // Filter messages for the selected user
    const selectedUserMessages = messages.filter(msg => msg.senderId === userId);
    setMessages(selectedUserMessages);
  };
  const router = useRouter();
  const socket = io('http://localhost:3000');


  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarExpanded(!isSidebarExpanded);   

  };


  // Handle incoming messages
  useEffect(() => {
    socket.on('message', (msg: Message) => {
      setMessages([...messages, msg]); // Append new message to the state
    });

    // Disconnect on unmount
    return () => {
      socket.disconnect();
    };
  }, [socket, messages]);

  const handleSendMessage = () => {
    // Send message to server
    socket.emit('message', { message, username: 'YourUsername' });
    setMessage('');
  };

  return (
    <div className={styles.chatpage}>
      <Sidebar router={router} />
      <div className={styles.chatcontainer}>
        <div className={styles.usersSection} >
          <UsersList users={users} onUserSelect={handleUserSelect} />
        </div>
        <div className={styles.chatSpace} >
          <MessageList messages={messages} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;