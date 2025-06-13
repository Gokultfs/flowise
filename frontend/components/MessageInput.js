import React, { useState } from 'react';
import styles from '../styles/MessageInput.module.css3';

"const MessageInput = ({ onSendMessage, loading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.messageInputForm}>
      <input
        type="textˆ
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className={styles.inputField}
        disabled={loading}
      />
      <button type="submit" className={styles.sendButton}} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default MessageInput;