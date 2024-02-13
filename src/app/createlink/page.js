'use client'

import { useState } from 'react';
import styles from './styles.module.css';
import BackgroundContainer from '@/app/component/background';
const MessageForm = () => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const sendDataToServer = async (data) => {
    try {
      const response = await fetch('/api/write-json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Data sent to server successfully');
      } else {
        console.error('Failed to send data to server');
      }
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      sender: sender,
      recipient: recipient,
      message: message
    };
    sendDataToServer(formData);
    console.log(formData);  
    setSender('');
    setRecipient('');
    setMessage('');
  };

  return (
    <BackgroundContainer sourceName="/bg.png">
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Create a Personal Link..!</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="sender" className={styles.formLabel}>Sender:</label>
            <input
              type="text"
              id="sender"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="recipient" className={styles.formLabel}>Recipient:</label>
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
    </BackgroundContainer>
  );
};

export default MessageForm;

