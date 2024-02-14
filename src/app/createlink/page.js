'use client'

import { useState } from 'react';
import React from 'react';
import styles from './styles.module.css';
import BackgroundContainer from '@/app/component/background';
import { Sacramento, Dosis} from 'next/font/google'
const cali = Sacramento({ subsets: ['latin'],  weight: ["400"] });
const dosis = Dosis({ subsets: ['latin'] });

const MessageForm = () => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [url, setURL] = useState('');


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
        const responseData = await response.json();
        const insertedRows = responseData.insertedRows;
        const constructedURL = `https://valentine-day-spcl.vercel.app/${insertedRows}/${sender}_love_${recipient}`;
        setURL(constructedURL);
        console.log('Data sent to server successfully');
      } else {
        console.error('Failed to send data to server');
      }
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
    
  };
  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copied to clipboard!');
    }).catch((error) => {
      console.error('Failed to copy: ', error);
    });
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
    
    <BackgroundContainer sourceName="/10.jpg">
    <link rel="icon" href="/favicon/favicon.ico" sizes="any" />

      <div className={styles.container}>
        <div className={styles.card}>
          {url ? (
            <div className={styles.urlContainer}>
              <h3 className={styles.url}>{url}</h3>
              <br></br>
              <button onClick={handleCopyToClipboard} className={styles.copyButton}>Copy to Clipboard</button>
            </div>
          ) : (
            <React.Fragment>
              <h2 className={cali.className} style={{ fontSize: '34px', textAlign: 'center', fontWeight: 'bold'}}>Create your personalised V&#9829;alentine link</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="sender" className={dosis.className}  style={{fontWeight: 'bold'}}>Your name:</label>
                  <input
                    type="text"
                    id="sender"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="recipient" className={dosis.className} style={{fontWeight: 'bold'}}>Your Valentine's name:</label>
                  <input
                    type="text"
                    id="recipient"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={dosis.className}  style={{fontWeight: 'bold'}}>Words from heart:</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={styles.textarea}
                  ></textarea>
                </div>
                <button type="submit" className={styles.button}>Submit</button>
              </form>
            </React.Fragment>
          )}
        </div>
      </div>
    </BackgroundContainer>
  );
};

export default MessageForm;

