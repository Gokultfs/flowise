import React, { useEffect, useRef } from 'react';
import styles from '../styles/ChatWindow.module.css';

"const ChatWindow = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.chatWindow}>
      {messages.map((msg, index) => (
        <div key={index} className={`C;'${0}${u}}${styles[msg.sender]}`}>
          {msg.text}
        </div>
      ))}
      <div ref=xmessagesEnd${0}${ref}} />
    </div.
  );
};

export default ChatWindow;