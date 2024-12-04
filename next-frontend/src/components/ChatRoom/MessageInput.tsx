import React, { useState } from 'react';
import styles from './messageInput.module.css';
import Image from 'next/image';
import profileDefault from '../../../public/sidebar_local_images/Profile_Default.png'
import Call from '../../../public/ChatRoom_Images/Call_Icon.png'
import VideoCall from '../../../public/ChatRoom_Images/VideoCall_Icon.png'
import About from '../../../public/ChatRoom_Images/Info_Icon.png'
import Emoji from '../../../public/ChatRoom_Images/Emoji_Icon.png'
import Mic from '../../../public/ChatRoom_Images/Mic_Icon.png'
import Gallery from '../../../public/ChatRoom_Images/Gallery_Icon.png'
import Send from '../../../public/ChatRoom_Images/Send_Icon.png'

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topArea}>
        <div className={styles.userInfo}>
          <Image className={styles.userAvatar} src={profileDefault} alt={"User Image"} width={50} height={50} />
          <div className={styles.textArea}>
          <span className={styles.userName}>{'Dr. Ben Carson'}</span>
          <span className={styles.speciality}>{'MBBS, MD(General Medicine), DM(Neurology)'}</span>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <Image className={`${styles.call} ${styles.icons}`} src={Call} alt={"Call Image"} width={20} height={20} />
          <Image className={`${styles.videoCall} ${styles.icons}`} src={VideoCall} alt={"VideoCall Image"} width={20} height={20} />
          <Image className={`${styles.aboutUser} ${styles.icons}`} src={About} alt={"AboutUser Image"} width={20} height={20} />
        </div>
      </div>
      <div className={styles.messages}></div>
      <div className={styles.textInput}>
        <div className={styles.inputArea}>
          <div className={styles.innerContainer}>
        <Image className={`${styles.emoji} ${styles.icons}`} src={Emoji} alt={"Emoji Image"} width={30} height={30} />
        <input className={styles.textArea} type="text" placeholder="" />
        <Image className={`${styles.mic} ${styles.icons}`} src={Mic} alt={"Mic Image"} width={25} height={25} />
        <Image className={`${styles.gallery} ${styles.icons}`} src={Gallery} alt={"Gallery Image"} width={25} height={25} />
        <Image className={`${styles.send} ${styles.icons}`} src={Send} alt={"Send Image"} width={25} height={20} />
          </div>
        </div>
      </div>
      {/* <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Send</button> */}
    </div>
  );
};

export default MessageInput;