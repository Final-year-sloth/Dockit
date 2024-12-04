import React from 'react';
import { User } from './types';
import styles from './userList.module.css';
import profileDefault from '../../../public/sidebar_local_images/Profile_Default.png'
import Image from 'next/image';
interface UserListProps {
  users: User[];
  onUserSelect: (userId: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onUserSelect }) => {
  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <div key={user.id} className={styles.userItem} onClick={() => onUserSelect(user.id)}>
          <div className={styles.userInfo}>
            <Image className={styles.userAvatar} src={user.avatarUrl || profileDefault} alt={user.name} width={50} height={50} />
            <div className={styles.textContent}>
            <span className={styles.userName}>{user.name ||'Unknown User'}</span>
            <span className={styles.lastMessage}>{user.lastMessage}</span>
            </div>
          </div >
          <div className={styles.timeStamp}>
            <span>{new Date(user.lastMessageTimestamp).toLocaleTimeString('en-US', {hour: '2-digit',minute: '2-digit',hour12: false })}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;