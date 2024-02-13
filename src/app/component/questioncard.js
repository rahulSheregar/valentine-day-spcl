import React from 'react';
import styles from './QuestionCard.module.css';

const QuestionCard = ({ onYes, onNo, yesButtonSize, noButtonSize }) => {
  console.log(yesButtonSize, noButtonSize);
  return (
    <div className={styles.card}>
      <img src={"/question.png"} className={styles.image} alt="Question Image" />
      <div className={styles.buttons}>
        <button style={{ width: yesButtonSize }} className={styles.buttonYes} onClick={onYes}>Yes</button>
        {noButtonSize !== '0%' && (
          <button style={{ width: noButtonSize }} className={styles.buttonNo} onClick={onNo}>No</button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
