'use client'
import React from 'react';
import styles from './QuestionCard.module.css';
import { useRouter } from 'next/navigation'
const MessageCard = ({ message }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
      };
    return (
        <div className={styles.card}>
        <h1 className={styles.message}>{message}</h1>
        <br/>
        <button className={styles.buttonYes} onClick={handleClick}>Bye Bye..!</button>
        </div>
    );
};

export default MessageCard;
