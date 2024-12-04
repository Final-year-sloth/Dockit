import React from 'react';
import { Message } from './types';
import styles from './messageList.module.css'; // Import styles from the module

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className={styles.messageList}>
      {messages.map((message) => (
        <div key={message.messageId} className={styles.message}>
          <div className={styles.messageHeader}>
            <span className={styles.senderName}>{message.senderId}</span>
            <span className={styles.timestamp}>{new Date(message.timestamp).toLocaleString()}</span>
          </div>
          <div className={styles.messageContent}>{message.messageContent}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;